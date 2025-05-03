import { Card, CardContent } from "@/components/ui/card"
import { Heart, Shield, Clock, Users, Award, Stethoscope } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container py-10">
      <div className="mb-10 space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">About Us</h1>
        <p className="text-gray-500 max-w-3xl">
          Learn more about our mission, values, and the team behind our healthcare services.
        </p>
      </div>

      {/* Mission Section */}
      <section className="mb-16">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">Our Mission</div>
            <h2 className="text-3xl font-bold tracking-tighter">Providing Accessible, Quality Healthcare for All</h2>
            <p className="text-gray-500">
              At HealthCare, we believe that everyone deserves access to high-quality healthcare services. Our mission
              is to bridge the gap between patients and healthcare providers by offering innovative solutions that make
              healthcare more accessible, efficient, and personalized.
            </p>
            <p className="text-gray-500">
              We are committed to maintaining the highest standards of privacy and security, ensuring that your health
              information is protected at all times. Our HIPAA-compliant systems and processes are designed with your
              privacy in mind.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="/placeholder.svg?height=400&width=600"
              alt="Healthcare professionals in a meeting"
              width={600}
              height={400}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">Our Values</div>
          <h2 className="text-3xl font-bold tracking-tighter mt-2">What Drives Us Every Day</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center space-y-2">
                <Heart className="h-12 w-12 text-blue-600" />
                <h3 className="text-xl font-bold">Patient-Centered Care</h3>
                <p className="text-gray-500">
                  We put patients at the center of everything we do, ensuring that our services meet their unique needs
                  and preferences.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center space-y-2">
                <Shield className="h-12 w-12 text-blue-600" />
                <h3 className="text-xl font-bold">Privacy & Security</h3>
                <p className="text-gray-500">
                  We are committed to protecting your health information with the highest standards of privacy and
                  security.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center space-y-2">
                <Clock className="h-12 w-12 text-blue-600" />
                <h3 className="text-xl font-bold">Efficiency</h3>
                <p className="text-gray-500">
                  We strive to make healthcare processes more efficient, saving time for both patients and healthcare
                  providers.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center space-y-2">
                <Users className="h-12 w-12 text-blue-600" />
                <h3 className="text-xl font-bold">Collaboration</h3>
                <p className="text-gray-500">
                  We believe in the power of collaboration between patients, healthcare providers, and technology to
                  improve health outcomes.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center space-y-2">
                <Award className="h-12 w-12 text-blue-600" />
                <h3 className="text-xl font-bold">Excellence</h3>
                <p className="text-gray-500">
                  We are committed to excellence in everything we do, from the quality of our services to the accuracy
                  of our medical transcriptions.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center space-y-2">
                <Stethoscope className="h-12 w-12 text-blue-600" />
                <h3 className="text-xl font-bold">Innovation</h3>
                <p className="text-gray-500">
                  We continuously innovate to improve our services and meet the evolving needs of patients and
                  healthcare providers.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Team Section */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">Our Team</div>
          <h2 className="text-3xl font-bold tracking-tighter mt-2">Meet the Experts Behind HealthCare</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center space-y-2">
            <div className="relative h-40 w-40 overflow-hidden rounded-full">
              <img src="/placeholder.svg?height=160&width=160" alt="Dr. Sarah Johnson" className="object-cover" />
            </div>
            <h3 className="text-xl font-bold">Dr. Sarah Johnson</h3>
            <p className="text-blue-600">Chief Medical Officer</p>
            <p className="text-center text-gray-500 text-sm">
              Board-certified physician with over 15 years of experience in healthcare management.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <div className="relative h-40 w-40 overflow-hidden rounded-full">
              <img src="/placeholder.svg?height=160&width=160" alt="Michael Chen" className="object-cover" />
            </div>
            <h3 className="text-xl font-bold">Michael Chen</h3>
            <p className="text-blue-600">Chief Technology Officer</p>
            <p className="text-center text-gray-500 text-sm">
              Technology leader with expertise in healthcare IT and data security.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <div className="relative h-40 w-40 overflow-hidden rounded-full">
              <img src="/placeholder.svg?height=160&width=160" alt="Dr. Emily Rodriguez" className="object-cover" />
            </div>
            <h3 className="text-xl font-bold">Dr. Emily Rodriguez</h3>
            <p className="text-blue-600">Director of Patient Services</p>
            <p className="text-center text-gray-500 text-sm">
              Dedicated to improving patient experience and healthcare outcomes.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <div className="relative h-40 w-40 overflow-hidden rounded-full">
              <img src="/placeholder.svg?height=160&width=160" alt="James Wilson" className="object-cover" />
            </div>
            <h3 className="text-xl font-bold">James Wilson</h3>
            <p className="text-blue-600">Head of Information Security</p>
            <p className="text-center text-gray-500 text-sm">
              Expert in healthcare data protection and HIPAA compliance.
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="mb-16">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex justify-center order-last lg:order-first">
            <img
              src="/placeholder.svg?height=400&width=600"
              alt="Healthcare facility"
              width={600}
              height={400}
              className="rounded-lg object-cover"
            />
          </div>
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">Our History</div>
            <h2 className="text-3xl font-bold tracking-tighter">A Decade of Innovation in Healthcare</h2>
            <p className="text-gray-500">
              Founded in 2013, HealthCare began with a simple mission: to make healthcare more accessible and efficient
              for everyone. What started as a small team of healthcare professionals and technology experts has grown
              into a leading provider of healthcare solutions.
            </p>
            <p className="text-gray-500">
              Over the years, we have continuously evolved our services to meet the changing needs of patients and
              healthcare providers. From our early days of providing basic medical transcription services, we have
              expanded to offer comprehensive patient information management, secure health records, and educational
              resources.
            </p>
            <p className="text-gray-500">
              Today, we serve thousands of patients and healthcare providers across the country, helping them navigate
              the complex healthcare landscape with ease and confidence.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
