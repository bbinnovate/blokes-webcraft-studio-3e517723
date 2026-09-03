"use client";

const logos = [
  "/assets/lp-logos/logo-lp(1).png",
  "/assets/lp-logos/logo-lp(2).png",
  "/assets/lp-logos/logo-lp(3).png",
  "/assets/lp-logos/logo-lp(4).png",
  "/assets/lp-logos/logo-lp(5).png",
  "/assets/lp-logos/logo-lp(6).png",
  "/assets/lp-logos/logo-lp(7).png",
  "/assets/lp-logos/logo-lp(8).png",
  "/assets/lp-logos/logo-lp(9).png",
  "/assets/lp-logos/logo-lp(10).png",

  "/assets/lp-logos/logo-lp(11).png",
  "/assets/lp-logos/logo-lp(12).png",
  "/assets/lp-logos/logo-lp(13).png",
  "/assets/lp-logos/logo-lp(14).png",
  "/assets/lp-logos/logo-lp(15).png",
  "/assets/lp-logos/logo-lp(16).png",
  "/assets/lp-logos/logo-lp(17).png",
  "/assets/lp-logos/logo-lp(18).png",
  "/assets/lp-logos/logo-lp(19).png",
  "/assets/lp-logos/logo-lp(20).png",
];

const firstRow = logos.slice(0, 10);
const secondRow = logos.slice(10, 20);

export function LogoMarquee() {
  return (
    <section
     
      className="overflow-hidden border-y bg-sand py-6 sm:py-8 lg:py-8"
    >
      <div className="container">

        {/* Heading */}
        <div className="mb-8 mx-auto w-full text-center">
               <h2 className="mt-3 text-[32px] leading-[1.06] sm:text-[42px]">
              Brands That Trust Our Work
            </h2>
          
        </div>

        {/* ROW 1 — Logos 1 to 10 */}
        <div className="group relative mb-6 overflow-hidden">
          <div className="flex w-max gap-6 animate-marquee">
            {[...firstRow, ...firstRow].map((logo, i) => (
              <LogoCard logo={logo} key={i} />
            ))}
          </div>
        </div>

        {/* ROW 2 — Logos 11 to 20 */}
        <div className="group relative overflow-hidden">
          <div className="flex w-max gap-6 animate-marquee-reverse">
            {[...secondRow, ...secondRow].map((logo, i) => (
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
        flex-shrink-0
        items-center
        justify-center
        overflow-hidden
        border-none
        p-3

        w-[120px]
        h-[70px]

        sm:w-[150px]
        sm:h-[80px]

        md:w-[170px]
        md:h-[90px]

        lg:w-[150px]
        lg:h-[80px]
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