import Link from "next/link"

export function InfluencerBanner() {
  return (
    <div className="bg-blue-500 text-white py-2 px-4">
      <div className="container mx-auto text-center">
        <p className="text-sm md:text-base">
          Become an influencer partner and earn commissions!{" "}
          <Link href="/collaboration" className="font-bold underline hover:text-blue-100">
            Join our Influencer Program
          </Link>
        </p>
      </div>
    </div>
  )
}
