import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zBXGLjse1OwBSbps/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.25),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(236,72,153,0.2),transparent_40%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 py-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="backdrop-blur-sm bg-slate-900/40 p-8 rounded-3xl border border-white/10">
          <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-sky-300/80 mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400" /> Official Fan Hub
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
            Explore the Marvel Cinematic Universe
          </h1>
          <p className="mt-4 text-lg text-slate-300">
            Dive into movies, characters, timelines, and behind-the-scenes lore — all in one clean, interactive experience.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#movies" className="px-5 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-medium transition-colors">Browse Movies</a>
            <a href="#timeline" className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium transition-colors">View Timeline</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
