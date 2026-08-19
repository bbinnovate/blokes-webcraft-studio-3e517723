import { useState } from "react";
import { Monitor, Smartphone, Tablet } from "lucide-react";
import mobileSet from "@/assets/mobile-set.jpg";
import afterSite from "@/assets/after-site.jpg";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

const devices = [
  { id: "desktop", label: "Desktop", icon: Monitor, width: "100%", ratio: "aspect-[16/10]" },
  { id: "tablet", label: "Tablet", icon: Tablet, width: "62%", ratio: "aspect-[16/10]" },
  { id: "mobile", label: "Mobile", icon: Smartphone, width: "33%", ratio: "aspect-[16/10]" },
] as const;

const stack = [
  { name: "Shopify", note: "Ecommerce" },
  { name: "WordPress", note: "Content sites" },
  { name: "Webflow", note: "Marketing sites" },
  { name: "React / Next", note: "Custom builds" },
  { name: "Node & APIs", note: "Integrations" },
  { name: "Razorpay", note: "Payments" },
  { name: "HubSpot", note: "CRM sync" },
  { name: "GA4 + GTM", note: "Measurement" },
];

export function ResponsiveTech() {
  const [active, setActive] = useState<(typeof devices)[number]["id"]>("desktop");
  const current = devices.find((d) => d.id === active)!;

  return (
    <section className="bg-secondary py-20 lg:py-28">
      <div className="container-bb">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <Reveal>
            <p className="eyebrow">Responsive by default</p>
            <h2 className="mt-3 max-w-2xl text-[32px] leading-[1.06] sm:text-[42px]">
              Over 70% of your visitors arrive on a phone. We design for them first.
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <div className="border-border bg-card inline-flex rounded-full border p-1">
              {devices.map((d) => (
                <button
                  key={d.id}
                  onClick={() => setActive(d.id)}
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
          <div className="border-border bg-card mt-10 flex justify-center overflow-hidden rounded-[26px] border p-4 sm:p-8">
            <div
              className="transition-all duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ width: current.width }}
            >
              <div className="border-border bg-secondary overflow-hidden rounded-xl border">
                <div className="border-border flex items-center gap-1.5 border-b px-3 py-2">
                  <span className="bg-grey-light h-2 w-2 rounded-full" />
                  <span className="bg-grey-light h-2 w-2 rounded-full" />
                  <span className="bg-accent-yellow h-2 w-2 rounded-full" />
                </div>
                <img
                  src={afterSite}
                  alt="Website layout adapting across desktop, tablet and mobile"
                  width={1200}
                  height={800}
                  loading="lazy"
                  className={cn("w-full object-cover object-top", current.ratio)}
                />
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <img
              src={mobileSet}
              alt="Mobile-first website interfaces built by Bombay Blokes"
              width={1200}
              height={800}
              loading="lazy"
              className="border-border w-full rounded-[24px] border object-cover"
            />
          </Reveal>
          <Reveal delay={80}>
            <p className="eyebrow">Platforms & stack</p>
            <h3 className="mt-3 text-[26px] leading-tight sm:text-[32px]">
              We pick the platform that fits your business — not the one we like selling.
            </h3>
            <p className="text-ink-soft mt-4 text-[15px] leading-relaxed">
              Selling products? Shopify. Publishing heavily? WordPress. Complex logic or speed at
              scale? A custom React build. You own every account, every repo and every login.
            </p>
            <ul className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
              {stack.map((s) => (
                <li
                  key={s.name}
                  className="border-border bg-card hover:border-ink/30 rounded-xl border p-3.5 transition-colors"
                >
                  <p className="font-display text-[14px] font-extrabold">{s.name}</p>
                  <p className="text-grey mt-0.5 text-[11.5px]">{s.note}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}