import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { CreditCard, Lock, Shield } from "lucide-react"

export default function PaymentPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="bg-blue-600 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center text-white mb-8">
            <h1 className="text-4xl font-bold mb-4">MAKE A PAYMENT</h1>
            <p className="text-xl max-w-2xl mx-auto">Quick and secure payment processing for your GetFLQuote policy.</p>
          </div>
        </div>
      </div>

      {/* Payment Form Section */}
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-gray-50 p-8 rounded-lg shadow-sm">
            <div className="flex items-center justify-center mb-6 text-blue-600">
              <Lock className="mr-2" size={24} />
              <span className="text-lg font-medium">Secure Payment Portal</span>
            </div>

            <form className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-blue-800 mb-6">Policy Information</h2>
                <div className="grid grid-cols-1 gap-4">
                  <Input type="text" placeholder="Policy Number" className="border-gray-300" required />
                  <Input type="text" placeholder="Last Name or Business Name" className="border-gray-300" required />
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-blue-800 mb-6">Payment Details</h2>
                <div className="grid grid-cols-1 gap-4">
                  <Select>
                    <SelectTrigger className="border-gray-300">
                      <SelectValue placeholder="Payment Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="premium">Premium Payment</SelectItem>
                      <SelectItem value="deductible">Deductible Payment</SelectItem>
                      <SelectItem value="other">Other Payment</SelectItem>
                    </SelectContent>
                  </Select>

                  <Input type="text" placeholder="Payment Amount" className="border-gray-300" required />
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-blue-800 mb-6">Payment Method</h2>
                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="creditCard" defaultChecked />
                    <label htmlFor="creditCard" className="font-medium">
                      Credit/Debit Card
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="ach" />
                    <label htmlFor="ach" className="font-medium">
                      Bank Account (ACH)
                    </label>
                  </div>
                </div>

                <div className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center mb-4">
                    <CreditCard className="mr-2 text-blue-600" size={20} />
                    <h3 className="font-bold">Credit/Debit Card Information</h3>
                  </div>

                  <div className="grid grid-cols-1 gap-4">
                    <Input type="text" placeholder="Cardholder Name" className="border-gray-300" required />
                    <Input type="text" placeholder="Card Number" className="border-gray-300" required />

                    <div className="grid grid-cols-2 gap-4">
                      <Input type="text" placeholder="Expiration Date (MM/YY)" className="border-gray-300" required />
                      <Input type="text" placeholder="CVV" className="border-gray-300" required />
                    </div>

                    <Input type="text" placeholder="Billing ZIP Code" className="border-gray-300" required />
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="savePayment" />
                <label htmlFor="savePayment" className="text-sm">
                  Save this payment method for future transactions
                </label>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg flex items-start">
                <Shield className="text-blue-600 mr-2 mt-1 flex-shrink-0" size={20} />
                <p className="text-sm">
                  Your payment information is encrypted and secure. GetFLQuote adheres to strict security protocols to
                  protect your personal and financial information.
                </p>
              </div>

              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                SUBMIT PAYMENT
              </Button>
            </form>
          </div>

          <div className="max-w-3xl mx-auto mt-8">
            <h3 className="text-xl font-bold text-blue-800 mb-4">Other Payment Options</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="text-lg font-bold mb-2">Pay by Phone</h4>
                <p className="mb-2">Call our customer service line to make a payment over the phone:</p>
                <p className="font-medium">813-555-7890</p>
                <p className="text-sm text-gray-600 mt-2">Available Monday-Friday, 8am-6pm ET</p>
              </div>

              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="text-lg font-bold mb-2">Pay by Mail</h4>
                <p className="mb-2">Send a check or money order to:</p>
                <p>
                  GetFLQuote
                  <br />
                  1000 N Ashley Drive
                  <br />
                  Tampa, FL 33602
                </p>
                <p className="text-sm text-gray-600 mt-2">Include your policy number on your check</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
