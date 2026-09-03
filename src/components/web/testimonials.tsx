"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight, Quote, Star } from "lucide-react";
import { Reveal } from "./reveal";

const quotes = [
  {
    text: "I have been working with Bombay Blokes for app development and marketing, and it’s been a really solid experience. What stood out to me most was the trust and transparency (hard to find). The team has been very patient with all my requirements, kept me updated regularly, and delivered things pretty quickly without compromising on quality. Janki, Yash, Siddesh, and Khyaati did a great job building our mobile app from scratch within a tight timeline. On the marketing side, Karishma and Tisha went above and beyond to deeply understand my brand and get the narrative right. Overall, the team has been easy to work with, open to feedback, and willing to go the extra mile to get things right.",
    name: "Akshat Adani",
    role: "App Development & Marketing",
  },
  {
    text: "I recently had the pleasure of working with Bombay Blokes, and I must say, they are an outstanding digital marketing agency. From the moment I contacted them for website design and development, they displayed utmost professionalism and dedication to delivering exceptional results. First and foremost, the team at Bombay Blokes is incredibly talented and knowledgeable. They took the time to understand my vision for the website and translated it into a stunning reality that exceeded my expectations. The team was always responsive, attentive, and ensured that all my requirements were met. They kept me updated at every stage and provided valuable insights and suggestions that greatly enhanced the overall user experience of my website. I wholeheartedly recommend Bombay Blokes for anyone seeking top-notch website development and designing services.",
    name: "Harjagit Dhanjal",
    role: "Website Design & Development",
  },
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
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    containScroll: "trimSnaps",
    duration: 30,
  });

  const [selected, setSelected] = useState(0);

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  /*
   * AUTOPLAY
   * Moves to the next testimonial every 4 seconds.
   * Pauses while the user is hovering over the slider.
   */
  useEffect(() => {
    if (!emblaApi) return;

    let interval: ReturnType<typeof setInterval>;

    const startAutoplay = () => {
      clearInterval(interval);

      interval = setInterval(() => {
        if (!emblaApi) return;
        emblaApi.scrollNext();
      }, 4000);
    };

    const stopAutoplay = () => {
      clearInterval(interval);
    };

    startAutoplay();

    emblaApi.on("pointerDown", stopAutoplay);
    emblaApi.on("pointerUp", startAutoplay);

    return () => {
      clearInterval(interval);
      emblaApi.off("pointerDown", stopAutoplay);
      emblaApi.off("pointerUp", startAutoplay);
    };
  }, [emblaApi]);

  /*
   * Update active dot
   */
  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelected(emblaApi.selectedScrollSnap());
    };

    onSelect();

    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section className="py-6 sm:py-8 lg:py-8">
      <div className="container">
        <Reveal>
          <div className="flex items-end justify-between">
            <div>
              <p className="eyebrow">Client voice</p>

              <h2 className="mt-3 max-w-2xl text-[32px] leading-[1.06] sm:text-[42px]">
                What it's actually like to work with us.
              </h2>
            </div>

            {/* Desktop arrows */}
            <div className="hidden gap-2 sm:flex">
              <button
                type="button"
                aria-label="Previous testimonial"
                onClick={scrollPrev}
                className="border-border grid size-11 place-items-center rounded-full border transition-colors hover:bg-secondary"
              >
                <ArrowLeft className="size-4" />
              </button>

              <button
                type="button"
                aria-label="Next testimonial"
                onClick={scrollNext}
                className="border-border grid size-11 place-items-center rounded-full border transition-colors hover:bg-secondary"
              >
                <ArrowRight className="size-4" />
              </button>
            </div>
          </div>
        </Reveal>

        {/* Slider */}
        <div
          className="mt-12 overflow-hidden"
          ref={emblaRef}
          onMouseEnter={() => emblaApi?.off("pointerDown", () => {})}
        >
          <div className="flex items-stretch">
            {quotes.map((q, i) => (
              <div
                key={`${q.name}-${i}`}
                className="flex h-[300px] min-w-0 flex-[0_0_100%] pr-5 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
              >
                <Reveal delay={i * 90} className="flex h-full w-full">
                  <figure className="border-border bg-card flex h-full w-full flex-col rounded-[22px] border p-6 transition-transform duration-300 hover:-translate-y-1">
                    <Quote className="text-accent-yellow h-6 w-6 shrink-0" />

                    <blockquote className="text-ink-soft mt-4 min-h-0 flex-1 overflow-hidden text-[14.5px] leading-relaxed">
                      "{q.text}"
                    </blockquote>

                    <figcaption className="border-border mt-6 shrink-0 border-t pt-5">
                      <div className="mb-2 flex gap-1">
                        {Array.from({ length: 5 }).map((_, s) => (
                          <Star
                            key={s}
                            className="fill-accent-yellow text-accent-yellow h-3 w-3"
                          />
                        ))}
                      </div>

                      <p className="font-display text-[14px] font-extrabold">
                        {q.name}
                      </p>

                      <p className="text-grey text-[12.5px]">
                        {q.role}
                      </p>
                    </figcaption>
                  </figure>
                </Reveal>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile arrows */}
        <div className="mt-6 flex justify-center gap-2 sm:hidden">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={scrollPrev}
            className="border-border grid size-11 place-items-center rounded-full border transition-colors hover:bg-secondary"
          >
            <ArrowLeft className="size-4" />
          </button>

          <button
            type="button"
            aria-label="Next testimonial"
            onClick={scrollNext}
            className="border-border grid size-11 place-items-center rounded-full border transition-colors hover:bg-secondary"
          >
            <ArrowRight className="size-4" />
          </button>
        </div>

        {/* Dots */}
        <div className="mt-7 flex justify-center gap-2">
          {quotes.map((q, i) => (
            <button
              key={`dot-${q.name}-${i}`}
              type="button"
              aria-label={`Go to testimonial ${i + 1}`}
              onClick={() => emblaApi?.scrollTo(i)}
              className={`h-1.5 rounded-full transition-all ${
                selected === i
                  ? "w-8 bg-secondary"
                  : "bg-border w-3"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}