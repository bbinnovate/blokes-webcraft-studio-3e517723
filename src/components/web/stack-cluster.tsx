import { Reveal } from "./reveal";
import hub from "@/assets/stack-hub.png";

const logo = (slug: string) => `https://cdn.simpleicons.org/${slug}`;

const stack = [
  { name: "Shopify", note: "Ecommerce", slug: "shopify", angle: -150, d: "0s" },
  { name: "WordPress", note: "Content sites", slug: "wordpress", angle: -105, d: "0.6s" },
  { name: "Webflow", note: "Marketing sites", slug: "webflow", angle: -60, d: "1.2s" },
  { name: "React", note: "Custom builds", slug: "react", angle: -15, d: "0.3s" },
  { name: "Next.js", note: "Speed at scale", slug: "nextdotjs", angle: 30, d: "1.5s" },
  { name: "Node.js", note: "APIs & logic", slug: "nodedotjs", angle: 75, d: "0.9s" },
  { name: "Razorpay", note: "Payments", slug: "razorpay", angle: 120, d: "1.8s" },
  { name: "HubSpot", note: "CRM sync", slug: "hubspot", angle: 165, d: "2.1s" },
  { name: "Google Analytics", note: "Measurement", slug: "googleanalytics", angle: 195, d: "1.1s" },
];

export function StackCluster() {
  return (
    <div className="container-bb mt-24">
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
        <div className="relative mx-auto mt-12 hidden aspect-square w-full max-w-[620px] md:block">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-[22%] rounded-full opacity-70 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, color-mix(in oklab, var(--accent-yellow) 40%, transparent), transparent 70%)",
            }}
          />
          <svg aria-hidden viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
            <circle cx="50" cy="50" r="38" fill="none" stroke="currentColor" strokeWidth="0.2" strokeDasharray="1 1.6" className="text-grey-light" />
            <circle cx="50" cy="50" r="26" fill="none" stroke="currentColor" strokeWidth="0.2" strokeDasharray="1 1.6" className="text-grey-light" />
          </svg>

          <div className="absolute top-1/2 left-1/2 grid h-36 w-36 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-border bg-card text-center shadow-[0_30px_60px_-40px_rgba(29,29,29,0.6)]">
            <div>
              <img
                src={hub}
                alt="Bombay Blokes build hub"
                width={768}
                height={768}
                loading="lazy"
                className="mx-auto h-14 w-14 object-contain"
              />
              <p className="font-display mt-1 text-[14px] leading-tight font-extrabold">Your build</p>
              <p className="text-grey mt-0.5 text-[11px]">stack-agnostic</p>
            </div>
          </div>

          {stack.map((s) => {
            const rad = (s.angle * Math.PI) / 180;
            return (
              <div
                key={s.name}
                style={{
                  animationDelay: s.d,
                  left: `${50 + 38 * Math.cos(rad)}%`,
                  top: `${50 + 38 * Math.sin(rad)}%`,
                }}
                className="animate-float border-border bg-card absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-3 rounded-2xl border px-3.5 py-2.5 shadow-[0_24px_50px_-36px_rgba(29,29,29,0.55)] transition-transform duration-300 hover:scale-[1.06]"
              >
                <span className="bg-secondary grid h-9 w-9 shrink-0 place-items-center rounded-xl">
                  <img src={logo(s.slug)} alt={`${s.name} logo`} width={18} height={18} loading="lazy" className="h-[18px] w-[18px]" />
                </span>
                <div className="whitespace-nowrap">
                  <p className="font-display text-[13px] font-extrabold leading-none">{s.name}</p>
                  <p className="text-grey mt-1 text-[11px] leading-none">{s.note}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 md:hidden">
          <img
            src={hub}
            alt="Bombay Blokes build hub"
            width={768}
            height={768}
            loading="lazy"
            className="mx-auto h-20 w-20 object-contain"
          />
          <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {stack.map((s) => (
              <li key={s.name} className="border-border bg-card flex min-w-0 items-center gap-2.5 rounded-xl border p-3">
                <img src={logo(s.slug)} alt={`${s.name} logo`} width={18} height={18} loading="lazy" className="h-[18px] w-[18px] shrink-0" />
                <div className="min-w-0">
                  <p className="font-display truncate text-[13px] font-extrabold">{s.name}</p>
                  <p className="text-grey truncate text-[11.5px]">{s.note}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </div>
  );
}
