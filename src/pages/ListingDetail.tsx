// src/pages/ListingDetail.tsx
import { useParams, Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { supabase } from '../lib/supabaseClient'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import type { Listing } from '../types/listing'

export default function ListingDetail() {
  const { id } = useParams<{ id: string }>()

  const { data: listing, isLoading } = useQuery({
    queryKey: ['listing', id],
    queryFn: async (): Promise<Listing> => {
      const { data, error } = await supabase
        .from('listings')
        .select('*')
        .eq('id', id)
        .single()

      if (error) throw error

      return data
    },
    enabled: !!id,
  })

  if (isLoading) {
    return (
      <>
        <Navbar />

        <main className="min-h-[70vh] bg-white">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
            <div className="h-4 w-28 animate-pulse bg-ivory" />

            <div className="mt-8 h-12 max-w-xl animate-pulse bg-ivory" />

            <div className="mt-4 h-5 w-48 animate-pulse bg-ivory" />

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="aspect-[4/3] animate-pulse bg-ivory"
                />
              ))}
            </div>
          </div>
        </main>

        <Footer />
      </>
    )
  }

  if (!listing) {
    return (
      <>
        <Navbar />

        <main className="flex min-h-[70vh] items-center justify-center bg-white px-5">
          <div className="text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-gold/40">
              <span className="font-display text-2xl text-gold">O</span>
            </div>

            <h1 className="font-display text-3xl text-charcoal sm:text-4xl">
              Listing not found
            </h1>

            <p className="mt-3 text-sm text-grey">
              The property you're looking for may no longer be available.
            </p>

            <Link
              to="/"
              className="mt-7 inline-flex items-center gap-2 border border-gold bg-gold px-6 py-3 text-sm text-white transition-colors hover:bg-white hover:text-gold"
            >
              ← Back home
            </Link>
          </div>
        </main>

        <Footer />
      </>
    )
  }

  return (
    <div className="min-h-screen bg-white text-charcoal">
      <Navbar />

      <main>
        {/* Header */}
        <section className="border-b border-gold-soft/50 bg-ivory">
          <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20">

            <Link
              to="/"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-gold transition-colors hover:text-charcoal"
            >
              ← Back to listings
            </Link>

            <div className="mt-8 max-w-4xl">

              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-10 bg-gold" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-gold">
                  Property Details
                </span>
              </div>

              <h1 className="font-display text-4xl leading-tight text-charcoal sm:text-5xl lg:text-7xl">
                {listing.title}
              </h1>

              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
                <p className="text-2xl font-semibold text-gold sm:text-3xl">
                  ₦{listing.price.toLocaleString()}
                </p>

                <span className="hidden h-5 w-px bg-gold-soft sm:block" />

                <div className="flex items-center gap-2 text-sm text-grey">
                  <svg
                    className="h-4 w-4 text-gold"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z" />
                    <circle cx="12" cy="9" r="2.2" />
                  </svg>

                  {listing.location}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Images */}
        <section className="bg-white py-8 sm:py-10 lg:py-12">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

            {listing.images?.length > 0 ? (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {listing.images.map((img, i) => (
                  <div
                    key={i}
                    className={`group relative overflow-hidden bg-ivory ${
                      i === 0
                        ? 'sm:col-span-2 lg:row-span-2'
                        : ''
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${listing.title} ${i + 1}`}
                      className={`w-full object-cover transition-transform duration-500 group-hover:scale-[1.02] ${
                        i === 0
                          ? 'aspect-[4/3] h-full min-h-[300px] lg:min-h-[580px]'
                          : 'aspect-[4/3]'
                      }`}
                    />

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    <span className="absolute bottom-4 left-4 bg-white px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-gold">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex min-h-[400px] items-center justify-center border border-gold-soft/60 bg-ivory">
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-gold/40">
                    <svg
                      className="h-6 w-6 text-gold"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.3"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <path d="M21 15l-5-5L5 21" />
                    </svg>
                  </div>

                  <p className="text-xs uppercase tracking-[0.2em] text-gold/70">
                    Property images unavailable
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Description */}
        <section className="border-t border-gold-soft/50 bg-ivory py-16 sm:py-20 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-10">

            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-10 bg-gold" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-gold">
                  About This Property
                </span>
              </div>

              <h2 className="font-display text-3xl leading-tight sm:text-4xl">
                A place to
                <br />
                <span className="text-gold">call home.</span>
              </h2>
            </div>

            <div>
              <p className="max-w-2xl text-base leading-8 text-grey sm:text-lg">
                {listing.brief}
              </p>

              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-3 bg-gold px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-charcoal"
              >
                Enquire About This Property

                <span>→</span>
              </a>
            </div>

          </div>
        </section>

        {/* Contact CTA */}
        <section
          id="contact"
          className="bg-gold px-5 py-14 sm:px-8 sm:py-16 lg:px-10"
        >
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 sm:flex-row sm:items-center">

            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/70">
                Interested in this property?
              </p>

              <h2 className="mt-2 font-display text-3xl text-white sm:text-4xl">
                Let's talk.
              </h2>
            </div>

            <a
              href="tel:08076543070"
              className="inline-flex w-fit items-center gap-3 border border-white bg-white px-6 py-3.5 text-sm font-medium text-gold transition-colors hover:bg-transparent hover:text-white"
            >
              📞 08076543070
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}