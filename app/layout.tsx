import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RICO – Packaging & Trading Solutions in Saudi Arabia",
  description:
    "Reliable International Company based in Dammam, Saudi Arabia, provides high-quality metal and plastic packaging materials and general trading services.",
  keywords: [
    "RICO",
    "Reliable International Company",
    "Packaging materials Saudi Arabia",
    "Metal packaging Dammam",
    "Plastic packaging Dammam",
    "Packaging supplier Saudi Arabia",
    "Industrial packaging solutions",
    "Custom packaging manufacturer Saudi Arabia",
    "General trading company Dammam",
    "HDPE PET PP bottles Saudi Arabia",
    "Tin cans and drums supplier",
    "Packaging export and import Saudi Arabia",
    "Procurement and supply chain solutions",
  ],
  authors: [{ name: "Reliable International Company" }],
  creator: "Reliable International Company",
  publisher: "Reliable International Company",
  openGraph: {
    title:
      "RICO – Reliable International Company | Packaging & Trading Solutions in Saudi Arabia",
    description:
      "Your trusted partner in metal and plastic packaging solutions. Based in Dammam, Saudi Arabia, RICO delivers high-quality and innovative packaging materials across multiple industries.",
    url: "https://www.rico-intl.com",
    siteName: "RICO – Reliable International Company",
    locale: "en_SA",
    type: "website",
  },
  alternates: {
    canonical: "https://www.rico-intl.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
