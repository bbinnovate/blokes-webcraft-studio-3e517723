import { Reveal } from "./reveal";

const logo = (slug: string) => `https://cdn.simpleicons.org/${slug}`;

// ring: 1 = innermost arc, 3 = outermost. t = 0..1 position along the arc (left -> right)
const stack = [
  { name: "Shopify", note: "Ecommerce", slug: "shopify", ring: 1, t: 0.3, d: "0s" },
  { name: "React", note: "Custom builds", slug: "react", ring: 1, t: 0.7, d: "0.9s" },
  { name: "WordPress", note: "Content sites", slug: "wordpress", ring: 2, t: 0.16, d: "0.6s" },
  { name: "Next.js", note: "Speed at scale", slug: "nextdotjs", ring: 2, t: 0.5, d: "1.5s" },
  { name: "Node.js", note: "APIs & logic", slug: "nodedotjs", ring: 2, t: 0.84, d: "0.3s" },
  { name: "Webflow", note: "Marketing sites", slug: "webflow", ring: 3, t: 0.16, d: "1.2s" },
  { name: "HubSpot", note: "CRM sync", slug: "hubspot", ring: 3, t: 0.39, d: "2.1s" },
  { name: "Google Analytics", note: "Measurement", slug: "googleanalytics", ring: 3, t: 0.61, d: "1.1s" },
  { name: "Razorpay", note: "Payments", slug: "razorpay", ring: 3, t: 0.84, d: "1.8s" },
];

const RADII = [0, 22, 33, 44] as const;

export function StackCluster() {
  return (
    <div className="container mt-24">
      <Reveal className="text-center">
        <p className="eyebrow">Platforms & stack</p>
        <h3 className="mx-auto mt-3 max-w-2xl text-[28px] leading-[1.08] sm:text-[38px]">
          We pick the platform that fits your business — <span className="hl">not the one we like selling.</span>
        </h3>
        <p className="text-ink-soft mx-auto mt-4 max-w-xl text-[15px] leading-relaxed">
          Selling products? Shopify. Publishing heavily? WordPress. Complex logic or speed at
          scale? A custom React build. You own every account, every repo and every login.
        </p>
      </Reveal>

      <Reveal delay={100}>
        {/* Concentric arc — same layout at every breakpoint, just tighter */}
        <div className="relative mx-auto mt-10 aspect-[2/1.05] w-full max-w-[860px] sm:mt-12 sm:aspect-[2/0.95]">
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-0 left-1/2 h-[92%] w-[92%] -translate-x-1/2 rounded-t-full opacity-80 blur-2xl"
            style={{
              background:
                "radial-gradient(ellipse at bottom center, color-mix(in oklab, var(--accent-yellow) 38%, transparent), transparent 68%)",
            }}
          />
          <svg
            aria-hidden
            viewBox="0 0 100 44"
            preserveAspectRatio="none"
            className="text-grey-light absolute inset-0 h-full w-full"
          >
            {[1, 2, 3].map((r) => (
              <path
                key={r}
                d={`M ${50 - RADII[r]!} 44 A ${RADII[r]!} ${RADII[r]!} 0 0 1 ${50 + RADII[r]!} 44`}
                fill="none"
                stroke="currentColor"
                strokeWidth="0.22"
                strokeDasharray="1 1.6"
              />
            ))}
          </svg>

          {stack.map((s) => {
            const r = RADII[s.ring] ?? 33;
            const rad = Math.PI * (1 - s.t); // 180deg -> 0deg
            return (
              <div
                key={s.name}
                style={{
                  animationDelay: s.d,
                  left: `${50 + r * Math.cos(rad)}%`,
                  top: `${100 - (r / 44) * 100 * Math.sin(rad)}%`,
                }}
                className="animate-float border-border bg-card absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-full border p-1.5 shadow-[0_24px_50px_-36px_rgba(29,29,29,0.55)] transition-transform duration-300 hover:scale-[1.08] sm:gap-2.5 sm:rounded-2xl sm:px-3 sm:py-2"
              >
                <span className="bg-secondary grid h-8 w-8 shrink-0 place-items-center rounded-full sm:h-9 sm:w-9 sm:rounded-xl">
                  <img
                    src={logo(s.slug)}
                    alt={`${s.name} logo`}
                    width={18}
                    height={18}
                    loading="lazy"
                    className="h-4 w-4 sm:h-[18px] sm:w-[18px]"
                  />
                </span>
                <div className="hidden pr-1 whitespace-nowrap sm:block">
                  <p className="font-display text-[12.5px] leading-none font-extrabold">{s.name}</p>
                  <p className="text-grey mt-1 text-[10.5px] leading-none">{s.note}</p>
                </div>
              </div>
            );
          })}

          <div className="border-border bg-card absolute bottom-0 left-1/2 grid h-24 w-24 -translate-x-1/2 translate-y-1/4 place-items-center rounded-full border text-center shadow-[0_30px_60px_-40px_rgba(29,29,29,0.6)] sm:h-32 sm:w-32">
            <div className="-translate-y-2 sm:-translate-y-3">
              <img
                src="/assets/stack-hub.png"
                alt="Bombay Blokes build hub"
                width={768}
                height={768}
                loading="lazy"
                className="mx-auto h-9 w-9 object-contain sm:h-12 sm:w-12"
              />
              <p className="font-display mt-1 text-[11px] leading-tight font-extrabold sm:text-[13px]">
                Your build
              </p>
            </div>
          </div>
        </div>

        <p className="text-grey mt-8 text-center text-[12px] sm:hidden">
          Shopify · WordPress · Webflow · React · Next.js · Node.js · Razorpay · HubSpot · GA4
        </p>
      </Reveal>
    </div>
  );
}
