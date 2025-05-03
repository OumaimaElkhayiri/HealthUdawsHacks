"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Upload, FileText, CheckCircle } from "lucide-react"

export default function PatientPortalPage() {
  const [activeTab, setActiveTab] = useState("information")
  const [submitted, setSubmitted] = useState(false)
  const [transcriptUploaded, setTranscriptUploaded] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would send the form data to your backend
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  const handleTranscriptUpload = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would handle the file upload
    setTranscriptUploaded(true)
    setTimeout(() => setTranscriptUploaded(false), 3000)
  }

  return (
    <div className="container py-10">
      <div className="mb-10 space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Patient Portal</h1>
        <p className="text-gray-500">Securely manage your health information and medical records in one place.</p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="information">Health Information</TabsTrigger>
          <TabsTrigger value="transcript">Medical Transcripts</TabsTrigger>
        </TabsList>
        <TabsContent value="information">
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
                      <Input id="first-name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last Name</Label>
                      <Input id="last-name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="dob">Date of Birth</Label>
                      <Input id="dob" type="date" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="gender">Gender</Label>
                      <Select>
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
                      <Input id="email" type="email" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" required />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Medical Information</h3>
                  <div className="space-y-2">
                    <Label htmlFor="allergies">Allergies</Label>
                    <Textarea id="allergies" placeholder="List any allergies you have..." />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="medications">Current Medications</Label>
                    <Textarea id="medications" placeholder="List any medications you are currently taking..." />
                  </div>
                  <div className="space-y-2">
                    <Label>Do you have any chronic conditions?</Label>
                    <RadioGroup defaultValue="no">
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
                      <div className="flex items-center space-x-2">
                        <Checkbox id="diabetes" />
                        <Label htmlFor="diabetes">Diabetes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="heart-disease" />
                        <Label htmlFor="heart-disease">Heart Disease</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="asthma" />
                        <Label htmlFor="asthma">Asthma</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="cancer" />
                        <Label htmlFor="cancer">Cancer</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="hypertension" />
                        <Label htmlFor="hypertension">Hypertension</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="arthritis" />
                        <Label htmlFor="arthritis">Arthritis</Label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Emergency Contact</h3>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="emergency-name">Name</Label>
                      <Input id="emergency-name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="emergency-relationship">Relationship</Label>
                      <Input id="emergency-relationship" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="emergency-phone">Phone Number</Label>
                      <Input id="emergency-phone" type="tel" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="emergency-email">Email</Label>
                      <Input id="emergency-email" type="email" />
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
        </TabsContent>
        <TabsContent value="transcript">
          <Card>
            <CardHeader>
              <CardTitle>Medical Transcripts</CardTitle>
              <CardDescription>Upload and manage your medical transcripts securely.</CardDescription>
            </CardHeader>
            <form onSubmit={handleTranscriptUpload}>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Upload Transcript</h3>
                  <div className="grid w-full items-center gap-1.5">
                    <Label htmlFor="transcript">Transcript File</Label>
                    <div className="flex w-full items-center justify-center">
                      <label
                        htmlFor="transcript-upload"
                        className="flex h-32 w-full cursor-pointer flex-col items-center justify-center rounded-md border border-dashed border-gray-300 bg-gray-50 px-3 py-8 text-center hover:bg-gray-100"
                      >
                        <Upload className="h-10 w-10 text-gray-400" />
                        <div className="mt-2 flex flex-col items-center">
                          <span className="font-medium text-gray-600">Click to upload</span>
                          <span className="text-xs text-gray-500">PDF, DOC, DOCX, or TXT (Max 10MB)</span>
                        </div>
                        <Input id="transcript-upload" type="file" className="hidden" accept=".pdf,.doc,.docx,.txt" />
                      </label>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Transcript Details</h3>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="transcript-date">Date of Visit</Label>
                      <Input id="transcript-date" type="date" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="transcript-provider">Healthcare Provider</Label>
                      <Input id="transcript-provider" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="transcript-type">Type of Visit</Label>
                    <Select>
                      <SelectTrigger id="transcript-type">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="regular-checkup">Regular Checkup</SelectItem>
                        <SelectItem value="specialist-consultation">Specialist Consultation</SelectItem>
                        <SelectItem value="emergency-visit">Emergency Visit</SelectItem>
                        <SelectItem value="follow-up">Follow-up Appointment</SelectItem>
                        <SelectItem value="procedure">Medical Procedure</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="transcript-notes">Additional Notes</Label>
                    <Textarea id="transcript-notes" placeholder="Any additional information about this transcript..." />
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Previous Transcripts</h3>
                  <div className="rounded-md border">
                    <div className="flex items-center justify-between p-4">
                      <div className="flex items-center space-x-2">
                        <FileText className="h-5 w-5 text-gray-400" />
                        <div>
                          <p className="text-sm font-medium">Annual Checkup - Dr. Smith</p>
                          <p className="text-xs text-gray-500">March 15, 2023</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        View
                      </Button>
                    </div>
                    <div className="border-t flex items-center justify-between p-4">
                      <div className="flex items-center space-x-2">
                        <FileText className="h-5 w-5 text-gray-400" />
                        <div>
                          <p className="text-sm font-medium">Cardiology Consultation - Dr. Johnson</p>
                          <p className="text-xs text-gray-500">January 10, 2023</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        View
                      </Button>
                    </div>
                    <div className="border-t flex items-center justify-between p-4">
                      <div className="flex items-center space-x-2">
                        <FileText className="h-5 w-5 text-gray-400" />
                        <div>
                          <p className="text-sm font-medium">Follow-up Appointment - Dr. Williams</p>
                          <p className="text-xs text-gray-500">November 5, 2022</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        View
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                  {transcriptUploaded ? (
                    <>
                      <CheckCircle className="mr-2 h-4 w-4" /> Transcript Uploaded
                    </>
                  ) : (
                    "Upload Transcript"
                  )}
                </Button>
              </CardFooter>
            </form>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
