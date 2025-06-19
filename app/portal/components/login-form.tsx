"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Eye, EyeOff, Mail, Lock, AlertCircle, CheckCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

export function LoginForm() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [verificationCode, setVerificationCode] = useState("")
  const [step, setStep] = useState("login") // login, verify, reset
  const [showAlert, setShowAlert] = useState(false)
  const [alertType, setAlertType] = useState<"error" | "success">("error")
  const [alertMessage, setAlertMessage] = useState("")
  const [signupEmail, setSignupEmail] = useState("")
  const [signupPassword, setSignupPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [isMounted, setIsMounted] = useState(false)
  const [isPreviewEnvironment, setIsPreviewEnvironment] = useState(false)

  // Check if we're in a preview environment
  useEffect(() => {
    setIsMounted(true)

    try {
      const isPreview =
        window.location.hostname.includes("v0.dev") ||
        window.location.hostname.includes("localhost") ||
        window.top !== window.self

      setIsPreviewEnvironment(isPreview)
    } catch (e) {
      // If we can't access window, we're probably in a preview
      setIsPreviewEnvironment(true)
      console.log("Error detecting environment:", e)
    }
  }, [])

  // Don't render until mounted
  if (!isMounted) return null

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // In preview environment, just simulate success
    if (isPreviewEnvironment) {
      setTimeout(() => {
        setIsLoading(false)
        setStep("verify")
      }, 1000)
      return
    }

    // Demo credentials check (hidden from regular users)
    if (email === "demo@getflquote.com" && password === "Demo123!") {
      // Simulate API call
      setTimeout(() => {
        setIsLoading(false)
        setStep("verify")
      }, 1500)
      return
    }

    // Simulate API call for regular users
    setTimeout(() => {
      setIsLoading(false)

      // Simulate successful login (in a real app, this would check against a database)
      if (email.includes("@") && password.length >= 6) {
        setStep("verify")
      } else {
        setAlertType("error")
        setAlertMessage("Invalid email or password. Please try again.")
        setShowAlert(true)

        // Hide alert after 5 seconds
        setTimeout(() => {
          setShowAlert(false)
        }, 5000)
      }
    }, 1500)
  }

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate passwords match
    if (signupPassword !== confirmPassword) {
      setAlertType("error")
      setAlertMessage("Passwords do not match. Please try again.")
      setShowAlert(true)
      setTimeout(() => setShowAlert(false), 5000)
      return
    }

    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setAlertType("success")
      setAlertMessage("Account created successfully! Please check your email for verification.")
      setShowAlert(true)

      // Reset form
      setSignupEmail("")
      setSignupPassword("")
      setConfirmPassword("")

      setTimeout(() => {
        setShowAlert(false)
      }, 5000)
    }, 1500)
  }

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // For demo, any code works
    setTimeout(() => {
      setIsLoading(false)

      // Store user info in localStorage (in a real app, this would be a secure token)
      if (typeof window !== "undefined") {
        try {
          localStorage.setItem("isLoggedIn", "true")
          localStorage.setItem("userEmail", email || "demo@getflquote.com")
        } catch (e) {
          console.log("Error setting localStorage:", e)
        }
      }

      router.push("/portal/dashboard")
    }, 1500)
  }

  return (
    <>
      {showAlert && (
        <Alert
          variant={alertType === "error" ? "destructive" : undefined}
          className={`mb-6 ${alertType === "success" ? "bg-green-50 border-green-200" : ""}`}
        >
          {alertType === "error" ? (
            <AlertCircle className="h-4 w-4" />
          ) : (
            <CheckCircle className="h-4 w-4 text-green-600" />
          )}
          <AlertDescription className={alertType === "success" ? "text-green-800" : ""}>
            {alertMessage}
          </AlertDescription>
        </Alert>
      )}

      {step === "login" && (
        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>

          <TabsContent value="login">
            <form className="space-y-6" onSubmit={handleLogin}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="pl-10"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    required
                    className="pl-10 pr-10"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="text-gray-400 hover:text-gray-500"
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                    Forgot your password?
                  </a>
                </div>
              </div>

              <div>
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" disabled={isLoading}>
                  {isLoading ? "Logging in..." : "Sign in"}
                </Button>
              </div>
            </form>
          </TabsContent>

          <TabsContent value="signup">
            <form className="space-y-6" onSubmit={handleSignup}>
              <div>
                <label htmlFor="signup-email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <Input
                    id="signup-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="pl-10"
                    value={signupEmail}
                    onChange={(e) => setSignupEmail(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="signup-password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <Input
                    id="signup-password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="new-password"
                    required
                    className="pl-10 pr-10"
                    value={signupPassword}
                    onChange={(e) => setSignupPassword(e.target.value)}
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="text-gray-400 hover:text-gray-500"
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
                  Confirm Password
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <Input
                    id="confirm-password"
                    name="confirm-password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="new-password"
                    required
                    className="pl-10 pr-10"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex items-center">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  required
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
                  I agree to the{" "}
                  <a href="/terms-of-service" className="font-medium text-blue-600 hover:text-blue-500">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="/privacy-policy" className="font-medium text-blue-600 hover:text-blue-500">
                    Privacy Policy
                  </a>
                </label>
              </div>

              <div>
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" disabled={isLoading}>
                  {isLoading ? "Creating account..." : "Create account"}
                </Button>
              </div>
            </form>
          </TabsContent>
        </Tabs>
      )}

      {step === "verify" && (
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-6">Verify your identity</h3>
          <p className="text-sm text-gray-600 mb-6">
            We've sent a verification code to your email address. Please enter it below to continue.
          </p>

          <form className="space-y-6" onSubmit={handleVerify}>
            <div>
              <label htmlFor="verification-code" className="block text-sm font-medium text-gray-700">
                Verification Code
              </label>
              <Input
                id="verification-code"
                name="verification-code"
                type="text"
                required
                className="mt-1"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
                placeholder="Enter verification code"
              />
            </div>

            <div>
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" disabled={isLoading}>
                {isLoading ? "Verifying..." : "Verify"}
              </Button>
            </div>

            <div className="text-center">
              <button
                type="button"
                className="text-sm font-medium text-blue-600 hover:text-blue-500"
                onClick={() => {
                  setAlertType("success")
                  setAlertMessage("A new verification code has been sent to your email.")
                  setShowAlert(true)
                  setTimeout(() => setShowAlert(false), 5000)
                }}
              >
                Didn't receive a code? Resend
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  )
}

export default LoginForm
