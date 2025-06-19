import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function RecreationalInsuranceQuotePage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative w-full min-h-[500px]">
        <Image
          src="/placeholder.svg?height=500&width=1200"
          alt="Boats and watercraft"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 p-8 bg-blue-600/80 text-white">
              <h1 className="text-4xl font-bold mb-4">RECREATIONAL INSURANCE</h1>
              <p className="text-xl italic">Protect your leisure investments.</p>
            </div>

            <div className="w-full md:w-1/2 p-6">
              <div className="bg-blue-500 p-6 rounded-lg shadow-lg text-white">
                <h2 className="text-2xl font-bold mb-6 text-center">REQUEST A RECREATIONAL INSURANCE QUOTE</h2>
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
                      <SelectValue placeholder="Vehicle/Craft Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="boat">Boat/Watercraft</SelectItem>
                      <SelectItem value="rv">RV/Motorhome</SelectItem>
                      <SelectItem value="atv">ATV/Off-Road Vehicle</SelectItem>
                      <SelectItem value="motorcycle">Motorcycle</SelectItem>
                      <SelectItem value="other">Other Recreational Vehicle</SelectItem>
                    </SelectContent>
                  </Select>

                  <Input
                    type="text"
                    placeholder="Year, Make & Model"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
                  />

                  <Textarea
                    placeholder="Additional Information"
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
            <h2 className="text-3xl font-bold text-blue-800 mb-6">Enjoy Your Leisure Time with Peace of Mind</h2>

            <p className="mb-4">
              Your recreational vehicles and watercraft represent your passion for adventure and relaxation. At
              GetFLQuote, we understand the importance of protecting these valuable investments so you can enjoy your
              leisure time worry-free.
            </p>

            <p className="mb-8">
              Our recreational insurance specialists will work with you to create a customized policy that provides
              comprehensive coverage for your specific vehicle or watercraft, ensuring you're protected on land or
              water, anywhere in Florida.
            </p>

            <h3 className="text-2xl font-bold text-blue-800 mb-4">Recreational Insurance Coverage</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="text-lg font-bold mb-2">Boat & Watercraft Insurance</h4>
                <p>
                  Protection for boats, jet skis, and other personal watercraft against damage, liability, and theft.
                </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="text-lg font-bold mb-2">RV & Motorhome Insurance</h4>
                <p>
                  Specialized coverage for your home on wheels, including comprehensive, collision, and personal
                  effects.
                </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="text-lg font-bold mb-2">ATV & Off-Road Vehicle Insurance</h4>
                <p>
                  Coverage for all-terrain vehicles, dirt bikes, and other off-road vehicles against accidents and
                  theft.
                </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="text-lg font-bold mb-2">Motorcycle Insurance</h4>
                <p>
                  Protects your motorcycle with liability, collision, comprehensive, and uninsured motorist coverage.
                </p>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
              <h4 className="text-lg font-bold mb-2">Florida Recreation Tip</h4>
              <p>
                Florida's beautiful coastlines and year-round warm weather make it a paradise for recreational
                activities. However, this also means increased risk for theft and weather-related damage. Make sure your
                policy includes adequate coverage for these Florida-specific risks.
              </p>
            </div>

            <div className="text-center">
              <Button className="bg-blue-600 hover:bg-blue-700">GET YOUR RECREATIONAL INSURANCE QUOTE</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
