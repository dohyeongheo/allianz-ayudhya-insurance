export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Allianz Ayudhya",
    "alternateName": "Allianz Ayudhya Assurance Public Company Limited",
    "url": "https://www.allianz-ayudhya.co.th",
    "logo": "https://www.allianz-ayudhya.co.th/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+66-2-123-4567",
      "contactType": "customer service",
      "areaServed": "TH",
      "availableLanguage": ["Thai", "English"]
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "TH",
      "addressLocality": "Bangkok",
      "addressRegion": "Bangkok"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Thailand"
    },
    "sameAs": [
      "https://www.facebook.com/allianzayudhya",
      "https://www.linkedin.com/company/allianz-ayudhya"
    ]
  };

  const insuranceProductSchema = {
    "@context": "https://schema.org",
    "@type": "InsuranceProduct",
    "name": "My Health Plus Plus",
    "description": "Allianz Ayudhya ประกันสุขภาพ (건강 보험) - 태국 내 400여 개 협력 병원 네트워크와 글로벌 수준의 의료 보장을 제공하는 건강 보험 상품",
    "brand": {
      "@type": "Brand",
      "name": "Allianz Ayudhya"
    },
    "provider": {
      "@type": "Organization",
      "name": "Allianz Ayudhya",
      "url": "https://www.allianz-ayudhya.co.th"
    },
    "category": "Health Insurance",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "THB",
      "price": "3000",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": "3000",
        "priceCurrency": "THB",
        "unitCode": "MON",
        "valueAddedTaxIncluded": true
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "500000",
      "bestRating": "5",
      "worstRating": "1"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Thailand"
    },
    "termsOfService": "https://www.allianz-ayudhya.co.th/terms"
  };

  const insuranceAgencySchema = {
    "@context": "https://schema.org",
    "@type": "InsuranceAgency",
    "name": "Allianz Ayudhya",
    "url": "https://www.allianz-ayudhya.co.th",
    "telephone": "+66-2-123-4567",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "TH",
      "addressLocality": "Bangkok",
      "addressRegion": "Bangkok"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Thailand"
    },
    "priceRange": "3000-5000 THB"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(insuranceProductSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(insuranceAgencySchema) }}
      />
    </>
  );
}

