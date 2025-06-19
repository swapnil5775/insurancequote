import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FileDown, Mail, Printer } from "lucide-react"

export default function ProofOfInsurancePage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="bg-blue-500 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Proof of Insurance</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Need proof of insurance? Access your insurance cards and documents instantly with GetFLQuote.
            </p>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-gray-50 p-8 rounded-lg shadow-sm">
            <form className="space-y-6">
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-6">Request Proof of Insurance from GetFLQuote</h2>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="policy-number" className="block text-sm font-medium text-gray-700 mb-1">
                      Policy Number
                    </label>
                    <Input id="policy-number" type="text" className="border-gray-300" required />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 mb-1">
                        First Name
                      </label>
                      <Input id="first-name" type="text" className="border-gray-300" required />
                    </div>
                    <div>
                      <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name
                      </label>
                      <Input id="last-name" type="text" className="border-gray-300" required />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <Input id="email" type="email" className="border-gray-300" required />
                  </div>

                  <div>
                    <label htmlFor="document-type" className="block text-sm font-medium text-gray-700 mb-1">
                      Document Type
                    </label>
                    <Select>
                      <SelectTrigger id="document-type" className="border-gray-300">
                        <SelectValue placeholder="Select document type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="id-card">Insurance ID Card</SelectItem>
                        <SelectItem value="dec-page">Declarations Page</SelectItem>
                        <SelectItem value="certificate">Certificate of Insurance</SelectItem>
                        <SelectItem value="sr22">SR-22 Form</SelectItem>
                        <SelectItem value="full-policy">Full Policy Document</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Delivery Method</label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Button
                        type="button"
                        className="flex items-center justify-center gap-2 bg-white text-blue-500 border border-blue-500 hover:bg-blue-50"
                      >
                        <Mail size={18} />
                        Email
                      </Button>
                      <Button
                        type="button"
                        className="flex items-center justify-center gap-2 bg-white text-blue-500 border border-blue-500 hover:bg-blue-50"
                      >
                        <FileDown size={18} />
                        Download
                      </Button>
                      <Button
                        type="button"
                        className="flex items-center justify-center gap-2 bg-white text-blue-500 border border-blue-500 hover:bg-blue-50"
                      >
                        <Printer size={18} />
                        Print
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                REQUEST DOCUMENT
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Additional Info Section */}
      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">Frequently Asked Questions</h2>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-2">What is an Insurance ID Card?</h3>
                <p className="text-gray-600">
                  An Insurance ID Card is a document that provides proof of insurance coverage. It typically includes
                  your policy number, coverage dates, and vehicle information. You should keep this card in your vehicle
                  at all times.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-2">What is a Declarations Page?</h3>
                <p className="text-gray-600">
                  A Declarations Page summarizes your insurance policy, including coverage limits, deductibles, premium
                  amounts, and the vehicles or properties covered. This document is often required by lenders or leasing
                  companies.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-2">How quickly will I receive my documents?</h3>
                <p className="text-gray-600">
                  If you choose the email or download option, you'll typically receive your documents immediately from
                  GetFLQuote. For mailed documents, please allow 3-5 business days for delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
