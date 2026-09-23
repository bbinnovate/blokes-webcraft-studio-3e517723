"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowDown, Monitor, Smartphone } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";
import { StackCluster } from "./stack-cluster";

const devices = [
  {
    id: "desktop",
    label: "Desktop",
    icon: Monitor,
    img: "/assets/dextopnew2.png",
    frameClass: "w-full max-w-[860px] rounded-xl",
    viewportHeightClass: "h-[380px] sm:h-[480px]",
    note: "Full-width editorial layout, multi-column grid, hover states.",
  },

  {
    id: "mobile",
    label: "Mobile",
    icon: Smartphone,
    img: "/assets/mobilenew2.png",
    frameClass: "w-[260px] sm:w-[280px] rounded-[34px]",
    viewportHeightClass: "h-[440px] sm:h-[520px]",
    note: "Single column, thumb-reach CTA bar, hamburger nav, sticky buy.",
  },
] as const;

type DeviceItem = (typeof devices)[number];

function DeviceScrollFrame({ device }: { device: DeviceItem }) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [maxScroll, setMaxScroll] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [duration, setDuration] = useState(22);
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
      // Extra slow speed: ~30px per second, duration between 22s and 45s
      const calculatedDuration = Math.max(22, Math.min(45, dist / 30));
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
    <div
      className={cn(
        "border-ink/85 bg-card animate-[scale-in_0.45s_cubic-bezier(0.22,1,0.36,1)] overflow-hidden border-[6px] shadow-[0_40px_70px_-45px_rgba(29,29,29,0.55)] transition-all duration-500 relative group cursor-pointer select-none",
        device.frameClass,
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleMouseEnter}
    >
      {/* Device frame header */}
      {device.id === "desktop" ? (
        <div className="border-border bg-secondary flex items-center gap-1.5 border-b px-3 py-2">
          <span className="bg-grey-light h-2 w-2 rounded-full" />
          <span className="bg-grey-light h-2 w-2 rounded-full" />
          <span className="bg-accent-yellow h-2 w-2 rounded-full" />
        </div>
      ) : (
        <div className="flex justify-center py-1.5 bg-secondary border-b border-border/40">
          <span className="bg-ink/20 h-1.5 w-14 rounded-full" />
        </div>
      )}

      {/* Screen Viewport with Scroll on Hover */}
      <div
        ref={containerRef}
        className={cn("relative overflow-hidden w-full bg-card", device.viewportHeightClass)}
      >
        <img
          ref={imgRef}
          src={device.img}
          alt={`Website layout on ${device.label.toLowerCase()}`}
          onLoad={calculateScroll}
          className="w-full h-auto block transform-gpu transition-transform ease-in-out"
          style={{
            transform:
              shouldScroll && maxScroll > 0 ? `translateY(-${maxScroll}px)` : "translateY(0px)",
            transitionDuration: shouldScroll ? `${duration}s` : `${Math.max(18, duration)}s`,
          }}
        />

        {/* Scroll indicator overlay */}
        {maxScroll > 0 && (
          <div className="absolute bottom-3 right-3 pointer-events-none z-10 flex items-center gap-1.5 rounded-full border border-border/60 bg-background/85 px-2.5 py-1 text-[10px] font-semibold text-foreground backdrop-blur-md transition-all duration-300 group-hover:opacity-40 shadow-xs">
            <ArrowDown className="h-3 w-3 animate-bounce text-primary" />
            <span>{isMobile ? "Scroll preview" : "Hover to scroll"}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export function ResponsiveTech() {
  const [active, setActive] = useState<(typeof devices)[number]["id"]>("mobile");
  const current = devices.find((d) => d.id === active)!;

  return (
    <section className="py-6 sm:py-8 lg:py-8">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <Reveal>
            <p className="eyebrow">Responsive by default</p>
            <h2 className="mt-3 max-w-4xl text-[32px] leading-[1.06] sm:text-[42px]">
              Over 70% of your visitors arrive on a phone. We design for them first.
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <div className="border-border bg-card inline-flex rounded-full border p-1">
              {devices.map((d) => (
                <button
                  key={d.id}
                  onClick={() => setActive(d.id)}
                  aria-pressed={active === d.id}
                  className={cn(
                    "inline-flex items-center gap-2 rounded-full px-4 py-2 text-[13px] font-semibold transition-all cursor-pointer",
                    active === d.id
                      ? "bg-ink text-primary-foreground"
                      : "text-ink-soft hover:text-ink",
                  )}
                >
                  <d.icon className="h-3.5 w-3.5" />
                  {d.label}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <div className="border-border bg-secondary mt-10 flex min-h-[420px] flex-col items-center justify-center overflow-hidden rounded-[26px] border p-5 sm:min-h-[560px] sm:p-10">
            <DeviceScrollFrame key={current.id} device={current} />
            <p className="text-ink-soft mt-6 max-w-md text-center text-[13.5px] leading-relaxed">
              <span className="text-ink font-semibold">{current.label}:</span> {current.note}
            </p>
          </div>
        </Reveal>
      </div>

      <StackCluster />
    </section>
  );
}
