import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function UpdateContactInfoPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="bg-blue-500 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Update Contact Information</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Keep your contact information up-to-date to ensure you receive important policy updates and communications
              from GetFLQuote.
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
                <h2 className="text-xl font-bold text-gray-900 mb-6">Personal Information</h2>
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
                </div>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-6">Updated Contact Information</h2>
                <div className="space-y-4">
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
                <h2 className="text-xl font-bold text-gray-900 mb-6">Updated Address</h2>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="street" className="block text-sm font-medium text-gray-700 mb-1">
                      Street Address
                    </label>
                    <Input id="street" type="text" className="border-gray-300" required />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                        City
                      </label>
                      <Input id="city" type="text" className="border-gray-300" required />
                    </div>
                    <div>
                      <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                        State
                      </label>
                      <Input id="state" type="text" className="border-gray-300" required />
                    </div>
                    <div>
                      <label htmlFor="zip" className="block text-sm font-medium text-gray-700 mb-1">
                        ZIP Code
                      </label>
                      <Input id="zip" type="text" className="border-gray-300" required />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="additional-info" className="block text-sm font-medium text-gray-700 mb-1">
                  Additional Information
                </label>
                <Textarea
                  id="additional-info"
                  className="border-gray-300 min-h-[100px]"
                  placeholder="Please provide any additional information about your contact update request for GetFLQuote."
                />
              </div>

              <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                SUBMIT CHANGES
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
