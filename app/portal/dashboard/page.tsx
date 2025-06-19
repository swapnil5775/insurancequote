"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  Home,
  Car,
  User,
  FileText,
  CreditCard,
  Upload,
  Bell,
  LogOut,
  ChevronRight,
  Shield,
  Heart,
  Briefcase,
  Anchor,
  Clock,
  RefreshCw,
  Trash2,
  Plus,
  CreditCardIcon,
  Building,
  Ticket,
  CheckCircle,
  Loader2,
} from "lucide-react"

export default function DashboardPage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("overview")
  const [showNewQuoteDialog, setShowNewQuoteDialog] = useState(false)
  const [showAddPaymentDialog, setShowAddPaymentDialog] = useState(false)
  const [showCancelPolicyDialog, setShowCancelPolicyDialog] = useState(false)
  const [showCreateTicketDialog, setShowCreateTicketDialog] = useState(false)
  const [showDeleteAccountDialog, setShowDeleteAccountDialog] = useState(false)
  const [isEditingProfile, setIsEditingProfile] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [showSuccessAlert, setShowSuccessAlert] = useState(false)
  const [successMessage, setSuccessMessage] = useState("")
  const [userEmail, setUserEmail] = useState("")
  const [userName, setUserName] = useState("User")
  const [paymentMethods, setPaymentMethods] = useState([
    { id: 1, type: "card", name: "Visa ending in 4242", expiry: "12/2026", isDefault: true },
    { id: 2, type: "bank", name: "Bank Account (ACH)", accountNumber: "9876", isDefault: false },
  ])

  // Mock data
  const policies = [
    { id: 1, type: "Auto", status: "Active", premium: "$125/month", renewalDate: "Jan 15, 2026", icon: Car },
    { id: 2, type: "Home", status: "Active", premium: "$180/month", renewalDate: "Mar 22, 2026", icon: Home },
    { id: 3, type: "Life", status: "Pending", premium: "$75/month", renewalDate: "N/A", icon: Heart },
  ]

  const quotes = [
    { id: 1, type: "Business", status: "Pending", date: "Apr 5, 2025", icon: Briefcase },
    { id: 2, type: "Recreational", status: "Expired", date: "Feb 10, 2025", icon: Anchor },
  ]

  const documents = [
    { id: 1, name: "Auto Policy Document.pdf", date: "Mar 15, 2025", size: "1.2 MB" },
    { id: 2, name: "Home Insurance Certificate.pdf", date: "Mar 22, 2025", size: "0.8 MB" },
    { id: 3, name: "Proof of Insurance.pdf", date: "Apr 1, 2025", size: "0.5 MB" },
  ]

  const payments = [
    { id: 1, amount: "$125.00", date: "Apr 1, 2025", status: "Paid", policy: "Auto Insurance" },
    { id: 2, amount: "$180.00", date: "Apr 1, 2025", status: "Paid", policy: "Home Insurance" },
    { id: 3, amount: "$125.00", date: "May 1, 2025", status: "Upcoming", policy: "Auto Insurance" },
    { id: 4, amount: "$180.00", date: "May 1, 2025", status: "Upcoming", policy: "Home Insurance" },
  ]

  const tickets = [
    { id: 1, subject: "Policy Coverage Question", status: "Open", date: "Apr 2, 2025", priority: "Medium" },
    { id: 2, subject: "Billing Discrepancy", status: "Closed", date: "Mar 15, 2025", priority: "High" },
  ]

  // Check if user is logged in
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn")
    const storedEmail = localStorage.getItem("userEmail")

    if (!isLoggedIn) {
      router.push("/portal/login")
    }

    if (storedEmail) {
      setUserEmail(storedEmail)
      // Extract name from email (in a real app, this would come from the user profile)
      const nameFromEmail = storedEmail.split("@")[0]
      setUserName(nameFromEmail.charAt(0).toUpperCase() + nameFromEmail.slice(1))
    }
  }, [router])

  const handleLogout = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      // Clear user data
      localStorage.removeItem("isLoggedIn")
      localStorage.removeItem("userEmail")
      router.push("/portal/logout")
    }, 1500)
  }

  const showSuccess = (message: string) => {
    setSuccessMessage(message)
    setShowSuccessAlert(true)
    setTimeout(() => {
      setShowSuccessAlert(false)
    }, 5000)
  }

  const handleFormSubmit = (e: React.FormEvent, message: string) => {
    e.preventDefault()
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      showSuccess(message)
    }, 1500)
  }

  const handleAddPaymentMethod = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)

      // Add new payment method
      const newId = paymentMethods.length + 1
      const newPaymentMethod = {
        id: newId,
        type: "card",
        name: "Mastercard ending in 5678",
        expiry: "09/2027",
        isDefault: false,
      }

      setPaymentMethods([...paymentMethods, newPaymentMethod])
      setShowAddPaymentDialog(false)
      showSuccess("Payment method added successfully!")
    }, 1500)
  }

  const handleRemovePaymentMethod = (id: number) => {
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)

      // Remove payment method
      const updatedPaymentMethods = paymentMethods.filter((method) => method.id !== id)
      setPaymentMethods(updatedPaymentMethods)
      showSuccess("Payment method removed successfully!")
    }, 1000)
  }

  const handleSetDefaultPaymentMethod = (id: number) => {
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)

      // Update default payment method
      const updatedPaymentMethods = paymentMethods.map((method) => ({
        ...method,
        isDefault: method.id === id,
      }))

      setPaymentMethods(updatedPaymentMethods)
      showSuccess("Default payment method updated!")
    }, 1000)
  }

  if (!userEmail) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <div className="relative w-10 h-10 mr-2">
              <div className="absolute inset-0 bg-blue-600 rounded-full"></div>
              <div className="absolute inset-1 bg-yellow-300 rounded-full"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  className="w-6 h-6 text-blue-800"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
                  <line x1="16" y1="8" x2="2" y2="22" />
                  <line x1="17.5" y1="15" x2="9" y2="15" />
                </svg>
              </div>
            </div>
            <span className="text-blue-800 font-bold text-lg">GetFLQuote.com</span>
          </Link>

          <div className="flex items-center space-x-4">
            <button className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none">
              <Bell className="h-6 w-6" />
            </button>
            <div className="flex items-center">
              <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center text-white">
                <User className="h-5 w-5" />
              </div>
              <span className="ml-2 text-sm font-medium text-gray-700">{userName}</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {showSuccessAlert && (
          <Alert className="mb-6 bg-green-50 border-green-200">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <AlertDescription className="text-green-800">{successMessage}</AlertDescription>
          </Alert>
        )}

        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <div className="w-full md:w-64 bg-white rounded-lg shadow">
            <nav className="p-4">
              <ul className="space-y-2">
                <li>
                  <button
                    className={`w-full flex items-center px-4 py-2 text-sm font-medium rounded-md ${
                      activeTab === "overview"
                        ? "bg-blue-50 text-blue-700"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    }`}
                    onClick={() => setActiveTab("overview")}
                  >
                    <Shield className="mr-3 h-5 w-5" />
                    Overview
                  </button>
                </li>
                <li>
                  <button
                    className={`w-full flex items-center px-4 py-2 text-sm font-medium rounded-md ${
                      activeTab === "policies"
                        ? "bg-blue-50 text-blue-700"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    }`}
                    onClick={() => setActiveTab("policies")}
                  >
                    <FileText className="mr-3 h-5 w-5" />
                    Policies
                  </button>
                </li>
                <li>
                  <button
                    className={`w-full flex items-center px-4 py-2 text-sm font-medium rounded-md ${
                      activeTab === "quotes"
                        ? "bg-blue-50 text-blue-700"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    }`}
                    onClick={() => setActiveTab("quotes")}
                  >
                    <RefreshCw className="mr-3 h-5 w-5" />
                    Quotes
                  </button>
                </li>
                <li>
                  <button
                    className={`w-full flex items-center px-4 py-2 text-sm font-medium rounded-md ${
                      activeTab === "documents"
                        ? "bg-blue-50 text-blue-700"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    }`}
                    onClick={() => setActiveTab("documents")}
                  >
                    <Upload className="mr-3 h-5 w-5" />
                    Documents
                  </button>
                </li>
                <li>
                  <button
                    className={`w-full flex items-center px-4 py-2 text-sm font-medium rounded-md ${
                      activeTab === "payments"
                        ? "bg-blue-50 text-blue-700"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    }`}
                    onClick={() => setActiveTab("payments")}
                  >
                    <CreditCard className="mr-3 h-5 w-5" />
                    Payments
                  </button>
                </li>
                <li>
                  <button
                    className={`w-full flex items-center px-4 py-2 text-sm font-medium rounded-md ${
                      activeTab === "tickets"
                        ? "bg-blue-50 text-blue-700"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    }`}
                    onClick={() => setActiveTab("tickets")}
                  >
                    <Ticket className="mr-3 h-5 w-5" />
                    Support Tickets
                  </button>
                </li>
                <li>
                  <button
                    className={`w-full flex items-center px-4 py-2 text-sm font-medium rounded-md ${
                      activeTab === "profile"
                        ? "bg-blue-50 text-blue-700"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    }`}
                    onClick={() => setActiveTab("profile")}
                  >
                    <User className="mr-3 h-5 w-5" />
                    Profile
                  </button>
                </li>
              </ul>
              <div className="pt-6 mt-6 border-t border-gray-200">
                <button
                  className="w-full flex items-center px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-md"
                  onClick={handleLogout}
                  disabled={isLoading}
                >
                  {isLoading ? <Loader2 className="mr-3 h-5 w-5 animate-spin" /> : <LogOut className="mr-3 h-5 w-5" />}
                  Sign out
                </button>
              </div>
            </nav>
          </div>

          {/* Main content */}
          <div className="flex-1">
            {activeTab === "overview" && (
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow p-6">
                  <h2 className="text-lg font-medium text-gray-900 mb-4">Welcome back, {userName}!</h2>
                  <p className="text-gray-600 mb-4">
                    Here's a summary of your insurance portfolio with GetFLQuote.com.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-gray-500">Active Policies</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">2</div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-gray-500">Pending Quotes</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">1</div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-gray-500">Next Payment</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">May 1, 2025</div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow">
                  <div className="px-6 py-4 border-b border-gray-200">
                    <h3 className="text-lg font-medium text-gray-900">Your Policies</h3>
                  </div>
                  <ul className="divide-y divide-gray-200">
                    {policies
                      .filter((p) => p.status === "Active")
                      .map((policy) => (
                        <li key={policy.id} className="px-6 py-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                                <policy.icon className="h-6 w-6" />
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">{policy.type} Insurance</div>
                                <div className="text-sm text-gray-500">Renewal: {policy.renewalDate}</div>
                              </div>
                            </div>
                            <div className="flex items-center">
                              <div className="mr-4 text-right">
                                <div className="text-sm font-medium text-gray-900">{policy.premium}</div>
                                <div className="text-sm text-green-600">{policy.status}</div>
                              </div>
                              <ChevronRight className="h-5 w-5 text-gray-400" />
                            </div>
                          </div>
                        </li>
                      ))}
                  </ul>
                  <div className="px-6 py-4 border-t border-gray-200">
                    <Button variant="outline" className="w-full" onClick={() => setActiveTab("policies")}>
                      View all policies
                    </Button>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow">
                  <div className="px-6 py-4 border-b border-gray-200">
                    <h3 className="text-lg font-medium text-gray-900">Recent Payments</h3>
                  </div>
                  <ul className="divide-y divide-gray-200">
                    {payments.slice(0, 2).map((payment) => (
                      <li key={payment.id} className="px-6 py-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-sm font-medium text-gray-900">{payment.policy}</div>
                            <div className="text-sm text-gray-500">{payment.date}</div>
                          </div>
                          <div className="flex items-center">
                            <div className="text-sm font-medium text-gray-900">{payment.amount}</div>
                            <div
                              className={`ml-2 px-2 py-1 text-xs rounded-full ${
                                payment.status === "Paid"
                                  ? "bg-green-100 text-green-800"
                                  : "bg-yellow-100 text-yellow-800"
                              }`}
                            >
                              {payment.status}
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div className="px-6 py-4 border-t border-gray-200">
                    <Button variant="outline" className="w-full" onClick={() => setActiveTab("payments")}>
                      View all payments
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "policies" && (
              <div className="bg-white rounded-lg shadow">
                <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                  <h3 className="text-lg font-medium text-gray-900">Your Policies</h3>
                  <Dialog open={showCancelPolicyDialog} onOpenChange={setShowCancelPolicyDialog}>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="text-red-600 border-red-600 hover:bg-red-50">
                        <Trash2 className="mr-2 h-4 w-4" />
                        Cancel Policy
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Cancel Policy</DialogTitle>
                        <DialogDescription>
                          Are you sure you want to cancel your policy? This action cannot be undone.
                        </DialogDescription>
                      </DialogHeader>
                      <form
                        onSubmit={(e) => {
                          handleFormSubmit(
                            e,
                            "Policy cancellation request submitted. Our team will contact you shortly.",
                          )
                          setShowCancelPolicyDialog(false)
                        }}
                      >
                        <div className="space-y-4 py-4">
                          <div>
                            <label htmlFor="policy-to-cancel" className="block text-sm font-medium text-gray-700">
                              Select Policy to Cancel
                            </label>
                            <Select>
                              <SelectTrigger id="policy-to-cancel" className="w-full mt-1">
                                <SelectValue placeholder="Select policy" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="auto">Auto Insurance</SelectItem>
                                <SelectItem value="home">Home Insurance</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <label htmlFor="cancel-reason" className="block text-sm font-medium text-gray-700">
                              Reason for Cancellation
                            </label>
                            <Select>
                              <SelectTrigger id="cancel-reason" className="w-full mt-1">
                                <SelectValue placeholder="Select reason" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="found-better-rate">Found better rate elsewhere</SelectItem>
                                <SelectItem value="no-longer-needed">No longer need this coverage</SelectItem>
                                <SelectItem value="not-satisfied">Not satisfied with service</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <label htmlFor="cancel-date" className="block text-sm font-medium text-gray-700">
                              Cancellation Date
                            </label>
                            <Input
                              id="cancel-date"
                              type="date"
                              className="mt-1"
                              min={new Date().toISOString().split("T")[0]}
                            />
                          </div>
                          <div>
                            <label htmlFor="cancel-comments" className="block text-sm font-medium text-gray-700">
                              Additional Comments
                            </label>
                            <Textarea
                              id="cancel-comments"
                              className="mt-1"
                              placeholder="Please provide any additional information"
                            />
                          </div>
                        </div>
                        <DialogFooter>
                          <Button type="button" variant="outline" onClick={() => setShowCancelPolicyDialog(false)}>
                            Cancel
                          </Button>
                          <Button type="submit" variant="destructive" disabled={isLoading}>
                            {isLoading ? (
                              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            ) : (
                              <Trash2 className="mr-2 h-4 w-4" />
                            )}
                            Confirm Cancellation
                          </Button>
                        </DialogFooter>
                      </form>
                    </DialogContent>
                  </Dialog>
                </div>
                <ul className="divide-y divide-gray-200">
                  {policies.map((policy) => (
                    <li key={policy.id} className="px-6 py-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                            <policy.icon className="h-6 w-6" />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{policy.type} Insurance</div>
                            <div className="text-sm text-gray-500">Renewal: {policy.renewalDate}</div>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <div className="mr-4 text-right">
                            <div className="text-sm font-medium text-gray-900">{policy.premium}</div>
                            <div
                              className={`text-sm ${policy.status === "Active" ? "text-green-600" : "text-yellow-600"}`}
                            >
                              {policy.status}
                            </div>
                          </div>
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="px-6 py-4 border-t border-gray-200">
                  <Button className="bg-blue-600 hover:bg-blue-700" onClick={() => setShowNewQuoteDialog(true)}>
                    <Plus className="mr-2 h-4 w-4" />
                    Get a new quote
                  </Button>
                </div>
              </div>
            )}

            {activeTab === "quotes" && (
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow">
                  <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                    <h3 className="text-lg font-medium text-gray-900">Your Quotes</h3>
                    <Button className="bg-blue-600 hover:bg-blue-700" onClick={() => setShowNewQuoteDialog(true)}>
                      <Plus className="mr-2 h-4 w-4" />
                      New Quote
                    </Button>
                  </div>
                  {quotes.length > 0 ? (
                    <ul className="divide-y divide-gray-200">
                      {quotes.map((quote) => (
                        <li key={quote.id} className="px-6 py-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                                <quote.icon className="h-6 w-6" />
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">{quote.type} Insurance Quote</div>
                                <div className="text-sm text-gray-500">Requested: {quote.date}</div>
                              </div>
                            </div>
                            <div className="flex items-center">
                              <div
                                className={`px-2 py-1 text-xs rounded-full ${
                                  quote.status === "Pending"
                                    ? "bg-yellow-100 text-yellow-800"
                                    : "bg-gray-100 text-gray-800"
                                }`}
                              >
                                {quote.status}
                              </div>
                              <Button variant="outline" size="sm" className="ml-4">
                                {quote.status === "Pending" ? "View Quote" : "Request Again"}
                              </Button>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="px-6 py-12 text-center">
                      <Clock className="mx-auto h-12 w-12 text-gray-400" />
                      <h3 className="mt-2 text-sm font-medium text-gray-900">No quotes</h3>
                      <p className="mt-1 text-sm text-gray-500">You don't have any insurance quotes at the moment.</p>
                      <div className="mt-6">
                        <Button className="bg-blue-600 hover:bg-blue-700" onClick={() => setShowNewQuoteDialog(true)}>
                          Get a new quote
                        </Button>
                      </div>
                    </div>
                  )}
                </div>

                {/* New Quote Dialog */}
                <Dialog open={showNewQuoteDialog} onOpenChange={setShowNewQuoteDialog}>
                  <DialogContent className="sm:max-w-[500px]">
                    <DialogHeader>
                      <DialogTitle>Request a New Quote</DialogTitle>
                      <DialogDescription>Fill out the form below to request a new insurance quote.</DialogDescription>
                    </DialogHeader>
                    <form
                      onSubmit={(e) => {
                        handleFormSubmit(e, "Quote request submitted successfully! Our team will contact you shortly.")
                        setShowNewQuoteDialog(false)
                      }}
                    >
                      <div className="space-y-4 py-4">
                        <div>
                          <label htmlFor="quote-type" className="block text-sm font-medium text-gray-700">
                            Insurance Type
                          </label>
                          <Select>
                            <SelectTrigger id="quote-type" className="w-full mt-1">
                              <SelectValue placeholder="Select insurance type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="auto">Auto Insurance</SelectItem>
                              <SelectItem value="home">Home Insurance</SelectItem>
                              <SelectItem value="life">Life Insurance</SelectItem>
                              <SelectItem value="business">Business Insurance</SelectItem>
                              <SelectItem value="recreational">Recreational Insurance</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <label htmlFor="quote-details" className="block text-sm font-medium text-gray-700">
                            Additional Details
                          </label>
                          <Textarea
                            id="quote-details"
                            className="mt-1"
                            placeholder="Please provide any specific details about your quote request"
                          />
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="contact-permission" />
                          <label htmlFor="contact-permission" className="text-sm text-gray-700">
                            I agree to be contacted about this quote request
                          </label>
                        </div>
                      </div>
                      <DialogFooter>
                        <Button type="button" variant="outline" onClick={() => setShowNewQuoteDialog(false)}>
                          Cancel
                        </Button>
                        <Button type="submit" disabled={isLoading}>
                          {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                          Submit Quote Request
                        </Button>
                      </DialogFooter>
                    </form>
                  </DialogContent>
                </Dialog>
              </div>
            )}

            {activeTab === "documents" && (
              <div className="bg-white rounded-lg shadow">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h3 className="text-lg font-medium text-gray-900">Your Documents</h3>
                </div>
                <ul className="divide-y divide-gray-200">
                  {documents.map((doc) => (
                    <li key={doc.id} className="px-6 py-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                            <FileText className="h-6 w-6" />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{doc.name}</div>
                            <div className="text-sm text-gray-500">
                              Uploaded: {doc.date} • {doc.size}
                            </div>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            Download
                          </Button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="px-6 py-4 border-t border-gray-200">
                  <Button className="bg-blue-600 hover:bg-blue-700">Upload New Document</Button>
                </div>
              </div>
            )}

            {activeTab === "payments" && (
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow">
                  <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                    <h3 className="text-lg font-medium text-gray-900">Payment Methods</h3>
                    <Button className="bg-blue-600 hover:bg-blue-700" onClick={() => setShowAddPaymentDialog(true)}>
                      <Plus className="mr-2 h-4 w-4" />
                      Add Payment Method
                    </Button>
                  </div>
                  <div className="p-6">
                    {paymentMethods.map((method) => (
                      <div
                        key={method.id}
                        className="flex items-center justify-between p-4 border border-gray-200 rounded-lg mb-4"
                      >
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                            {method.type === "card" ? (
                              <CreditCardIcon className="h-6 w-6" />
                            ) : (
                              <Building className="h-6 w-6" />
                            )}
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{method.name}</div>
                            <div className="text-sm text-gray-500">
                              {method.type === "card"
                                ? `Expires ${method.expiry}`
                                : `Account ending in ${method.accountNumber}`}
                              {method.isDefault && <span className="ml-2 text-blue-600">(Default)</span>}
                            </div>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          {!method.isDefault && (
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleSetDefaultPaymentMethod(method.id)}
                              disabled={isLoading}
                            >
                              Set Default
                            </Button>
                          )}
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-red-600 border-red-600 hover:bg-red-50"
                            onClick={() => handleRemovePaymentMethod(method.id)}
                            disabled={isLoading}
                          >
                            {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Remove"}
                          </Button>
                        </div>
                      </div>
                    ))}

                    <div className="flex items-center space-x-2 mt-6">
                      <Checkbox id="autopay" defaultChecked />
                      <div>
                        <label htmlFor="autopay" className="text-sm font-medium text-gray-900">
                          AutoPay Enabled
                        </label>
                        <p className="text-xs text-gray-500">
                          Your payments will be automatically processed on the due date using your default payment
                          method.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow">
                  <div className="px-6 py-4 border-b border-gray-200">
                    <h3 className="text-lg font-medium text-gray-900">Payment History</h3>
                  </div>
                  <ul className="divide-y divide-gray-200">
                    {payments.map((payment) => (
                      <li key={payment.id} className="px-6 py-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-sm font-medium text-gray-900">{payment.policy}</div>
                            <div className="text-sm text-gray-500">{payment.date}</div>
                          </div>
                          <div className="flex items-center">
                            <div className="text-sm font-medium text-gray-900">{payment.amount}</div>
                            <div
                              className={`ml-2 px-2 py-1 text-xs rounded-full ${
                                payment.status === "Paid"
                                  ? "bg-green-100 text-green-800"
                                  : "bg-yellow-100 text-yellow-800"
                              }`}
                            >
                              {payment.status}
                            </div>
                            {payment.status === "Upcoming" && (
                              <Button variant="outline" size="sm" className="ml-4">
                                Pay Now
                              </Button>
                            )}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Add Payment Method Dialog */}
                <Dialog open={showAddPaymentDialog} onOpenChange={setShowAddPaymentDialog}>
                  <DialogContent className="sm:max-w-[500px]">
                    <DialogHeader>
                      <DialogTitle>Add Payment Method</DialogTitle>
                      <DialogDescription>Add a new payment method to your account.</DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleAddPaymentMethod}>
                      <div className="space-y-4 py-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700">Payment Method Type</label>
                          <Tabs defaultValue="card" className="w-full mt-2">
                            <TabsList className="grid w-full grid-cols-3">
                              <TabsTrigger value="card">Credit Card</TabsTrigger>
                              <TabsTrigger value="ach">Bank Account</TabsTrigger>
                              <TabsTrigger value="paypal">PayPal</TabsTrigger>
                            </TabsList>
                            <TabsContent value="card" className="space-y-4 mt-4">
                              <div>
                                <label htmlFor="card-name" className="block text-sm font-medium text-gray-700">
                                  Cardholder Name
                                </label>
                                <Input id="card-name" className="mt-1" required />
                              </div>
                              <div>
                                <label htmlFor="card-number" className="block text-sm font-medium text-gray-700">
                                  Card Number
                                </label>
                                <Input id="card-number" className="mt-1" placeholder="•••• •••• •••• ••••" required />
                              </div>
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <label htmlFor="expiry" className="block text-sm font-medium text-gray-700">
                                    Expiry Date
                                  </label>
                                  <Input id="expiry" className="mt-1" placeholder="MM/YY" required />
                                </div>
                                <div>
                                  <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">
                                    CVV
                                  </label>
                                  <Input id="cvv" className="mt-1" placeholder="•••" required />
                                </div>
                              </div>
                            </TabsContent>
                            <TabsContent value="ach" className="space-y-4 mt-4">
                              <div>
                                <label htmlFor="account-name" className="block text-sm font-medium text-gray-700">
                                  Account Holder Name
                                </label>
                                <Input id="account-name" className="mt-1" required />
                              </div>
                              <div>
                                <label htmlFor="routing-number" className="block text-sm font-medium text-gray-700">
                                  Routing Number
                                </label>
                                <Input id="routing-number" className="mt-1" required />
                              </div>
                              <div>
                                <label htmlFor="account-number" className="block text-sm font-medium text-gray-700">
                                  Account Number
                                </label>
                                <Input id="account-number" className="mt-1" required />
                              </div>
                              <div>
                                <label htmlFor="account-type" className="block text-sm font-medium text-gray-700">
                                  Account Type
                                </label>
                                <Select>
                                  <SelectTrigger id="account-type" className="w-full mt-1">
                                    <SelectValue placeholder="Select account type" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="checking">Checking</SelectItem>
                                    <SelectItem value="savings">Savings</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                            </TabsContent>
                            <TabsContent value="paypal" className="space-y-4 mt-4">
                              <div>
                                <label htmlFor="paypal-email" className="block text-sm font-medium text-gray-700">
                                  PayPal Email
                                </label>
                                <Input id="paypal-email" type="email" className="mt-1" required />
                              </div>
                              <p className="text-sm text-gray-500">
                                You will be redirected to PayPal to complete the setup process.
                              </p>
                            </TabsContent>
                          </Tabs>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="default-payment" />
                          <label htmlFor="default-payment" className="text-sm text-gray-700">
                            Set as default payment method
                          </label>
                        </div>
                      </div>
                      <DialogFooter>
                        <Button type="button" variant="outline" onClick={() => setShowAddPaymentDialog(false)}>
                          Cancel
                        </Button>
                        <Button type="submit" disabled={isLoading}>
                          {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                          Add Payment Method
                        </Button>
                      </DialogFooter>
                    </form>
                  </DialogContent>
                </Dialog>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
