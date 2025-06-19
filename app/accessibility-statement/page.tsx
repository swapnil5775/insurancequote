import Image from "next/image"

export default function AccessibilityStatementPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative w-full h-[300px]">
        <Image
          src="/placeholder.svg?height=300&width=1200"
          alt="Office environment with computer screens"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-blue-600/70 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white text-center">
            WEBSITE ACCESSIBILITY
            <br />
            STATEMENT
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="mb-8 text-lg">
              At GetFLQuote, inclusive diversity is one of our core values. We believe in making our website easy to use
              for all people, including those with disabilities.
            </p>

            <h2 className="text-2xl font-bold text-blue-800 mb-4">ONLINE ACCESSIBILITY</h2>

            <p className="mb-4">
              In order to provide excellent service to all of our customers, including those with disabilities, the
              GetFLQuote website strives to provide an accessible experience for users of all abilities. GetFLQuote has
              developed our website with accessibility in mind. Our improvements are guided by relevant portions of the
              Web Content Accessibility Guidelines 2.0, Level AA and other recommendations.
            </p>

            <p className="mb-8">
              We have included accessibility features such as: navigability without use of a keyboard, text alternatives
              for non-text content, and assigned language for web pages. We are always working to improve our website
              and test our website periodically using automated tools and assistive technology.
            </p>

            <p className="mb-8">
              If you have questions or concerns about the accessibility of our website, please contact us by sending an
              email to info@getflquote.com or calling us at 813-555-7890. Please provide specific details about the
              accessibility issue, including the web address that may have caused challenges.
            </p>

            <h2 className="text-2xl font-bold text-blue-800 mb-4">REASONABLE ACCOMMODATIONS</h2>

            <p className="mb-4">
              Individuals who need a reasonable accommodation to access GetFLQuote's products and services can make a
              request via email to info@getflquote.com or by calling 813-555-7890. Be sure to include contact
              information such as an email address or telephone number where you can be reached.
            </p>

            <p className="mb-8">
              Depending on the request, GetFLQuote may need sufficient notice to provide a reasonable accommodation.
            </p>

            <h2 className="text-2xl font-bold text-blue-800 mb-4">THIRD-PARTY WEBSITES</h2>

            <p className="mb-4">
              GetFLQuote's website contains links to websites owned and operated by third parties. We cannot control or
              be responsible for the accessibility of these third-party sites. If you encounter accessibility issues on
              a third-party website, please contact that website's administrator directly.
            </p>

            <h2 className="text-2xl font-bold text-blue-800 mb-4 mt-8">CONTINUOUS IMPROVEMENT</h2>

            <p className="mb-4">
              GetFLQuote is committed to continuous improvement of our website's accessibility. We regularly review our
              site and practices to ensure we are providing the best possible experience for all users throughout
              Florida.
            </p>

            <p className="mb-4">This statement was last updated on April 7, 2025.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
