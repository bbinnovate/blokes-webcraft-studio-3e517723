import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { Reveal } from "./reveal";
import Image from "next/image";
import Link from "next/link";

export function CtaFooter() {
  return (
    <>
      <section className="py-6 sm:py-8 lg:py-8">
        <div className="container">
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
                       href="tel:+919833037816"
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

     <footer className="w-full">
      <div className="mx-auto container py-5 mt-3 ">
        {/* Top Section */}
      {/* Top Section */}
<div className="flex items-center justify-between w-full">
  {/* Logo */}
  <div className="hidden sm:flex justify-start relative">
    <Link href="/">
      <Image
        src="/assets/bblogo.webp"
        alt="Bombay Blokes Logo"
        width={250}
        height={60}
        className="object-contain"
      />
    </Link>
  </div>

  {/* Social Icons - Far Right */}
  <div className="hidden sm:flex items-center gap-5 ml-auto">
    {/* Instagram */}
    <a
      href="https://www.instagram.com/bombay_blokes"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram"
       className="text-black transition-colors duration-300 hover:text-[#FAB31E]"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    </a>

    {/* LinkedIn */}
   <a
  href="https://in.linkedin.com/company/bombay-blokes-digital-solutions-llp"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="LinkedIn"
  className="text-black transition-colors duration-300 hover:text-[#FAB31E]"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
</a>
  </div>

    {/* mobiel Social Icons - Far Right */}
  <div className="flex items-center lg:gap-5 gap-3 lg:hidden">
    {/* Instagram */}
    <a
      href="https://www.instagram.com/bombay_blokes"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram"
       className="text-black transition-colors duration-300 hover:text-[#FAB31E]"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    </a>

    {/* LinkedIn */}
   <a
  href="https://in.linkedin.com/company/bombay-blokes-digital-solutions-llp"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="LinkedIn"
  className="text-black transition-colors duration-300 hover:text-[#FAB31E]"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
</a>
  </div>
</div>

        {/* Bottom Section */}
     <div className="body4 lg:mt-6 mt-2 border-t pt-4 lg:pt-1 flex flex-col gap-4 md:flex-row md:justify-center md:items-center black-text text-sm">
  {/* Copyright */}
  <p className="text-center mt-2 body4">
    Copyright ©{new Date().getFullYear()} Bombay Blokes. All rights
    reserved.
  </p>
</div>
      </div>
    </footer>
    </>
  );
}