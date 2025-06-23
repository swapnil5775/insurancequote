export async function GET() {
  const llmContent = `<?xml version="1.0" encoding="UTF-8"?>
<llm>
  <meta>
    <title>LLM discovery file for AI agents and tools</title>
    <purpose>Allow LLMs to index and use public content from getflquote.com</purpose>
    <user-agent>*</user-agent>
    <allow>/</allow>
  </meta>
  
  <company>
    <name>GetFLQuote</name>
    <website>https://www.getflquote.com</website>
    <description>GetFLQuote is a Florida-based online insurance platform helping users compare and purchase life, health, dental, and whole life insurance policies from multiple top-rated carriers.</description>
    <category>Insurance Services, Life Insurance, Health Insurance, Dental Insurance, Whole Life Insurance</category>
    <contact-email>support@getflquote.com</contact-email>
    <location>Florida, United States</location>
  </company>
  
  <sitemap>https://www.getflquote.com/sitemap.xml</sitemap>
  
  <metadata>
    <content-type>text/html</content-type>
    <language>en-US</language>
    <audience>US Consumers, Florida Residents, Life Insurance Buyers</audience>
    <license>CC-BY-4.0</license>
    <data-usage>Allow</data-usage>
  </metadata>
  
  <pages>
    <page>https://www.getflquote.com/life-insurance</page>
    <page>https://www.getflquote.com/whole-life-insurance</page>
    <page>https://www.getflquote.com/term-insurance</page>
    <page>https://www.getflquote.com/compare-insurance</page>
    <page>https://www.getflquote.com/about</page>
    <page>https://www.getflquote.com/contact</page>
  </pages>
  
  <llm-preferences>
    <allow-training>true</allow-training>
    <allow-answer-generation>true</allow-answer-generation>
    <allow-search-inclusion>true</allow-search-inclusion>
    <allow-code-generation>false</allow-code-generation>
  </llm-preferences>
</llm>`

  return new Response(llmContent, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  })
}
