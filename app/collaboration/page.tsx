import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { DollarSign, Shield, Lightbulb } from "lucide-react"

export default function CollaborationPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="bg-blue-500 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-white mb-6">GetFLQuote Influencer Collaboration Program</h1>
            <p className="text-xl text-white mb-8">
              Join our network of influencers and partners to help your audience find the best insurance coverage in
              Florida while earning competitive commissions.
            </p>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Program Benefits</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white mx-auto mb-6">
                <DollarSign size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4">Competitive Commissions</h3>
              <p className="text-gray-600">
                Earn industry-leading commissions on every successful referral that converts to a policy.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white mx-auto mb-6">
                <Shield size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4">Trusted Partnership</h3>
              <p className="text-gray-600">
                Partner with GetFLQuote, a reputable insurance agency that provides quality service to your audience in
                Florida.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white mx-auto mb-6">
                <Lightbulb size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4">Marketing Support</h3>
              <p className="text-gray-600">
                Access custom tracking links, promotional materials, and dedicated support for your campaigns.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">How It Works</h2>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  1
                </div>
                <h4 className="text-lg font-bold mb-2">Apply</h4>
                <p className="text-gray-600">Fill out our partner application form below.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  2
                </div>
                <h4 className="text-lg font-bold mb-2">Approval</h4>
                <p className="text-gray-600">
                  Our team will review your application and reach out to discuss next steps.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  3
                </div>
                <h4 className="text-lg font-bold mb-2">Promote</h4>
                <p className="text-gray-600">
                  Share your custom links with your audience through your preferred channels.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  4
                </div>
                <h4 className="text-lg font-bold mb-2">Earn</h4>
                <p className="text-gray-600">Receive commissions for every successful conversion.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Application Form Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Partner Application</h2>

            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <Input id="first-name" type="text" className="border-gray-300" required />
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <Input id="last-name" type="text" className="border-gray-300" required />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <Input id="email" type="email" className="border-gray-300" required />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <Input id="phone" type="tel" className="border-gray-300" required />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    Company/Brand Name
                  </label>
                  <Input id="company" type="text" className="border-gray-300" />
                </div>

                <div>
                  <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">
                    Website/Social Media URL
                  </label>
                  <Input id="website" type="url" className="border-gray-300" required />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Primary Platform(s)</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="website-platform"
                        className="h-4 w-4 text-blue-500 border-gray-300 rounded"
                      />
                      <label htmlFor="website-platform" className="ml-2 text-sm text-gray-700">
                        Website/Blog
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="instagram" className="h-4 w-4 text-blue-500 border-gray-300 rounded" />
                      <label htmlFor="instagram" className="ml-2 text-sm text-gray-700">
                        Instagram
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="youtube" className="h-4 w-4 text-blue-500 border-gray-300 rounded" />
                      <label htmlFor="youtube" className="ml-2 text-sm text-gray-700">
                        YouTube
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="tiktok" className="h-4 w-4 text-blue-500 border-gray-300 rounded" />
                      <label htmlFor="tiktok" className="ml-2 text-sm text-gray-700">
                        TikTok
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="facebook" className="h-4 w-4 text-blue-500 border-gray-300 rounded" />
                      <label htmlFor="facebook" className="ml-2 text-sm text-gray-700">
                        Facebook
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="other-platform"
                        className="h-4 w-4 text-blue-500 border-gray-300 rounded"
                      />
                      <label htmlFor="other-platform" className="ml-2 text-sm text-gray-700">
                        Other
                      </label>
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="audience-size" className="block text-sm font-medium text-gray-700 mb-1">
                    Audience Size
                  </label>
                  <select
                    id="audience-size"
                    className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option value="">Select Audience Size</option>
                    <option value="1k-10k">1,000 - 10,000</option>
                    <option value="10k-50k">10,000 - 50,000</option>
                    <option value="50k-100k">50,000 - 100,000</option>
                    <option value="100k-500k">100,000 - 500,000</option>
                    <option value="500k+">500,000+</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Tell us about your audience and why you'd like to partner with GetFLQuote
                  </label>
                  <Textarea id="message" className="border-gray-300 min-h-[120px]" required />
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="terms"
                    className="h-4 w-4 text-blue-500 border-gray-300 rounded"
                    required
                  />
                  <label htmlFor="terms" className="ml-2 text-sm text-gray-700">
                    I agree to the terms and conditions of the GetFLQuote partnership program.
                  </label>
                </div>

                <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                  SUBMIT APPLICATION
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Frequently Asked Questions</h2>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  How much can I earn as an influencer partner with GetFLQuote?
                </h3>
                <p className="text-gray-600">
                  Commission rates vary based on the insurance products your audience purchases, but our partners
                  typically earn between $50-$200 per converted policy. High-volume partners may qualify for enhanced
                  commission rates.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  How do I track my referrals and commissions with GetFLQuote?
                </h3>
                <p className="text-gray-600">
                  You'll receive access to a dedicated partner dashboard where you can track clicks, conversions, and
                  commissions in real-time. We provide transparent reporting and monthly commission payments.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  What marketing materials does GetFLQuote provide?
                </h3>
                <p className="text-gray-600">
                  We provide custom tracking links, banner ads, social media graphics, email templates, and promotional
                  content tailored to your audience. Our marketing team can also work with you to create custom
                  campaigns.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  How long does the application process take with GetFLQuote?
                </h3>
                <p className="text-gray-600">
                  We typically review applications within 3-5 business days. If approved, you'll receive an email with
                  next steps to set up your partner account and access your marketing materials.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
