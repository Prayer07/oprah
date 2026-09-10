const PARTNERS = [
  'GINORMOUS Investments Ltd',
  'RESECO AFRICA',
  'LUSH City Homes and Properties Ltd',
  'GEOFORT',
  'Greensphere Realty',
]

export default function Partners() {
  return (
    <section
      id="partners"
      className="border-y border-gold-soft/50 bg-ivory py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-gold" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-gold">
              Trusted Network
            </span>

            <span className="h-px w-8 bg-gold" />
          </div>

          <h2 className="font-display text-3xl leading-tight text-charcoal sm:text-4xl lg:text-5xl">
            Our Partners
          </h2>

          <p className="mt-5 text-sm leading-6 text-grey sm:text-base">
            Working alongside trusted names in real estate and investment
            to help our clients discover exceptional opportunities.
          </p>
        </div>

        {/* Partner marquee */}
        <div className="mt-12 overflow-hidden border-y border-gold-soft/60 bg-white py-8">
          <div className="flex w-max animate-marquee">
            {[...PARTNERS, ...PARTNERS].map((name, index) => (
              <div
                key={`${name}-${index}`}
                className="mx-3 flex min-w-[220px] items-center justify-center border border-gold-soft/60 px-8 py-6 sm:min-w-[260px]"
              >
                <span className="text-center text-sm font-medium leading-5 text-charcoal">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}