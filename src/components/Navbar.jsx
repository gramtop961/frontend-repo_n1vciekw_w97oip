import { Menu, Search } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/80 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/marvel-logo.svg" alt="Marvel" className="h-8 w-auto hidden sm:block" onError={(e)=>{e.currentTarget.style.display='none'}} />
          <span className="text-white text-lg sm:text-xl font-black tracking-wider">
            MCU Hub
          </span>
        </div>
        <div className="hidden md:flex items-center gap-3 text-sm">
          <a href="#movies" className="text-slate-300 hover:text-white transition-colors">Movies</a>
          <a href="#timeline" className="text-slate-300 hover:text-white transition-colors">Timeline</a>
          <a href="#heroes" className="text-slate-300 hover:text-white transition-colors">Heroes</a>
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-1.5">
            <Search size={16} className="text-slate-300" />
            <input placeholder="Search the MCU" className="bg-transparent outline-none text-sm text-slate-200 placeholder:text-slate-400" />
          </div>
          <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl bg-white/5 border border-white/10 text-slate-200">
            <Menu size={18} />
          </button>
        </div>
      </div>
    </header>
  )
}
