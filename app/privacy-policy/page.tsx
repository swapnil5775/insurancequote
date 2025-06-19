import Image from "next/image"

export default function PrivacyPolicyPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative w-full h-[300px]">
        <Image
          src="/placeholder.svg?height=300&width=1200"
          alt="Privacy and security concept"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-blue-600/70 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">PRIVACY POLICY</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="mb-8 text-lg">Last Updated: April 7, 2025</p>

            <p className="mb-8">
              At GetFLQuote, we respect your privacy and are committed to protecting your personal information. This
              Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our
              website or use our services throughout Florida.
            </p>

            <h2 className="text-2xl font-bold text-blue-800 mb-4">INFORMATION WE COLLECT</h2>

            <p className="mb-4">
              We may collect personal information that you provide directly to us, including but not limited to:
            </p>

            <ul className="list-disc pl-8 mb-8 space-y-2">
              <li>Contact information (name, email address, mailing address, phone number)</li>
              <li>Date of birth and demographic information</li>
              <li>Insurance policy information</li>
              <li>Financial information for payment processing</li>
              <li>Information about your property, vehicles, or other insurable assets</li>
              <li>Information you provide when filing a claim</li>
            </ul>

            <p className="mb-4">
              We may also automatically collect certain information when you visit our website, including:
            </p>

            <ul className="list-disc pl-8 mb-8 space-y-2">
              <li>IP address and browser type</li>
              <li>Pages you view and links you click</li>
              <li>Time spent on our website</li>
              <li>Device information</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>

            <h2 className="text-2xl font-bold text-blue-800 mb-4">HOW WE USE YOUR INFORMATION</h2>

            <p className="mb-4">We may use the information we collect for various purposes, including to:</p>

            <ul className="list-disc pl-8 mb-8 space-y-2">
              <li>Provide, maintain, and improve our services</li>
              <li>Process insurance applications, quotes, and claims</li>
              <li>Communicate with you about your policy, account, or customer service needs</li>
              <li>Send you marketing communications about products and services</li>
              <li>Comply with legal obligations and industry regulations</li>
              <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
              <li>Analyze usage patterns and improve our website and services</li>
            </ul>

            <h2 className="text-2xl font-bold text-blue-800 mb-4">SHARING YOUR INFORMATION</h2>

            <p className="mb-4">We may share your personal information with:</p>

            <ul className="list-disc pl-8 mb-8 space-y-2">
              <li>Insurance carriers and underwriters to provide you with coverage</li>
              <li>Service providers who perform services on our behalf</li>
              <li>Professional advisors, such as lawyers, auditors, and insurers</li>
              <li>Regulatory authorities, law enforcement, and other government agencies when required by law</li>
              <li>Business partners for marketing purposes (with your consent)</li>
            </ul>

            <h2 className="text-2xl font-bold text-blue-800 mb-4">YOUR CHOICES</h2>

            <p className="mb-8">You have certain rights regarding your personal information. You may:</p>

            <ul className="list-disc pl-8 mb-8 space-y-2">
              <li>Access, update, or correct your personal information</li>
              <li>Opt-out of marketing communications</li>
              <li>Request deletion of your personal information (subject to legal requirements)</li>
              <li>Set browser cookies preferences</li>
            </ul>

            <h2 className="text-2xl font-bold text-blue-800 mb-4">DATA SECURITY</h2>

            <p className="mb-8">
              We implement appropriate technical and organizational measures to protect your personal information from
              unauthorized access, disclosure, alteration, and destruction. However, no method of transmission over the
              Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="text-2xl font-bold text-blue-800 mb-4">CHILDREN'S PRIVACY</h2>

            <p className="mb-8">
              Our services are not directed to children under the age of 13. We do not knowingly collect personal
              information from children under 13. If you believe we have collected information from a child under 13,
              please contact us immediately.
            </p>

            <h2 className="text-2xl font-bold text-blue-800 mb-4">CHANGES TO THIS PRIVACY POLICY</h2>

            <p className="mb-8">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new
              Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy
              Policy periodically for any changes.
            </p>

            <h2 className="text-2xl font-bold text-blue-800 mb-4">CONTACT US</h2>

            <p className="mb-8">
              If you have any questions about this Privacy Policy, please contact us at:
              <br />
              <br />
              GetFLQuote
              <br />
              1000 N Ashley Drive, Tampa, FL 33602
              <br />
              Phone: 656-217-7270
              <br />
              Email: info@getflquote.com
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
