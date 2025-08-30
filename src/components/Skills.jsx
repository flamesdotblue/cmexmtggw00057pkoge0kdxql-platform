import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Palette, Wrench } from 'lucide-react';

const skillData = [
  {
    title: 'Frontend',
    icon: Code2,
    color: 'from-rose-400 to-rose-600',
    bars: [
      { label: 'React', value: 92 },
      { label: 'TypeScript', value: 85 },
      { label: 'Tailwind', value: 95 },
    ],
  },
  {
    title: 'Backend',
    icon: Server,
    color: 'from-emerald-400 to-emerald-600',
    bars: [
      { label: 'Node.js', value: 88 },
      { label: 'Postgres', value: 80 },
      { label: 'Prisma', value: 76 },
    ],
  },
  {
    title: 'Design',
    icon: Palette,
    color: 'from-sky-400 to-sky-600',
    bars: [
      { label: 'UX', value: 82 },
      { label: 'Figma', value: 78 },
      { label: 'Motion', value: 70 },
    ],
  },
  {
    title: 'Tooling',
    icon: Wrench,
    color: 'from-amber-400 to-amber-600',
    bars: [
      { label: 'Vite', value: 90 },
      { label: 'Vercel', value: 88 },
      { label: 'CI/CD', value: 74 },
    ],
  },
];

function PixelPanel({ children }) {
  return (
    <div
      className="rounded-sm border border-black bg-zinc-900/60 backdrop-blur shadow-[0_6px_0_0_#000]"
      style={{ boxShadow: '0 6px 0 0 #000, 0 0 0 1px #000 inset' }}
    >
      {children}
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 md:py-28 bg-[linear-gradient(0deg,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:24px_24px]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-10">
          <div className="inline-block px-3 py-1 text-[10px] uppercase tracking-[0.2em] bg-black border border-black rounded-sm shadow-[0_3px_0_0_#000]">Skill Tree</div>
          <h2 className="mt-3 text-3xl md:text-4xl font-black">Unlocks & Stats</h2>
          <p className="mt-2 text-sm text-zinc-300/80 max-w-2xl">Animated, gamified breakdown of core abilities. Keep leveling up.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          {skillData.map((s, idx) => (
            <motion.div
              key={s.title}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <PixelPanel>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-4">
                    <div className={`p-2 rounded-sm border border-black bg-gradient-to-b ${s.color} text-black shadow-[0_3px_0_0_#000]`}>
                      <s.icon size={18} />
                    </div>
                    <h3 className="font-extrabold tracking-wide">{s.title}</h3>
                  </div>

                  <div className="space-y-3">
                    {s.bars.map((b, i) => (
                      <div key={b.label}>
                        <div className="flex items-center justify-between text-xs mb-1">
                          <span className="text-zinc-300">{b.label}</span>
                          <span className="text-zinc-400">{b.value}%</span>
                        </div>
                        <div className="h-3 bg-zinc-800 border border-black rounded-sm overflow-hidden">
                          <motion.div
                            className={`h-full bg-gradient-to-r ${s.color}`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${b.value}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: i * 0.1 }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </PixelPanel>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ scale: 0.98, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10"
        >
          <PixelPanel>
            <div className="p-5 md:p-6 flex flex-col md:flex-row items-center md:items-center gap-4 md:gap-6">
              <div className="text-center md:text-left">
                <div className="inline-block px-2 py-1 text-[10px] uppercase tracking-widest bg-rose-500 text-black border border-black rounded-sm shadow-[0_3px_0_0_#000]">Bonus</div>
                <h3 className="mt-2 font-extrabold text-lg">Combo Perks</h3>
                <p className="text-sm text-zinc-300/90 max-w-xl">Type-safe, design-aware systems with performance budgets and DX automation. Shipping clean code that feels like a power-up.</p>
              </div>
              <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-3">
                {['A11y', 'Perf', 'DX', 'Testing', 'Docs', 'Security'].map((perk, i) => (
                  <motion.div
                    key={perk}
                    initial={{ y: 8, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.05 * i }}
                    className="px-3 py-2 text-center text-xs font-semibold rounded-sm border border-black bg-zinc-900/80 shadow-[0_3px_0_0_#000]"
                  >
                    {perk}
                  </motion.div>
                ))}
              </div>
            </div>
          </PixelPanel>
        </motion.div>
      </div>
    </section>
  );
}
