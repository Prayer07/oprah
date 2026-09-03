export default function ContactStrip() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gold py-16 sm:py-20 lg:py-24"
    >
      {/* Decorative circles */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/20" />
      <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full border border-white/10" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">

          {/* Heading */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-white" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/80">
                Let's Talk
              </span>
            </div>

            <h2 className="max-w-2xl font-display text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
              Ready to find
              <br />
              your next home?
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-6 text-white/80 sm:text-base">
              Reach out to us and let’s help you find a property that feels
              right for you.
            </p>
          </div>

          {/* Contact details */}
          <div className="min-w-0 lg:min-w-[320px]">

            <div className="border-t border-white/30">

              <a
                href="tel:08076543070"
                className="group flex items-center gap-4 border-b border-white/30 py-4 text-white transition-colors hover:bg-white/10"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/40">
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z" />
                  </svg>
                </span>

                <div>
                  <span className="block text-[9px] uppercase tracking-[0.2em] text-white/60">
                    Call / WhatsApp
                  </span>

                  <span className="mt-1 block text-sm">
                    08076543070
                  </span>
                </div>

                <span className="ml-auto text-white/60 transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="mailto:olabisiabuleshowo@gmail.com"
                className="group flex items-center gap-4 border-b border-white/30 py-4 text-white transition-colors hover:bg-white/10"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/40">
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m3 7 9 6 9-6" />
                  </svg>
                </span>

                <div className="min-w-0">
                  <span className="block text-[9px] uppercase tracking-[0.2em] text-white/60">
                    Email
                  </span>

                  <span className="mt-1 block truncate text-sm">
                    olabisiabuleshowo@gmail.com
                  </span>
                </div>

                <span className="ml-auto text-white/60 transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>

            </div>

          </div>
        </div>
      </div>
    </section>
  )
}