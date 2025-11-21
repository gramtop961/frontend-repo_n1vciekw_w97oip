import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import MoviesGrid from './components/MoviesGrid'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_20%_-10%,rgba(56,189,248,0.15),transparent_60%),radial-gradient(50%_50%_at_80%_-10%,rgba(236,72,153,0.12),transparent_60%)]" />
      <div className="relative">
        <Navbar />
        <Hero />
        <Features />
        <MoviesGrid />
        <Footer />
      </div>
    </div>
  )
}

export default App
