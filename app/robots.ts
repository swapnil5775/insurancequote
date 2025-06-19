import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/portal/", "/api/", "/admin/", "/_next/", "/private/"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/portal/", "/api/", "/admin/", "/private/"],
      },
    ],
    sitemap: "https://getflquote.com/sitemap.xml",
    host: "https://getflquote.com",
  }
}
