import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Smart Farming",
  description: "Smart Farming for Sustainable Bird's Eye Chili Growth",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
