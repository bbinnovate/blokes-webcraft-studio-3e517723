import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "./reveal";

export const faqs = [
  {
    q: "How long does it take to build a website?",
    a: "A focused marketing site takes 4–6 weeks. A Shopify ecommerce build usually runs 6–10 weeks, and custom platforms are scoped after discovery. The biggest variable is how quickly content, product data and approvals come back from your side — we give you a shared timeline on day one.",
  },
  {
    q: "How much does website development cost in India?",
    a: "Most business websites we build land between ₹1.2 lakh and ₹6 lakh depending on page count, custom design, integrations and ecommerce complexity. You receive a fixed, itemised quote before work begins, so there are no surprise invoices later.",
  },
  {
    q: "Do you work on Shopify, or only custom builds?",
    a: "Both. We're an experienced Shopify web development company for D2C and retail brands, and we also build on WordPress, Webflow and custom React stacks. We recommend the platform that matches your catalogue, team and roadmap — not the one that's easiest for us.",
  },
  {
    q: "Will the website actually bring enquiries, or just look good?",
    a: "Every build starts with buyer research and a conversion map: what a visitor must see, in what order, before they act. We then track form starts, drop-offs and calls after launch, and keep optimising the pages that carry the most intent.",
  },
  {
    q: "Can you redesign our existing site without losing SEO rankings?",
    a: "Yes. We audit your current URLs, traffic and rankings, preserve the pages that earn, map 301 redirects, keep metadata and schema intact, and monitor Search Console closely for the first eight weeks post-launch.",
  },
  {
    q: "Who owns the website and can our team update it?",
    a: "You own everything — domain, hosting, codebase, CMS and analytics. We hand over documented access plus a walkthrough recording, and train your team to update pages, blogs and products without needing us.",
  },
  {
    q: "Do you offer support after launch?",
    a: "Yes. Care plans cover updates, backups, security patching, uptime monitoring and a monthly block of improvement hours. Many clients also run ongoing CRO experiments with us once traffic is flowing.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="bg-secondary scroll-mt-24 py-20 lg:py-28">
      <div className="container grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
        <Reveal>
          <p className="eyebrow">FAQs</p>
          <h2 className="mt-3 text-[32px] leading-[1.06] sm:text-[42px]">
            Questions worth asking any web development agency.
          </h2>
          <p className="text-grey mt-4 text-[14.5px] leading-relaxed">
            Still unsure? Ask us on a call — we'll tell you honestly if we're not the right fit.
          </p>
        </Reveal>

        <Reveal delay={80}>
          <Accordion type="single" collapsible className="border-border border-t">
            {faqs.map((f) => (
              <AccordionItem key={f.q} value={f.q} className="border-border border-b">
                <AccordionTrigger className="font-display py-5 text-left text-[16px] font-extrabold hover:no-underline sm:text-[17px]">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-grey pb-5 text-[14.5px] leading-relaxed">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}