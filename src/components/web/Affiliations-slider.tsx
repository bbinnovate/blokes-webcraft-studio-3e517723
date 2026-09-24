"use client";

const logos = [
  "/assets/lp-logos/framer.png",
  "/assets/lp-logos/gokwik.png",
  "/assets/lp-logos/razorpay.png",
  "/assets/lp-logos/shopify.png",
  "/assets/lp-logos/shiprocket.png",
  "/assets/lp-logos/webflow.png",
];

export function AffiliationsSlider() {
  return (
    <section className="overflow-hidden border-y bg-sand py-6 sm:py-8 lg:py-8">
      <div className="container">

        {/* Heading */}
        <div className="mb-8 mx-auto w-full text-center">
          <h2 className="mt-3 text-[32px] leading-[1.06] sm:text-[42px]">
           Our Affiliations
          </h2>
        </div>

        {/* ONE ROW — 6 Logos */}
        <div className="group relative overflow-hidden">
          <div className="flex w-max gap-6 animate-marquee">
            {[...logos, ...logos].map((logo, i) => (
              <LogoCard logo={logo} key={i} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

function LogoCard({ logo }: { logo: string }) {
  return (
    <div
      className="
        flex
        shrink-0
        items-center
        justify-center
        overflow-hidden
        border-none
        p-2

        w-[150px]
        h-[80px]

        sm:w-[190px]
        sm:h-[95px]

        md:w-[210px]
        md:h-[105px]

        lg:w-[190px]
        lg:h-[95px]
      "
    >
      <img
        src={logo}
        alt=""
        className="h-full w-full object-contain"
      />
    </div>
  );
}