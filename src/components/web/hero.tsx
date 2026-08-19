import { Star, Zap, ShieldCheck } from "lucide-react";
import heroMockup from "@/assets/hero-mockup.jpg";
import { LeadForm } from "./lead-form";
import { Reveal } from "./reveal";

const proofPills = [
  { icon: Zap, text: "Sites that load under 2 seconds" },
  { icon: ShieldCheck, text: "Built to convert, not just look good" },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-14 lg:pt-36 lg:pb-20">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-32 h-[520px] w-[520px] rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--accent-yellow) 55%, transparent), transparent 70%)",
        }}
      />
      <div className="container-bb relative grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        <div>
          <Reveal>
            <span className="border-border bg-card text-ink-soft inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[12px] font-semibold">
              <span className="bg-accent-yellow h-1.5 w-1.5 rounded-full" />
              Web development agency in Mumbai
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-5 text-[38px] leading-[1.02] sm:text-[54px] lg:text-[66px]">
              Websites that sell
              <br className="hidden sm:block" /> your business <span className="hl">while you sleep.</span>
            </h1>
          </Reveal>

          <Reveal delay={140}>
            <p className="text-ink-soft mt-5 max-w-xl text-[15px] leading-relaxed sm:text-[17px]">
              We are a web design and development agency that builds fast, search-ready websites
              and Shopify stores for Indian brands — designed around how your customers actually
              buy, and engineered so every visit has a chance to become an enquiry.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <ul className="mt-6 flex flex-wrap gap-2.5">
              {proofPills.map((p) => (
                <li
                  key={p.text}
                  className="border-border bg-card text-ink-soft inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-[12.5px] font-medium"
                >
                  <p.icon className="text-ink h-3.5 w-3.5" />
                  {p.text}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={260}>
            <div className="border-border mt-8 flex flex-wrap items-center gap-x-8 gap-y-4 border-t pt-6">
              <div>
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="fill-accent-yellow text-accent-yellow h-3.5 w-3.5" />
                  ))}
                </div>
                <p className="text-grey mt-1.5 text-[12.5px]">5.0 average from 40+ client reviews</p>
              </div>
              <div>
                <p className="font-display text-xl font-extrabold">150+</p>
                <p className="text-grey text-[12.5px]">websites & stores shipped</p>
              </div>
              <div>
                <p className="font-display text-xl font-extrabold">6–8 weeks</p>
                <p className="text-grey text-[12.5px]">typical launch timeline</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className="border-border bg-card relative mt-10 hidden overflow-hidden rounded-[26px] border lg:block">
              <img
                src={heroMockup}
                alt="Responsive website built by Bombay Blokes shown on a laptop and mobile"
                width={1408}
                height={1104}
                className="h-[280px] w-full object-cover object-center"
              />
            </div>
          </Reveal>
        </div>

        <Reveal delay={120} className="lg:sticky lg:top-24">
          <LeadForm />
          <div className="border-border bg-card mt-4 overflow-hidden rounded-[22px] border lg:hidden">
            <img
              src={heroMockup}
              alt="Responsive website built by Bombay Blokes shown on a laptop and mobile"
              width={1408}
              height={1104}
              className="h-56 w-full object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}