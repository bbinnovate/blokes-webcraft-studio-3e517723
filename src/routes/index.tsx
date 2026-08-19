import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { SiteNav } from "@/components/web/site-nav";
import { Hero } from "@/components/web/hero";
import { LogoMarquee } from "@/components/web/logo-marquee";
import { Transformation } from "@/components/web/transformation";
import { Capabilities } from "@/components/web/capabilities";
import { CaseStudies } from "@/components/web/case-studies";
import { ResponsiveTech } from "@/components/web/responsive-tech";
import { Process } from "@/components/web/process";
import { Testimonials } from "@/components/web/testimonials";
import { Faq, faqs } from "@/components/web/faq";
import { CtaFooter } from "@/components/web/cta-footer";

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
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(jsonLd),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background overflow-x-hidden">
      <SiteNav />
      <Hero />
      <LogoMarquee />
      <Transformation />
      <Capabilities />
      <CaseStudies />
      <ResponsiveTech />
      <Process />
      <Testimonials />
      <Faq />
      <CtaFooter />
      <Toaster position="top-center" />
    </main>
  );
}
