"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

const outcomes = [
  {
    number: "01",
    value: "Light-speed",
    label: "Lean, performance-first builds",
  },
  {
    number: "02",
    value: "Built to convert",
    label: "Persuasion-focused UI/UX",
  },
  {
    number: "03",
    value: "Search-ready",
    label: "SEO baked into the build",
  },
  {
    number: "04",
    value: "Built to scale",
    label: "Flexible, ready for integrations",
  },
];

const projects = [
  {
    id: "project-1",
    number: "01",
    title: "Project One",
    category: "E-commerce",
    beforeSrc: "/assets/after-2.png",
    beforeAlt: "Outdated website before the redesign",
    afterSrc: "/assets/before-2.png",
    afterAlt: "Modern redesigned website after the Bombay Blokes rebuild",
  },
  {
    id: "project-2",
    number: "02",
    title: "Project Two",
    category: "Sports & Retail",
    beforeSrc: "/assets/Chatterboxafterbefore.png",
    beforeAlt: "Legacy SCS Sports storefront before redesign",
    afterSrc: "/assets/ChatterboxAfter.png",
    afterAlt: "Rebuilt Shopify 2.0 SCS Sports storefront",
  },
  {
    id: "project-3",
    number: "03",
    title: "Project Three",
    category: "Direct-to-Consumer",
    beforeSrc: "/assets/dancingleafbefore.png",
    beforeAlt: "Legacy Mr. Blox storefront before custom build",
    afterSrc: "/assets/dancingleafafter.png",
    afterAlt: "Modern custom D2C Shopify experience for Mr. Blox",
  },
];

interface ScrollCardProps {
  src: string;
  alt: string;
  badgeText: string;
  subtitle: string;
}

