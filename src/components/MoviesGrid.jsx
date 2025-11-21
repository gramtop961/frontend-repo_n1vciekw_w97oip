import { useEffect, useState } from 'react'

const SAMPLE_MOVIES = [
  { title: 'Iron Man', year: 2008, poster: 'https://image.tmdb.org/t/p/w342/78lPtwv72eTNqFYb2tvpzCBfQ27.jpg' },
  { title: 'The Avengers', year: 2012, poster: 'https://image.tmdb.org/t/p/w342/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg' },
  { title: 'Black Panther', year: 2018, poster: 'https://image.tmdb.org/t/p/w342/uxzzxijgPIY7slzFvMotPv8wjKA.jpg' },
  { title: 'Avengers: Endgame', year: 2019, poster: 'https://image.tmdb.org/t/p/w342/or06FN3Dka5tukK1e9sl16pB3iy.jpg' },
  { title: 'Spider-Man: No Way Home', year: 2021, poster: 'https://image.tmdb.org/t/p/w342/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg' },
  { title: 'Guardians of the Galaxy', year: 2014, poster: 'https://image.tmdb.org/t/p/w342/r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg' },
]

export default function MoviesGrid() {
  const [movies, setMovies] = useState(SAMPLE_MOVIES)

  useEffect(() => {
    // Placeholder for future backend integration
  }, [])

  return (
    <section id="movies" className="relative py-20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(40%_40%_at_80%_0%,rgba(236,72,153,0.06),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-3xl font-bold text-white">Popular Movies</h2>
            <p className="text-slate-300 mt-1">A curated selection from across the MCU.</p>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {movies.map((m) => (
            <div key={m.title} className="group">
              <div className="aspect-[2/3] rounded-xl overflow-hidden border border-white/10 bg-white/5">
                <img src={m.poster} alt={m.title} className="h-full w-full object-cover group-hover:scale-[1.03] transition-transform" />
              </div>
              <div className="mt-2">
                <p className="text-white font-medium leading-tight truncate">{m.title}</p>
                <p className="text-slate-400 text-sm">{m.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
