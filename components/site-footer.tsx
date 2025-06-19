import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-gray-100 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4">GetFLQuote</h3>
            <p className="mb-4 text-gray-600">Florida's Digital Insurance Platform</p>
            <div className="space-y-2 text-gray-600">
              <div className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <p>
                  1000 N Ashley Drive
                  <br />
                  Tampa, FL 33602
                </p>
              </div>
              <div className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0" />
                <p>+1-656-217-7270</p>
              </div>
              <div className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0" />
                <p>info@getflquote.com</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4">Insurance</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/quotes/auto-insurance-quote" className="text-gray-600 hover:text-blue-500">
                  Auto Insurance
                </Link>
              </li>
              <li>
                <Link href="/quotes/home-insurance-quote" className="text-gray-600 hover:text-blue-500">
                  Home Insurance
                </Link>
              </li>
              <li>
                <Link href="/quotes/life-insurance-quote" className="text-gray-600 hover:text-blue-500">
                  Life Insurance
                </Link>
              </li>
              <li>
                <Link href="/quotes/business-insurance-quote" className="text-gray-600 hover:text-blue-500">
                  Business Insurance
                </Link>
              </li>
              <li>
                <Link href="/quotes/recreational-insurance-quote" className="text-gray-600 hover:text-blue-500">
                  Recreational Insurance
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/our-company" className="text-gray-600 hover:text-blue-500">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/our-team" className="text-gray-600 hover:text-blue-500">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/insurance-carriers" className="text-gray-600 hover:text-blue-500">
                  Insurance Carriers
                </Link>
              </li>
              <li>
                <Link href="/collaboration" className="text-gray-600 hover:text-blue-500">
                  Influencer Program
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-blue-500">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/portal/login" className="text-gray-600 hover:text-blue-500">
                  Customer Portal
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-600 hover:text-blue-500">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-gray-600 hover:text-blue-500">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/accessibility-statement" className="text-gray-600 hover:text-blue-500">
                  Accessibility
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-300 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600 mb-4 md:mb-0">&copy; 2025 GetFLQuote. All rights reserved.</p>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" className="text-gray-600 hover:text-blue-500">
                <Facebook size={20} />
              </Link>
              <Link href="https://twitter.com" className="text-gray-600 hover:text-blue-500">
                <Twitter size={20} />
              </Link>
              <Link href="https://linkedin.com" className="text-gray-600 hover:text-blue-500">
                <Linkedin size={20} />
              </Link>
              <Link href="https://instagram.com" className="text-gray-600 hover:text-blue-500">
                <Instagram size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
