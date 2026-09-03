import { SiteNav } from "@/components/web/site-nav";
import { CtaFooter } from "@/components/web/cta-footer";
import { Check } from "lucide-react";
import Link from "next/link";
import { Toaster } from "@/components/ui/sonner";

export default function ThankYouPage() {
  return (
    <main className="bg-background overflow-x-hidden min-h-screen flex flex-col justify-between">
      <SiteNav />

      <section className="py-24 sm:py-32 flex-1 flex items-center justify-center px-4">
        <div className="border-border bg-card max-w-lg w-full rounded-[26px] border p-8 sm:p-12 shadow-[0_28px_70px_-40px_rgba(29,29,29,0.45)] text-center flex flex-col items-center">
          <span className="bg-accent-yellow text-ink grid h-14 w-14 place-items-center rounded-full">
            <Check className="h-7 w-7" />
          </span>
          <h1 className="font-display mt-6 text-2xl sm:text-3xl font-extrabold text-foreground">
            Thanks — we've got it.
          </h1>
          <p className="text-grey mt-3 text-base leading-relaxed">
            Your audit lands in your inbox within 24 hours, along with a call from a senior strategist.
          </p>
          <div className="mt-8">
            <Link
              href="/"
              className="bg-accent-yellow text-ink inline-flex items-center justify-center rounded-xl px-6 py-3.5 text-sm font-bold transition-all hover:-translate-y-0.5 hover:shadow-[0_16px_32px_-16px_rgba(250,179,30,0.9)]"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      <CtaFooter />
      <Toaster position="top-center" />
    </main>
  );
}
