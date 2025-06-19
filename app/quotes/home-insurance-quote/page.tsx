import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function HomeInsuranceQuotePage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative w-full min-h-[500px]">
        <Image
          src="/placeholder.svg?height=500&width=1200"
          alt="House exterior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 p-8 bg-blue-600/80 text-white">
              <h1 className="text-4xl font-bold mb-4">HOME INSURANCE</h1>
              <p className="text-xl italic">Protect your most valuable asset.</p>
            </div>

            <div className="w-full md:w-1/2 p-6">
              <div className="bg-blue-500 p-6 rounded-lg shadow-lg text-white">
                <h2 className="text-2xl font-bold mb-6 text-center">REQUEST A HOME INSURANCE QUOTE</h2>
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
                      <SelectValue placeholder="Property Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="single">Single Family Home</SelectItem>
                      <SelectItem value="condo">Condominium</SelectItem>
                      <SelectItem value="townhouse">Townhouse</SelectItem>
                      <SelectItem value="mobile">Mobile Home</SelectItem>
                      <SelectItem value="rental">Rental Property</SelectItem>
                    </SelectContent>
                  </Select>

                  <Textarea
                    placeholder="Additional Details About Your Property"
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
            <h2 className="text-3xl font-bold text-blue-800 mb-6">Protect Your Home with Quality Coverage</h2>

            <p className="mb-4">
              At GetFLQuote, we understand that your home is more than just a structure—it's where memories are made and
              your most treasured possessions are kept. Our comprehensive home insurance policies are designed to
              protect your home, belongings, and financial security.
            </p>

            <p className="mb-8">
              Our experienced agents will work with you to find the perfect coverage that fits your specific needs and
              budget, ensuring your peace of mind for years to come. We proudly serve the entire state of Florida.
            </p>

            <h3 className="text-2xl font-bold text-blue-800 mb-4">Coverage Options</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="text-lg font-bold mb-2">Dwelling Coverage</h4>
                <p>Protects the structure of your home, including walls, roof, floors, and built-in appliances.</p>
              </div>

              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="text-lg font-bold mb-2">Personal Property</h4>
                <p>Covers your belongings inside the home, such as furniture, clothing, and electronics.</p>
              </div>

              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="text-lg font-bold mb-2">Liability Protection</h4>
                <p>Provides coverage if someone is injured on your property or you damage someone else's property.</p>
              </div>

              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="text-lg font-bold mb-2">Additional Living Expenses</h4>
                <p>Covers costs if you can't live in your home due to a covered loss or disaster.</p>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
              <h4 className="text-lg font-bold mb-2">Florida Home Insurance Tip</h4>
              <p>
                In Florida, it's important to understand your hurricane and flood coverage options. Standard homeowners
                insurance typically doesn't cover flood damage, so consider adding a separate flood insurance policy for
                complete protection.
              </p>
            </div>

            <div className="text-center">
              <Button className="bg-blue-600 hover:bg-blue-700">GET YOUR FREE HOME INSURANCE QUOTE</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
