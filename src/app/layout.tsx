import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.vahanxpert.in"),
  title: {
    default: "VahanXpert | Best Car Repair & Cashless Insurance Claims in Nohar, Rajasthan",
    template: "%s | VahanXpert Nohar",
  },
  description:
    "Looking for the best car repair in Nohar? VahanXpert is Nohar's #1 certified multi-brand car service workshop & cashless insurance claim center near Shubham Hospital, Sahwa Bypass. Periodic maintenance, accidental repair, car AC, denting-painting & genuine parts.",
  keywords: [
    "car repair in nohar",
    "nohar best car service",
    "best car service in nohar",
    "best insurance claim in nohar",
    "car service near me",
    "car repair near me",
    "car mechanic in nohar",
    "cashless insurance claim nohar",
    "car garage in nohar rajasthan",
    "auto repair shop nohar",
    "multi brand car workshop nohar",
    "car accidental repair nohar",
    "car denting painting nohar",
    "car ac repair nohar",
    "vahanxpert nohar",
    "wheel alignment in nohar",
    "mytvs partner workshop nohar",
  ],
  authors: [{ name: "VahanXpert Services", url: "https://www.vahanxpert.in" }],
  creator: "VahanXpert",
  publisher: "VahanXpert Services",
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "VahanXpert | Best Car Repair & Cashless Insurance Claims in Nohar",
    description:
      "Nohar's #1 Multi-Brand Car Service Workshop & Certified Cashless Insurance Claim Center. 50+ IRDAI insurance tie-ups, genuine parts warranty, doorstep pickup in Nohar.",
    url: "https://www.vahanxpert.in",
    siteName: "VahanXpert",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/mechanic-vw.png",
        width: 1200,
        height: 630,
        alt: "VahanXpert - Best Car Repair & Insurance Claim Workshop in Nohar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VahanXpert | Best Car Repair & Insurance Claims in Nohar",
    description:
      "Top-rated multi-brand car service, accidental repairs & cashless insurance claims in Nohar, Rajasthan.",
    images: ["/mechanic-vw.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
    ],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  other: {
    "geo.region": "IN-RJ",
    "geo.placename": "Nohar",
    "geo.position": "29.18732;74.7585193",
    ICBM: "29.18732, 74.7585193",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <JsonLd />
      </head>
      <body>{children}</body>
    </html>
  );
}
