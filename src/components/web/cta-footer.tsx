import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { Reveal } from "./reveal";

export function CtaFooter() {
  return (
    <>
      <section className="pb-20 lg:pb-28">
        <div className="container-bb">
          <Reveal>
            <div className="bg-accent-yellow text-ink relative overflow-hidden rounded-[28px] px-6 py-12 sm:px-12 sm:py-16">
              <div
                aria-hidden
                className="pointer-events-none absolute -top-24 -right-16 h-72 w-72 rounded-full bg-white/25 blur-3xl"
              />
              <div className="relative grid gap-8 lg:grid-cols-[1.1fr_auto] lg:items-end">
                <div>
                  <h2 className="max-w-2xl text-[32px] leading-[1.05] sm:text-[46px]">
                    Let's find out what your website is costing you.
                  </h2>
                  <p className="mt-4 max-w-xl text-[15px] leading-relaxed opacity-80">
                    Send us your URL. We'll return a free audit covering speed, mobile experience,
                    messaging and the exact leaks losing you enquiries — plus what we'd do about
                    it.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="#quote"
                    className="bg-ink text-primary-foreground group inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold transition-transform hover:-translate-y-0.5"
                  >
                    Get my free website audit
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                  <a
                    href="tel:+919000000000"
                    className="border-ink/25 hover:bg-ink/5 inline-flex items-center gap-2 rounded-full border px-6 py-3.5 text-sm font-bold transition-colors"
                  >
                    <Phone className="h-4 w-4" /> Talk to us
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="bg-ink text-primary-foreground py-14">
        <div className="container-bb grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="bg-accent-yellow text-ink font-display grid h-8 w-8 place-items-center rounded-lg text-sm font-extrabold">
                BB
              </span>
              <span className="font-display text-[15px] font-extrabold">Bombay Blokes</span>
            </div>
            <p className="text-grey-light mt-4 max-w-sm text-[14px] leading-relaxed">
              A web design and development agency in Mumbai building fast, search-ready websites
              and Shopify stores for brands that measure marketing in revenue.
            </p>
          </div>

          <div>
            <p className="eyebrow text-grey-light">Services</p>
            <ul className="text-grey-light mt-4 space-y-2.5 text-[14px]">
              <li>Website design & development</li>
              <li>Shopify ecommerce development</li>
              <li>Website redesign</li>
              <li>Custom web development</li>
              <li>Website care & optimisation</li>
            </ul>
          </div>

          <div>
            <p className="eyebrow text-grey-light">Get in touch</p>
            <ul className="text-grey-light mt-4 space-y-3 text-[14px]">
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0" /> hello@bombayblokes.com
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0" /> +91 90000 00000
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" /> Andheri West, Mumbai, Maharashtra
              </li>
            </ul>
          </div>
        </div>
        <div className="container-bb text-grey mt-10 border-t border-white/10 pt-6 text-[12.5px]">
          © {new Date().getFullYear()} Bombay Blokes. All rights reserved.
        </div>
      </footer>
    </>
  );
}