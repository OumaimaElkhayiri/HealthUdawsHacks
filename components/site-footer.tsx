import Link from "next/link"
import { Heart } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="w-full border-t bg-white">
      <div className="container flex flex-col gap-6 py-8 md:py-12 bg-gradient-to-r from-red-300 to-blue-50s">
        <div className="flex flex-col gap-6 md:flex-row md:gap-8 lg:gap-12">
          <div className="flex flex-col gap-3 md:max-w-[400px]">
            <Link href="/" className="flex items-center gap-2">
              <Heart className="h-6 w-6 text-blue-600" />
              <span className="text-xl font-bold">HealthCare</span>
            </Link>
            <p className="text-sm text-gray-500">
              For more information, do use the links below or contact us directly.
            </p>
          </div>
          <div className="grid flex-1 grid-cols-2 gap-6 md:grid-cols-4">
            <div className="flex flex-col gap-3">
              <h3 className="font-semibold">Services</h3>
              <ul className="flex flex-col gap-2">
                <li>
                  <Link href="/patient-portal" className="text-sm text-gray-500 hover:underline">
                    Patient Portal
                  </Link>
                </li>
                <li>
                  <Link href="/conditions" className="text-sm text-gray-500 hover:underline">
                    Health Conditions
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-500 hover:underline">
                    Medical Transcription
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="font-semibold">Company</h3>
              <ul className="flex flex-col gap-2">
                <li>
                  <Link href="/about" className="text-sm text-gray-500 hover:underline">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-500 hover:underline">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-500 hover:underline">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="font-semibold">Resources</h3>
              <ul className="flex flex-col gap-2">
                <li>
                  <Link href="#" className="text-sm text-gray-500 hover:underline">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-500 hover:underline">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-500 hover:underline">
                    Support
                  </Link>
                </li>
              </ul>
            </div>

          </div>
        </div>
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-gray-500">&copy; {new Date().getFullYear()} HealthCare. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="text-xs text-gray-500 hover:underline">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs text-gray-500 hover:underline">
              Terms of Service
            </Link>
            <Link href="#" className="text-xs text-gray-500 hover:underline">
              HIPAA Compliance
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