function ScrollCard({ src, alt, badgeText, subtitle }: ScrollCardProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [maxScroll, setMaxScroll] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [duration, setDuration] = useState(12);
  const [isMobile, setIsMobile] = useState(false);
  const [isInView, setIsInView] = useState(false);

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
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]) {
          setIsInView(entries[0].isIntersecting);
        }
      },
      { threshold: 0.25 },
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const handleMouseEnter = () => {
    calculateScroll();
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const shouldScroll = isHovered || (isMobile && isInView);

  return (
    <div className="flex flex-col gap-3">
      {/* Label header above preview */}
      <div className="flex items-center justify-center px-1">
        <span className="inline-flex items-center font-bold text-3xl">
          <span className="hl">{badgeText}</span>
        </span>
      </div>

      {/* Screenshot box */}
      <div
        ref={containerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleMouseEnter}
        className="group relative h-[460px] sm:h-[540px] lg:h-[600px] w-full overflow-hidden rounded-[26px] border border-border bg-card shadow-xs transition-all duration-300 hover:border-primary/40 hover:shadow-lg cursor-pointer select-none"
      >
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          onLoad={calculateScroll}
          className="w-full h-auto block transform-gpu transition-transform ease-in-out"
          style={{
            transform:
              shouldScroll && maxScroll > 0 ? `translateY(-${maxScroll}px)` : "translateY(0px)",
            transitionDuration: shouldScroll ? `${duration}s` : `${Math.max(8, duration * 0.8)}s`,
          }}
        />

        {/* Scroll indicator overlay */}
        {maxScroll > 0 && (
          <div className="absolute bottom-4 right-4 pointer-events-none z-10 flex items-center gap-1.5 rounded-full border border-border/60 bg-background/85 px-3 py-1.5 text-[11px] font-semibold text-foreground backdrop-blur-md transition-all duration-300 group-hover:opacity-40 shadow-xs">
            <ArrowDown className="h-3 w-3 animate-bounce text-primary" />
            <span>{isMobile ? "Scroll preview" : "Hover to scroll"}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export function Transformation() {
  const [activeTab, setActiveTab] = useState(0);
  const [mobileCardMode, setMobileCardMode] = useState<"after" | "before">("after");
  const tabsRef = useRef<HTMLDivElement | null>(null);
  const currentProject = (projects[activeTab] || projects[0])!;

  return (
    <section id="section-3" className="py-6 sm:py-8 lg:py-8">
      <div className="container">
        <div className="grid lg:gap-60 gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <Reveal>
            <p className="eyebrow">Website redesign</p>

            <h2 className="mt-3 text-[32px] leading-[1.06] sm:text-[42px]">
              Top 1% <span className="hl">websites</span> are never hard to navigate.
            </h2>
          </Reveal>

          <Reveal delay={80}>
            <p className="text-ink-soft w-full text-[15px] leading-relaxed">
              Browsers want to know what you do, your offerings, and where they can buy. So we build websites that make those things obvious - with better hierarchy, faster pages, clearer journeys, and flawless conversion copy.
            </p>
          </Reveal>
        </div>

        {/* Project tabs & category label */}
        <Reveal delay={100}>
          <div className="mt-10 flex flex-col items-center justify-center">
            {/* Pill tabs row */}
          <div
  ref={tabsRef}
  className="flex w-full items-center justify-start gap-2.5 overflow-x-auto px-1 pb-1 sm:justify-center sm:gap-3.5"
  style={{
    scrollbarWidth: "none",
    msOverflowStyle: "none",
  }}
>
  {projects.map((p, idx) => {
    const isActive = activeTab === idx;

    return (
      <button
        key={p.id}
        onClick={() => {
          setActiveTab(idx);
          setMobileCardMode("after");

          // Keep the clicked tab and its nearby tabs visible
          const tab = tabsRef.current?.children[idx] as HTMLElement | undefined;

          if (tab && tabsRef.current) {
            const container = tabsRef.current;
            const tabLeft = tab.offsetLeft;
            const tabRight = tabLeft + tab.offsetWidth;

            const visibleLeft = container.scrollLeft;
            const visibleRight =
              visibleLeft + container.clientWidth;

            if (tabRight > visibleRight) {
              container.scrollTo({
                left: tabRight - container.clientWidth + 16,
                behavior: "smooth",
              });
            } else if (tabLeft < visibleLeft) {
              container.scrollTo({
                left: Math.max(0, tabLeft - 16),
                behavior: "smooth",
              });
            }
          }
        }}
        aria-pressed={isActive}
        className={cn(
          "inline-flex shrink-0 items-center gap-2 rounded-full px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer select-none",
          isActive
            ? "bg-[#1d1d1f] text-white shadow-md"
            : "border border-border/80 bg-card text-ink hover:border-ink/40 hover:bg-secondary/50",
        )}
      >
        <span
          className={cn(
            "font-mono text-[11px] sm:text-xs transition-colors",
            isActive
              ? "text-white/80 font-normal"
              : "text-ink-soft/70 font-normal",
          )}
        >
          {p.number}
        </span>

        <span className="font-semibold">{p.title}</span>
      </button>
    );
  })}
</div>

            {/* Active project category tag */}
            {/* <p className="mt-3 text-[13px] font-medium tracking-wide text-ink-soft/80 uppercase">
              {currentProject.category}
            </p> */}
          </div>
        </Reveal>

        {/* Before and After preview cards */}
        <Reveal delay={120}>
          {/* Desktop view: side-by-side BEFORE & AFTER cards */}
          <div className="mt-8 hidden md:grid md:grid-cols-2 gap-10 lg:gap-8">
            <ScrollCard
              key={`${currentProject.id}-desktop-before`}
              src={currentProject.beforeSrc}
              alt={currentProject.beforeAlt}
              badgeText="BEFORE"
              subtitle="Outdated Design"
            />
            <ScrollCard
              key={`${currentProject.id}-desktop-after`}
              src={currentProject.afterSrc}
              alt={currentProject.afterAlt}
              badgeText="AFTER"
              subtitle="Modern Redesign"
            />
          </div>

          {/* Mobile view: single card defaulting to AFTER with BEFORE/AFTER toggle button */}
          <div className="mt-8 block md:hidden">
            {mobileCardMode === "after" ? (
              <ScrollCard
                key={`${currentProject.id}-mobile-after`}
                src={currentProject.afterSrc}
                alt={currentProject.afterAlt}
                badgeText="AFTER"
                subtitle="Modern Redesign"
              />
            ) : (
              <ScrollCard
                key={`${currentProject.id}-mobile-before`}
                src={currentProject.beforeSrc}
                alt={currentProject.beforeAlt}
                badgeText="BEFORE"
                subtitle="Outdated Design"
              />
            )}

            <div className="mt-4 flex justify-center">
              <button
                onClick={() =>
                  setMobileCardMode((prev) => (prev === "after" ? "before" : "after"))
                }
                className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-card px-6 py-2.5 text-xs font-semibold text-ink shadow-sm transition-all hover:bg-secondary active:scale-95 cursor-pointer"
              >
                <span>Switch to</span>
                <span className="rounded-full bg-ink text-white px-2.5 py-0.5 text-[11px] font-bold uppercase">
                  {mobileCardMode === "after" ? "BEFORE" : "AFTER"}
                </span>
              </button>
            </div>
          </div>
        </Reveal>

        {/* Outcome metric cards */}
        <div className="mt-8 grid gap-4 sm:grid-cols-4">
          {outcomes.map((o, i) => (
            <Reveal key={o.value} delay={i * 80}>
              <div className="border-border bg-card h-full rounded-2xl border p-5">
                <div className="mb-5 flex items-center justify-between">
                  <span className="text-ink-soft text-xs font-bold tracking-wider">{o.number}</span>
                </div>

                <p className="font-display text-[30px] leading-none font-extrabold">{o.value}</p>

                <p className="text-ink-soft mt-2 text-sm">{o.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
