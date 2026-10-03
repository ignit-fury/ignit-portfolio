import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prem Patel — MERN Stack Developer & Product Builder",
  description:
    "Student turned freelancer building scalable products with React, Node, MongoDB. 12+ projects, 3 production apps. Based in Mumbai.",
  openGraph: {
    title: "Prem Patel — MERN Stack Developer",
    description: "Building scalable products with MERN stack. Based in Mumbai.",
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
    addressLocality: "Mumbai",
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
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
