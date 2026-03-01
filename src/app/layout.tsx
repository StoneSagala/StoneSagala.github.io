import type { Metadata } from "next";
import { spaceGrotesk, jetbrainsMono } from "@/lib/fonts";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SkipLink from "@/components/layout/SkipLink";
import Providers from "@/components/layout/Providers";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Stone Sagala — Product & UX Designer",
    template: "%s | Stone Sagala",
  },
  description:
    "Product & UX Designer specializing in design systems, enterprise SaaS, and user-centered design. Currently at PDQ.",
  metadataBase: new URL("https://stonesagala.com"),
  openGraph: {
    title: "Stone Sagala — Product & UX Designer",
    description:
      "Product & UX Designer specializing in design systems, enterprise SaaS, and user-centered design.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Stone Sagala — Product & UX Designer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.jpg"],
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Stone Sagala",
  jobTitle: "Product Designer",
  description:
    "Product & UX Designer specializing in design systems, enterprise SaaS, and user-centered design.",
  url: "https://stonesagala.com",
  sameAs: [
    "https://linkedin.com/in/stonesagala",
    "https://github.com/StoneSagala",
  ],
  worksFor: {
    "@type": "Organization",
    name: "PDQ",
    url: "https://www.pdq.com",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Salt Lake City",
    addressRegion: "UT",
    addressCountry: "US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased`}>
        <SkipLink />
        <Providers>
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
