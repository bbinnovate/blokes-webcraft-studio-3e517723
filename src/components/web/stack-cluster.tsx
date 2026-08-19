import { ShoppingBag, FileText, Layers, Code2, Server, CreditCard, Users, BarChart3 } from "lucide-react";
import { Reveal } from "./reveal";

const stack = [
  { name: "Shopify", note: "Ecommerce", icon: ShoppingBag, pos: "left-[2%] top-[6%]", d: "0s" },
  { name: "WordPress", note: "Content sites", icon: FileText, pos: "left-[24%] top-[38%]", d: "0.8s" },
  { name: "Webflow", note: "Marketing sites", icon: Layers, pos: "left-[3%] top-[68%]", d: "1.6s" },
  { name: "React / Next", note: "Custom builds", icon: Code2, pos: "right-[3%] top-[4%]", d: "0.4s" },
  { name: "Node & APIs", note: "Integrations", icon: Server, pos: "right-[24%] top-[36%]", d: "1.2s" },
  { name: "Razorpay", note: "Payments", icon: CreditCard, pos: "right-[2%] top-[66%]", d: "2s" },
  { name: "HubSpot", note: "CRM sync", icon: Users, pos: "left-[16%] top-[88%]", d: "2.4s" },
  { name: "GA4 + GTM", note: "Measurement", icon: BarChart3, pos: "right-[16%] top-[88%]", d: "1s" },
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
        <div className="relative mx-auto mt-12 hidden h-[460px] max-w-4xl md:block">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-1/4 top-1/4 bottom-1/4 rounded-full opacity-70 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, color-mix(in oklab, var(--accent-yellow) 40%, transparent), transparent 70%)",
            }}
          />
          <div className="absolute top-1/2 left-1/2 grid h-32 w-32 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-border bg-card text-center shadow-[0_30px_60px_-40px_rgba(29,29,29,0.6)]">
            <div>
              <p className="font-display text-[15px] font-extrabold leading-tight">Your build</p>
              <p className="text-grey mt-1 text-[11px]">stack-agnostic</p>
            </div>
          </div>
          {stack.map((s) => (
            <div
              key={s.name}
              style={{ animationDelay: s.d }}
              className={`animate-float border-border bg-card absolute flex items-center gap-3 rounded-2xl border px-4 py-3 shadow-[0_24px_50px_-36px_rgba(29,29,29,0.55)] transition-transform duration-300 hover:scale-[1.05] ${s.pos}`}
            >
              <span className="bg-secondary grid h-9 w-9 shrink-0 place-items-center rounded-xl">
                <s.icon className="text-ink h-4 w-4" />
              </span>
              <div>
                <p className="font-display text-[13.5px] font-extrabold leading-none">{s.name}</p>
                <p className="text-grey mt-1 text-[11px] leading-none">{s.note}</p>
              </div>
            </div>
          ))}
        </div>

        <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 md:hidden">
          {stack.map((s) => (
            <li key={s.name} className="border-border bg-card rounded-xl border p-3.5">
              <s.icon className="text-ink h-4 w-4" />
              <p className="font-display mt-2 text-[13.5px] font-extrabold">{s.name}</p>
              <p className="text-grey mt-0.5 text-[11.5px]">{s.note}</p>
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
  );
}
