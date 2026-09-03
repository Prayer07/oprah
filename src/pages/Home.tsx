// src/pages/Home.tsx
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ListingCard from '../components/ListingCard'
import Partners from '../components/Partners'
import ContactStrip from '../components/ContactStrip'
import Footer from '../components/Footer'
import { useListings } from '../hooks/useListings'

export default function Home() {
  const { data: listings, isLoading, error } = useListings()

  return (
    <div className="min-h-screen bg-white text-charcoal">
      <Navbar />

      <main>
        <Hero featured={listings?.[0]} />

        {/* Listings */}
        <section
          id="listings"
          className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

            {/* Section heading */}
            <div className="mb-12 flex flex-col justify-between gap-6 sm:mb-14 lg:flex-row lg:items-end">

              <div>
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-px w-10 bg-gold" />

                  <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-gold">
                    Our Properties
                  </span>
                </div>

                <h2 className="font-display text-4xl leading-tight text-charcoal sm:text-5xl lg:text-6xl">
                  Find your
                  <br className="hidden sm:block" />
                  <span className="text-gold"> perfect place.</span>
                </h2>
              </div>

              <p className="max-w-md text-sm leading-6 text-grey sm:text-base">
                Explore our selection of properties and discover spaces
                designed for the way you want to live.
              </p>
            </div>

            {/* Loading */}
            {isLoading && (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="overflow-hidden border border-gold-soft/50 bg-white"
                  >
                    <div className="aspect-[4/3] animate-pulse bg-ivory" />

                    <div className="space-y-3 p-6">
                      <div className="h-5 w-28 animate-pulse bg-ivory" />
                      <div className="h-6 w-3/4 animate-pulse bg-ivory" />
                      <div className="h-4 w-1/2 animate-pulse bg-ivory" />
                      <div className="h-px w-full animate-pulse bg-gold-soft/40" />
                      <div className="h-4 w-full animate-pulse bg-ivory" />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Error */}
            {error && (
              <div className="border border-gold-soft/60 bg-ivory px-6 py-10 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-gold/40">
                  <span className="text-gold">!</span>
                </div>

                <p className="text-sm text-grey">
                  Something went wrong loading listings.
                </p>
              </div>
            )}

            {/* Empty */}
            {listings?.length === 0 && (
              <div className="border border-gold-soft/60 bg-ivory px-6 py-14 text-center">
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-gold/40">
                  <svg
                    className="h-6 w-6 text-gold"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.3"
                  >
                    <path d="M3 11.5 12 4l9 7.5" />
                    <path d="M5 10.5V20h14v-9.5" />
                    <path d="M9 20v-5h6v5" />
                  </svg>
                </div>

                <h3 className="font-display text-2xl text-charcoal">
                  No listings yet
                </h3>

                <p className="mt-2 text-sm text-grey">
                  Check back soon for new properties.
                </p>
              </div>
            )}

            {/* Listings */}
            {listings && listings.length > 0 && (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {listings.map((listing) => (
                  <ListingCard
                    key={listing.id}
                    listing={listing}
                  />
                ))}
              </div>
            )}
          </div>
        </section>

        <Partners />

        <ContactStrip />
      </main>

      <Footer />
    </div>
  )
}