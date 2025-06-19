"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"

export function MainNavigation() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const toggleDropdown = (name: string) => {
    if (openDropdown === name) {
      setOpenDropdown(null)
    } else {
      setOpenDropdown(name)
    }
  }

  const closeDropdowns = () => {
    setOpenDropdown(null)
  }

  return (
    <nav className="bg-white border-b">
      <div className="container mx-auto px-4">
        <ul className="flex flex-wrap justify-center md:justify-start">
          <li className="relative">
            <Link href="/" className="block px-4 py-4 text-gray-700 hover:text-blue-500" onClick={closeDropdowns}>
              Home
            </Link>
          </li>

          <li className="relative">
            <div
              className="flex items-center px-4 py-4 text-gray-700 hover:text-blue-500 cursor-pointer"
              onClick={() => toggleDropdown("company")}
            >
              Our Company
              <ChevronDown size={16} className="ml-1" />
            </div>
            {openDropdown === "company" && (
              <div className="absolute left-0 mt-0 w-48 bg-white shadow-lg rounded-b-md z-10">
                <Link
                  href="/our-company"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-500"
                  onClick={closeDropdowns}
                >
                  About Us
                </Link>
                <Link
                  href="/our-team"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-500"
                  onClick={closeDropdowns}
                >
                  Our Team
                </Link>
              </div>
            )}
          </li>

          <li className="relative">
            <div
              className="flex items-center px-4 py-4 text-gray-700 hover:text-blue-500 cursor-pointer"
              onClick={() => toggleDropdown("services")}
            >
              Insurance Services
              <ChevronDown size={16} className="ml-1" />
            </div>
            {openDropdown === "services" && (
              <div className="absolute left-0 mt-0 w-48 bg-white shadow-lg rounded-b-md z-10">
                <Link
                  href="/quotes/auto-insurance-quote"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-500"
                  onClick={closeDropdowns}
                >
                  Auto Insurance
                </Link>
                <Link
                  href="/quotes/home-insurance-quote"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-500"
                  onClick={closeDropdowns}
                >
                  Home Insurance
                </Link>
                <Link
                  href="/quotes/life-insurance-quote"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-500"
                  onClick={closeDropdowns}
                >
                  Life Insurance
                </Link>
                <Link
                  href="/quotes/business-insurance-quote"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-500"
                  onClick={closeDropdowns}
                >
                  Business Insurance
                </Link>
                <Link
                  href="/quotes/recreational-insurance-quote"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-500"
                  onClick={closeDropdowns}
                >
                  Recreational Insurance
                </Link>
              </div>
            )}
          </li>

          <li className="relative">
            <Link
              href="/quotes/quick-quote"
              className="block px-4 py-4 text-gray-700 hover:text-blue-500"
              onClick={closeDropdowns}
            >
              Get a Quote
            </Link>
          </li>

          <li className="relative">
            <div
              className="flex items-center px-4 py-4 text-gray-700 hover:text-blue-500 cursor-pointer"
              onClick={() => toggleDropdown("customer")}
            >
              Customer Service
              <ChevronDown size={16} className="ml-1" />
            </div>
            {openDropdown === "customer" && (
              <div className="absolute left-0 mt-0 w-48 bg-white shadow-lg rounded-b-md z-10">
                <Link
                  href="/pages/update-contact-info"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-500"
                  onClick={closeDropdowns}
                >
                  Update Contact Info
                </Link>
                <Link
                  href="/pages/policy-change"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-500"
                  onClick={closeDropdowns}
                >
                  Policy Change
                </Link>
                <Link
                  href="/pages/proof-of-insurance"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-500"
                  onClick={closeDropdowns}
                >
                  Proof of Insurance
                </Link>
                <Link
                  href="/pages/quick-quote"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-500"
                  onClick={closeDropdowns}
                >
                  Quick Quote
                </Link>
                <Link
                  href="/portal/login"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-500"
                  onClick={closeDropdowns}
                >
                  Customer Portal
                </Link>
              </div>
            )}
          </li>

          <li className="relative">
            <Link
              href="/our-team"
              className="block px-4 py-4 text-gray-700 hover:text-blue-500"
              onClick={closeDropdowns}
            >
              Our Team
            </Link>
          </li>

          <li className="relative">
            <Link
              href="/insurance-carriers"
              className="block px-4 py-4 text-gray-700 hover:text-blue-500"
              onClick={closeDropdowns}
            >
              Insurance Carriers
            </Link>
          </li>

          <li className="relative">
            <Link
              href="/collaboration"
              className="block px-4 py-4 text-gray-700 hover:text-blue-500"
              onClick={closeDropdowns}
            >
              Influencer Program
            </Link>
          </li>

          <li className="relative">
            <Link
              href="/contact"
              className="block px-4 py-4 text-gray-700 hover:text-blue-500"
              onClick={closeDropdowns}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
