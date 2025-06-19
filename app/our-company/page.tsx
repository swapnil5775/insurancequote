import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function OurCompanyPage() {
  const currentYear = new Date().getFullYear()
  const foundingYear = 1995
  const yearsInBusiness = currentYear - foundingYear

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative w-full h-[300px]">
        <Image
          src="/placeholder.svg?height=300&width=1200"
          alt="Office building"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-blue-600/70 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">OUR COMPANY</h1>
        </div>
      </div>

      {/* About Us Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">Your Beacon of Protection Since 1995</h2>

            <div className="mb-8">
              <p className="mb-4">
                At GetFLQuote.com, we've been guiding our clients through the complex world of insurance for over{" "}
                {yearsInBusiness}
                years. Founded with a simple mission—to provide honest, personalized insurance solutions—we've grown to
                become one of the most trusted independent insurance agencies in Florida.
              </p>

              <p className="mb-4">
                What sets us apart is our commitment to you. We're not just insurance agents; we're your neighbors,
                friends, and fellow community members who understand the unique needs and challenges of living and
                working in the state of Florida.
              </p>

              <p>
                Our team of experienced professionals works tirelessly to find the perfect coverage options that protect
                what matters most to you, all while keeping your budget in mind. We represent multiple top-rated
                insurance carriers, allowing us to offer a wide range of options tailored specifically to your needs
                throughout Florida.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-2xl font-bold text-blue-800 mb-4">Our Mission</h3>
                <p>
                  To empower Floridians with clear, customized insurance solutions, ensuring peace of mind and financial
                  security through expert guidance and unwavering support.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-blue-800 mb-4">Our Vision</h3>
                <p>
                  To be Florida's leading insurance resource, recognized for our integrity, innovation, and dedication
                  to providing exceptional value and protection to our clients, one policy at a time.
                </p>
              </div>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg mb-12">
              <h3 className="text-2xl font-bold text-blue-800 mb-4 text-center">Our Core Values</h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold mb-2">Integrity</h4>
                  <p>We always do what's right, even when no one is watching.</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold mb-2">Service</h4>
                  <p>We go above and beyond to exceed our clients' expectations.</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold mb-2">Innovation</h4>
                  <p>We continuously seek better ways to serve our clients' evolving needs.</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link href="/our-team">
                <Button className="bg-blue-600 hover:bg-blue-700 mr-4">MEET OUR TEAM</Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  CONTACT US
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
