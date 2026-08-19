import { useState } from "react";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { toast } from "sonner";

const services = [
  "New website design + build",
  "Website redesign",
  "Shopify / ecommerce store",
  "Web app or custom platform",
];

const budgets = [
  "Under ₹1 lakh",
  "₹1 – 3 lakh",
  "₹3 – 8 lakh",
  "₹8 lakh+",
  "Not sure yet",
];

export function LeadForm({ id = "quote" }: { id?: string }) {
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    window.setTimeout(() => {
      setStatus("done");
      toast.success("Request received", {
        description: "A senior strategist will call you within one working day.",
      });
    }, 900);
  }

  const field =
    "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-ink outline-none transition-all placeholder:text-grey-light focus:border-ink focus:ring-4 focus:ring-accent-yellow/30";

  return (
    <div
      id={id}
      className="border-border bg-card scroll-mt-28 rounded-[26px] border p-5 shadow-[0_28px_70px_-40px_rgba(29,29,29,0.45)] sm:p-7"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h2 className="text-[19px] leading-tight font-extrabold sm:text-[21px]">
            Get a free website audit
          </h2>
          <p className="text-grey mt-1.5 text-[13px] leading-relaxed">
            Tell us where your site is today. We'll send a page-by-page teardown with what's
            costing you enquiries.
          </p>
        </div>
        <span className="bg-accent-yellow text-ink hidden shrink-0 rounded-full px-3 py-1 text-[11px] font-bold sm:block">
          Free
        </span>
      </div>

      {status === "done" ? (
        <div className="border-border bg-secondary mt-6 flex flex-col items-center rounded-2xl border p-8 text-center">
          <span className="bg-accent-yellow text-ink grid h-11 w-11 place-items-center rounded-full">
            <Check className="h-5 w-5" />
          </span>
          <p className="font-display mt-4 text-lg font-extrabold">Thanks — we've got it.</p>
          <p className="text-grey mt-1.5 text-sm">
            Your audit lands in your inbox within 24 hours, along with a call from a senior
            strategist.
          </p>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="mt-5 grid gap-3">
          <div className="grid gap-3 sm:grid-cols-2">
            <input required name="name" placeholder="Full name" className={field} />
            <input
              required
              name="phone"
              type="tel"
              inputMode="tel"
              placeholder="Phone / WhatsApp"
              className={field}
            />
          </div>
          <input required name="email" type="email" placeholder="Work email" className={field} />
          <input name="website" placeholder="Current website (optional)" className={field} />
          <select required name="service" defaultValue="" className={field}>
            <option value="" disabled>
              What do you need built?
            </option>
            {services.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
          <select required name="budget" defaultValue="" className={field}>
            <option value="" disabled>
              Approximate budget
            </option>
            {budgets.map((b) => (
              <option key={b}>{b}</option>
            ))}
          </select>
          <button
            type="submit"
            disabled={status === "loading"}
            className="bg-accent-yellow text-ink group mt-1 inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-bold transition-all hover:-translate-y-0.5 hover:shadow-[0_16px_32px_-16px_rgba(250,179,30,0.9)] disabled:opacity-70"
          >
            {status === "loading" ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <>
                Request my free audit
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </>
            )}
          </button>
          <p className="text-grey-light text-center text-[11px] leading-relaxed">
            No sales pressure. No spam. Your details stay with our Mumbai team.
          </p>
        </form>
      )}
    </div>
  );
}