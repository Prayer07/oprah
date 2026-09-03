// src/types/listing.ts
export interface Listing {
  id: string
  title: string
  price: number
  location: string
  brief: string
  images: string[]
  created_at: string
}

export type NewListing = Omit<Listing, 'id' | 'created_at'>