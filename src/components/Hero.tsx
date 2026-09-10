import type { Listing } from '../types/listing'

interface HeroProps {
  featured?: Listing
}

export default function Hero({ featured }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-ivory">
      <div className="mx-auto grid min-h-[calc(100vh-80px)] max-w-[1400px] grid-cols-1 lg:grid-cols-2">

        {/* LEFT — TEXT */}
        <div className="flex items-center px-6 py-16 sm:px-10 lg:px-14 xl:px-20">
          <div className="max-w-2xl">

            <div className="mb-7 flex items-center gap-4">
              <span className="h-px w-10 bg-gold" />
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                Premium Real Estate
              </p>
            </div>

            <h1 className="font-display text-5xl leading-[0.95] tracking-[-0.04em] text-charcoal sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
              Find a place
              <br />
              <span className="text-gold">
                worth calling
              </span>
              <br />
              home.
            </h1>

            <p className="mt-8 max-w-lg text-base leading-7 text-grey sm:text-lg">
              Discover exceptional homes and properties selected with your
              future in mind.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="/listings"
                className="bg-gold px-7 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:bg-gold-dark"
              >
                Explore Listings
              </a>

              {/* <a
                href="#contact"
                className="border border-gold px-7 py-3.5 text-sm font-medium text-gold transition-all duration-300 hover:bg-gold hover:text-white"
              >
                Contact Us
              </a> */}
            </div>

            {featured && (
              <div className="mt-10 flex items-center gap-6 border-t border-gold-soft pt-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-grey">
                    Featured Property
                  </p>

                  <p className="mt-1 text-sm font-medium text-charcoal">
                    {featured.location}
                  </p>
                </div>

                <div className="h-8 w-px bg-gold-soft" />

                <p className="text-lg font-semibold text-gold">
                  ₦{featured.price.toLocaleString()}
                </p>
              </div>
            )}

          </div>
        </div>

        {/* RIGHT — LARGE IMAGE */}
        <div className="relative min-h-[500px] overflow-hidden lg:min-h-0">

          {featured?.images?.[0] ? (
            <img
              src={featured.images[0]}
              alt={featured.title}
              className="h-full w-full object-cover"
            />
          ) : (
            <img
              src="/omo.png"
              alt="Luxury property"
              className="h-full w-full object-cover"
            />
          )}

          {/* Elegant overlay */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ivory/20 via-transparent to-charcoal/10" />

          {/* Gold frame */}
          <div className="pointer-events-none absolute inset-5 border border-white/40 sm:inset-8" />

          {/* Property label */}
          {featured && (
            <div className="absolute bottom-10 left-10 right-10 flex items-end justify-between">
              <div className="max-w-xs bg-charcoal/80 px-5 py-4 backdrop-blur-sm">
                <p className="text-[10px] uppercase tracking-[0.25em] text-gold-light">
                  Featured Listing
                </p>

                <p className="mt-1 font-display text-xl text-white">
                  {featured.title}
                </p>
              </div>
            </div>
          )}

        </div>
      </div>

      {/* Decorative gold line */}
      <div className="absolute bottom-0 left-0 h-px w-full bg-gold-soft" />
    </section>
  )
}