// src/pages/Login.tsx
import { useState, type FormEvent } from 'react'
import { supabase } from '../lib/supabaseClient'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const navigate = useNavigate()

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setError(null)

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      setError(error.message)
      return
    }

    navigate('/dashboard')
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-ivory px-5 py-12 sm:px-8">

      {/* Lightweight decorative elements */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full border border-gold/20" />
      <div className="pointer-events-none absolute -bottom-40 -left-32 h-[28rem] w-[28rem] rounded-full border border-gold/10" />

      <div className="relative z-10 w-full max-w-md">

        {/* Brand */}
        <div className="mb-8 text-center">

          <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-gold">
            <span className="font-display text-lg text-gold">
              O
            </span>
          </div>

          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-gold">
            Oprah Realty
          </p>
        </div>

        {/* Card */}
        <div className="border border-gold-soft/60 bg-white p-7 shadow-[0_20px_60px_rgba(180,140,40,0.08)] sm:p-9">

          <div className="mb-8">
            <h1 className="font-display text-3xl text-charcoal sm:text-4xl">
              Owner Login
            </h1>

            <p className="mt-2 text-sm leading-6 text-grey">
              Sign in to manage your property listings.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5"
          >

            <div>
              <label className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.18em] text-charcoal/60">
                Email
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full border border-gold-soft/70 bg-white px-4 py-3.5 text-sm text-charcoal outline-none transition-colors placeholder:text-grey/50 focus:border-gold"
              />
            </div>

            <div>
              <label className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.18em] text-charcoal/60">
                Password
              </label>

              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full border border-gold-soft/70 bg-white px-4 py-3.5 text-sm text-charcoal outline-none transition-colors placeholder:text-grey/50 focus:border-gold"
              />
            </div>

            {error && (
              <div className="border border-red-200 bg-red-50 px-4 py-3">
                <p className="text-sm text-red-600">
                  {error}
                </p>
              </div>
            )}

            <button
              type="submit"
              className="mt-1 w-full bg-gold px-5 py-3.5 text-sm font-medium text-white transition-colors hover:bg-charcoal"
            >
              Sign In
            </button>

          </form>
        </div>

        <p className="mt-6 text-center text-[11px] text-grey">
          Oprah Realty Listings
        </p>
      </div>
    </div>
  )
}