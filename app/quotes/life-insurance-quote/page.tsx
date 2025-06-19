import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function LifeInsuranceQuotePage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative w-full min-h-[500px]">
        <Image
          src="/placeholder.svg?height=500&width=1200"
          alt="Family portrait"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 p-8 bg-blue-600/80 text-white">
              <h1 className="text-4xl font-bold mb-4">LIFE INSURANCE</h1>
              <p className="text-xl italic">Protect your family's financial future.</p>
            </div>

            <div className="w-full md:w-1/2 p-6">
              <div className="bg-blue-500 p-6 rounded-lg shadow-lg text-white">
                <h2 className="text-2xl font-bold mb-6 text-center">REQUEST A LIFE INSURANCE QUOTE</h2>
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

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Select>
                      <SelectTrigger className="bg-white/10 border-white/20 text-white">
                        <SelectValue placeholder="Age Range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="18-30">18-30</SelectItem>
                        <SelectItem value="31-40">31-40</SelectItem>
                        <SelectItem value="41-50">41-50</SelectItem>
                        <SelectItem value="51-60">51-60</SelectItem>
                        <SelectItem value="61+">61+</SelectItem>
                      </SelectContent>
                    </Select>

                    <Select>
                      <SelectTrigger className="bg-white/10 border-white/20 text-white">
                        <SelectValue placeholder="Coverage Amount" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="100k">$100,000</SelectItem>
                        <SelectItem value="250k">$250,000</SelectItem>
                        <SelectItem value="500k">$500,000</SelectItem>
                        <SelectItem value="1m">$1,000,000</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

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
            <h2 className="text-3xl font-bold text-blue-800 mb-6">Secure Your Family's Future</h2>

            <p className="mb-4">
              Life insurance is one of the most important investments you can make for your loved ones. At GetFLQuote,
              we understand that planning for the future can be challenging, which is why our experienced agents are
              here to guide you through every step of the process.
            </p>

            <p className="mb-8">
              We offer a variety of life insurance solutions tailored to your specific needs, ensuring that your
              family's financial security is protected no matter what happens. We proudly serve the entire state of
              Florida, providing personalized quotes and expert advice.
            </p>

            <h3 className="text-2xl font-bold text-blue-800 mb-4">Life Insurance Options</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="text-lg font-bold mb-2">Term Life Insurance</h4>
                <p>Provides coverage for a specific period at a fixed premium rate, ideal for temporary needs.</p>
              </div>

              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="text-lg font-bold mb-2">Whole Life Insurance</h4>
                <p>
                  Permanent coverage with a cash value component that can grow over time, offering lifelong protection.
                </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="text-lg font-bold mb-2">Universal Life Insurance</h4>
                <p>
                  Flexible premium payments and death benefits, with an investment component that can build cash value.
                </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="text-lg font-bold mb-2">Final Expense Insurance</h4>
                <p>
                  Designed to cover funeral costs and other end-of-life expenses, easing the burden on your loved ones.
                </p>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
              <h4 className="text-lg font-bold mb-2">Why Life Insurance Matters</h4>
              <p>
                Life insurance provides more than just a death benefit. It can help replace lost income, pay off debts,
                fund education expenses, cover funeral costs, and even provide a financial legacy for your loved ones.
                The right policy gives you peace of mind knowing your family will be taken care of.
              </p>
            </div>

            <div className="text-center">
              <Button className="bg-blue-600 hover:bg-blue-700">GET YOUR PERSONALIZED QUOTE TODAY</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
