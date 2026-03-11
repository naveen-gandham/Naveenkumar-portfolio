import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Naveen Kumar Gandham | Software Engineer",
  description:
    "Portfolio of Naveen Kumar Gandham. Software Engineer, Full Stack Developer and AI Trainer who trained 3000+ students and worked at Bosch Global Software Technologies.",
  openGraph: {
    title: "Naveen Kumar Gandham Portfolio",
    description:
      "Software Engineer, Full Stack Developer and AI Trainer with industry experience.",
    url: "https://naveenkumar-portfolio-lemon.vercel.app",
    siteName: "Naveen Portfolio",
    images: [
      {
        url: "/passport.jpg",
        width: 1200,
        height: 630,
        alt: "Naveen Kumar Gandham",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}