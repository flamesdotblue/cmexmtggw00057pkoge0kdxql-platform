import React from 'react';
import { Gamepad2, Star } from 'lucide-react';

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-zinc-950/70 border-b border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <div className="p-2 bg-rose-500 text-zinc-950 rounded-sm shadow-[0_3px_0_0_#000] border border-black">
            <Gamepad2 size={18} />
          </div>
          <span className="font-black tracking-wide text-sm md:text-base group-hover:text-rose-400 transition-colors select-none">
            DEVQUEST
          </span>
        </a>
        <nav className="flex items-center gap-2">
          <a href="#skills" className="px-3 py-2 text-xs md:text-sm font-semibold rounded-sm border border-black bg-zinc-900 hover:bg-zinc-800 active:translate-y-[2px] shadow-[0_3px_0_0_#000] transition-colors">
            Skills
          </a>
          <a href="#contact" className="px-3 py-2 text-xs md:text-sm font-semibold rounded-sm border border-black bg-rose-500 text-black hover:bg-rose-400 active:translate-y-[2px] shadow-[0_3px_0_0_#000] transition-colors flex items-center gap-1">
            <Star size={16} /> Hire Me
          </a>
        </nav>
      </div>
    </header>
  );
}
