// src/hooks/useListings.ts
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { supabase } from '../lib/supabaseClient'
import type { Listing, NewListing } from '../types/listing'

export function useListings() {
  return useQuery({
    queryKey: ['listings'],
    queryFn: async (): Promise<Listing[]> => {
      const { data, error } = await supabase
        .from('listings')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) throw error
      return data
    },
  })
}

export function useAddListing() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (listing: NewListing) => {
      const { data, error } = await supabase
        .from('listings')
        .insert(listing)
        .select()
        .single()

      if (error) throw error
      return data as Listing
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['listings'] })
    },
  })
}

export function useDeleteListing() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from('listings').delete().eq('id', id)
      if (error) throw error
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['listings'] })
    },
  })
}

export function useUpdateListing() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async ({ id, ...updates }: Partial<Listing> & { id: string }) => {
      const { data, error } = await supabase
        .from('listings')
        .update(updates)
        .eq('id', id)
        .select()
        .single()

      if (error) throw error
      return data as Listing
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['listings'] })
    },
  })
}