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
    a: "Most website projects we work on have a turnaround time of 6–8 weeks, depending on the size and complexity. We’ll give you a timeline upfront and keep you updated throughout.",
  },

  {
    q: "How much will my website development cost?",
    a: "It depends on the scope. We scope the project around your business, functionality and goals. You’ll always get a clear estimate before we begin.",
  },

  {
    q: "How do you choose the right tech for my website?",
    a: "We start with your business, not a platform. We look at your current business and what it needs to be future-ready. Then and only then, do we recommend the technology that fits best.",
  },

  {
    q: "Will my new website be SEO-friendly?",
    a: "Yes. We build websites with a clean structure, sensible page hierarchy, crawlable content, fast load times, mobile responsiveness, metadata, redirects and other technical SEO foundations in place. That said, SEO rankings also depend on a lot of other factors.",
  },

  {
    q: "What happens after the website goes live?",
    a: "Going live isn’t the point where we disappear. Once the website is launched, we can continue to help with maintenance, fixes, updates, new pages, integrations and ongoing improvements.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="bg-secondary scroll-mt-24 py-6 sm:py-8 lg:py-8">
      <div className="container grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
        <Reveal>
          <p className="eyebrow">FAQs</p>
          <h2 className="mt-3 text-[32px] leading-[1.06] sm:text-[42px]">
          Frequently Asked Questions
          </h2>
        <p className="text-ink-soft mt-4 text-[14.5px] leading-relaxed">
  Got a question we haven’t answered?
  <br />
  Call us or shoot a message on{" "}
  <a
    href="tel:+919833037816"
    className="text-[#FAB31E]"
  >
    +91 98330 37816
  </a>
</p>
        </Reveal>

        <Reveal delay={80}>
          <Accordion type="single" collapsible className="border-border border-t">
            {faqs.map((f) => (
              <AccordionItem key={f.q} value={f.q} className="border-border border-b">
                <AccordionTrigger className="font-display py-5 text-left text-[16px] font-bold hover:no-underline sm:text-[17px]">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-ink-soft pb-5 text-[14.5px] leading-relaxed">
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
