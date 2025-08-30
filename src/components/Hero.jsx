import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Github, Linkedin } from 'lucide-react';

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[85vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-zinc-950/60 via-zinc-950/30 to-zinc-950" />
      </div>

      <div className="relative z-10 w-full">
        <div className="max-w-6xl mx-auto px-4 py-24 md:py-28">
          <div className="inline-block mb-6 px-3 py-1 text-[10px] uppercase tracking-[0.2em] bg-black/70 border border-black rounded-sm shadow-[0_3px_0_0_#000]">
            Player 1 — Developer Portfolio
          </div>
          <h1 className="text-4xl md:text-6xl font-black leading-tight drop-shadow-[0_3px_0_#000]">
            Building pixel-perfect, high-performance web experiences.
          </h1>
          <p className="mt-4 md:mt-6 text-zinc-200/90 max-w-2xl">
            Full‑stack engineer blending retro aesthetics with modern tech. Tap the grid. Start the quest.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#skills" className="px-4 py-3 bg-rose-500 text-black font-extrabold rounded-sm border border-black shadow-[0_4px_0_0_#000] hover:bg-rose-400 active:translate-y-[2px] inline-flex items-center gap-2">
              <Rocket size={18} /> Start
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="px-4 py-3 bg-black/70 border border-black rounded-sm shadow-[0_4px_0_0_#000] hover:bg-black/80 active:translate-y-[2px] inline-flex items-center gap-2">
              <Github size={18} /> GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="px-4 py-3 bg-black/70 border border-black rounded-sm shadow-[0_4px_0_0_#000] hover:bg-black/80 active:translate-y-[2px] inline-flex items-center gap-2">
              <Linkedin size={18} /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
