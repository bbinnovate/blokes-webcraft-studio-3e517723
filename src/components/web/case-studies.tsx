"use client";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "./reveal";

const studies = [
  {
    img: "/assets/SCS2.jpg",
    client: "SCS Sports",
    type: "Shopify ecommerce development",
    headline: "A bigger catalogue needed a better experience.",
    problem:
      "SCS’s outdated storefront made discovery, navigation and mobile shopping harder than they needed to be. We rebuilt the Shopify experience around performance and conversion.",

    did: [
      "Rebuilt Shopify 2.0 storefront",
      "Improved navigation, search & filters",
      "Optimised mobile performance & UX",
    ],

    stats: [
      { k: "Shopify 2.0", v: "Custom storefront" },
      { k: "Custom UX", v: "Search, filters & discovery" },
      { k: "Performance", v: "Mobile-first optimisation" },
    ],
  },

  {
    img: "/assets/MrBloxnew.jpg",
    client: "Mr. Blox",
    type: "Custom Shopify website development",
    headline: "A new toy brand, built from scratch.",
    problem:
      "Mr. Blox launched without a website, so we designed and built its ecommerce storefront from the ground up.",

    did: [
      "Designed complete UI/UX",
      "Built custom Shopify 2.0 frontend",
      "Integrated payments, shipping & Klaviyo",
    ],

    stats: [
      {
        k: "UI/UX + Development",
        v: "End-to-end build",
      },
      {
        k: "Shopify 2.0",
        v: "Custom frontend",
      },
      {
        k: "Ecommerce",
        v: "Payments, shipping & Klaviyo",
      },
    ],
  },

  {
    img: "/assets/SuperSoxnew.jpg",
    client: "SuperSox",
    type: "Shopify ecommerce development",
    headline: "A new storefront for a growing brand.",
    problem:
      "SuperSox needed a completely new digital experience. We designed and built a scalable Shopify store from discovery to checkout.",

    did: [
      "Designed complete UI/UX",
      "Built custom Shopify 2.0 experience",
      "Integrated cart, WhatsApp, Klaviyo & analytics",
    ],

    stats: [
      {
        k: "UI/UX + Development",
        v: "End-to-end build",
      },
      {
        k: "Shopify 2.0",
        v: "Custom storefront",
      },
      {
        k: "Growth Ready",
        v: "Analytics & integrations",
      },
    ],
  },
];

export function CaseStudies() {
  return (
    <section id="work" className="bg-secondary scroll-mt-24 py-6 sm:py-8 lg:py-8">
      <span id="case-studies" className="block scroll-mt-24" />
      <div className="container">
        <Reveal>
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2 className="mt-3 max-w-3xl text-[32px] leading-[1.06] sm:text-[42px]">
                The website did the selling.<span className="hl"> Here's proof.</span>
              </h2>
            </div>
            <p className="text-ink-soft text-sm lg:max-w-sm lg:text-right">
              Four live builds designed, developed, and launched end-to-end by our Mumbai web
              development agency.
            </p>
          </div>
        </Reveal>

        <div className="mt-12">
          {studies.map((s, i) => (
            <StickyCard key={s.client} index={i} total={studies.length}>
              <div className="group border-border bg-card overflow-hidden rounded-[26px] border shadow-[0_40px_80px_-64px_rgba(29,29,29,0.45)]">
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
                      <ArrowUpRight className="text-ink-soft group-hover:text-ink h-5 w-5 shrink-0 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </div>
                    <h3 className="mt-3 text-[24px] leading-tight sm:text-[30px]">{s.headline}</h3>

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
                          <dt className="font-display text-[15px] font-extrabold sm:text-[20px]">
                            {st.k}
                          </dt>
                          <dd className="text-ink-soft mt-1 text-[12px] leading-snug">{st.v}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>
              </div>
            </StickyCard>
          ))}
        </div>
      </div>
    </section>
  );
}

function StickyCard({
  children,
  index,
  total,
}: {
  children: React.ReactNode;
  index: number;
  total: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);
  const isLast = index === total - 1;

  useEffect(() => {
    if (isLast) return;
    const el = ref.current;
    if (!el) return;
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const rect = el.getBoundingClientRect();
        const stickTop = 80 + index * 14;
        const travel = Math.max(rect.height * 0.75, 260);
        const p = Math.min(Math.max((stickTop - rect.top) / travel, 0), 1);
        setProgress(p);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [index, isLast]);

  return (
    <article
      className="sticky pb-6 lg:pb-8"
      style={{ top: `calc(5rem + ${index * 14}px)`, zIndex: index + 1 }}
    >
      <div
        ref={ref}
        className="origin-top will-change-transform"
        style={{
          transform: `scale(${1 - progress * 0.06})`,
          opacity: 1 - progress * 0.35,
          filter: progress > 0 ? `blur(${progress * 1.6}px)` : undefined,
        }}
      >
        {children}
      </div>
    </article>
  );
}
