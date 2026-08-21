import type { Metadata } from "next";
import { Syne, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import JsonLd from "@/components/JsonLd";
import { CustomCursor } from "@/components/ui/CustomCursor";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Akash Dholiya — UI/UX Designer & Web Designer",
    template: "%s | Akash Dholiya",
  },
  description:
    "Akash Dholiya is a UI/UX and Web Designer specializing in modern digital experiences, responsive web design, Figma, design systems, and user-focused interfaces.",
  keywords: [
    "Akash Dholiya",
    "Akash Dholiya UI UX Designer",
    "Akash Dholiya Web Designer",
    "UI UX Designer Surat",
    "Web Designer Surat",
    "Figma Designer Surat",
    "Product Designer",
    "UI/UX Portfolio",
    "Design Systems",
    "Responsive Web Design",
    "Prototyping",
    "Frontend Collaboration",
  ],
  authors: [
    {
      name: "Akash Dholiya",
      url: "https://akash-dholiya-protfolio.web.app",
    },
  ],
  creator: "Akash Dholiya",
  publisher: "Akash Dholiya",
  alternates: {
    canonical: "https://akash-dholiya-protfolio.web.app/",
  },
  metadataBase: new URL("https://akash-dholiya-protfolio.web.app"),
  manifest: "/manifest.json",
  icons: {
    icon: "/icon.jpg",
    apple: "/apple-icon.jpg",
    shortcut: "/logo.jpg",
  },
  openGraph: {
    title: "Akash Dholiya — UI/UX Designer & Web Designer",
    description:
      "Akash Dholiya is a UI/UX and Web Designer specializing in modern digital experiences, responsive web design, Figma, design systems, and user-focused interfaces.",
    url: "https://akash-dholiya-protfolio.web.app/",
    siteName: "Akash Dholiya Portfolio",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Akash Dholiya — UI/UX & Web Designer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Akash Dholiya — UI/UX Designer & Web Designer",
    description:
      "Akash Dholiya is a UI/UX and Web Designer specializing in modern digital experiences, responsive web design, Figma, design systems, and user-focused interfaces.",
    images: ["/logo.jpg"],
    creator: "@akashdholiya",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${syne.variable} ${inter.variable} antialiased`}>
        <CustomCursor />
        <JsonLd />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
