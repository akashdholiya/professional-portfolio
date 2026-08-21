import type { Metadata } from "next";
import { AboutClient } from "./AboutClient";

export const metadata: Metadata = {
  title: "About — UI/UX & Web Designer",
  description:
    "Learn more about Akash Dholiya, a UI/UX Designer and Web Designer with over 3.5 years of experience crafting intuitive digital experiences, design systems, and responsive interfaces.",
  alternates: {
    canonical: "https://akash-dholiya-protfolio.web.app/about",
  },
  openGraph: {
    title: "About Akash Dholiya — UI/UX & Web Designer",
    description:
      "Learn more about Akash Dholiya, a UI/UX Designer and Web Designer with over 3.5 years of experience crafting intuitive digital experiences, design systems, and responsive interfaces.",
    url: "https://akash-dholiya-protfolio.web.app/about",
    images: [
      {
        url: "/Akash.jpg",
        width: 800,
        height: 800,
        alt: "Akash Dholiya — UI/UX Designer",
      },
    ],
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
