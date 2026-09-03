import { Toaster } from "@/components/ui/sonner";
import { SiteNav } from "@/components/web/site-nav";
import { Hero } from "@/components/web/hero";
import { LogoMarquee } from "@/components/web/logo-marquee";
import { Transformation } from "@/components/web/transformation";
import { Capabilities } from "@/components/web/capabilities";
import { CaseStudies } from "@/components/web/case-studies";
import { ResponsiveTech } from "@/components/web/responsive-tech";
import { Process } from "@/components/web/process";
import { Testimonials } from "@/components/web/testimonials";
import { Faq } from "@/components/web/faq";
import { CtaFooter } from "@/components/web/cta-footer";
import Mobilecta from "@/components/web/Mobilecta";
import SectionPopup from "@/components/web/SectionPopup";

export default function Home() {
  return (
    <main className="bg-background overflow-x-hidden">
      <SiteNav />
      <Hero />
      <LogoMarquee />
      <Transformation />
      <Capabilities />
      <CaseStudies />
      <ResponsiveTech />
      <Process />
      <Testimonials />
      <Faq />
      <CtaFooter />
      <Mobilecta />
      <SectionPopup />
      <Toaster position="top-center" />
    </main>
  );
}