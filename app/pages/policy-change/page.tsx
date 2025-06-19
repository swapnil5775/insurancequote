import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"

export default function PolicyChangePage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="bg-blue-500 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Request Policy Changes</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Need to make changes to your policy? Submit your request here and our team will assist you promptly with
              GetFLQuote.
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
                <h2 className="text-xl font-bold text-gray-900 mb-6">Policy Information</h2>
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
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <Input id="phone" type="tel" className="border-gray-300" required />
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-6">Requested Changes</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Type of Change (Select all that apply)
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="coverage" />
                        <label htmlFor="coverage" className="text-sm text-gray-700">
                          Coverage Changes
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="deductible" />
                        <label htmlFor="deductible" className="text-sm text-gray-700">
                          Deductible Changes
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="vehicle" />
                        <label htmlFor="vehicle" className="text-sm text-gray-700">
                          Add/Remove Vehicle
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="driver" />
                        <label htmlFor="driver" className="text-sm text-gray-700">
                          Add/Remove Driver
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="payment" />
                        <label htmlFor="payment" className="text-sm text-gray-700">
                          Payment Plan Changes
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="other-change" />
                        <label htmlFor="other-change" className="text-sm text-gray-700">
                          Other
                        </label>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="change-details" className="block text-sm font-medium text-gray-700 mb-1">
                      Change Details
                    </label>
                    <Textarea
                      id="change-details"
                      className="border-gray-300 min-h-[150px]"
                      placeholder="Please provide detailed information about the changes you would like to make to your policy with GetFLQuote."
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="effective-date" className="block text-sm font-medium text-gray-700 mb-1">
                      Requested Effective Date
                    </label>
                    <Input id="effective-date" type="date" className="border-gray-300" />
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="confirm" required />
                <label htmlFor="confirm" className="text-sm text-gray-700">
                  I understand that policy changes may affect my premium and coverage with GetFLQuote.
                </label>
              </div>

              <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                SUBMIT REQUEST
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
