import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import jewellery from "@/assets/project-jewellery.jpg";
import b2b from "@/assets/project-b2b.jpg";
import skincare from "@/assets/project-skincare.jpg";
import realestate from "@/assets/project-realestate.jpg";
import { Reveal } from "./reveal";

const studies = [
  {
    img: jewellery,
    client: "Aurumé Fine Jewellery",
    type: "Shopify ecommerce development",
    headline: "A ₹95,000 pendant doesn't sell on a template.",
    problem:
      "Traffic was healthy, sales weren't. The old store buried certification, pricing and delivery promises three clicks deep.",
    did: [
      "Rebuilt the storefront on Shopify with a custom, story-led PDP",
      "Added certification, EMI and try-at-home modules above the fold",
      "Compressed the media pipeline — 4.1s to 1.6s on mobile",
    ],
    stats: [
      { k: "3.1x", v: "online revenue" },
      { k: "+58%", v: "add-to-cart rate" },
      { k: "1.6s", v: "mobile LCP" },
    ],
  },
  {
    img: b2b,
    client: "Precision Metal Components",
    type: "B2B website design & development",
    headline: "From invisible manufacturer to 68 RFQs a month.",
    problem:
      "A 12-year-old brochure site with one contact form, no capability pages, and nothing for Google to rank.",
    did: [
      "Mapped 24 capability and material pages to real buyer search intent",
      "Built a spec-led quote request flow with file uploads",
      "Structured data and internal linking across the full catalogue",
    ],
    stats: [
      { k: "68", v: "RFQs / month" },
      { k: "4.7x", v: "organic sessions" },
      { k: "22", v: "keywords in top 3" },
    ],
  },
  {
    img: skincare,
    client: "Aurelia Skin",
    type: "Custom Shopify website development",
    headline: "Fixing the checkout was worth more than more ads.",
    problem:
      "Ad spend was scaling but 7 of 10 carts died at checkout on mobile — the theme fought every tap.",
    did: [
      "Rebuilt checkout UX with express pay, saved carts and clear shipping",
      "Bundle and subscription logic built natively instead of via plugins",
      "Removed 11 third-party scripts slowing the buying journey",
    ],
    stats: [
      { k: "+42%", v: "checkout completion" },
      { k: "-31%", v: "cost per order" },
      { k: "2.4x", v: "repeat purchases" },
    ],
  },
  {
    img: realestate,
    client: "Northline Developers",
    type: "Custom web development",
    headline: "Project pages that sell flats before the site visit.",
    problem:
      "Enquiries came from portals, not their own site — every project lived on a single PDF-heavy page.",
    did: [
      "Immersive project pages with floor-plan viewers and location intelligence",
      "One sticky enquiry rail carried across the entire journey",
      "CRM + WhatsApp routing so leads reach sales in under a minute",
    ],
    stats: [
      { k: "5.4%", v: "enquiry rate" },
      { k: "-46%", v: "cost per lead" },
      { k: "<60s", v: "lead response time" },
    ],
  },
];

export function CaseStudies() {
  return (
    <section id="work" className="bg-secondary scroll-mt-24 py-20 lg:py-28">
      <span id="case-studies" className="block scroll-mt-24" />
      <div className="container-bb">
        <Reveal>
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2 className="mt-3 max-w-3xl text-[32px] leading-[1.06] sm:text-[42px]">
                The website was the growth lever. <span className="hl">Here's the receipts.</span>
              </h2>
            </div>
            <p className="text-grey text-sm lg:max-w-xs lg:text-right">
              Four live builds — design, development and launch handled in-house by our Mumbai
              team.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 space-y-8 lg:space-y-0">
          {studies.map((s, i) => (
            <article
              key={s.client}
              className="lg:sticky"
              style={{ top: `calc(6rem + ${i * 22}px)`, zIndex: i + 1 }}
            >
              <div className="group border-border bg-card overflow-hidden rounded-[26px] border shadow-[0_40px_80px_-64px_rgba(29,29,29,0.45)] transition-all duration-500 lg:mb-8">
                <div className="grid lg:grid-cols-2">
                  <div className="bg-secondary overflow-hidden">
                    <img
                      src={s.img}
                      alt={`${s.client} website case study`}
                      width={1280}
                      height={912}
                      loading="lazy"
                      className="h-[240px] w-full object-cover object-top transition-transform duration-[900ms] ease-out group-hover:scale-[1.03] lg:h-full lg:min-h-[420px]"
                    />
                  </div>
                  <div className="p-6 sm:p-9">
                    <div className="flex items-start justify-between gap-4">
                      <p className="eyebrow">
                        {String(i + 1).padStart(2, "0")} — {s.type}
                      </p>
                      <ArrowUpRight className="text-grey group-hover:text-ink h-5 w-5 shrink-0 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </div>
                    <h3 className="mt-3 text-[24px] leading-tight sm:text-[30px]">{s.headline}</h3>
                    <p className="text-grey mt-1.5 text-[13px] font-semibold">{s.client}</p>
                    <p className="text-ink-soft mt-4 text-[14.5px] leading-relaxed">{s.problem}</p>
                    <ul className="mt-6 space-y-2.5">
                      {s.did.map((d) => (
                        <li key={d} className="flex gap-3 text-[14px] leading-relaxed">
                          <span className="bg-accent-yellow mt-2 h-1.5 w-1.5 shrink-0 rounded-full" />
                          {d}
                        </li>
                      ))}
                    </ul>
                    <dl className="border-border mt-8 grid grid-cols-3 gap-4 border-t pt-6">
                      {s.stats.map((st) => (
                        <div key={st.v}>
                          <dt className="font-display text-[22px] font-extrabold sm:text-[28px]">
                            {st.k}
                          </dt>
                          <dd className="text-grey mt-1 text-[12px] leading-snug">{st.v}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
