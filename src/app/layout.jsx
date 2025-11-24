import { Geist, Geist_Mono } from "next/font/google";
import Navbar  from "../components/Navbar"
import Footer from "@/components/Footer";
import "./globals.css";
import AOSWrapper from "@/components/ui/AosWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Warburtons AI Solutions",
  description: "AI-driven websites and solutions to grow your business.",
  keywords: [
    "AI websites",
    "business automation",
    "website design UK",
    "website design Wrexham",
    "web development UK", 
    "Google Business profile setup",
    "Warburtons AI Solutions",
    "AI web development",
    "small business websites",
    "AI marketing tools",
  ],
  authors: [{ name: "Cameron Warburton" }],
  creator: "Warburtons AI Solutions",
  publisher: "Warburtons AI Solutions",


  openGraph: {
    title: "Warburtons AI Solutions | AI, Websites & Business Automation",
    description:
      "We build AI-driven websites and automation tools that help UK businesses grow online. Get noticed, get automated, get ahead.",
    url: "https://www.warburtonsaisolutions.co.uk",
    siteName: "Warburtons AI Solutions",
    images: [
      {
        url: "https://www.warburtonsaisolutions.co.uk/og-image.png",
        width: 1200,
        height: 630,
        alt: "Warburtons AI Solutions banner",
      },
    ],
    locale: "en_GB",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Warburtons AI Solutions | AI Websites & Automation",
    description:
      "Boost your business with websites and automation tools from Warburtons AI Solutions.",
    images: ["https://www.warburtonsaisolutions.co.uk/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://www.warburtonsaisolutions.co.uk",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <AOSWrapper>{children}</AOSWrapper>
        <Footer />
      </body>
    </html>
  );
}