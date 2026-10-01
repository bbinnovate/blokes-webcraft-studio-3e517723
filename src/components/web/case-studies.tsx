"use client";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Reveal } from "./reveal";

interface CaseStudyPreviewProps {
  src: string;
  alt: string;
}

function CaseStudyPreview({ src, alt }: CaseStudyPreviewProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [maxScroll, setMaxScroll] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isToggled, setIsToggled] = useState(false);
  const [duration, setDuration] = useState(12);
  const [isMobile, setIsMobile] = useState(false);

  const calculateScroll = useCallback(() => {
    if (!containerRef.current || !imgRef.current) return 0;
    const containerH = containerRef.current.clientHeight;
    const containerW = containerRef.current.clientWidth;
    const img = imgRef.current;

    let fullHeight = img.offsetHeight || img.clientHeight;
    if (img.naturalWidth && img.naturalHeight && containerW) {
      const calculatedH = (img.naturalHeight * containerW) / img.naturalWidth;
      fullHeight = Math.max(fullHeight, calculatedH);
    }

    if (fullHeight > containerH + 10) {
      const dist = fullHeight - containerH;
      setMaxScroll(dist);
      // Speed: ~100px per second, duration between 12s and 25s
      const calculatedDuration = Math.max(12, Math.min(25, dist / 100));
      setDuration(calculatedDuration);
      return dist;
    } else {
      setMaxScroll(0);
      return 0;
    }
  }, []);

  useEffect(() => {
    calculateScroll();
    window.addEventListener("resize", calculateScroll);
    return () => window.removeEventListener("resize", calculateScroll);
  }, [calculateScroll]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleMouseEnter = () => {
    if (!isMobile) {
      calculateScroll();
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setIsHovered(false);
    }
  };

  const handleClick = () => {
    if (isMobile) {
      calculateScroll();
      setIsToggled((prev) => !prev);
    }
  };

  const shouldScroll = isMobile ? isToggled : isHovered;

  return (
    <div
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      className="group/preview relative h-[460px] sm:h-[540px] lg:h-[600px]  w-full overflow-hidden bg-black select-none cursor-pointer"
    >
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        onLoad={calculateScroll}
className="w-full h-auto block transform-gpu transition-transform ease-in-out object-cover"
        style={{
          transform:
            shouldScroll && maxScroll > 0 ? `translateY(-${maxScroll}px)` : "translateY(0px)",
          transitionDuration: shouldScroll ? `${duration}s` : `${Math.max(8, duration * 0.8)}s`,
        }}
      />

      {/* Scroll indicator overlay */}
      {maxScroll > 0 && (
        <div className="absolute bottom-4 right-4 pointer-events-none z-10 flex items-center gap-1.5 rounded-full border border-border/60 bg-background/85 px-3 py-1.5 text-[11px] font-semibold text-foreground backdrop-blur-md transition-all duration-300 group-hover/preview:opacity-40 shadow-xs">
          <ArrowDown className="h-3 w-3 animate-bounce text-primary" />
          <span>{isMobile ? (isToggled ? "Tap to reset" : "Tap to scroll") : "Hover to scroll"}</span>
        </div>
      )}
    </div>
  );
}

const studies = [
  {
    img: "/assets/scs.png",
    client: "SCS Sports",
    type: "Shopify Ecommerce Development",
    headline: "SCS is a multi-category sport equipment retailer.",
    problem:
      "SCS had the range, but their old storefront made it difficult to discover for their customers. We rebuilt the experience on Shopify 2.0, rethinking navigation, search, filters and product discovery across desktop and mobile. The goal was simple: make a big catalogue feel easier to shop. Products are easier to find, categories make more sense and the journey from browse to checkout has fewer unnecessary steps. Less digging. Faster decisions. A storefront built to keep up with the range.",

    did: [
      "Rebuilt Shopify 2.0 storefront",
      "Improved user journey",
      "Mobile performance & UX",
    ],

    stats: [
      {
        k: "Shopify 2.0",
        v: "Rebuilt storefront",
      },
      {
        k: "User Journey",
        v: "Improved browsing & shopping",
      },
      {
        k: "Performance",
        v: "Mobile performance & UX",
      },
    ],
  },

  {
    img: "/assets/mrblox.png",
    client: "Mr. Blox",
    type: "Custom Shopify Build Development",
    headline: "Mr. Blox is a new-age toy brand with no existing storefront.",
    problem:
      "Mr. Blox came to us with a new product, a new identity and no digital storefront to inherit. We built the Shopify experience from the ground up, creating a space that could introduce the brand, bring the products to life and make the path to purchase feel natural.",

    did: [
      "End-to-end UI/UX",
      "Custom Shopify 2.0 frontend",
      "Integrated payments, shipping & Klaviyo",
    ],

    stats: [
      {
        k: "UI/UX",
        v: "End-to-end experience",
      },
      {
        k: "Shopify 2.0",
        v: "Custom frontend",
      },
      {
        k: "Integrations",
        v: "Payments, shipping & Klaviyo",
      },
    ],
  },

  {
    img: "/assets/supersox2.png",
    client: "SuperSox",
    type: "Shopify Ecommerce Development",
    headline:
      "SuperSox had 177+ products. We had a lot to navigate it into an end-to-end web experience.",
    problem:
      "SuperSox had a wide catalogue spanning categories, audiences and use cases. We rebuilt their Shopify experience from discovery to checkout, creating a clearer way to navigate the range, find the right products and move through the store across every screen. We brought the entire shopping journey together into one cohesive experience.",

    did: [
      "End-to-end UI/UX",
      "Custom Shopify 2.0",
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
        k: "Integrations",
        v: "Cart, WhatsApp, Klaviyo & analytics",
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
              Built by <span className="hl">Blokes</span>
              </h2>
            </div>
            <p className="text-ink-soft text-sm lg:max-w-sm lg:text-right">
             Take a look at some of our live builds.  
Along with how they’re performing in the real world. 

            </p>
          </div>
        </Reveal>

        <div className="mt-12">
          {studies.map((s, i) => (
            <StickyCard key={s.client} index={i} total={studies.length}>
              <div className="group border-border bg-card overflow-hidden rounded-[26px] border shadow-[0_40px_80px_-64px_rgba(29,29,29,0.45)]">
                <div className="grid lg:grid-cols-2">
                  <CaseStudyPreview
                    src={s.img}
                    alt={`${s.client} website case study`}
                  />
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
