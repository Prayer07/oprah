import { Link } from 'react-router-dom'
import BlurText from './BlurText';

const handleAnimationComplete = () => {
  console.log('Animation completed!');
};

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
          <span className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-gold">
            <img
              src="/logo.jpeg"
              alt="Oprah Realty Logo"
              className="h-full w-full rounded-full object-cover"
            />
          </span>
            
          <BlurText
            text="Oprah Realty"
            delay={200}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="font-display text-lg sm:text-xl tracking-wide text-charcoal"
          />          

          </Link>
        </div>
      </div>
    </nav>
  )
}