import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function InsuranceCarriersPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative w-full h-[300px]">
        <Image
          src="/placeholder.svg?height=300&width=1200"
          alt="Insurance company buildings"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-blue-600/70 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">INSURANCE CARRIERS</h1>
        </div>
      </div>

      {/* Carriers Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">Our Trusted Insurance Partners</h2>

            <p className="text-center mb-12 max-w-2xl mx-auto">
              At GetFLQuote, we work with a carefully selected network of top-rated insurance carriers to provide you
              with the best coverage options at competitive rates throughout Florida.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {/* Carrier 1 */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-center">
                <div className="h-24 flex items-center justify-center mb-4">
                  <Image
                    src="/placeholder.svg?height=80&width=160&text=Carrier+1"
                    alt="Insurance Carrier 1"
                    width={160}
                    height={80}
                  />
                </div>
                <h3 className="text-xl font-bold text-blue-800 mb-2">Allstate</h3>
                <p className="mb-4">
                  Offering a wide range of insurance products with their "You're in good hands" promise.
                </p>
                <div className="flex justify-center space-x-2">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Auto</span>
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Home</span>
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Life</span>
                </div>
              </div>

              {/* Carrier 2 */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-center">
                <div className="h-24 flex items-center justify-center mb-4">
                  <Image
                    src="/placeholder.svg?height=80&width=160&text=Carrier+2"
                    alt="Insurance Carrier 2"
                    width={160}
                    height={80}
                  />
                </div>
                <h3 className="text-xl font-bold text-blue-800 mb-2">Progressive</h3>
                <p className="mb-4">Known for competitive rates and innovative insurance solutions for modern needs.</p>
                <div className="flex justify-center space-x-2">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Auto</span>
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    Motorcycle
                  </span>
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Boat</span>
                </div>
              </div>

              {/* Carrier 3 */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-center">
                <div className="h-24 flex items-center justify-center mb-4">
                  <Image
                    src="/placeholder.svg?height=80&width=160&text=Carrier+3"
                    alt="Insurance Carrier 3"
                    width={160}
                    height={80}
                  />
                </div>
                <h3 className="text-xl font-bold text-blue-800 mb-2">Liberty Mutual</h3>
                <p className="mb-4">
                  Providing protection and peace of mind for individuals, families, and businesses.
                </p>
                <div className="flex justify-center space-x-2">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Home</span>
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Auto</span>
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    Business
                  </span>
                </div>
              </div>

              {/* Carrier 4 */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-center">
                <div className="h-24 flex items-center justify-center mb-4">
                  <Image
                    src="/placeholder.svg?height=80&width=160&text=Carrier+4"
                    alt="Insurance Carrier 4"
                    width={160}
                    height={80}
                  />
                </div>
                <h3 className="text-xl font-bold text-blue-800 mb-2">Travelers</h3>
                <p className="mb-4">With over 165 years of experience protecting customers and their assets.</p>
                <div className="flex justify-center space-x-2">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Home</span>
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Auto</span>
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    Business
                  </span>
                </div>
              </div>

              {/* Carrier 5 */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-center">
                <div className="h-24 flex items-center justify-center mb-4">
                  <Image
                    src="/placeholder.svg?height=80&width=160&text=Carrier+5"
                    alt="Insurance Carrier 5"
                    width={160}
                    height={80}
                  />
                </div>
                <h3 className="text-xl font-bold text-blue-800 mb-2">Nationwide</h3>
                <p className="mb-4">Offering a full range of insurance and financial services for your protection.</p>
                <div className="flex justify-center space-x-2">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Auto</span>
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Home</span>
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Life</span>
                </div>
              </div>

              {/* Carrier 6 */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-center">
                <div className="h-24 flex items-center justify-center mb-4">
                  <Image
                    src="/placeholder.svg?height=80&width=160&text=Carrier+6"
                    alt="Insurance Carrier 6"
                    width={160}
                    height={80}
                  />
                </div>
                <h3 className="text-xl font-bold text-blue-800 mb-2">State Farm</h3>
                <p className="mb-4">
                  A trusted name in insurance, helping customers manage risks and recover from the unexpected.
                </p>
                <div className="flex justify-center space-x-2">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Auto</span>
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Home</span>
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Life</span>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-blue-800 mb-4 text-center">The GetFLQuote Advantage</h3>
              <p className="mb-4">
                As an independent insurance agency, we're not tied to any single insurance carrier. This means we can
                shop around on your behalf to find the best coverage at the most competitive rates.
              </p>
              <p className="mb-4">Our relationships with these top-rated carriers allow us to offer you:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>More options to choose from</li>
                <li>Competitive pricing through comparison shopping</li>
                <li>Customized policies tailored to your specific needs</li>
                <li>Expert guidance on which carrier is best for your situation</li>
                <li>Ongoing support and advocacy if you ever need to file a claim</li>
              </ul>
              <p>
                We continuously evaluate our carrier partnerships to ensure we're offering our clients the best possible
                insurance solutions.
              </p>
            </div>

            <div className="text-center mt-8">
              <Link href="/quotes/quick-quote">
                <Button className="bg-blue-600 hover:bg-blue-700">GET A QUOTE TODAY</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
