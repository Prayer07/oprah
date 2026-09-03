export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-gold px-5 py-8 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">

        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/50 text-xs font-semibold text-white">
            O
          </span>

          <span className="font-display text-sm tracking-wide text-white">
            Oprah Realty Listings
          </span>
        </div>

        <p className="text-[11px] text-white/70">
          © {new Date().getFullYear()} Oprah Realty Listings. All rights reserved.
        </p>

        <a
          href="#top"
          className="text-[10px] uppercase tracking-[0.2em] text-white transition-opacity hover:opacity-70"
        >
          Back to top ↑
        </a>

      </div>
    </footer>
  )
}