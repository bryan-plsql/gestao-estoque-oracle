"use client"

import { motion } from "framer-motion"
import {
  ChevronRight,
  Code,
  Crosshair,
  Layers,
  Radar,
  Shield,
  Terminal,
  Zap,
} from "lucide-react"
import { Navbar } from "@/components/navbar"

const stats = [
  { name: "React", level: 92, icon: Code },
  { name: "TypeScript", level: 89, icon: Terminal },
  { name: "Tailwind", level: 94, icon: Layers },
]

const quests = [
  {
    title: "Neon Commerce Overdrive",
    difficulty: "Hard",
    rewards: ["Next.js", "Tailwind", "Radix UI"],
    summary: "Built a high-performance storefront UI with animated catalog systems.",
    link: "#",
  },
  {
    title: "Sentinel Dashboard Protocol",
    difficulty: "Expert",
    rewards: ["React", "TypeScript", "Recharts"],
    summary: "Created real-time telemetry interfaces with advanced component architecture.",
    link: "#",
  },
  {
    title: "Cyber Arena Landing System",
    difficulty: "Medium",
    rewards: ["Framer Motion", "Lucide", "UX Motion"],
    summary: "Designed a cinematic marketing experience with motion-driven storytelling.",
    link: "#",
  },
]

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020617] text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(6,182,212,0.16),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(168,85,247,0.2),transparent_32%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(6,182,212,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.14)_1px,transparent_1px)] [background-size:48px_48px]" />

      <Navbar />

      <section id="home" className="relative z-10 mx-auto flex min-h-[95vh] w-full max-w-6xl items-center px-4 pt-24 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full rounded-2xl border border-cyan-400/20 bg-slate-950/45 p-8 shadow-[0_0_40px_rgba(6,182,212,0.2)] backdrop-blur-xl sm:p-12"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-fuchsia-500/40 bg-fuchsia-500/10 px-4 py-1 text-xs uppercase tracking-[0.22em] text-fuchsia-300">
            <Shield className="h-3.5 w-3.5" />
            System Online
          </div>

          <div className="relative inline-block">
            <h1 className="text-balance text-4xl font-black uppercase tracking-[0.16em] text-white sm:text-6xl lg:text-7xl">
              COMMANDER BRYAN
            </h1>
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 -translate-y-[1px] translate-x-[2px] text-balance text-4xl font-black uppercase tracking-[0.16em] text-cyan-300/60 blur-[0.3px] sm:text-6xl lg:text-7xl"
            >
              COMMANDER BRYAN
            </span>
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 translate-y-[1px] -translate-x-[2px] text-balance text-4xl font-black uppercase tracking-[0.16em] text-fuchsia-500/45 sm:text-6xl lg:text-7xl"
            >
              COMMANDER BRYAN
            </span>
          </div>

          <p className="mt-6 max-w-2xl text-lg text-slate-300 sm:text-xl">
            Full Stack Developer / Cyber Specialist
          </p>

          <motion.a
            href="#quests"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="mt-10 inline-flex items-center gap-2 rounded-xl border border-cyan-300/40 bg-cyan-400/15 px-6 py-3 text-sm font-semibold tracking-[0.12em] text-cyan-100 shadow-[0_0_24px_rgba(6,182,212,0.35)] transition-colors hover:bg-cyan-400/25"
          >
            INITIATE SYSTEM
            <ChevronRight className="h-4 w-4" />
          </motion.a>
        </motion.div>
      </section>

      <section id="about" className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-20 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex items-center gap-3"
        >
          <Crosshair className="h-5 w-5 text-cyan-300" />
          <h2 className="text-2xl font-bold uppercase tracking-[0.18em] text-cyan-100 sm:text-3xl">
            Player Stats
          </h2>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2">
          {stats.map((stat, index) => (
            <motion.article
              key={stat.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className="rounded-xl border border-fuchsia-500/30 bg-slate-900/45 p-5 backdrop-blur-md"
            >
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <stat.icon className="h-4 w-4 text-fuchsia-300" />
                  <span className="font-semibold text-slate-100">{stat.name}</span>
                </div>
                <span className="text-sm font-semibold text-cyan-300">{stat.level}%</span>
              </div>
              <div className="h-2 rounded-full bg-slate-800/90">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${stat.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: index * 0.12 }}
                  className="h-2 rounded-full bg-gradient-to-r from-cyan-400 via-cyan-300 to-fuchsia-500 shadow-[0_0_14px_rgba(34,211,238,0.55)]"
                />
              </div>
            </motion.article>
          ))}

          <motion.article
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="rounded-xl border border-cyan-400/30 bg-slate-900/45 p-5 backdrop-blur-md"
          >
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-cyan-200">
              Combat Profile
            </h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-cyan-300" />
                Build speed optimized for rapid deployment cycles.
              </li>
              <li className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-fuchsia-400" />
                Defensive UI architecture with scalable components.
              </li>
              <li className="flex items-center gap-2">
                <Radar className="h-4 w-4 text-cyan-300" />
                Pixel-level focus on motion, hierarchy, and clarity.
              </li>
            </ul>
          </motion.article>
        </div>
      </section>

      <section id="quests" className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-24 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex items-center gap-3"
        >
          <Terminal className="h-5 w-5 text-fuchsia-300" />
          <h2 className="text-2xl font-bold uppercase tracking-[0.18em] text-fuchsia-200 sm:text-3xl">
            Quest Log
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {quests.map((quest, index) => (
            <motion.article
              key={quest.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="group rounded-xl border border-cyan-400/25 bg-slate-900/50 p-5 shadow-[0_0_26px_rgba(56,189,248,0.08)] backdrop-blur-md"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.12em] text-cyan-300">
                  Difficulty: {quest.difficulty}
                </span>
                <span className="rounded-full border border-fuchsia-500/40 bg-fuchsia-500/10 px-2.5 py-1 text-xs text-fuchsia-300">
                  Completed
                </span>
              </div>

              <h3 className="mb-2 text-lg font-semibold text-slate-100">{quest.title}</h3>
              <p className="mb-4 text-sm text-slate-300">{quest.summary}</p>

              <div className="mb-5 flex flex-wrap gap-2">
                {quest.rewards.map((reward) => (
                  <span
                    key={reward}
                    className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-2.5 py-1 text-xs text-cyan-200"
                  >
                    Reward: {reward}
                  </span>
                ))}
              </div>

              <a
                href={quest.link}
                className="inline-flex items-center gap-2 text-sm font-semibold text-fuchsia-300 transition-colors group-hover:text-cyan-300"
              >
                View Replay
                <ChevronRight className="h-4 w-4" />
              </a>
            </motion.article>
          ))}
        </div>
      </section>
    </main>
  )
}
