import Script from 'next/script'

export const OrganizationSchema: React.FC = () => {
  return (
    <Script
      id="website-schema"
      dangerouslySetInnerHTML={{
      __html: `
      {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://autocraticdespair.com/",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "http://example.com/search?&q={query}",
      "query": "required"
    }
}

      `
    }}
    type="application/ld+json"
    />

  )
}
