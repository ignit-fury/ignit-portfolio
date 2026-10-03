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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
