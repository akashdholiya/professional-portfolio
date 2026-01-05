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
    default: "Akash Dholiya | UX/UI & Web Designer",
    template: "%s | Akash Dholiya",
  },
  description: "Portfolio of Akash Dholiya, a creative UX/UI & Web Designer based in Surat, India. Specializing in creating stunning digital experiences.",
  keywords: [
    "Akash Dholiya",
    "Akash Dholiya Portfolio",
    "UX/UI Designer",
    "Web Designer",
    "Frontend Developer",
    "Surat",
    "Gujarat",
    "India",
    "Next.js Developer",
    "React Developer",
  ],
  authors: [{ name: "Akash Dholiya" }],
  creator: "Akash Dholiya",
  metadataBase: new URL("https://akashdholiya.com"), // Change this to your actual domain
  manifest: "/manifest.json",
  icons: {
    icon: "/icon.jpg",
    apple: "/apple-icon.jpg",
    shortcut: "/logo.jpg",
  },
  openGraph: {
    title: "Akash Dholiya | UX/UI & Web Designer",
    description: "Portfolio of Akash Dholiya, combining creativity with technical expertise to build responsive and engaging web applications.",
    url: "https://akashdholiya.com",
    siteName: "Akash Dholiya Portfolio",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Akash Dholiya Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akash Dholiya | UX/UI & Web Designer",
    description: "Creative UX/UI & Web Designer based in Surat, India.",
    images: ["/logo.jpg"],
    creator: "@akashdholiya",
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
