export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Akash Dholiya",
    "url": "https://akashdholiya.com", // Replace with your actual domain
    "image": "https://akashdholiya.com/logo.jpg", // Replace with your actual logo URL
    "sameAs": [
      "https://www.linkedin.com/in/akashdholiya", // Add your actual LinkedIn URL
      "https://github.com/akashdholiya", // Add your actual GitHub URL
      "https://twitter.com/akashdholiya" // Add your actual Twitter URL
    ],
    "jobTitle": "UX/UI & Web Designer",
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance"
    },
    "description": "Creative UX/UI & Web Designer based in Surat, India."
  }

  return (
    <section>
      {/* Add JSON-LD to your page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  )
}
