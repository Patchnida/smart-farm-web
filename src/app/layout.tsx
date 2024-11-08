import type { Metadata } from "next";
import "./globals.css";

import { DateProvider } from "./components/DataContext";
import NavBar from "./components/navbar";

export const metadata: Metadata = {
  title: "Smart Farming",
  description: "Smart Farming for Sustainable Bird's Eye Chili Growth",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DateProvider>
      <html lang="en">
        <body>
          <NavBar />
          {children}
        </body>
      </html>
    </DateProvider>
  );
}
