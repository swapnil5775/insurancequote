"use client"

import { useState, useEffect } from "react"
import { MessageCircle, X } from "lucide-react"

export function TextMessagingBanner() {
  const [isVisible, setIsVisible] = useState(true)
  const [isMounted, setIsMounted] = useState(false)
  const [isPreviewEnvironment, setIsPreviewEnvironment] = useState(false)

  // Only render on client-side to avoid hydration issues
  useEffect(() => {
    setIsMounted(true)

    // Check if we're in a preview environment
    const isPreview =
      window.location.hostname.includes("v0.dev") ||
      window.location.hostname.includes("localhost") ||
      window.top !== window.self

    setIsPreviewEnvironment(isPreview)

    // If in preview, log a message
    if (isPreview) {
      console.log("Running in preview environment - some features may be limited")
    }
  }, [])

  // Don't render anything if not mounted or in preview environment
  if (!isMounted) return null

  // In preview environment, render a simplified version without interactive elements
  if (isPreviewEnvironment) {
    return (
      <div className="fixed right-0 top-1/3 z-50 transform translate-y-[-50%]">
        <div className="bg-blue-600 text-white p-4 rounded-l-lg shadow-lg max-w-[250px] relative">
          <div className="flex items-start space-x-2">
            <MessageCircle className="flex-shrink-0 mt-1" size={20} />
            <div>
              <p className="font-medium">Prefer texting?</p>
              <p>
                Text us anytime at <strong>+1-656-217-7270</strong> for quick assistance!
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Regular version for production
  if (!isVisible) return null

  return (
    <div className="fixed right-0 top-1/3 z-50 transform translate-y-[-50%]">
      <div className="bg-blue-600 text-white p-4 rounded-l-lg shadow-lg max-w-[250px] relative">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-1 right-1 text-white hover:text-blue-100"
          aria-label="Close message"
        >
          <X size={16} />
        </button>
        <div className="flex items-start space-x-2">
          <MessageCircle className="flex-shrink-0 mt-1" size={20} />
          <div>
            <p className="font-medium">Prefer texting?</p>
            <p>
              Text us anytime at <strong>+1-656-217-7270</strong> for quick assistance!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

// Add a default export to support dynamic import
export default TextMessagingBanner
