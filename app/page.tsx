import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Heart, Users, ClipboardList, ShieldCheck, ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-red-300 to-blue-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-yellow-100 px-3 py-1 text-sm text-black">
                Confirmed Trusted Healthcare Partner
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Your Health, Our Priority
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl">
                Comprehensive healthcare solutions with secure patient information management, medical transcription
                services, and personalized care.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src="/phone.png?"
                alt="Healthcare professionals"
                width={500}
                height={500}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-yellow-100 px-3 py-1 text-sm text-black">Our Services</div>
              <h2 className="text-3xl font-bold tracking-tighter text-rose-600 sm:text-4xl md:text-5xl">
                Comprehensive Healthcare Solutions
              </h2>
              <p className="max-w-[900px] text-black md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We provide a range of services designed to improve patient care and streamline healthcare processes.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <div className="grid gap-6">
              <div className="flex items-start gap-4">
                <ClipboardList className="h-10 w-10 text-rose-600" />
                <div>
                  <h3 className="text-xl font-bold">Patient Information Management</h3>
                  <p className="text-gray-500">
                    Securely capture and manage patient health information with our HIPAA-compliant system.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <ShieldCheck className="h-10 w-10 text-rose-600" />
                <div>
                  <h3 className="text-xl font-bold">Medical Transcription</h3>
                  <p className="text-gray-500">
                    Accurate and timely transcription of medical records, consultations, and patient notes.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid gap-6">
              <div className="flex items-start gap-4">
                <Heart className="h-10 w-10 text-rose-600" />
                <div>
                  <h3 className="text-xl font-bold">Health Condition Resources</h3>
                  <p className="text-gray-500">
                    Educational resources about common health conditions, treatments, and preventive care.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Users className="h-10 w-10 text-rose-600" />
                <div>
                  <h3 className="text-xl font-bold">Patient Portal</h3>
                  <p className="text-gray-500">
                    Access your health records, schedule appointments, and communicate with healthcare providers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-red-300 to-blue-50 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-black">
                Ready to take control of your health?
              </h2>
              <p className="max-w-[600px] text-bold-50 tracking-tighter md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-black">
                Create an account today and access our comprehensive healthcare services.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/auth">
                <Button size="lg" className="bg-yellow-100 text-stone-950 hover:bg-rose-400 font-bold">
                  Create Account
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-rose-600">What Our Patients Say</h2>
              <p className="max-w-[600px] text-black md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Hear from patients who have experienced our healthcare services.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-gray-100 p-2">
                    <img
                      src="/placeholder.svg?height=40&width=40"
                      width={40}
                      height={40}
                      alt="Patient"
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">Sarah Johnson</h3>
                    <p className="text-sm text-gray-500">Patient since 2025</p>
                  </div>
                </div>
                <p className="text-gray-500">
                  "The patient portal has made managing my healthcare so much easier. I can access my records and
                  communicate with my doctor whenever I need to."
                </p>
              </div>
            </div>
            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-gray-100 p-2">
                    <img
                      src="/placeholder.svg?height=40&width=40"
                      width={40}
                      height={40}
                      alt="Patient"
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">Anonymous</h3>
                    <p className="text-sm text-gray-500">Patient since 2025</p>
                  </div>
                </div>
                <p className="text-gray-500">
                  "The health condition resources provided valuable information about my condition and helped me
                  understand my treatment options."
                </p>
              </div>
            </div>
            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-gray-100 p-2">
                    <img
                      src="/placeholder.svg?height=40&width=40"
                      width={40}
                      height={40}
                      alt="Patient"
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">Emily Rodriguez</h3>
                    <p className="text-sm text-gray-500">Patient since 2025</p>
                  </div>
                </div>
                <p className="text-gray-500">
                  "The medical transcription service has been incredibly accurate and timely. It's made my healthcare
                  journey much smoother."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
