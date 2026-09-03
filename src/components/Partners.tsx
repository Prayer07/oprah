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

        {/* Partner list */}
        <div className="mt-12 grid grid-cols-1 border border-gold-soft/60 bg-white sm:grid-cols-2 lg:grid-cols-5">

          {PARTNERS.map((name, index) => (
            <div
              key={name}
              className={`group flex min-h-[110px] items-center justify-center px-6 text-center transition-colors hover:bg-gold ${
                index !== PARTNERS.length - 1
                  ? 'border-b border-gold-soft/60 sm:border-r lg:border-b-0'
                  : ''
              }`}
            >
              <div>
                <span className="mb-3 block text-[9px] font-semibold tracking-[0.2em] text-gold transition-colors group-hover:text-white">
                  0{index + 1}
                </span>

                <span className="text-sm font-medium leading-5 text-charcoal transition-colors group-hover:text-white">
                  {name}
                </span>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}