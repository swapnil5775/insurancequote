"use client"

import Link from "next/link"

export default function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <div className="relative w-[200px] h-[80px]">
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="relative w-12 h-12 mb-1">
            <div className="absolute inset-0 bg-blue-600 rounded-full"></div>
            <div className="absolute inset-1 bg-yellow-300 rounded-full"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                className="w-8 h-8 text-blue-800"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
                <line x1="16" y1="8" x2="2" y2="22" />
                <line x1="17.5" y1="15" x2="9" y2="15" />
              </svg>
            </div>
          </div>
          <div className="text-blue-800 font-bold text-lg leading-tight text-center">
            getFLQuote
            <br />
            <span className="text-xs font-normal">.com</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
