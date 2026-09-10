import Hero from '../components/Hero'
// import ListingCard from '../components/ListingCard'
import Partners from '../components/Partners'
import ContactStrip from '../components/ContactStrip'
import Footer from '../components/Footer'
import Testimonials from '../components/Testimonials'
// import { useListings } from '../hooks/useListings'

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-charcoal">

      <main>
        <Hero/>  

        <Partners />

        <Testimonials />

        <ContactStrip />
      </main>

      <Footer />
    </div>
  )
}