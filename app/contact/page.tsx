import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { MapPin, Phone } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative w-full h-[300px] bg-blue-600">
        <Image
          src="/placeholder.svg?height=300&width=1200"
          alt="Customer service representative"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6 text-center">
          <h1 className="text-4xl font-bold mb-4">CONTACT US</h1>
          <p className="text-xl max-w-2xl">
            If you have any questions or are in need of assistance, feel free to give us a call! We provide insurance
            services throughout Florida.
          </p>
        </div>
      </div>

      {/* Contact Form and Office Info */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="md:col-span-2 bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold text-blue-800 mb-6 text-center">GetFLQuote - WE ARE HERE FOR YOU</h2>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Input type="text" placeholder="First Name" className="border-gray-300" />
                </div>
                <div>
                  <Input type="text" placeholder="Last Name" className="border-gray-300" />
                </div>
              </div>

              <div>
                <Input type="tel" placeholder="Phone" className="border-gray-300" />
              </div>

              <div>
                <Input type="email" placeholder="Email" className="border-gray-300" />
              </div>

              <div>
                <p className="mb-2 font-medium">Insurance types you need</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="home" />
                    <label htmlFor="home" className="text-sm">
                      Home & Property
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="life" />
                    <label htmlFor="life" className="text-sm">
                      Life
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="auto" />
                    <label htmlFor="auto" className="text-sm">
                      Auto
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="recreational" />
                    <label htmlFor="recreational" className="text-sm">
                      Recreational
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="business" />
                    <label htmlFor="business" className="text-sm">
                      Business
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="commercial" />
                    <label htmlFor="commercial" className="text-sm">
                      Commercial
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <Textarea placeholder="Additional Comments" className="border-gray-300 min-h-[120px]" />
              </div>

              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                Submit
              </Button>
            </form>
          </div>

          {/* Office Information */}
          <div className="bg-blue-500 text-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6 text-center border-b border-blue-400 pb-4">OUR OFFICE</h2>

            <div className="space-y-6 mt-8">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-4">GETFLQUOTE</h3>
                <p className="mb-2 text-sm">Florida's Digital Insurance Platform</p>

                <div className="flex items-center justify-center mb-2">
                  <MapPin className="mr-2" size={18} />
                  <p>1000 N Ashley Drive</p>
                </div>
                <p className="mb-4">Tampa, FL 33602</p>

                <div className="flex items-center justify-center mb-2">
                  <Phone className="mr-2" size={18} />
                  <p>+1-656-217-7270</p>
                </div>
              </div>

              <div className="h-[300px] bg-gray-200 rounded-lg relative">
                {/* Map placeholder - in a real implementation, you would integrate Google Maps or similar */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  Interactive Map Would Display Here
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
