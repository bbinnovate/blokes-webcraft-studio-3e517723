const brands = [
  "SOEZI",
  "COLORBOX",
  "MY SUIT TAILOR",
  "PARLE AGRO",
  "MASON HOME",
  "VIRITAAJ",
  "BROOKS",
  "VPADEL",
  "LEARNATHON",
  "VERO MODA",
];

export function LogoMarquee() {
  return (
    <section className="border-border border-y py-8">
      <p className="eyebrow container-bb">Brands that trust our work</p>
      <div className="no-scrollbar relative mt-5 overflow-hidden">
        <div className="animate-marquee flex w-max gap-12 pr-12">
          {[...brands, ...brands].map((b, i) => (
            <span
              key={`${b}-${i}`}
              className="font-display text-grey-light hover:text-ink text-lg font-extrabold tracking-tight whitespace-nowrap transition-colors sm:text-xl"
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}