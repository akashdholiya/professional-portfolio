import type { Metadata } from "next";
import { Syne, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import JsonLd from "@/components/JsonLd";

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
    default: "Akash Dholiya | UI/UX & Web Designer",
    template: "%s | Akash Dholiya",
  },
  description: "Akash Dholiya is a UI/UX & Web Designer from Surat, Gujarat, specializing in Figma, web design, responsive interfaces, design systems and digital experiences.",
  keywords: [
    "Akash Dholiya",
    "Akash Dholiya Portfolio",
    "Akash Dholiya UI UX Designer",
    "UI UX Designer in Surat",
    "Web Designer in Surat",
    "Figma Designer",
    "UI UX Portfolio",
    "Web Designer",
    "Product Designer",
    "UX/UI Designer",
    "Surat",
    "Gujarat",
    "India",
    "Next.js Developer",
    "React Developer",
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
    canonical: "https://akash-dholiya-protfolio.web.app",
  },
  metadataBase: new URL("https://akash-dholiya-protfolio.web.app"),
  manifest: "/manifest.json",
  icons: {
    icon: "/icon.jpg",
    apple: "/apple-icon.jpg",
    shortcut: "/logo.jpg",
  },
  openGraph: {
    title: "Akash Dholiya | UX/UI & Web Designer",
    description: "Portfolio of Akash Dholiya — UI/UX & Web Designer specializing in Figma, web design and digital experiences.",
    url: "https://akash-dholiya-protfolio.web.app",
    siteName: "Akash Dholiya Portfolio",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Akash Dholiya — UI/UX & Web Designer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Akash Dholiya | UX/UI & Web Designer",
    description: "Portfolio of Akash Dholiya — UI/UX & Web Designer.",
    images: ["/logo.jpg"],
    creator: "@akashdholiya",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
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
      <body
        className={`${syne.variable} ${inter.variable} antialiased`}
      >
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
