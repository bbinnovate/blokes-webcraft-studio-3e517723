import type { Metadata } from "next";
import "../src/styles.css";
import Script from "next/script";
import SmoothScroll from "@/components/web/SmoothScroll";

const title = "Bombay Blokes | Digital Marketing & Web Development Agency";

const description =
  "Bombay Blokes is a digital agency helping businesses grow through web development, website design, social media marketing, digital marketing, ecommerce and performance marketing.";

const jsonLd = {
  "@context": "https://schema.org",
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
  serviceType: [
    "Web Development",
    "Website Design",
    "Website Development",
    "Shopify Development",
    "Ecommerce Development",
    "Social Media Marketing",
    "Digital Marketing",
    "Performance Marketing",
    "Content Marketing",
    "Website Redesign",
  ],
};

export const metadata: Metadata = {
  title,
  description,

  keywords: [
    "digital marketing agency",
    "web development agency",
    "social media marketing agency",
    "website development company",
    "digital marketing agency Mumbai",
    "web development agency Mumbai",
    "social media marketing agency Mumbai",
    "website design agency Mumbai",
    "Shopify development agency",
    "performance marketing agency",
  ],

  icons: {
    icon: "/favicon.png",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title,
    description,
    type: "website",
    siteName: "Bombay Blokes",
  },

  twitter: {
    card: "summary_large_image",
    title,
    description,
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

        <Script
  id="google-tag-manager"
  strategy="afterInteractive"
>
  {`
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-KXDJ77M');
  `}
</Script>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </head>

      <body> <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KXDJ77M"
            height="0"
            width="0"
            style={{
              display: "none",
              visibility: "hidden",
            }}
          />
        </noscript>
        <SmoothScroll>{children}</SmoothScroll></body>
    </html>
  );
}