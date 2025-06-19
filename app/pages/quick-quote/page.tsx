import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function QuickQuotePage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="bg-blue-500 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Get a Quick Quote</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Fill out the form below and one of our insurance experts will contact you with a personalized quote from
              GetFLQuote.
            </p>
          </div>
        </div>
      </div>

      {/* Quote Form Section */}
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-gray-50 p-8 rounded-lg shadow-sm">
            <form className="space-y-6">
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-6">Personal Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input type="text" placeholder="First Name" className="border-gray-300" required />
                  <Input type="text" placeholder="Last Name" className="border-gray-300" required />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input type="email" placeholder="Email Address" className="border-gray-300" required />
                <Input type="tel" placeholder="Phone Number" className="border-gray-300" required />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input type="text" placeholder="Street Address" className="border-gray-300" required />
                <Input type="text" placeholder="City" className="border-gray-300" required />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input type="text" placeholder="State" className="border-gray-300" required />
                <Input type="text" placeholder="Zip Code" className="border-gray-300" required />
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-6">Insurance Needs</h2>
                <p className="mb-4">What type of insurance are you interested in? (Select all that apply)</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="auto" />
                    <label htmlFor="auto" className="text-sm font-medium">
                      Auto Insurance
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="home" />
                    <label htmlFor="home" className="text-sm font-medium">
                      Home Insurance
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="life" />
                    <label htmlFor="life" className="text-sm font-medium">
                      Life Insurance
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="business" />
                    <label htmlFor="business" className="text-sm font-medium">
                      Business Insurance
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="recreational" />
                    <label htmlFor="recreational" className="text-sm font-medium">
                      Recreational Insurance
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="other" />
                    <label htmlFor="other" className="text-sm font-medium">
                      Other
                    </label>
                  </div>
                </div>

                <div>
                  <p className="mb-2">How would you prefer to be contacted?</p>
                  <Select>
                    <SelectTrigger className="border-gray-300">
                      <SelectValue placeholder="Select contact method" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="email">Email</SelectItem>
                      <SelectItem value="phone">Phone</SelectItem>
                      <SelectItem value="either">Either</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <p className="mb-2">Additional information or questions:</p>
                <Textarea
                  placeholder="Please provide any additional details that might help us prepare your quote..."
                  className="border-gray-300 min-h-[120px]"
                />
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="consent" required />
                <label htmlFor="consent" className="text-sm">
                  I consent to being contacted by GetFLQuote regarding my insurance needs.
                </label>
              </div>

              <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                SUBMIT QUOTE REQUEST
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Additional Info Section */}
      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">What Happens Next?</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-500">1</span>
                </div>
                <h3 className="text-lg font-bold mb-2">We Review Your Request</h3>
                <p className="text-gray-600">
                  Our team at GetFLQuote will carefully review your information to understand your needs.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-500">2</span>
                </div>
                <h3 className="text-lg font-bold mb-2">We Contact You</h3>
                <p className="text-gray-600">
                  An insurance expert from GetFLQuote will reach out to discuss your options and answer questions.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-500">3</span>
                </div>
                <h3 className="text-lg font-bold mb-2">You Get Covered</h3>
                <p className="text-gray-600">
                  GetFLQuote will help you select and implement the perfect insurance solution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
