"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { auth, db } from "@/firebase.js";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { CheckCircle } from "lucide-react";

export default function PatientPortalPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("information");
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
    phone: "",
    allergies: "",
    medications: "",
    chronicConditions: "no",
    medicalHistory: [] as string[],
    emergencyName: "",
    emergencyRelationship: "",
    emergencyPhone: "",
    emergencyEmail: "",
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setEmail(user.email || "");
        try {
          const docRef = doc(db, "patients", user.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            const data = docSnap.data();
            setFormData({
              firstName: data.firstName || "",
              lastName: data.lastName || "",
              dob: data.dob || "",
              gender: data.gender || "",
              phone: data.phone || "",
              allergies: data.allergies || "",
              medications: data.medications || "",
              chronicConditions: data.chronicConditions || "no",
              medicalHistory: data.medicalHistory || [],
              emergencyName: data.emergencyName || "",
              emergencyRelationship: data.emergencyRelationship || "",
              emergencyPhone: data.emergencyPhone || "",
              emergencyEmail: data.emergencyEmail || "",
            });
          }
        } catch (error) {
          console.error("Error fetching patient info:", error);
        }
      } else {
        router.push("/auth");
      }
    });

    return () => unsubscribe();
  }, [router]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | { name: string; value: string },
  ) => {
    const { name, value } = "target" in e ? e.target : e;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (condition: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      medicalHistory: checked
        ? [...prev.medicalHistory, condition]
        : prev.medicalHistory.filter((item) => item !== condition),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const user = auth.currentUser;
    if (!user) {
      console.error("No user is signed in");
      return;
    }

    try {
      await setDoc(doc(db, "patients", user.uid), {
        email: user.email,
        ...formData,
        updatedAt: new Date().toISOString(),
      });
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        router.push("/ai");
      }, 3000);
    } catch (error) {
      console.error("Error saving patient info:", error);
    }
  };

  return (
    <div className="container py-10">
      <div className="mb-10 space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Patient Portal</h1>
        <p className="text-gray-500">Securely manage your health information in one place.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Patient Health Information</CardTitle>
          <CardDescription>
            Please provide your health information. All data is protected under HIPAA regulations.
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Personal Information</h3>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First Name</Label>
                  <Input
                    id="first-name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last Name</Label>
                  <Input
                    id="last-name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dob">Date of Birth</Label>
                  <Input
                    id="dob"
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="gender">Gender</Label>
                  <Select
                    onValueChange={(value) => handleInputChange({ name: "gender", value })}
                    value={formData.gender}
                  >
                    <SelectTrigger id="gender">
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="non-binary">Non-binary</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                      <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" value={email} disabled />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium">Medical Information</h3>
              <div className="space-y-2">
                <Label htmlFor="allergies">Allergies</Label>
                <Textarea
                  id="allergies"
                  name="allergies"
                  value={formData.allergies}
                  onChange={handleInputChange}
                  placeholder="List any allergies you have..."
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="medications">Current Medications</Label>
                <Textarea
                  id="medications"
                  name="medications"
                  value={formData.medications}
                  onChange={handleInputChange}
                  placeholder="List any medications you are currently taking..."
                />
              </div>
              <div className="space-y-2">
                <Label>Do you have any chronic conditions?</Label>
                <RadioGroup
                  value={formData.chronicConditions}
                  onValueChange={(value) => handleInputChange({ name: "chronicConditions", value })}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="chronic-yes" />
                    <Label htmlFor="chronic-yes">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="chronic-no" />
                    <Label htmlFor="chronic-no">No</Label>
                  </div>
                </RadioGroup>
              </div>
              <div className="space-y-2">
                <Label>Medical History (Check all that apply)</Label>
                <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                  {["diabetes", "heart-disease", "asthma", "cancer", "hypertension", "arthritis"].map(
                    (condition) => (
                      <div key={condition} className="flex items-center space-x-2">
                        <Checkbox
                          id={condition}
                          checked={formData.medicalHistory.includes(condition)}
                          onCheckedChange={(checked) =>
                            handleCheckboxChange(condition, checked as boolean)
                          }
                        />
                        <Label htmlFor={condition}>{condition.charAt(0).toUpperCase() + condition.slice(1)}</Label>
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium">Emergency Contact</h3>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="emergency-name">Name</Label>
                  <Input
                    id="emergency-name"
                    name="emergencyName"
                    value={formData.emergencyName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="emergency-relationship">Relationship</Label>
                  <Input
                    id="emergency-relationship"
                    name="emergencyRelationship"
                    value={formData.emergencyRelationship}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="emergency-phone">Phone Number</Label>
                  <Input
                    id="emergency-phone"
                    type="tel"
                    name="emergencyPhone"
                    value={formData.emergencyPhone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="emergency-email">Email</Label>
                  <Input
                    id="emergency-email"
                    type="email"
                    name="emergencyEmail"
                    value={formData.emergencyEmail}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
              {submitted ? (
                <>
                  <CheckCircle className="mr-2 h-4 w-4" /> Information Saved
                </>
              ) : (
                "Save Information"
              )}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
