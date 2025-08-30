import React from 'react';
import { Github, Linkedin, Mail, Gamepad2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="mt-20 border-t border-zinc-800 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="p-2 bg-rose-500 text-zinc-950 rounded-sm shadow-[0_3px_0_0_#000] border border-black">
                <Gamepad2 size={18} />
              </div>
              <span className="font-black tracking-wide">DEVQUEST</span>
            </div>
            <p className="text-sm text-zinc-400 max-w-sm">
              Retro-styled, future-ready web experiences. Available for freelance and full-time missions.
            </p>
          </div>

          <div>
            <h4 className="font-extrabold uppercase text-xs tracking-widest mb-3 text-zinc-300">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:hello@example.com" className="hover:text-rose-400 inline-flex items-center gap-2">
                  <Mail size={16} /> hello@example.com
                </a>
              </li>
              <li>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-rose-400 inline-flex items-center gap-2">
                  <Github size={16} /> GitHub
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-rose-400 inline-flex items-center gap-2">
                  <Linkedin size={16} /> LinkedIn
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-extrabold uppercase text-xs tracking-widest mb-3 text-zinc-300">Status</h4>
            <div className="rounded-sm border border-black bg-zinc-900/60 shadow-[0_4px_0_0_#000] p-3 text-sm">
              <div className="flex items-center justify-between">
                <span>New Quests</span>
                <span className="px-2 py-0.5 bg-rose-500 text-black rounded-sm border border-black text-xs font-bold">Open</span>
              </div>
              <p className="mt-2 text-zinc-400">Based in Earth, Remote-friendly</p>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-zinc-800 text-xs text-zinc-500 flex flex-col md:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} DevQuest. All rights reserved.</p>
          <p className="text-zinc-500">Press Start to continue.</p>
        </div>
      </div>
    </footer>
  );
}
