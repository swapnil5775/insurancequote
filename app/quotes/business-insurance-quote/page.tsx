import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

export default function BusinessInsuranceQuotePage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative w-full min-h-[500px] mt-4">
        <Image
          src="/placeholder.svg?height=500&width=1200"
          alt="Office building"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 p-8 bg-blue-600/80 text-white">
              <h1 className="text-4xl font-bold mb-4">BUSINESS INSURANCE</h1>
              <p className="text-xl italic">Comprehensive protection for your business.</p>
            </div>

            <div className="w-full md:w-1/2 p-6">
              <div className="bg-blue-500 p-6 rounded-lg shadow-lg text-white">
                <h2 className="text-2xl font-bold mb-6 text-center">REQUEST A BUSINESS INSURANCE QUOTE</h2>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      type="text"
                      placeholder="First Name"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
                    />
                    <Input
                      type="text"
                      placeholder="Last Name"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
                    />
                  </div>

                  <Input
                    type="text"
                    placeholder="Business Name"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
                  />

                  <Input
                    type="tel"
                    placeholder="Phone"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
                  />
                  <Input
                    type="email"
                    placeholder="Email"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
                  />

                  <Select>
                    <SelectTrigger className="bg-white/10 border-white/20 text-white">
                      <SelectValue placeholder="Business Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="retail">Retail</SelectItem>
                      <SelectItem value="restaurant">Restaurant/Food Service</SelectItem>
                      <SelectItem value="office">Office/Professional</SelectItem>
                      <SelectItem value="construction">Construction</SelectItem>
                      <SelectItem value="manufacturing">Manufacturing</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>

                  <div>
                    <p className="mb-2 text-sm">Coverage types you're interested in:</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="liability"
                          className="border-white/30 data-[state=checked]:bg-white data-[state=checked]:text-blue-600"
                        />
                        <label htmlFor="liability" className="text-sm">
                          General Liability
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="property"
                          className="border-white/30 data-[state=checked]:bg-white data-[state=checked]:text-blue-600"
                        />
                        <label htmlFor="property" className="text-sm">
                          Property Insurance
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="workers"
                          className="border-white/30 data-[state=checked]:bg-white data-[state=checked]:text-blue-600"
                        />
                        <label htmlFor="workers" className="text-sm">
                          Workers' Compensation
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="professional"
                          className="border-white/30 data-[state=checked]:bg-white data-[state=checked]:text-blue-600"
                        />
                        <label htmlFor="professional" className="text-sm">
                          Professional Liability
                        </label>
                      </div>
                    </div>
                  </div>

                  <Textarea
                    placeholder="Tell us about your business and coverage needs"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/70 min-h-[100px]"
                  />

                  <Button type="submit" className="w-full bg-blue-800 hover:bg-blue-900 text-white">
                    GET QUOTE
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-800 mb-6">Protect Your Business with Confidence</h2>

            <p className="mb-4">
              At GetFLQuote, we understand that your business is the result of your hard work, dedication, and
              investment. Our comprehensive business insurance solutions are designed to protect your company from the
              unexpected, allowing you to focus on what matters most: running and growing your business.
            </p>

            <p className="mb-8">
              Our experienced commercial insurance specialists will work closely with you to identify potential risks
              and develop a customized insurance plan that provides the right coverage at competitive rates. We proudly
              serve businesses throughout Florida.
            </p>

            <h3 className="text-2xl font-bold text-blue-800 mb-4">Business Insurance Solutions</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="text-lg font-bold mb-2">General Liability Insurance</h4>
                <p>
                  Protects against financial loss from bodily injury, property damage, and advertising injury claims.
                </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="text-lg font-bold mb-2">Commercial Property Insurance</h4>
                <p>Covers your building, inventory, equipment, and other physical assets against damage or loss.</p>
              </div>

              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="text-lg font-bold mb-2">Workers' Compensation</h4>
                <p>Provides benefits to employees who suffer work-related injuries or illnesses.</p>
              </div>

              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="text-lg font-bold mb-2">Business Interruption Insurance</h4>
                <p>Covers lost income and expenses if your business must temporarily close due to a covered event.</p>
              </div>

              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="text-lg font-bold mb-2">Professional Liability Insurance</h4>
                <p>Protects against claims of negligence or inadequate work in professional services businesses.</p>
              </div>

              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="text-lg font-bold mb-2">Commercial Auto Insurance</h4>
                <p>Covers vehicles used for business purposes against liability and physical damage.</p>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
              <h4 className="text-lg font-bold mb-2">Business Insurance Tip</h4>
              <p>
                As your business grows and evolves, so do your insurance needs. We recommend scheduling an annual review
                of your business insurance policies to ensure you have the right coverage for your current operations.
              </p>
            </div>

            <div className="text-center">
              <Button className="bg-blue-600 hover:bg-blue-700">PROTECT YOUR BUSINESS TODAY</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
