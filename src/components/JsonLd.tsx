export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://akash-dholiya-protfolio.web.app/#person",
        "name": "Akash Dholiya",
        "alternateName": "Akash",
        "url": "https://akash-dholiya-protfolio.web.app",
        "image": "https://akash-dholiya-protfolio.web.app/Akash.jpg",
        "jobTitle": "UI/UX Designer & Web Designer",
        "worksFor": {
          "@type": "Organization",
          "name": "Freelance"
        },
        "description": "Akash Dholiya is a UI/UX and Web Designer specializing in modern digital experiences, responsive web design, Figma, design systems, and user-focused interfaces.",
        "email": "mailto:akashdholiya5570@gmail.com",
        "telephone": "+918866111829",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Surat",
          "addressRegion": "Gujarat",
          "addressCountry": "India"
        },
        "sameAs": [
          "https://www.figma.com/@akashdholiya"
        ],
        "knowsAbout": [
          "UI/UX Design",
          "Figma",
          "Web Design",
          "Product Design",
          "Design Systems",
          "Responsive Web Design",
          "Wireframing",
          "Prototyping",
          "Frontend Architecture",
          "React.js",
          "Next.js"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://akash-dholiya-protfolio.web.app/#website",
        "url": "https://akash-dholiya-protfolio.web.app/",
        "name": "Akash Dholiya — UI/UX Designer & Web Designer",
        "description": "Akash Dholiya is a UI/UX and Web Designer specializing in modern digital experiences, responsive web design, Figma, design systems, and user-focused interfaces.",
        "publisher": {
          "@id": "https://akash-dholiya-protfolio.web.app/#person"
        },
        "inLanguage": "en-US"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
