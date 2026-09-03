import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-gold-soft/50 bg-white/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="min-h-[76px] flex items-center justify-between gap-6">

          {/* Logo / Brand */}
          <Link
            to="/"
            className="group flex items-center gap-3 shrink-0"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gold text-gold">
              <span className="text-sm font-semibold">O</span>
            </span>

            <span className="font-display text-lg sm:text-xl tracking-wide text-charcoal">
              Oprah Realty
            </span>
          </Link>

          {/* Navigation */}
          <div className="flex items-center gap-4 sm:gap-6 lg:gap-9 text-xs sm:text-sm">
            <Link
              to="/#listings"
              className="relative py-2 text-charcoal transition-colors hover:text-gold
              after:absolute after:left-0 after:right-0 after:bottom-0 after:h-px
              after:origin-left after:scale-x-0 after:bg-gold
              after:transition-transform hover:after:scale-x-100"
            >
              Listings
            </Link>

            <Link
              to="/#partners"
              className="relative py-2 text-charcoal transition-colors hover:text-gold
              after:absolute after:left-0 after:right-0 after:bottom-0 after:h-px
              after:origin-left after:scale-x-0 after:bg-gold
              after:transition-transform hover:after:scale-x-100"
            >
              Partners
            </Link>

            <Link
              to="/#contact"
              className="hidden sm:block relative py-2 text-charcoal transition-colors hover:text-gold
              after:absolute after:left-0 after:right-0 after:bottom-0 after:h-px
              after:origin-left after:scale-x-0 after:bg-gold
              after:transition-transform hover:after:scale-x-100"
            >
              Contact
            </Link>

            <Link
              to="/#contact"
              className="hidden sm:inline-flex items-center justify-center
              border border-gold bg-gold px-4 sm:px-5 py-2.5
              text-xs font-medium text-white
              transition-all duration-200 hover:bg-white hover:text-gold"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}