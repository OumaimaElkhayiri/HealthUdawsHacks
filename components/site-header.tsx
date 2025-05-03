"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import { auth } from "@/firebase";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { useRouter } from "next/navigation";

export function SiteHeader() {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/"); // Redirect to homepage after logout
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-blue-50">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center gap-2">
          <Heart className="h-6 w-6 text-rose-600" />
          <span className="text-xl font-bold">HealthCare</span>
        </Link>

        <nav className="ml-auto flex gap-4 sm:gap-6">
          {user && (
            <>
              <Link
                href="/patient-portal"
                className="text-sm font-medium hover:underline underline-offset-4"
              >
                Patient Portal
              </Link>
              <Link
                href="/ai"
                className="text-sm font-medium hover:underline underline-offset-4"
              >
                AI Assistant
              </Link>
            </>
          )}
          <Link
            href="/conditions"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Health Conditions
          </Link>
        </nav>

        <div className="ml-4 flex items-center gap-2">
          {user ? (
            <Button variant="outline" size="sm" onClick={handleLogout} className="hover:bg-red-400">
              Log Out
            </Button>
          ) : (
            <Link href="/auth">
              <Button variant="outline" size="sm">
                Sign In
              </Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
