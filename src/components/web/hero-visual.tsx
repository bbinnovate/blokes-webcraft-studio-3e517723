import { useEffect, useState } from "react";
import { Gauge, TrendingUp } from "lucide-react";

const rows = [
  { w: "72%", h: "h-2.5" },
  { w: "94%", h: "h-2.5" },
  { w: "58%", h: "h-2.5" },
];

export function HeroVisual() {
  const [score, setScore] = useState(0);

  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min((t - start) / 1600, 1);
      setScore(Math.round(98 * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="relative">
      <div className="border-border bg-card overflow-hidden rounded-[22px] border shadow-[0_40px_80px_-56px_rgba(29,29,29,0.5)]">
        <div className="border-border bg-secondary flex items-center gap-2 border-b px-4 py-2.5">
          <span className="bg-grey-light h-2 w-2 rounded-full" />
          <span className="bg-grey-light h-2 w-2 rounded-full" />
          <span className="bg-accent-yellow h-2 w-2 rounded-full" />
          <span className="border-border text-grey ml-3 hidden rounded-full border bg-white px-3 py-1 text-[10.5px] sm:block">
            yourbrand.com
          </span>
        </div>

        <div className="grid gap-5 p-5 sm:grid-cols-[1.1fr_0.9fr] sm:p-6">
          <div>
            <div className="bg-accent-yellow/70 h-2.5 w-16 rounded-full" />
            <div className="mt-4 space-y-2.5">
              {rows.map((r, i) => (
                <div
                  key={r.w}
                  className="bg-ink/85 animate-bar rounded-full"
                  style={{ width: r.w, height: 10, animationDelay: `${i * 140}ms` }}
                />
              ))}
            </div>
            <div className="bg-secondary mt-4 space-y-2 rounded-lg p-3">
              <div className="bg-grey-light/60 h-1.5 w-full rounded-full" />
              <div className="bg-grey-light/60 h-1.5 w-4/5 rounded-full" />
              <div className="bg-grey-light/60 h-1.5 w-2/3 rounded-full" />
            </div>
            <div className="mt-4 flex gap-2">
              <div className="bg-ink h-7 w-28 rounded-full" />
              <div className="border-border h-7 w-20 rounded-full border" />
            </div>
          </div>

          <div className="grid gap-3">
            <div className="bg-secondary grid gap-2 rounded-xl p-4">
              <div className="bg-grey-light/60 h-1.5 w-12 rounded-full" />
              <div className="bg-ink/80 h-20 rounded-lg" />
              <div className="bg-grey-light/60 h-1.5 w-16 rounded-full" />
            </div>
            <div className="border-border grid grid-cols-2 gap-2 rounded-xl border p-3">
              <div className="bg-secondary h-10 rounded-md" />
              <div className="bg-secondary h-10 rounded-md" />
              <div className="bg-secondary h-10 rounded-md" />
              <div className="bg-accent-yellow/70 h-10 rounded-md" />
            </div>
          </div>
        </div>
      </div>

      <div className="border-border bg-card animate-float absolute -top-5 -right-2 flex items-center gap-2.5 rounded-2xl border px-4 py-3 shadow-[0_20px_40px_-24px_rgba(29,29,29,0.45)] sm:-right-5">
        <Gauge className="text-ink h-4 w-4" />
        <div>
          <p className="font-display text-[17px] leading-none font-extrabold">{score}</p>
          <p className="text-grey mt-1 text-[10.5px] leading-none">PageSpeed score</p>
        </div>
      </div>

      <div
        className="border-border bg-card animate-float absolute -bottom-5 -left-2 flex items-center gap-2.5 rounded-2xl border px-4 py-3 shadow-[0_20px_40px_-24px_rgba(29,29,29,0.45)] sm:-left-5"
        style={{ animationDelay: "1.2s" }}
      >
        <TrendingUp className="text-ink h-4 w-4" />
        <div>
          <p className="font-display text-[17px] leading-none font-extrabold">+42%</p>
          <p className="text-grey mt-1 text-[10.5px] leading-none">enquiries after launch</p>
        </div>
      </div>
    </div>
  );
}
