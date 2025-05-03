import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center gap-2">
          <Heart className="h-6 w-6 text-blue-600" />
          <span className="text-xl font-bold">HealthCare</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="/patient-portal" className="text-sm font-medium hover:underline underline-offset-4">
            Patient Portal
          </Link>
          <Link href="/conditions" className="text-sm font-medium hover:underline underline-offset-4">
            Health Conditions
          </Link>
          <Link href="/about" className="text-sm font-medium hover:underline underline-offset-4">
            About Us
          </Link>
        </nav>
        <div className="ml-4 flex items-center gap-2">
          <Link href="/auth">
            <Button variant="outline" size="sm">
              Sign In
            </Button>
          </Link>
          <Link href="/auth?tab=register">
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
              Register
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
