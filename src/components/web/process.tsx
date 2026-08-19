import { Reveal } from "./reveal";

const steps = [
  {
    n: "01",
    t: "Discovery & buyer mapping",
    d: "We interview you and your sales team, study competitors, and map what a buyer needs to see before they enquire.",
    out: "Sitemap + messaging brief",
  },
  {
    n: "02",
    t: "Wireframes & content strategy",
    d: "Structure before styling. Every section earns its place, and the copy is written for the decision, not the word count.",
    out: "Low-fi wireframes + copy deck",
  },
  {
    n: "03",
    t: "Design system & UI",
    d: "Type scale, colour, components and motion — designed desktop and mobile side by side so nothing breaks on a phone.",
    out: "Figma design system",
  },
  {
    n: "04",
    t: "Development & integrations",
    d: "Clean, componentised builds on Shopify, WordPress or React — with CRM, payments, WhatsApp and analytics wired in.",
    out: "Staging build + QA sheet",
  },
  {
    n: "05",
    t: "Speed, SEO & QA",
    d: "Core Web Vitals, schema, redirects, cross-browser and real-device testing before anything goes near production.",
    out: "Launch readiness report",
  },
  {
    n: "06",
    t: "Launch & optimisation",
    d: "We ship, watch the data, and keep improving — heatmaps, form drop-off and A/B tests on the pages that matter.",
    out: "Monthly performance review",
  },
];

export function Process() {
  return (
    <section id="process" className="scroll-mt-24 py-20 lg:py-28">
      <div className="container-bb grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <p className="eyebrow">How we work</p>
            <h2 className="mt-3 text-[32px] leading-[1.06] sm:text-[42px]">
              A website design and development process you can actually follow.
            </h2>
            <p className="text-ink-soft mt-5 max-w-md text-[15px] leading-relaxed">
              No black box, no ghosting. You get a named project lead, a shared timeline, and a
              deliverable at the end of every stage — so you always know what's happening and
              what's next.
            </p>
            <a
              href="#quote"
              className="bg-ink text-primary-foreground mt-7 inline-flex rounded-full px-6 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5"
            >
              Book a 20-minute scoping call
            </a>
          </Reveal>
        </div>

        <ol className="border-border border-t">
          {steps.map((s, i) => (
            <Reveal
              as="li"
              key={s.n}
              delay={i * 50}
              className="group border-border grid grid-cols-[auto_minmax(0,1fr)] gap-x-5 gap-y-2 border-b py-7 sm:grid-cols-[auto_minmax(0,1fr)_auto]"
            >
              <>
                <span className="font-display text-grey-light group-hover:text-accent-yellow text-[15px] font-extrabold transition-colors">
                  {s.n}
                </span>
                <div className="min-w-0">
                  <h3 className="text-[19px] font-extrabold">{s.t}</h3>
                  <p className="text-grey mt-2 max-w-xl text-[14px] leading-relaxed">{s.d}</p>
                </div>
                <span className="border-border text-ink-soft col-start-2 w-fit rounded-full border px-3 py-1 text-[11.5px] font-medium sm:col-start-3 sm:self-start">
                  {s.out}
                </span>
              </>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}