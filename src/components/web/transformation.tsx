import { useCallback, useEffect, useRef, useState } from "react";
import { MoveHorizontal } from "lucide-react";
import beforeSite from "@/assets/before-site.jpg";
import afterSite from "@/assets/after-site.jpg";
import { Reveal } from "./reveal";

const outcomes = [
  { value: "2.9x", label: "more enquiries in 90 days" },
  { value: "-61%", label: "drop in bounce rate" },
  { value: "1.4s", label: "largest contentful paint" },
];

export function Transformation() {
  const [pos, setPos] = useState(52);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const dragging = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const el = trackRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(98, Math.max(2, next)));
  }, []);

  useEffect(() => {
    const move = (e: PointerEvent) => {
      if (!dragging.current) return;
      setFromClientX(e.clientX);
    };
    const up = () => {
      dragging.current = false;
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
  }, [setFromClientX]);

  return (
    <section className="py-20 lg:py-28">
      <div className="container-bb">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <Reveal>
            <p className="eyebrow">Website redesign</p>
            <h2 className="mt-3 text-[32px] leading-[1.06] sm:text-[42px]">
              Same business. <span className="hl">Very different</span> first impression.
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="text-ink-soft max-w-xl text-[15px] leading-relaxed">
              Most businesses don't have a traffic problem — they have a credibility problem. Drag
              the handle to see what a professional web development company changes: sharper
              hierarchy, faster loads, one obvious next step, and copy written for the buyer, not
              the brochure.
            </p>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <div
            ref={trackRef}
            onPointerDown={(e) => {
              dragging.current = true;
              setFromClientX(e.clientX);
            }}
            className="border-border bg-card relative mt-10 aspect-[16/10] w-full cursor-ew-resize touch-none overflow-hidden rounded-[26px] border select-none sm:aspect-[16/9]"
          >
            <img
              src={afterSite}
              alt="Modern redesigned website after the Bombay Blokes rebuild"
              width={1200}
              height={800}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover object-top"
            />
            <div
              className="absolute inset-0"
              style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
            >
              <img
                src={beforeSite}
                alt="Outdated website before the redesign"
                width={1200}
                height={800}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover object-top"
              />
            </div>

            <span className="bg-ink text-primary-foreground absolute top-4 left-4 rounded-full px-3 py-1 text-[11px] font-bold">
              Before
            </span>
            <span className="bg-accent-yellow text-ink absolute top-4 right-4 rounded-full px-3 py-1 text-[11px] font-bold">
              After
            </span>

            <div
              className="bg-accent-yellow absolute inset-y-0 w-[3px]"
              style={{ left: `${pos}%` }}
            >
              <span className="bg-accent-yellow text-ink absolute top-1/2 left-1/2 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full shadow-lg">
                <MoveHorizontal className="h-4 w-4" />
              </span>
            </div>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {outcomes.map((o, i) => (
            <Reveal key={o.value} delay={i * 80}>
              <div className="border-border bg-card h-full rounded-2xl border p-5">
                <p className="font-display text-[30px] leading-none font-extrabold">{o.value}</p>
                <p className="text-grey mt-2 text-sm">{o.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}