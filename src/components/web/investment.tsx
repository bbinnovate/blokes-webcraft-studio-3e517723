import { Check } from "lucide-react";
import { Reveal } from "./reveal";

const tiers = [
  {
    name: "Launch site",
    price: "₹1.2L – ₹2.5L",
    for: "Service businesses and startups needing credibility fast",
    points: [
      "6–10 custom-designed pages",
      "CMS you can edit yourself",
      "Technical SEO + analytics setup",
      "Launch in 4–6 weeks",
    ],
  },
  {
    name: "Ecommerce build",
    price: "₹2.5L – ₹6L",
    for: "D2C brands scaling on Shopify",
    points: [
      "Custom Shopify theme, not a marketplace template",
      "Conversion-led PDP and checkout UX",
      "Payments, logistics and CRM integrations",
      "Launch in 6–10 weeks",
    ],
    featured: true,
  },
  {
    name: "Custom platform",
    price: "₹6L+",
    for: "Portals, dashboards and multi-market builds",
    points: [
      "Custom web development on React / headless",
      "Role-based access and third-party APIs",
      "Performance and security engineering",
      "Timeline scoped after discovery",
    ],
  },
];

export function Investment() {
  return (
    <section id="investment" className="scroll-mt-24 py-20 lg:py-28">
      <div className="container-bb">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end">
          <Reveal>
            <p className="eyebrow">Website development cost</p>
            <h2 className="mt-3 text-[32px] leading-[1.06] sm:text-[42px]">
              Straight answers on <span className="hl">what a website costs.</span>
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="text-ink-soft text-[15px] leading-relaxed">
              Website development cost in India swings wildly because scope does. These are the
              honest ranges we quote — the final number depends on page count, integrations and
              how much content we write for you. You'll get a fixed quote before we start, and no
              invoice you didn't approve.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {tiers.map((t, i) => (
            <Reveal key={t.name} delay={i * 80}>
              <article
                className={
                  t.featured
                    ? "bg-ink text-primary-foreground flex h-full flex-col rounded-[24px] p-7 shadow-[0_30px_70px_-40px_rgba(29,29,29,0.7)]"
                    : "border-border bg-card flex h-full flex-col rounded-[24px] border p-7"
                }
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-[19px] font-extrabold">{t.name}</h3>
                  {t.featured && (
                    <span className="bg-accent-yellow text-ink rounded-full px-2.5 py-1 text-[11px] font-bold">
                      Most requested
                    </span>
                  )}
                </div>
                <p className={t.featured ? "text-grey-light mt-1.5 text-[13px]" : "text-grey mt-1.5 text-[13px]"}>
                  {t.for}
                </p>
                <p className="font-display mt-6 text-[30px] leading-none font-extrabold">{t.price}</p>
                <ul className="mt-6 flex-1 space-y-3">
                  {t.points.map((p) => (
                    <li key={p} className="flex gap-2.5 text-[14px] leading-relaxed">
                      <Check
                        className={
                          t.featured
                            ? "text-accent-yellow mt-0.5 h-4 w-4 shrink-0"
                            : "text-ink mt-0.5 h-4 w-4 shrink-0"
                        }
                      />
                      {p}
                    </li>
                  ))}
                </ul>
                <a
                  href="#quote"
                  className={
                    t.featured
                      ? "bg-accent-yellow text-ink mt-8 rounded-full px-5 py-3 text-center text-sm font-bold transition-transform hover:-translate-y-0.5"
                      : "bg-ink text-primary-foreground mt-8 rounded-full px-5 py-3 text-center text-sm font-bold transition-transform hover:-translate-y-0.5"
                  }
                >
                  Get a fixed quote
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}