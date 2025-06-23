import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://getflquote.com"
  const currentDate = new Date()

  return [
    // Main pages - High priority
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/quotes/quick-quote`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 0.95,
    },

    // Insurance quote pages - High priority for conversions
    {
      url: `${baseUrl}/quotes/auto-insurance-quote`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/quotes/home-insurance-quote`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/quotes/life-insurance-quote`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/quotes/business-insurance-quote`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/quotes/recreational-insurance-quote`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },

    // Company and contact pages
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/our-company`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/our-team`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.75,
    },

    // Service and information pages
    {
      url: `${baseUrl}/insurance-carriers`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/payment`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.65,
    },
    {
      url: `${baseUrl}/collaboration`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.6,
    },

    // Customer portal pages
    {
      url: `${baseUrl}/portal/login`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    // Customer service pages
    {
      url: `${baseUrl}/pages/quick-quote`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/pages/proof-of-insurance`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.65,
    },
    {
      url: `${baseUrl}/pages/policy-change`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.65,
    },
    {
      url: `${baseUrl}/pages/update-contact-info`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.6,
    },

    // Legal and compliance pages
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${baseUrl}/accessibility-statement`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ]
}
