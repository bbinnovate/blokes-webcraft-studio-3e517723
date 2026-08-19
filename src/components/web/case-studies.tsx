import jewellery from "@/assets/project-jewellery.jpg";
import b2b from "@/assets/project-b2b.jpg";
import skincare from "@/assets/project-skincare.jpg";
import { Reveal } from "./reveal";

const studies = [
  {
    img: jewellery,
    client: "Aurumé Fine Jewellery",
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
];

export function CaseStudies() {
  return (
    <section id="case-studies" className="bg-ink text-primary-foreground scroll-mt-24 py-20 lg:py-28">
      <div className="container-bb">
        <Reveal>
          <p className="eyebrow text-grey-light">Case studies</p>
          <h2 className="mt-3 max-w-3xl text-[32px] leading-[1.06] sm:text-[42px]">
            The website was the growth lever. Here's the receipts.
          </h2>
        </Reveal>

        <div className="mt-12 space-y-6 lg:space-y-8">
          {studies.map((s, i) => (
            <article
              key={s.client}
              className="sticky overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.04] backdrop-blur-sm"
              style={{ top: `${88 + i * 22}px` }}
            >
              <div className="grid gap-0 lg:grid-cols-[1fr_0.85fr]">
                <div className="p-6 sm:p-9">
                  <p className="eyebrow text-accent-yellow">
                    {String(i + 1).padStart(2, "0")} — {s.client}
                  </p>
                  <h3 className="mt-3 text-[24px] leading-tight sm:text-[30px]">{s.headline}</h3>
                  <p className="text-grey-light mt-4 text-[14.5px] leading-relaxed">{s.problem}</p>
                  <ul className="mt-6 space-y-2.5">
                    {s.did.map((d) => (
                      <li key={d} className="flex gap-3 text-[14px] leading-relaxed">
                        <span className="bg-accent-yellow mt-2 h-1.5 w-1.5 shrink-0 rounded-full" />
                        {d}
                      </li>
                    ))}
                  </ul>
                  <dl className="mt-8 grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
                    {s.stats.map((st) => (
                      <div key={st.v}>
                        <dt className="font-display text-accent-yellow text-[22px] font-extrabold sm:text-[28px]">
                          {st.k}
                        </dt>
                        <dd className="text-grey-light mt-1 text-[12px] leading-snug">{st.v}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
                <div className="bg-white/[0.03] p-6 sm:p-9 lg:pl-0">
                  <img
                    src={s.img}
                    alt={`${s.client} website case study`}
                    width={1280}
                    height={912}
                    loading="lazy"
                    className="h-full max-h-[360px] w-full rounded-xl object-cover object-top"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}