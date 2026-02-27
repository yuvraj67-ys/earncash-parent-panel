import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EarnCash Parent Panel",
  description: "View screenshots from kid's device",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">{children}</body>
    </html>
  );
}
