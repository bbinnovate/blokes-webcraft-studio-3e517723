"use client";

import { SiteNav } from "@/components/web/site-nav";
import { CtaFooter } from "@/components/web/cta-footer";
import { Check } from "lucide-react";
import { Toaster } from "@/components/ui/sonner";
import { motion } from "framer-motion";
import { useEffect } from "react";

/* 🎉 CONFETTI ON PAGE LOAD */
const shootBottomSideConfetti = async () => {
  const confetti = (await import("canvas-confetti")).default;

  const duration = 1500;
  const end = Date.now() + duration;

  const colors = ["#f6a81c", "#ff4d6d", "#ffffff"];

  (function frame() {
    confetti({
      particleCount: 6,
      angle: 60,
      spread: 70,
      origin: { x: 0, y: 1 },
      colors,
      startVelocity: 60,
      gravity: 0.9,
    });

    confetti({
      particleCount: 6,
      angle: 120,
      spread: 70,
      origin: { x: 1, y: 1 },
      colors,
      startVelocity: 60,
      gravity: 0.9,
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
};

export default function ThankYouPage() {
  useEffect(() => {
    shootBottomSideConfetti();
  }, []);

  return (
    <main className="bg-background overflow-x-hidden flex flex-col min-h-screen">
      <SiteNav />

      <section className="py-24 sm:py-32 flex-1 flex items-center justify-center px-4 min-h-screen">
        <div className="w-full text-center flex flex-col items-center">

          {/* Check Animation */}
          <motion.span
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 180,
              damping: 12,
              delay: 0.2,
            }}
            className="bg-accent-yellow text-ink grid h-14 w-14 place-items-center rounded-full"
          >
            <motion.div
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.45,
                ease: "easeOut",
              }}
            >
              <Check className="h-7 w-7" />
            </motion.div>
          </motion.span>

          {/* Heading Animation */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.5,
              ease: "easeOut",
            }}
            className="font-display mt-8 font-extrabold text-foreground"
            style={{
              fontSize: "clamp(48px, 6vw, 88px)",
              lineHeight: 1.05,
            }}
          >
            Thanks we&apos;ve got it.
          </motion.h1>

          {/* Description Animation */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.8,
              ease: "easeOut",
            }}
            className="text-grey mt-5 max-w-2xl text-base sm:text-lg leading-relaxed"
          >
            Your audit lands in your inbox within 24 hours, along with a call
            from a senior strategist.
          </motion.p>

        </div>
      </section>

      <CtaFooter />

      <Toaster position="top-center" />
    </main>
  );
}