import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MessageCircle, Users, Building2, MapPin } from "lucide-react"

export default function HomePage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Florida's Digital Insurance Solution</h1>
            <p className="text-lg text-gray-600 mb-8">
              At GetFLQuote.com, we're your trusted partner in navigating life's unexpected turns. Our dedicated team is
              committed to illuminating your path to protection with personalized solutions tailored just for you.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/quotes/quick-quote">
                <Button className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 text-lg">
                  Get a Quote
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto border-blue-500 text-blue-500 hover:bg-blue-50 px-8 py-3 text-lg"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose GetFLQuote.com?</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white mx-auto mb-6">
                <Users size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4">Personalized Service</h3>
              <p className="text-gray-600">
                We take the time to understand your unique needs and create customized coverage solutions that protect
                what matters most to you.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white mx-auto mb-6">
                <Building2 size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4">Multiple Carriers</h3>
              <p className="text-gray-600">
                We work with top-rated insurance companies to find you the best rates and coverage options for your
                specific situation.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white mx-auto mb-6">
                <MapPin size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4">Local Expertise</h3>
              <p className="text-gray-600">
                Our knowledge of Florida insurance requirements ensures you're properly covered against hurricanes,
                floods, and other regional risks.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Insurance Types Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Insurance Solutions For Every Need</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg shadow-sm overflow-hidden">
              <div className="h-48 bg-blue-500 relative">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Home insurance"
                  fill
                  className="object-cover opacity-50"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white">Home Insurance</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="mb-4 text-gray-600">
                  Protect your most valuable asset with comprehensive coverage tailored to your needs.
                </p>
                <Link href="/quotes/home-insurance-quote">
                  <Button variant="outline" className="w-full border-blue-500 text-blue-500 hover:bg-blue-50">
                    GET A QUOTE
                  </Button>
                </Link>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg shadow-sm overflow-hidden">
              <div className="h-48 bg-blue-500 relative">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Auto insurance"
                  fill
                  className="object-cover opacity-50"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white">Auto Insurance</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="mb-4 text-gray-600">
                  Drive with confidence knowing you're covered against accidents and the unexpected.
                </p>
                <Link href="/quotes/auto-insurance-quote">
                  <Button variant="outline" className="w-full border-blue-500 text-blue-500 hover:bg-blue-50">
                    GET A QUOTE
                  </Button>
                </Link>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg shadow-sm overflow-hidden">
              <div className="h-48 bg-blue-500 relative">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Life insurance"
                  fill
                  className="object-cover opacity-50"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white">Life Insurance</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="mb-4 text-gray-600">
                  Ensure your loved ones' financial security with a policy that provides peace of mind.
                </p>
                <Link href="/quotes/life-insurance-quote">
                  <Button variant="outline" className="w-full border-blue-500 text-blue-500 hover:bg-blue-50">
                    GET A QUOTE
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-500 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Protected?</h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Contact us today to speak with one of our insurance experts and find the perfect coverage for your needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/quotes/quick-quote">
              <Button className="w-full sm:w-auto bg-white text-blue-500 hover:bg-gray-100 px-8 py-3 text-lg">
                Get a Quote
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                className="w-full sm:w-auto border-white text-white hover:bg-blue-600 px-8 py-3 text-lg"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button className="w-14 h-14 rounded-full bg-blue-500 hover:bg-blue-600 flex items-center justify-center shadow-lg">
          <MessageCircle size={24} />
        </Button>
      </div>
    </div>
  )
}
