import type { Metadata } from "next";
import { WorkClient } from "./WorkClient";

export const metadata: Metadata = {
  title: "Selected Work & Case Studies — UI/UX Projects",
  description:
    "Explore 20+ UI/UX, Web Design, and Mobile Application projects by Akash Dholiya, built using Figma, Design Systems, and frontend architectures.",
  alternates: {
    canonical: "https://akash-dholiya-protfolio.web.app/work",
  },
  openGraph: {
    title: "Selected Work & Case Studies — Akash Dholiya",
    description:
      "Explore 20+ UI/UX, Web Design, and Mobile Application projects by Akash Dholiya, built using Figma, Design Systems, and frontend architectures.",
    url: "https://akash-dholiya-protfolio.web.app/work",
    images: [
      {
        url: "/naturla.png",
        width: 1200,
        height: 630,
        alt: "Akash Dholiya UI/UX Portfolio Work",
      },
    ],
  },
};

export default function WorkPage() {
  return <WorkClient />;
}
