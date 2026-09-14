"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowDown } from "lucide-react";
import { Reveal } from "./reveal";

const outcomes = [
  { number: "01", value: "Fast", label: "Performance-first development" },
  { number: "02", value: "Search-ready", label: "Technical SEO built in" },
  { number: "03", value: "Conversion-focused", label: "UX designed around action" },
  { number: "04", value: "Growth-ready", label: "Analytics, tracking & integrations" },
];

interface ScrollCardProps {
  src: string;
  alt: string;
  badgeText: string;
  badgeBg: string;
  subtitle: string;
}

function ScrollCard({ src, alt, badgeText, badgeBg, subtitle }: ScrollCardProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [maxScroll, setMaxScroll] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [duration, setDuration] = useState(8);

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
      // Speed: ~300px per second, duration between 4s and 16s
      const calculatedDuration = Math.max(4, Math.min(16, dist / 300));
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

  const handleMouseEnter = () => {
    const dist = calculateScroll();
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="flex flex-col gap-3">
      {/* Label header above preview */}
      <div className="flex items-center justify-between px-1">
        <span
          className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1 text-xs font-bold shadow-xs ${badgeBg}`}
        >
          {badgeText}
        </span>
        <span className="text-grey text-xs font-medium">{subtitle}</span>
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
            transform: isHovered && maxScroll > 0 ? `translateY(-${maxScroll}px)` : "translateY(0px)",
            transitionDuration: isHovered ? `${duration}s` : "2.5s",
          }}
        />

        {/* Scroll indicator overlay */}
        {maxScroll > 0 && (
          <div className="absolute bottom-4 right-4 pointer-events-none z-10 flex items-center gap-1.5 rounded-full border border-border/60 bg-background/85 px-3 py-1.5 text-[11px] font-semibold text-foreground backdrop-blur-md transition-all duration-300 group-hover:opacity-40 shadow-xs">
            <ArrowDown className="h-3 w-3 animate-bounce text-primary" />
            <span>Hover to scroll</span>
          </div>
        )}
      </div>
    </div>
  );
}

export function Transformation() {
  return (
    <section id="section-3" className="py-6 sm:py-8 lg:py-8">
      <div className="container">
        <div className="grid lg:gap-60 gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <Reveal>
            <p className="eyebrow">Website redesign</p>

            <h2 className="mt-3 text-[32px] leading-[1.06] sm:text-[42px]">
              Same business.{" "}
              <span className="hl">Very different</span> first impression.
            </h2>
          </Reveal>

          <Reveal delay={80}>
            <p className="text-ink-soft w-full text-[15px] leading-relaxed">
              Most businesses don't have a traffic problem, they have a credibility
              problem. Hover over each preview to see what a professional website development
              agency actually changes: sharper hierarchy, faster loads, one obvious
              next step, and copy written for the buyer, not the brochure.
            </p>
          </Reveal>
        </div>

        {/* Side-by-side Before and After preview cards */}
        <Reveal delay={120}>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <ScrollCard
              src="/assets/beforenew.png"
              alt="Outdated website before the redesign"
              badgeText="BEFORE"
              badgeBg="bg-ink text-primary-foreground"
              subtitle="Outdated Design"
            />
            <ScrollCard
              src="/assets/afternew.png"
              alt="Modern redesigned website after the Bombay Blokes rebuild"
              badgeText="AFTER"
              badgeBg="bg-accent-yellow text-ink font-bold"
              subtitle="Modern Redesign"
            />
          </div>
        </Reveal>

        {/* Outcome metric cards */}
        <div className="mt-8 grid gap-4 sm:grid-cols-4">
          {outcomes.map((o, i) => (
            <Reveal key={o.value} delay={i * 80}>
              <div className="border-border bg-card h-full rounded-2xl border p-5">
                <div className="mb-5 flex items-center justify-between">
                  <span className="text-grey text-xs font-bold tracking-wider">
                    {o.number}
                  </span>
                </div>

                <p className="font-display text-[30px] leading-none font-extrabold">
                  {o.value}
                </p>

                <p className="text-grey mt-2 text-sm">{o.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}