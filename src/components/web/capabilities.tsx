import { Layout, ShoppingBag, Code2, Gauge, Search, Wrench } from "lucide-react";
import { Reveal } from "./reveal";

const items = [
  {
    icon: Layout,
    title: "Website Design and Development",
    body: "No templates. No visual wallpaper. We build distinct websites that look like your brand, and work like your business.",
    tags: ["UX wireframes", "Design systems", "CMS builds"],
  },

  {
    icon: ShoppingBag,
    title: "Shopify Ecommerce Development",
    body: "Built to buy. Fast storefronts, clean merchandising and custom Shopify builds.",
    tags: ["Shopify 2.0", "Custom themes", "Checkout UX"],
  },

  {
    icon: Code2,
    title: "Custom Web Development",
    body: "If it doesn’t exist, we’ll build it. Custom tools, integrations and digital experiences, built from scratch.",
    tags: ["React", "Headless", "API integrations"],
  },

  {
    icon: Gauge,
    title: "Speed & Core Vitals",
    body: "Lean builds, smarter loading and mobile-first performance.",
    tags: ["LCP < 2sec", "Mobile-first", "Lighthouse"],
  },

  {
    icon: Search,
    title: "Technical SEO Foundations",
    body: "Built for easy crawling. Clean structure, smart architecture, and SEO baked in from the start.",
    tags: ["Schema", "Site architecture", "Analytics"],
  },

  {
    icon: Wrench,
    title: "Tracking & Iteration",
    body: "Going live is just the beginning. Enjoy monthly updates, security testing, and timely audits.",
    tags: ["Support SLA", "A/B tests", "Transparent Reporting"],
  },
];

export function Capabilities() {
  return (
    <section id="capabilities" className="bg-secondary scroll-mt-24 py-6 sm:py-8 lg:py-8">
      <div className="container">
        <Reveal>
          <p className="eyebrow">What we build</p>
          <h2 className="mt-3 max-w-5xl text-[32px] leading-[1.06] sm:text-[42px]">
           We design and develop the visible bits, the invisible bits, 
and all the clever bits to make your website stand out. 

          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={(i % 3) * 80}>
              <article className="group border-border bg-card hover:border-ink/30 flex h-full flex-col rounded-[22px] border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-32px_rgba(29,29,29,0.5)]">
                <span className="border-border group-hover:bg-accent-yellow group-hover:border-accent-yellow grid h-11 w-11 place-items-center rounded-xl border transition-colors">
                  <it.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-[19px] font-extrabold">{it.title}</h3>
                <p className="text-ink-soft mt-2.5 text-[14px] leading-relaxed">{it.body}</p>
                <ul className="mt-5 flex flex-wrap gap-2 pt-1">
                  {it.tags.map((t) => (
                    <li
                      key={t}
                      className="border-border text-ink-soft rounded-full border px-2.5 py-1 text-[11.5px] font-medium"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
