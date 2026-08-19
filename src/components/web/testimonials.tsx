import { Quote, Star } from "lucide-react";
import { Reveal } from "./reveal";

const quotes = [
  {
    text: "From website development to ecommerce, the team showed real expertise and professionalism. They behave like a partner who genuinely cares about the business, not a vendor billing hours.",
    name: "Alex Kriplani",
    role: "Founder, D2C retail brand",
  },
  {
    text: "Working with Bombay Blokes has been seamless from day one. They understood our customers faster than agencies we'd worked with for years, and the new site reflects it.",
    name: "Kaushik Shah",
    role: "Director, manufacturing",
  },
  {
    text: "Some of the best digital work we've seen in India. The website they built is quick, clean and easy for my team to update ourselves — that alone was worth it.",
    name: "Tilika Vispute",
    role: "Marketing Head, services",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container-bb">
        <Reveal>
          <p className="eyebrow">Client voice</p>
          <h2 className="mt-3 max-w-2xl text-[32px] leading-[1.06] sm:text-[42px]">
            What it's actually like to work with us.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {quotes.map((q, i) => (
            <Reveal key={q.name} delay={i * 90}>
              <figure className="border-border bg-card flex h-full flex-col rounded-[22px] border p-6 transition-transform duration-300 hover:-translate-y-1">
                <Quote className="text-accent-yellow h-6 w-6" />
                <blockquote className="text-ink-soft mt-4 flex-1 text-[14.5px] leading-relaxed">
                  "{q.text}"
                </blockquote>
                <figcaption className="border-border mt-6 border-t pt-5">
                  <div className="mb-2 flex gap-1">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className="fill-accent-yellow text-accent-yellow h-3 w-3" />
                    ))}
                  </div>
                  <p className="font-display text-[14px] font-extrabold">{q.name}</p>
                  <p className="text-grey text-[12.5px]">{q.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}