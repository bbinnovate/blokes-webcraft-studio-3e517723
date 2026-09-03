"use client"
import { useState } from "react";
import { Monitor, Smartphone, Tablet } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";
import { StackCluster } from "./stack-cluster";

const devices = [
  {
    id: "desktop",
    label: "Desktop",
    icon: Monitor,
    img: "/assets/dextop.png",
    frameClass: "w-full max-w-[860px] rounded-xl",
    imgClass: "aspect-[16/10]",
    note: "Full-width editorial layout, multi-column grid, hover states.",
  },
  {
    id: "tablet",
    label: "Tablet",
    icon: Tablet,
    img: "/assets/tab.png",
    frameClass: "w-[62%] min-w-[300px] max-w-[460px] rounded-2xl",
    imgClass: "aspect-[3/4]",
    note: "Two-column product grid, larger tap targets, condensed nav.",
  },
  {
    id: "mobile",
    label: "Mobile",
    icon: Smartphone,
    img: "/assets/mobile.png",
    frameClass: "w-[240px] rounded-[34px]",
    imgClass: "aspect-[9/18]",
    note: "Single column, thumb-reach CTA bar, hamburger nav, sticky buy.",
  },
] as const;

export function ResponsiveTech() {
  const [active, setActive] = useState<(typeof devices)[number]["id"]>("desktop");
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
                    "inline-flex items-center gap-2 rounded-full px-4 py-2 text-[13px] font-semibold transition-all",
                    active === d.id ? "bg-ink text-primary-foreground" : "text-grey hover:text-ink",
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
            <div
              key={current.id}
              className={cn(
                "border-ink/85 bg-card animate-[scale-in_0.45s_cubic-bezier(0.22,1,0.36,1)] overflow-hidden border-[6px] shadow-[0_40px_70px_-45px_rgba(29,29,29,0.55)] transition-all duration-500",
                current.frameClass,
              )}
            >
              {current.id === "desktop" ? (
                <div className="border-border bg-secondary flex items-center gap-1.5 border-b px-3 py-2">
                  <span className="bg-grey-light h-2 w-2 rounded-full" />
                  <span className="bg-grey-light h-2 w-2 rounded-full" />
                  <span className="bg-accent-yellow h-2 w-2 rounded-full" />
                </div>
              ) : (
                <div className="flex justify-center py-1.5">
                  <span className="bg-ink/20 h-1.5 w-14 rounded-full" />
                </div>
              )}
              <img
                src={current.img}
                alt={`Website layout on ${current.label.toLowerCase()}`}
                width={1200}
                height={1200}
                loading="lazy"
                className={cn("w-full object-fit object-top", current.imgClass)}
              />
            </div>
            <p className="text-grey mt-6 max-w-md text-center text-[13.5px] leading-relaxed">
              <span className="text-ink font-semibold">{current.label}:</span> {current.note}
            </p>
          </div>
        </Reveal>

      </div>

      <StackCluster />
    </section>
  );
}
