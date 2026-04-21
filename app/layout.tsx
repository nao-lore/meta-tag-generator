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
  verification: {
    google: "uRTAz7j8N8jDW5BzJaGn-wzrFY5C7KNStVLMKlGzo_4",
  },
  title: "Meta Tag Generator - Generate HTML Meta Tags | meta-tag-generator",
  description:
    "Free online meta tag generator. Create HTML meta tags, Open Graph tags, and Twitter Card tags for better SEO. Live preview of Google, Facebook, and Twitter snippets.",
  keywords: [
    "meta tag generator",
    "html meta tags",
    "seo meta tags",
    "og tags generator",
    "twitter card generator",
    "meta description generator",
  ],
  authors: [{ name: "meta-tag-generator" }],
  openGraph: {
    title: "Meta Tag Generator - Generate HTML Meta Tags",
    description:
      "Free online tool to generate HTML meta tags, Open Graph tags, and Twitter Card tags with live preview.",
    url: "https://meta-tag-generator.vercel.app",
    siteName: "meta-tag-generator",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Meta Tag Generator - Generate HTML Meta Tags",
    description:
      "Free online tool to generate HTML meta tags, Open Graph tags, and Twitter Card tags with live preview.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://meta-tag-generator.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "Meta Tag Generator",
              description:
                "Free online meta tag generator. Create HTML meta tags, Open Graph tags, and Twitter Card tags for better SEO.",
              url: "https://meta-tag-generator.vercel.app",
              applicationCategory: "DeveloperApplication",
              operatingSystem: "Any",
              browserRequirements: "Requires JavaScript",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              featureList: [
                "HTML meta tag generation",
                "Open Graph tag generation",
                "Twitter Card tag generation",
                "Google search snippet preview",
                "Facebook share preview",
                "Twitter card preview",
                "One-click copy to clipboard",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
