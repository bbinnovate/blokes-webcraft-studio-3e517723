"use client"
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const links = [
  { label: "Work", href: "#work" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "bg-background/85 border-b border-border backdrop-blur-xl" : "bg-transparent",
      )}
    >
      <div className="container grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-3.5 lg:flex lg:justify-between">
        <Link href="/">
          <Image
            src="/assets/bblogo.webp"
            alt="Bombay Blokes Logo"
            width={210}
            height={80}
            className="object-cover transition-opacity duration-300"
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-ink-soft hover:text-ink relative text-sm font-medium transition-colors after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:origin-right after:scale-x-0 after:bg-accent-yellow after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#quote"
            className="bg-ink text-primary-foreground hover:bg-ink-soft hidden rounded-full px-5 py-2.5 text-sm font-semibold transition-all hover:-translate-y-0.5 sm:inline-flex"
          >
            Get a free website audit
          </a>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="border-border grid h-10 w-10 shrink-0 place-items-center rounded-full border lg:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-border bg-background animate-fade-in border-t lg:hidden">
          <div className="container-bb flex flex-col py-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-border/70 border-b py-3 text-sm font-medium last:border-0"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#quote"
              onClick={() => setOpen(false)}
              className="bg-ink text-primary-foreground mt-3 rounded-full px-5 py-3 text-center text-sm font-semibold"
            >
              Get a free website audit
            </a>
          </div>
        </div>
      )}
    </header>
  );
}