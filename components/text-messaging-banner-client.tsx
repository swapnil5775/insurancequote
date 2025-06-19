"use client"

import dynamic from "next/dynamic"
import type { ComponentProps } from "react"

// Dynamically import the banner and disable SSR
const TextMessagingBanner = dynamic(() => import("./text-messaging-banner").then((mod) => mod.TextMessagingBanner), {
  ssr: false,
})

/**
 * A thin client-side wrapper so server components can
 * safely render the TextMessagingBanner without SSR.
 */
export function TextMessagingBannerClient(props: ComponentProps<typeof TextMessagingBanner>) {
  return <TextMessagingBanner {...props} />
}
