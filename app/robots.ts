import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://getflquote.com"

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/portal/dashboard/",
          "/portal/logout/",
          "/api/",
          "/admin/",
          "/_next/",
          "/private/",
          "*.json$",
          "/temp/",
          "/cache/",
        ],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/portal/dashboard/", "/portal/logout/", "/api/", "/admin/", "/private/"],
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: ["/portal/dashboard/", "/portal/logout/", "/api/", "/admin/", "/private/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}
