import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EarnCash Parent Panel",
  description: "Live Monitoring Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}
