"use client";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

const steps = [
  {
    n: "01",
    t: "Discovery & Buyer Mapping",
    d: "We get into the nitty-gritty of your business, your buyers, your competition and the market.",
    out: "Sitemap + Messaging brief",
  },

  {
    n: "02",
    t: "Wireframes & Content Strategy",
    d: "We use buyer’s psychology to shape the hierarchy, wireframes and content, so every section moves the customer closer to a decision.",
    out: "Low-fi wireframes + Copy deck",
  },

  {
    n: "03",
    t: "Design Frame & UI",
    d: "We build your visual language, components and interactions across desktop and mobile aesthetics.",
    out: "Figma design system",
  },

  {
    n: "04",
    t: "Development & Integrations",
    d: "We build the frontend, connect the backend, and wire every essential system; from payments and CRM to WhatsApp and analytics. Everything tested on staging before the launch.",
    out: "Staging build + QA sheet",
  },

  {
    n: "05",
    t: "Speed, SEO, & QA",
    d: "We build the frontend, connect the backend, and wire every essential system; from payments and CRM to WhatsApp and analytics. Everything tested on staging before the launch.",
    out: "Launch-readiness report",
  },
];

const STEP_MS = 4200;

export function Process() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [inView, setInView] = useState(false);
  const listRef = useRef<HTMLOListElement | null>(null);

  useEffect(() => {
    const el = listRef.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver((e) => setInView(e[0]?.isIntersecting ?? false), {
      threshold: 0.25,
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (paused || !inView) return;
    const id = window.setTimeout(() => setActive((a) => (a + 1) % steps.length), STEP_MS);
    return () => window.clearTimeout(id);
  }, [active, paused, inView]);

  return (
    <section id="process" className="scroll-mt-24 py-6 sm:py-8 lg:py-8">
      <div className="container grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="lg:self-start">
          <Reveal>
            <p className="eyebrow">How we work</p>
            <h2 className="mt-3 text-[32px] leading-[1.06] sm:text-[42px]">
             Fully transparent. 
From first brief to final build.
            </h2>
            <p className="text-ink-soft mt-5 max-w-md text-[15px] leading-relaxed">
             A dedicated project lead, a shared timeline and clear deliverables at every stage. 
            </p>
            <div className="mt-7 flex items-center gap-3">
              <span className="font-display text-[13px] font-extrabold">
                Step {String(active + 1).padStart(2, "0")} / 06
              </span>
              <span className="bg-border h-px flex-1" />
            </div>
            <a
              href="#audit"
              className="bg-ink text-primary-foreground mt-7 inline-flex rounded-full px-6 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5"
            >
              Book a 20-minute scoping call
            </a>
          </Reveal>
        </div>

        <ol ref={listRef} className="border-border border-t" onMouseLeave={() => setPaused(false)}>
          {steps.map((s, i) => {
            const isActive = i === active;
            return (
              <li
                key={s.n}
                onMouseEnter={() => {
                  setPaused(true);
                  setActive(i);
                }}
                onFocus={() => setActive(i)}
                tabIndex={0}
                className={cn(
                  "border-border relative grid cursor-default grid-cols-[auto_minmax(0,1fr)] gap-x-5 gap-y-2 border-b py-7 outline-none transition-all duration-500 sm:grid-cols-[auto_minmax(0,1fr)_auto]",
                  isActive ? "opacity-100" : "opacity-45",
                )}
              >
                <span
                  aria-hidden
                  className={cn(
                    "bg-accent-yellow absolute bottom-[-1px] left-0 h-[2px] origin-left",
                    isActive ? "animate-[bb-progress_var(--step)_linear_forwards]" : "w-0",
                  )}
                  style={
                    {
                      "--step": `${STEP_MS}ms`,
                      animationPlayState: paused ? "paused" : "running",
                    } as React.CSSProperties
                  }
                />
                <span
                  className={cn(
                    "font-display text-[15px] font-extrabold transition-colors duration-500",
                    isActive ? "text-accent-yellow" : "text-ink-soft-light",
                  )}
                >
                  {s.n}
                </span>
                <div className="min-w-0">
                  <h3 className="text-[19px] font-extrabold">{s.t}</h3>
                  <p
                    className={cn(
                      "text-ink-soft max-w-xl overflow-hidden text-[14px] leading-relaxed transition-all duration-500",
                      isActive
                        ? "mt-2 max-h-32 opacity-100"
                        : "max-h-0 opacity-0 sm:max-h-32 sm:mt-2 sm:opacity-100",
                    )}
                  >
                    {s.d}
                  </p>
                </div>
                <span
                  className={cn(
                    "col-start-2 w-fit rounded-full border px-3 py-1 text-[11.5px] font-medium transition-colors duration-500 sm:col-start-3 sm:self-start",
                    isActive
                      ? "border-ink bg-ink text-primary-foreground"
                      : "border-border text-ink-soft",
                  )}
                >
                  {s.out}
                </span>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
