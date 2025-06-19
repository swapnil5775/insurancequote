"use client"

import dynamic from "next/dynamic"
import type { ComponentProps } from "react"

/**
 * Client-side wrapper around the real `LoginForm`.
 * This is the only place we use `dynamic()` with `ssr: false`,
 * satisfying the Next.js restriction that such calls must not
 * appear directly inside Server Components.
 */
const LoginForm = dynamic(() => import("../components/login-form").then((mod) => mod.LoginForm), {
  ssr: false,
  loading: () => <div className="p-4 text-center">Loading login form...</div>,
})

export default function LoginFormClient(props: ComponentProps<typeof LoginForm>) {
  return <LoginForm {...props} />
}
