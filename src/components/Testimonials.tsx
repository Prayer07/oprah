// src/components/Testimonials.tsx

const TESTIMONIAL_IMAGES = [
  '/testimonial-1.jpeg',
  '/testimonial-2.jpeg',
  '/testimonial-3.jpeg',
  '/testimonial-4.jpeg',
]

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-[#YOUR_BACKGROUND_COLOR] py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section heading */}
        <div className="mb-12 text-center sm:mb-16">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-gold" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-gold">
              Client Testimonials
            </span>

            <span className="h-px w-10 bg-gold" />
          </div>
        </div>

        {/* Testimonial images */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIAL_IMAGES.map((image, index) => (
            <div
              key={image}
              className="group overflow-hidden bg-white"
            >
              <img
                src={image}
                alt={`Client testimonial ${index + 1}`}
                className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}