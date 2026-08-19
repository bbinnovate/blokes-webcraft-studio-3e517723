import { ArrowUpRight } from "lucide-react";
import jewellery from "@/assets/project-jewellery.jpg";
import skincare from "@/assets/project-skincare.jpg";
import b2b from "@/assets/project-b2b.jpg";
import realestate from "@/assets/project-realestate.jpg";
import { Reveal } from "./reveal";

const projects = [
  {
    img: jewellery,
    name: "Aurumé Fine Jewellery",
    type: "Shopify ecommerce development",
    result: "3.1x online revenue in 5 months",
    note: "High-ticket jewellery needed trust, not discounts. We rebuilt the PDP around craftsmanship, certification and try-at-home.",
  },
  {
    img: skincare,
    name: "Aurelia Skin",
    type: "Custom Shopify website development",
    result: "+42% checkout completion",
    note: "A three-step checkout, bundle logic and honest ingredient storytelling replaced a slow, plugin-heavy theme.",
  },
  {
    img: b2b,
    name: "Precision Metal Components",
    type: "B2B website design & development",
    result: "68 qualified RFQs per month",
    note: "Capability pages mapped to real search intent turned an invisible manufacturer into a quoting machine.",
  },
  {
    img: realestate,
    name: "Northline Developers",
    type: "Custom web development",
    result: "5.4% enquiry rate on project pages",
    note: "Immersive project pages with floor-plan viewers and a single sticky enquiry rail across the journey.",
  },
];

export function WorkShowcase() {
  return (
    <section id="work" className="scroll-mt-24 py-20 lg:py-28">
      <div className="container-bb">
        <Reveal>
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2 className="mt-3 max-w-2xl text-[32px] leading-[1.06] sm:text-[42px]">
                Real websites, live in the wild — <span className="hl">not mock-ups.</span>
              </h2>
            </div>
            <p className="text-grey text-sm lg:max-w-xs lg:text-right">
              Scroll sideways. Every build below is design, development and launch handled
              in-house by our Mumbai team.
            </p>
          </div>
        </Reveal>
      </div>

      <div className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 lg:px-[max(2rem,calc((100vw-1240px)/2+2rem))]">
        {projects.map((p) => (
          <article
            key={p.name}
            className="group border-border bg-card w-[84vw] shrink-0 snap-start overflow-hidden rounded-[24px] border transition-all duration-300 hover:-translate-y-1.5 sm:w-[520px]"
          >
            <div className="bg-secondary overflow-hidden">
              <img
                src={p.img}
                alt={`${p.name} website built by Bombay Blokes`}
                width={1280}
                height={912}
                loading="lazy"
                className="h-[230px] w-full object-cover object-top transition-transform duration-[900ms] ease-out group-hover:scale-[1.04] sm:h-[300px]"
              />
            </div>
            <div className="p-6">
              <p className="eyebrow">{p.type}</p>
              <div className="mt-2.5 flex items-start justify-between gap-4">
                <h3 className="text-[20px] font-extrabold">{p.name}</h3>
                <ArrowUpRight className="text-grey group-hover:text-ink mt-1 h-5 w-5 shrink-0 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
              <p className="text-grey mt-2 text-[14px] leading-relaxed">{p.note}</p>
              <p className="border-border mt-5 border-t pt-4 text-[14px] font-bold">
                <span className="bg-accent-yellow/60 rounded px-1.5 py-0.5">{p.result}</span>
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}