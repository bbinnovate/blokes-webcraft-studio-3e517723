import {
  Layout,
  ShoppingBag,
  Code2,
  Gauge,
  Search,
  Wrench,
} from "lucide-react";
import { Reveal } from "./reveal";

const items = [
  {
    icon: Layout,
    title: "Website design & development",
    body: "Custom design systems, not recycled templates. As a dedicated web design and development agency, we wireframe every page around a buying decision before a single pixel is drawn.",
    tags: ["UX wireframes", "Design system", "CMS build"],
  },

  {
    icon: ShoppingBag,
    title: "Shopify ecommerce development",
    body: "As a Shopify web development company, we build storefronts that make browsing effortless — fast PDPs, frictionless checkout, clean merchandising, and custom Shopify website development wherever off-the-shelf falls short.",
    tags: ["Shopify 2.0", "Custom theme", "Checkout UX"],
  },

  {
    icon: Code2,
    title: "Custom web development",
    body: "Portals, dashboards, booking flows, calculators, and integrations. When an off-the-shelf plugin won't do, our custom web development team writes it properly from scratch, built to scale.",
    tags: ["React", "Headless", "API work"],
  },

  {
    icon: Gauge,
    title: "Speed & Core Web Vitals",
    body: "Image pipelines, lazy loading, script discipline, and clean markup so your site passes Core Web Vitals on real mobile networks, not just lab tests.",
    tags: ["LCP < 2s", "Mobile-first", "Lighthouse"],
  },

  {
    icon: Search,
    title: "Technical SEO foundations",
    body: "Crawlable structure, schema, clean URLs, internal linking, and content architecture built in from day one — not bolted on later, so search engines (and buyers) find you faster.",
    tags: ["Schema", "Site architecture", "Analytics"],
  },

  {
    icon: Wrench,
    title: "Care, hosting & iteration",
    body: "Launch is the start. Monthly updates, security patching, uptime monitoring, and CRO experiments that keep your site and your web development agency relationship earning long after go-live.",
    tags: ["Support SLA", "A/B tests", "Reporting"],
  },
];

export function Capabilities() {
  return (
    <section id="capabilities" className="bg-secondary scroll-mt-24 py-6 sm:py-8 lg:py-8">
      <div className="container">
        <Reveal>
          <p className="eyebrow">What we build</p>
          <h2 className="mt-3 max-w-5xl text-[32px] leading-[1.06] sm:text-[42px]">
           A full-stack web design and development agency, from first sketch to final launch, and everything that keeps it running after.
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
                <p className="text-grey mt-2.5 text-[14px] leading-relaxed">{it.body}</p>
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