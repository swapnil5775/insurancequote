"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export default function LogoutPage() {
  const router = useRouter()

  useEffect(() => {
    // In a real app, this would clear session/auth tokens
    const redirectTimer = setTimeout(() => {
      router.push("/portal/login")
    }, 5000)

    return () => clearTimeout(redirectTimer)
  }, [router])

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Logged Out Successfully</h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Thank you for using GetFLQuote.com. You have been successfully logged out.
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 text-center">
          <p className="mb-4">You will be redirected to the login page in a few seconds.</p>
          <Link href="/portal/login">
            <Button className="bg-blue-600 hover:bg-blue-700">Return to Login</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
