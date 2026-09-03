import { Link } from 'react-router-dom'
import type { Listing } from '../types/listing'

export default function ListingCard({ listing }: { listing: Listing }) {
  return (
    <Link
      to={`/listings/${listing.id}`}
      className="group block overflow-hidden border border-gold-soft/60 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-[0_18px_50px_rgba(180,140,40,0.12)]"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-white">

        {listing.images?.[0] ? (
          <img
            src={listing.images[0]}
            alt={listing.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center border-b border-gold-soft/40 bg-ivory">
            <div className="text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full border border-gold/30">
                <svg
                  className="h-5 w-5 text-gold"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <path d="M21 15l-5-5L5 21" />
                </svg>
              </div>

              <span className="text-[9px] uppercase tracking-[0.2em] text-gold/60">
                Property Image
              </span>
            </div>
          </div>
        )}

        {/* Gold image label */}
        <div className="absolute left-4 top-4 bg-white px-3 py-1.5">
          <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-gold">
            Property
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6">

        <div className="mb-3 flex items-start justify-between gap-4">
          <p className="text-lg font-semibold tracking-wide text-gold">
            ₦{listing.price.toLocaleString()}
          </p>

          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold-soft text-gold transition-colors group-hover:bg-gold group-hover:text-white">
            <svg
              className="h-3.5 w-3.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M5 12h14" />
              <path d="M13 6l6 6-6 6" />
            </svg>
          </span>
        </div>

        <h3 className="font-display text-xl leading-snug text-charcoal transition-colors group-hover:text-gold">
          {listing.title}
        </h3>

        <div className="mt-2 flex items-center gap-2">
          <svg
            className="h-3.5 w-3.5 shrink-0 text-gold"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z" />
            <circle cx="12" cy="9" r="2.2" />
          </svg>

          <p className="text-sm text-grey">
            {listing.location}
          </p>
        </div>

        <div className="my-5 h-px bg-gold-soft/50" />

        <p className="text-sm leading-6 text-grey">
          {listing.brief.length > 90
            ? listing.brief.slice(0, 90) + '…'
            : listing.brief}
        </p>

        <div className="mt-5 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.15em] text-gold">
          View Property

          <svg
            className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M5 12h14" />
            <path d="M13 6l6 6-6 6" />
          </svg>
        </div>
      </div>
    </Link>
  )
}