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
        "jobTitle": "UI/UX & Web Designer",
        "worksFor": {
          "@type": "Organization",
          "name": "Freelance"
        },
        "description": "Portfolio of Akash Dholiya — UI/UX & Web Designer specializing in Figma, web design and digital experiences.",
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
          "Frontend Development",
          "React.js",
          "Next.js",
          "Angular",
          "Design Systems",
          "Responsive Web Design"
        ]
      },
      {
        "@type": "ProfilePage",
        "@id": "https://akash-dholiya-protfolio.web.app/#profilepage",
        "url": "https://akash-dholiya-protfolio.web.app",
        "name": "Akash Dholiya | UI/UX & Web Designer",
        "mainEntity": {
          "@id": "https://akash-dholiya-protfolio.web.app/#person"
        },
        "sameAs": [
          "https://www.figma.com/@akashdholiya"
        ]
      }
    ]
  }

  return (
    <section>
      {/* JSON-LD Schema for Google Search Engine */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  )
}
