import Image from "next/image"
import Link from "next/link"

export default function TermsOfServicePage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative w-full h-[300px]">
        <Image
          src="/placeholder.svg?height=300&width=1200"
          alt="Legal document with pen"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-blue-600/70 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">TERMS OF SERVICE</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="mb-8 text-lg">Last Updated: April 7, 2025</p>

            <h2 className="text-2xl font-bold text-blue-800 mb-4">1. ACCEPTANCE OF TERMS</h2>

            <p className="mb-8">
              Welcome to GetFLQuote. These Terms of Service ("Terms") govern your access to and use of the GetFLQuote
              website, services, and applications (collectively, the "Services"). By accessing or using our Services,
              you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our Services.
            </p>

            <h2 className="text-2xl font-bold text-blue-800 mb-4">2. CHANGES TO TERMS</h2>

            <p className="mb-8">
              We may modify these Terms at any time. We will provide notice of any material changes by posting the
              updated Terms on our website or through other communications. Your continued use of the Services after
              such changes constitutes your acceptance of the new Terms.
            </p>

            <h2 className="text-2xl font-bold text-blue-800 mb-4">3. PRIVACY POLICY</h2>

            <p className="mb-8">
              Your privacy is important to us. Our{" "}
              <Link href="/privacy-policy" className="text-blue-600 hover:underline">
                Privacy Policy
              </Link>{" "}
              explains how we collect, use, and protect your personal information. By using our Services, you consent to
              the data practices described in our Privacy Policy.
            </p>

            <h2 className="text-2xl font-bold text-blue-800 mb-4">4. USE OF SERVICES</h2>

            <p className="mb-4">
              You agree to use our Services only for lawful purposes and in accordance with these Terms. You agree not
              to:
            </p>

            <ul className="list-disc pl-8 mb-8 space-y-2">
              <li>Use the Services in any way that violates applicable laws or regulations</li>
              <li>Attempt to interfere with or disrupt the Services or servers connected to the Services</li>
              <li>Attempt to gain unauthorized access to any part of the Services</li>
              <li>Use the Services to transmit any viruses, malware, or other harmful code</li>
              <li>Impersonate or misrepresent your affiliation with any person or entity</li>
              <li>Collect or store personal data about other users without their consent</li>
            </ul>

            <h2 className="text-2xl font-bold text-blue-800 mb-4">5. ACCOUNT INFORMATION</h2>

            <p className="mb-8">
              When you create an account with us, you must provide accurate, complete, and current information. You are
              responsible for safeguarding your account credentials and for all activities that occur under your
              account. You agree to notify us immediately of any unauthorized use of your account.
            </p>

            <h2 className="text-2xl font-bold text-blue-800 mb-4">6. INTELLECTUAL PROPERTY</h2>

            <p className="mb-8">
              All content, features, and functionality of our Services, including but not limited to text, graphics,
              logos, icons, images, audio clips, and software, are owned by GetFLQuote, its licensors, or other
              providers and are protected by United States and international copyright, trademark, patent, and other
              intellectual property laws.
            </p>

            <h2 className="text-2xl font-bold text-blue-800 mb-4">7. DISCLAIMER OF WARRANTIES</h2>

            <p className="mb-8">
              THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR
              IMPLIED. TO THE FULLEST EXTENT PERMITTED BY LAW, GETFLQUOTE DISCLAIMS ALL WARRANTIES, INCLUDING IMPLIED
              WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            </p>

            <h2 className="text-2xl font-bold text-blue-800 mb-4">8. LIMITATION OF LIABILITY</h2>

            <p className="mb-8">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, GETFLQUOTE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
              SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY
              OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.
            </p>

            <h2 className="text-2xl font-bold text-blue-800 mb-4">9. GOVERNING LAW</h2>

            <p className="mb-8">
              These Terms shall be governed by and construed in accordance with the laws of the State of Florida,
              without regard to its conflict of law provisions. Any legal action or proceeding arising out of or
              relating to these Terms shall be brought exclusively in the federal or state courts located in
              Hillsborough County, Florida.
            </p>

            <h2 className="text-2xl font-bold text-blue-800 mb-4">10. CONTACT INFORMATION</h2>

            <p className="mb-8">
              If you have any questions about these Terms, please contact us at:
              <br />
              <br />
              GetFLQuote
              <br />
              1000 N Ashley Drive, Tampa, FL 33602
              <br />
              Phone: 813-555-7890
              <br />
              Email: legal@getflquote.com
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
