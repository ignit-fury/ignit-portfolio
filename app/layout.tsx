import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Prem Patel — MERN Stack Developer & Product Builder",
  description:
    "Student turned freelancer building scalable products with React, Node, MongoDB. 12+ projects, 3 production apps. Based in Gujarat, India.",
  openGraph: {
    title: "Prem Patel — MERN Stack Developer",
    description: "Building scalable products with MERN stack. Based in Gujarat, India.",
    type: "profile",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Prem Patel",
  url: "https://ignitfury.dev",
  jobTitle: "MERN Stack Developer",
  address: {
    "@type": "PostalAddress",
    addressRegion: "Gujarat",
    addressCountry: "IN",
  },
  sameAs: [
    "https://github.com/ignitfury",
    "https://linkedin.com/in/ignitfury",
    "https://twitter.com/ignitfury",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
