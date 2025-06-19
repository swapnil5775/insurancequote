import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function AutoInsuranceQuotePage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative w-full min-h-[500px]">
        <Image src="/placeholder.svg?height=500&width=1200" alt="Car close-up" fill className="object-cover" priority />
        <div className="absolute inset-0 flex">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 p-8 bg-blue-600/80 text-white">
              <h1 className="text-4xl font-bold mb-4">AUTO INSURANCE</h1>
              <p className="text-xl italic">Protect your everyday vehicle.</p>
            </div>

            <div className="w-full md:w-1/2 p-6">
              <div className="bg-blue-500 p-6 rounded-lg shadow-lg text-white">
                <h2 className="text-2xl font-bold mb-6 text-center">REQUEST AN INSURANCE QUOTE</h2>
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
                      <SelectValue placeholder="Choose Your Option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="new">New Policy</SelectItem>
                      <SelectItem value="existing">Existing Policy</SelectItem>
                      <SelectItem value="multiple">Multiple Vehicles</SelectItem>
                    </SelectContent>
                  </Select>

                  <Textarea
                    placeholder="Additional Comments"
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
            <h2 className="text-3xl font-bold text-blue-800 mb-6">Drive with Confidence</h2>

            <p className="mb-4">
              At GetFLQuote, we understand that your vehicle is more than just a means of transportation—it's an
              essential part of your daily life. That's why we offer comprehensive auto insurance solutions designed to
              protect you, your passengers, and your investment throughout Florida.
            </p>

            <p className="mb-8">
              Our team of experienced agents will work with you to find the perfect coverage that fits your needs and
              budget, ensuring you're protected on every journey.
            </p>

            <h3 className="text-2xl font-bold text-blue-800 mb-4">Coverage Options</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="text-lg font-bold mb-2">Liability Coverage</h4>
                <p>Protects you if you're responsible for an accident causing injury or property damage to others.</p>
              </div>

              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="text-lg font-bold mb-2">Collision Coverage</h4>
                <p>Covers damage to your vehicle resulting from a collision with another vehicle or object.</p>
              </div>

              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="text-lg font-bold mb-2">Comprehensive Coverage</h4>
                <p>Protects against theft and damage caused by incidents other than collisions.</p>
              </div>

              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="text-lg font-bold mb-2">Uninsured Motorist</h4>
                <p>Covers you and your passengers if you're hit by an uninsured or underinsured driver.</p>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
              <h4 className="text-lg font-bold mb-2">Did You Know?</h4>
              <p>
                Bundling your auto insurance with other policies like home or renters insurance can save you up to 15%
                on your premiums!
              </p>
            </div>

            <div className="text-center">
              <Button className="bg-blue-600 hover:bg-blue-700">GET YOUR FREE QUOTE TODAY</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
