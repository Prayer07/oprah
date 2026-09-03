// src/pages/Dashboard.tsx
import { useState, type FormEvent } from 'react'
import { supabase } from '../lib/supabaseClient'
import {
  useListings,
  useAddListing,
  useUpdateListing,
  useDeleteListing,
} from '../hooks/useListings'
import { LAGOS_AREAS } from '../constants/areas'
import type { Listing } from '../types/listing'

export default function Dashboard() {
  const { data: listings } = useListings()
  const addListing = useAddListing()
  const updateListing = useUpdateListing()
  const deleteListing = useDeleteListing()

  const [editingId, setEditingId] = useState<string | null>(null)
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [location, setLocation] = useState('')
  const [brief, setBrief] = useState('')
  const [files, setFiles] = useState<FileList | null>(null)
  const [uploading, setUploading] = useState(false)

  function startEdit(listing: Listing) {
    setEditingId(listing.id)
    setTitle(listing.title)
    setPrice(String(listing.price))
    setLocation(listing.location)
    setBrief(listing.brief)
    setFiles(null)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function resetForm() {
    setEditingId(null)
    setTitle('')
    setPrice('')
    setLocation('')
    setBrief('')
    setFiles(null)
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setUploading(true)

    const imageUrls: string[] = []

    if (files) {
      for (const file of Array.from(files)) {
        const path = `${Date.now()}-${file.name}`

        const { error: uploadError } = await supabase.storage
          .from('listing-images')
          .upload(path, file)

        if (uploadError) continue

        const { data } = supabase.storage
          .from('listing-images')
          .getPublicUrl(path)

        imageUrls.push(data.publicUrl)
      }
    }

    if (editingId) {
      await updateListing.mutateAsync({
        id: editingId,
        title,
        price: parseFloat(price),
        location,
        brief,
        ...(imageUrls.length > 0 ? { images: imageUrls } : {}),
      })
    } else {
      await addListing.mutateAsync({
        title,
        price: parseFloat(price),
        location,
        brief,
        images: imageUrls,
      })
    }

    resetForm()
    setUploading(false)
  }

  async function handleLogout() {
    await supabase.auth.signOut()
    window.location.href = '/login'
  }

  return (
    <div className="min-h-screen bg-ivory text-charcoal">

      {/* Dashboard header */}
      <header className="border-b border-gold-soft/60 bg-white">
        <div className="mx-auto flex min-h-[76px] max-w-7xl items-center justify-between gap-5 px-5 sm:px-8 lg:px-10">

          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gold">
              <span className="font-display text-sm text-gold">
                O
              </span>
            </span>

            <div>
              <p className="font-display text-base sm:text-lg">
                Oprah Realty
              </p>

              <p className="hidden text-[9px] uppercase tracking-[0.2em] text-grey sm:block">
                Management Portal
              </p>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="border border-gold px-4 py-2.5 text-xs font-medium uppercase tracking-[0.12em] text-gold transition-colors hover:bg-gold hover:text-white"
          >
            Log Out
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-14 lg:px-10 lg:py-16">

        {/* Dashboard title */}
        <div className="mb-10">

          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-gold" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-gold">
              Dashboard
            </span>
          </div>

          <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <div>
              <h1 className="font-display text-4xl sm:text-5xl">
                Manage Listings
              </h1>

              <p className="mt-3 max-w-xl text-sm leading-6 text-grey">
                Add, update and manage the properties displayed on your
                website.
              </p>
            </div>

            <div className="border border-gold-soft/60 bg-white px-6 py-4">
              <p className="text-[9px] uppercase tracking-[0.2em] text-grey">
                Total Listings
              </p>

              <p className="mt-1 font-display text-3xl text-gold">
                {listings?.length ?? 0}
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,420px)_1fr] lg:items-start">

          {/* Form */}
          <section className="border border-gold-soft/60 bg-white">

            <div className="border-b border-gold-soft/60 px-6 py-5 sm:px-7">

              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold/10 text-gold">
                  {editingId ? '✎' : '+'}
                </span>

                <div>
                  <h2 className="font-display text-xl">
                    {editingId
                      ? 'Edit Listing'
                      : 'Add New Listing'}
                  </h2>

                  <p className="mt-0.5 text-[10px] uppercase tracking-[0.15em] text-grey">
                    Property information
                  </p>
                </div>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 p-6 sm:p-7"
            >

              {/* Title */}
              <div>
                <label className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.18em] text-charcoal/60">
                  Property Title
                </label>

                <input
                  placeholder="e.g. Luxury 4 Bedroom Duplex"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  className="w-full border border-gold-soft/70 bg-white px-4 py-3 text-sm outline-none transition-colors placeholder:text-grey/50 focus:border-gold"
                />
              </div>

              {/* Price */}
              <div>
                <label className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.18em] text-charcoal/60">
                  Price
                </label>

                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-gold">
                    ₦
                  </span>

                  <input
                    placeholder="0"
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                    className="w-full border border-gold-soft/70 bg-white py-3 pl-9 pr-4 text-sm outline-none transition-colors placeholder:text-grey/50 focus:border-gold"
                  />
                </div>
              </div>

              {/* Location */}
              <div>
                <label className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.18em] text-charcoal/60">
                  Location
                </label>

                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  required
                  className="w-full border border-gold-soft/70 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-gold"
                >
                  <option value="" disabled>
                    Select area
                  </option>

                  {LAGOS_AREAS.map((area) => (
                    <option key={area} value={area}>
                      {area}
                    </option>
                  ))}
                </select>
              </div>

              {/* Brief */}
              <div>
                <label className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.18em] text-charcoal/60">
                  Description
                </label>

                <textarea
                  placeholder="Brief description of the property"
                  value={brief}
                  onChange={(e) => setBrief(e.target.value)}
                  required
                  rows={5}
                  className="w-full resize-none border border-gold-soft/70 bg-white px-4 py-3 text-sm leading-6 outline-none transition-colors placeholder:text-grey/50 focus:border-gold"
                />
              </div>

              {/* Images */}
              <div>
                <label className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.18em] text-charcoal/60">
                  Property Photos
                </label>

                <label className="flex cursor-pointer flex-col items-center justify-center border border-dashed border-gold-soft/80 bg-ivory px-5 py-8 text-center transition-colors hover:border-gold">

                  <svg
                    className="mb-3 h-7 w-7 text-gold"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.3"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <path d="M21 15l-5-5L5 21" />
                  </svg>

                  <span className="text-sm font-medium text-charcoal">
                    Choose property photos
                  </span>

                  <span className="mt-1 text-[10px] text-grey">
                    JPG, PNG or other image formats
                  </span>

                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={(e) => setFiles(e.target.files)}
                    className="hidden"
                  />
                </label>

                {files && files.length > 0 && (
                  <p className="mt-2 text-xs text-gold">
                    {files.length} photo{files.length === 1 ? '' : 's'} selected
                  </p>
                )}

                {editingId && (
                  <p className="mt-2 text-[11px] leading-5 text-grey">
                    Leave empty to keep existing photos.
                  </p>
                )}
              </div>

              {/* Buttons */}
              <div className="flex gap-3 pt-2">

                <button
                  type="submit"
                  disabled={uploading}
                  className="flex-1 bg-gold px-4 py-3.5 text-sm font-medium text-white transition-colors hover:bg-charcoal disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {uploading
                    ? 'Saving…'
                    : editingId
                      ? 'Save Changes'
                      : 'Add Listing'}
                </button>

                {editingId && (
                  <button
                    type="button"
                    onClick={resetForm}
                    className="border border-gold-soft px-5 py-3.5 text-sm text-charcoal transition-colors hover:border-gold hover:text-gold"
                  >
                    Cancel
                  </button>
                )}

              </div>
            </form>
          </section>

          {/* Current listings */}
          <section className="min-w-0">

            <div className="mb-5 flex items-end justify-between gap-4">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gold">
                  Portfolio
                </p>

                <h2 className="mt-1 font-display text-2xl sm:text-3xl">
                  Current Listings
                </h2>
              </div>

              <span className="text-xs text-grey">
                {listings?.length ?? 0} total
              </span>
            </div>

            <div className="flex flex-col gap-3">

              {listings?.map((l) => (
                <div
                  key={l.id}
                  className="group border border-gold-soft/60 bg-white p-4 transition-all duration-200 hover:border-gold hover:shadow-[0_10px_35px_rgba(180,140,40,0.07)] sm:p-5"
                >
                  <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">

                    <div className="min-w-0">

                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                        <strong className="font-display text-lg text-charcoal">
                          {l.title}
                        </strong>

                        <span className="text-sm font-semibold text-gold">
                          ₦{l.price.toLocaleString()}
                        </span>
                      </div>

                      <div className="mt-2 flex items-center gap-2 text-xs text-grey">
                        <svg
                          className="h-3.5 w-3.5 text-gold"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        >
                          <path d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z" />
                          <circle cx="12" cy="9" r="2.2" />
                        </svg>

                        {l.location}
                      </div>

                    </div>

                    <div className="flex shrink-0 items-center gap-4 border-t border-gold-soft/50 pt-3 sm:border-t-0 sm:pt-0">

                      <button
                        onClick={() => startEdit(l)}
                        className="text-xs font-medium uppercase tracking-[0.12em] text-gold transition-colors hover:text-charcoal"
                      >
                        Edit
                      </button>

                      <span className="h-4 w-px bg-gold-soft" />

                      <button
                        onClick={() => deleteListing.mutate(l.id)}
                        className="text-xs font-medium uppercase tracking-[0.12em] text-red-500 transition-colors hover:text-red-700"
                      >
                        Delete
                      </button>

                    </div>

                  </div>
                </div>
              ))}

              {(!listings || listings.length === 0) && (
                <div className="border border-gold-soft/60 bg-white px-6 py-14 text-center">

                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-gold/30">
                    <span className="text-xl text-gold">
                      +
                    </span>
                  </div>

                  <h3 className="font-display text-xl">
                    No properties yet
                  </h3>

                  <p className="mt-2 text-sm text-grey">
                    Use the form to add your first listing.
                  </p>

                </div>
              )}

            </div>
          </section>
        </div>
      </main>

      <footer className="border-t border-gold-soft/50 bg-white px-5 py-6 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-2 text-center text-[10px] uppercase tracking-[0.12em] text-grey sm:flex-row sm:text-left">
          <span>Oprah Realty Listings</span>
          <span>Management Portal</span>
        </div>
      </footer>

    </div>
  )
}