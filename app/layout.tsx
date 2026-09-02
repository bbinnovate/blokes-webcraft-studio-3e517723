import type { Metadata } from "next";
import "../src/styles.css";

const title = "Web Development Agency in Mumbai | Bombay Blokes";

const description =
  "Bombay Blokes is a web design and development agency in Mumbai building fast, conversion-focused websites and Shopify stores. Get a free website audit.";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      name: "Bombay Blokes",
      description,
      areaServed: "India",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Mumbai",
        addressRegion: "Maharashtra",
        addressCountry: "IN",
      },
      makesOffer: [
        "Website design and development",
        "Shopify ecommerce development",
        "Custom web development",
        "Website redesign",
      ],
    },
  ],
};

export const metadata: Metadata = {
  title,
  description,
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title,
    description,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </head>

      <body>{children}</body>
    </html>
  );
}