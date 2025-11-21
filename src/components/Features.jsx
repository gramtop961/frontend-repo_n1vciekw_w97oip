import { Film, Clock3, Users } from 'lucide-react'

const features = [
  {
    title: 'Movie Library',
    desc: 'Browse every MCU title with release dates, posters, and quick facts.',
    icon: Film,
  },
  {
    title: 'Chronological Timeline',
    desc: 'Understand the story order across the Infinity Saga and Multiverse Saga.',
    icon: Clock3,
  },
  {
    title: 'Heroes & Teams',
    desc: 'Meet Avengers, Guardians, and more with concise bios and highlights.',
    icon: Users,
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-20 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(50%_50%_at_50%_0%,rgba(56,189,248,0.08),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">What you can do</h2>
          <p className="mt-3 text-slate-300">Clean, fast access to the MCU content you love.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ title, desc, icon: Icon }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors">
              <div className="h-10 w-10 rounded-xl bg-sky-500/20 border border-sky-400/20 text-sky-300 flex items-center justify-center mb-4">
                <Icon size={20} />
              </div>
              <h3 className="text-white font-semibold">{title}</h3>
              <p className="text-slate-300 mt-1 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
