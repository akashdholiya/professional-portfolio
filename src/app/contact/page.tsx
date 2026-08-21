import type { Metadata } from "next";
import { ContactClient } from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact — Let's Work Together",
  description:
    "Get in touch with Akash Dholiya for UI/UX design, web design, design systems, freelance inquiries, and full-time opportunities.",
  alternates: {
    canonical: "https://akash-dholiya-protfolio.web.app/contact",
  },
  openGraph: {
    title: "Contact Akash Dholiya — UI/UX & Web Designer",
    description:
      "Get in touch with Akash Dholiya for UI/UX design, web design, design systems, freelance inquiries, and full-time opportunities.",
    url: "https://akash-dholiya-protfolio.web.app/contact",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Akash Dholiya — UI/UX Designer",
      },
    ],
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
