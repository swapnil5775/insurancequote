import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import Link from "next/link"
import { Phone, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeProvider } from "@/components/theme-provider"
import { InfluencerBanner } from "@/components/influencer-banner"
import { MainNavigation } from "@/components/main-navigation"
import { SiteFooter } from "@/components/site-footer"
import { TextMessagingBannerClient } from "@/components/text-messaging-banner-client"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "GetFLQuote.com - Florida's Digital Insurance Platform",
  description:
    "Your trusted partner in navigating life's unexpected turns. Get quotes for auto, home, life, business, and recreational insurance in Florida.",
  keywords:
    "insurance, Florida insurance, auto insurance, home insurance, life insurance, business insurance, insurance quotes, GetFLQuote",
  openGraph: {
    title: "GetFLQuote.com - Florida's Digital Insurance Platform",
    description:
      "Your trusted partner in navigating life's unexpected turns. Get quotes for auto, home, life, business, and recreational insurance in Florida.",
    url: "https://getflquote.com",
    siteName: "GetFLQuote.com",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GetFLQuote.com - Florida's Digital Insurance Platform",
    description:
      "Your trusted partner in navigating life's unexpected turns. Get quotes for auto, home, life, business, and recreational insurance in Florida.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://getflquote.com",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Script to detect and handle v0 preview environment */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            // Detect if we're in a preview environment
            if (window.location.hostname.includes('v0.dev') || 
                window.location.hostname.includes('localhost') ||
                window.top !== window.self) {
              // Disable service worker registration in preview
              window.navigator.serviceWorker = undefined;
              console.log('Service worker disabled in preview environment');
            }
          `,
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {/* Influencer Banner */}
          <InfluencerBanner />

          {/* Main Header */}
          <header className="border-b">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row items-center justify-between py-4">
                <div className="flex items-center mb-4 md:mb-0">
                  <Link href="/" className="flex items-center">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-2">
                      FL
                    </div>
                    <div>
                      <span className="font-bold text-xl">GetFLQuote.com</span>
                      <div className="text-xs text-gray-600">Florida's Digital Insurance Platform</div>
                    </div>
                  </Link>
                </div>

                <div className="flex items-center space-x-4">
                  <Link
                    href="tel:+16562177270"
                    className="hidden md:flex items-center text-sm text-gray-600 hover:text-blue-500"
                  >
                    <Phone size={16} className="mr-1" />
                    +1-656-217-7270
                  </Link>

                  <Link href="/portal/login">
                    <Button variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-50">
                      Customer Login
                    </Button>
                  </Link>

                  <Link href="/quotes/quick-quote">
                    <Button className="bg-blue-500 hover:bg-blue-600 text-white">Get a Quote</Button>
                  </Link>
                </div>
              </div>
            </div>
          </header>

          {/* Main Navigation */}
          <MainNavigation />

          {/* Texting Preference Banner */}
          <div className="bg-blue-600 text-white py-2 px-4">
            <div className="container mx-auto flex items-center justify-center md:justify-start">
              <MessageCircle size={18} className="mr-2" />
              <span className="font-medium">Prefer texting?</span>
              <span className="ml-2">Text us anytime at +1-656-217-7270 for quick assistance!</span>
            </div>
          </div>

          {/* Fixed Text Messaging Banner (client wrapper) */}
          <TextMessagingBannerClient />

          <main>{children}</main>

          {/* Footer */}
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  )
}
