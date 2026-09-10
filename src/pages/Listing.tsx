import ListingCard from "../components/ListingCard";
import { useListings } from "../hooks/useListings";

export default function Listing() {
  const { data: listings, isLoading, error } = useListings();

  if (isLoading) {
    return (
      <main className="min-h-screen bg-white px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <div className="h-3 w-24 animate-pulse rounded-full bg-gray-200" />
            <div className="mt-4 h-10 w-64 animate-pulse rounded-lg bg-gray-200" />
            <div className="mt-3 h-5 w-96 max-w-full animate-pulse rounded-lg bg-gray-100" />
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm"
              >
                <div className="h-64 animate-pulse bg-gray-100" />
                <div className="space-y-3 p-5">
                  <div className="h-5 w-3/4 animate-pulse rounded bg-gray-100" />
                  <div className="h-4 w-1/2 animate-pulse rounded bg-gray-100" />
                  <div className="h-8 w-1/3 animate-pulse rounded bg-gray-100" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="flex min-h-[70vh] items-center justify-center bg-white px-4">
        <div className="w-full max-w-md rounded-2xl border border-red-100 bg-red-50 p-8 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600">
            !
          </div>

          <h2 className="mt-5 text-xl font-semibold text-gray-900">
            Unable to load listings
          </h2>

          <p className="mt-2 text-sm text-gray-600">
            {error.message}
          </p>
        </div>
      </main>
    );
  }

  if (!listings || listings.length === 0) {
    return (
      <main className="flex min-h-[70vh] items-center justify-center bg-white px-4">
        <div className="w-full max-w-md rounded-3xl border border-gray-100 bg-white p-10 text-center shadow-sm">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#faf5e8] text-2xl text-[#c9a227]">
            —
          </div>

          <h2 className="mt-6 text-2xl font-semibold text-gray-900">
            No listings found
          </h2>

          <p className="mt-2 text-sm leading-6 text-gray-500">
            There are currently no properties available. Please check back
            later for new listings.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Background Image Header */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/omo.png')",
          }}
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/55" />
        
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d6b33f]">
              Oprah Realty
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Find your next property
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
              Explore our carefully selected collection of properties
              available for sale and rent.
            </p>
          </div>

          <div className="mt-8">
            <p className="text-sm text-white/80">
              <span className="font-semibold text-white">
                {listings.length}
              </span>{" "}
              {listings.length === 1 ? "property" : "properties"} available
            </p>
          </div>
        </div>
      </section>

      {/* Listings */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
          {listings.map((listing) => (
            <div
              key={listing.id}
              className="group transition-transform duration-300 hover:-translate-y-1"
            >
              <ListingCard listing={listing} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}