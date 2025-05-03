"use client";

import type React from "react";
import { useState, useEffect, useRef } from "react"; // <-- Added useRef
import { auth, db } from "@/firebase.js";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, setDoc, collection, addDoc, getDocs } from "firebase/firestore";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send } from "lucide-react";
import { GoogleGenerativeAI } from "@google/generative-ai";

interface HealthData {
  firstName: string;
  lastName: string;
  dob: string;
  gender: string;
  phone: string;
  allergies: string;
  medications: string;
  chronicConditions: string;
  medicalHistory: string[];
  emergencyName: string;
  emergencyRelationship: string;
  emergencyPhone: string;
  emergencyEmail: string;
}

interface ChatMessage {
  role: "user" | "ai";
  content: string;
  timestamp: string;
}

export default function AIPage() {
  const [healthData, setHealthData] = useState<HealthData | null>(null);
  const [recommendations, setRecommendations] = useState<string[]>([]);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(true);
  const [isApiLoading, setIsApiLoading] = useState(false);
  const [inputWarning, setInputWarning] = useState<string | null>(null);
  const chatEndRef = useRef<HTMLDivElement>(null); // <-- Ref for scroll

  const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY || "");
  const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const docRef = doc(db, "patients", user.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setHealthData(docSnap.data() as HealthData);
            const chatRef = collection(docRef, "chatHistory");
            const chatSnap = await getDocs(chatRef);
            const chatHistory: ChatMessage[] = chatSnap.docs.map((doc) => ({
              role: doc.data().role,
              content: doc.data().content,
              timestamp: doc.data().timestamp,
            }));
            setChatMessages(chatHistory.sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()));
          } else {
            console.error("No health data found");
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      } else {
        window.location.href = "/auth";
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (healthData) {
      const recs: string[] = [];

      if (healthData.chronicConditions === "yes") {
        recs.push("Consult your healthcare provider regularly to manage chronic conditions.");
      }

      if (healthData.medicalHistory.includes("diabetes")) {
        recs.push("Maintain a balanced diet low in sugars and refined carbs to manage diabetes.");
        recs.push("Monitor blood sugar levels daily and follow your prescribed treatment plan.");
      }
      if (healthData.medicalHistory.includes("heart-disease")) {
        recs.push("Engage in moderate aerobic exercise (e.g., 30 min walking most days) to support heart health.");
        recs.push("Reduce intake of saturated fats and sodium to lower heart disease risk.");
      }
      if (healthData.medicalHistory.includes("asthma")) {
        recs.push("Avoid triggers like smoke or allergens and keep an inhaler accessible.");
      }
      if (healthData.medicalHistory.includes("cancer")) {
        recs.push("Follow up with oncology appointments and maintain a nutrient-rich diet.");
      }
      if (healthData.medicalHistory.includes("hypertension")) {
        recs.push("Limit salt intake and practice stress-reduction techniques like meditation.");
        recs.push("Engage in regular physical activity to help manage blood pressure.");
      }
      if (healthData.medicalHistory.includes("arthritis")) {
        recs.push("Incorporate low-impact exercises like swimming to improve joint mobility.");
      }

      if (healthData.allergies) {
        recs.push(`Avoid known allergens (${healthData.allergies}) and carry emergency medication if needed.`);
      }

      if (!healthData.medicalHistory.length && healthData.chronicConditions === "no") {
        recs.push("Maintain a balanced diet rich in fruits, vegetables, and whole grains.");
        recs.push("Aim for at least 150 minutes of moderate exercise per week.");
      }

      setRecommendations(recs);
    }
  }, [healthData]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" }); // <-- Auto scroll
  }, [chatMessages]);

  const validateInput = (input: string) => {
    const phiKeywords = [
      "name", "address", "email", "phone", "dob", "date of birth", "ssn", "social security",
      "diabetes", "heart", "cancer", "asthma", "hypertension", "arthritis", "medication",
      "allergy", "doctor", "hospital", "diagnosis", "treatment"
    ];
    const hasPhi = phiKeywords.some(keyword => input.toLowerCase().includes(keyword));
    if (hasPhi) {
      setInputWarning("Warning: Your input may contain personal health information. Please avoid sharing sensitive data.");
      return false;
    }
    setInputWarning(null);
    return true;
  };

  const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  const callGeminiAPIWithRetry = async (prompt: string, retries = 3, delayMs = 2000) => {
    for (let i = 0; i < retries; i++) {
      try {
        const result = await model.generateContent(prompt);
        return await result.response.text();
      } catch (error: any) {
        const errorMessage = error.response?.data?.error?.message || error.message;
        if (errorMessage.includes("429") && i < retries - 1) {
          console.warn(`Rate limit hit, retrying in ${delayMs}ms... (Attempt ${i + 1}/${retries})`);
          await delay(delayMs);
          continue;
        }
        throw error;
      }
    }
    throw new Error("Max retries reached for Gemini API call.");
  };

  const handleChatSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim()) return;
    if (!validateInput(userInput)) return;

    const userMessage: ChatMessage = { role: "user", content: userInput, timestamp: new Date().toISOString() };
    setChatMessages((prev) => [...prev, userMessage]);
    setIsApiLoading(true);

    try {
      const recommendationsContext = recommendations.length > 0
        ? `The user has the following health recommendations based on their profile: ${recommendations.join(", ")}. `
        : "The user has no specific health recommendations at this time. ";

      // Determine if this is the first message in the conversation
      const isFirstMessage = chatMessages.length === 0;

      // Customized prompt with conditional greeting
      const customPrompt = `
        You are a friendly pharmacy assistant who provides clear, simple, and practical health advice in a conversational tone, like chatting with a customer at a pharmacy counter.
        Do not process or store any personally identifiable information (PII) or protected health information (PHI).
        Keep responses short, easy to understand, and focused on helpful tips or guidance.
        ${isFirstMessage ? "Start your response with a friendly greeting like 'Hi there!' to welcome the user." : "Do not include greetings like 'Hi there' since the conversation is ongoing."}
        ${recommendationsContext}
        Respond to the following user input: ${userInput}.
        End your response with: "This is general advice. Please consult a doctor or pharmacist for personalized recommendations."
      `;

      const response = await callGeminiAPIWithRetry(customPrompt);

      const aiMessage: ChatMessage = { role: "ai", content: response, timestamp: new Date().toISOString() };
      setChatMessages((prev) => [...prev, aiMessage]);

      const user = auth.currentUser;
      if (user) {
        const chatRef = collection(doc(db, "patients", user.uid), "chatHistory");
        await addDoc(chatRef, userMessage);
        await addDoc(chatRef, aiMessage);
      }
    } catch (error: any) {
      const errorMessage = error.response?.data?.error?.message || error.message;
      console.error("Gemini API error:", errorMessage, error);
      setChatMessages((prev) => [...prev, {
        role: "ai",
        content: "Any Other questions for me?.",
        timestamp: new Date().toISOString()
      }]);
    } finally {
      setIsApiLoading(false);
      setUserInput("");
    }
  };

  if (loading) {
    return <div className="container py-10">Loading...</div>;
  }

  if (!healthData) {
    return <div className="container py-10">No health data available. Please complete your profile.</div>;
  }

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold tracking-tight mb-6">AI Health Assistant</h1>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Personalized Lifestyle Recommendations</CardTitle>
        </CardHeader>
        <CardContent>
          {recommendations.length > 0 ? (
            <ul className="list-disc pl-5 space-y-2">
              {recommendations.map((rec, index) => (
                <li key={index}>{rec}</li>
              ))}
            </ul>
          ) : (
            <p>No specific recommendations at this time. Continue maintaining a healthy lifestyle.</p>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Chat with Health AI</CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[400px] w-full pr-4">
            {chatMessages.map((message, index) => (
              <div
                key={index}
                className={`mb-4 flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[70%] rounded-lg p-3 ${
                    message.role === "user" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-800"
                  }`}
                >
                  <p>{message.content}</p>
                </div>
              </div>
            ))}
            {isApiLoading && (
              <div className="mb-4 flex justify-start">
                <div className="max-w-[70%] rounded-lg p-3 bg-gray-100 text-gray-800">
                  <p>Typing...</p>
                </div>
              </div>
            )}
            <div ref={chatEndRef} /> {/* Scroll anchor */}
          </ScrollArea>

          <form onSubmit={handleChatSubmit} className="mt-4 flex gap-2">
            <Input
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Ask a question..."
              className="flex-1"
            />
            <Button type="submit" disabled={isApiLoading}>
              <Send className="w-4 h-4" />
            </Button>
          </form>

          {inputWarning && <p className="text-red-600 text-sm mt-2">{inputWarning}</p>}
        </CardContent>
      </Card>
    </div>
  );
}
