import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { getSiteUrl, siteConfig } from "./lib/site";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: getSiteUrl(),
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: ["Denis Jamil", "backend developer", "desarrollador backend", "Java", "Spring Boot", "Next.js", "portafolio desarrollador"],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  verification: {
    google: "n9w9OXPt5UzsfLYeR41bgdIPz_A0s6i_3Gd-KusXapQ",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: "/",
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: `${siteConfig.name} | Portafolio`,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: `Portafolio de ${siteConfig.name}` }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
