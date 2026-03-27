"use client"

import { motion } from "framer-motion"
import {
  ChevronRight,
  Code,
  Crosshair,
  Database,
  Layers,
  Lock,
  Radar,
  Server,
  Shield,
  Terminal,
  Zap,
} from "lucide-react"
import { Navbar } from "@/components/navbar"

const habilidades = [
  { name: "React", level: 92, icon: Code },
  { name: "TypeScript", level: 89, icon: Terminal },
  { name: "Tailwind CSS", level: 94, icon: Layers },
  { name: "Node.js", level: 87, icon: Server },
  { name: "PostgreSQL", level: 85, icon: Database },
]

const operacoes = [
  {
    titulo: "Neon Commerce Protocol",
    classificacao: "ALFA-7",
    stack: ["Next.js", "Tailwind", "Radix UI"],
    descricao: "Interface de e-commerce de alta performance com sistemas de catálogo animado e checkout otimizado.",
    link: "#",
    status: "COMPLETO",
  },
  {
    titulo: "Sentinel Dashboard System",
    classificacao: "OMEGA-9",
    stack: ["React", "TypeScript", "Recharts"],
    descricao: "Painéis de telemetria em tempo real com arquitetura de componentes avançada e visualização de dados.",
    link: "#",
    status: "COMPLETO",
  },
  {
    titulo: "Cyber Arena Landing",
    classificacao: "BETA-5",
    stack: ["Framer Motion", "Lucide", "UX Motion"],
    descricao: "Experiência de marketing cinematográfica com storytelling orientado por movimento e micro-interações.",
    link: "#",
    status: "COMPLETO",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
}

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#030712] text-slate-100">
      {/* Advanced grid overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(6,182,212,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.08)_1px,transparent_1px)] [background-size:64px_64px]" />
      
      {/* Scanline effect */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.015] [background:repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(255,255,255,0.03)_2px,rgba(255,255,255,0.03)_4px)]" />
      
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(6,182,212,0.15),transparent_50%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_100%,rgba(168,85,247,0.1),transparent_50%)]" />

      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl items-center px-4 pt-16 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full"
        >
          {/* Terminal card */}
          <div className="relative rounded-2xl border border-cyan-500/20 bg-slate-950/60 p-8 shadow-[0_0_60px_rgba(6,182,212,0.12),inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-2xl sm:p-12 lg:p-16">
            {/* Gradient border glow */}
            <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-cyan-500/20 via-transparent to-fuchsia-500/20 opacity-60" />
            
            {/* Terminal header */}
            <div className="relative mb-8 flex items-center gap-3">
              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-red-500/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <span className="h-3 w-3 rounded-full bg-green-500/80" />
              </div>
              <div className="ml-4 flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-1.5">
                <Lock className="h-3 w-3 text-cyan-400" />
                <span className="font-mono text-xs tracking-wider text-cyan-300">CONEXAO_SEGURA::ATIVA</span>
              </div>
            </div>

            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="relative mb-6 inline-flex items-center gap-2 rounded-full border border-fuchsia-500/30 bg-fuchsia-500/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-fuchsia-300"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-fuchsia-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-fuchsia-500" />
              </span>
              Sistema Online
            </motion.div>

            {/* Main title with holographic glitch effect */}
            <div className="relative mb-6">
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="relative text-balance font-mono text-4xl font-black uppercase tracking-[0.08em] text-white sm:text-6xl lg:text-7xl"
              >
                <span className="relative z-10 bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent">
                  COMMANDER BRYAN
                </span>
                {/* Holographic layers */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 -translate-y-[2px] translate-x-[3px] bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent opacity-50 blur-[1px]"
                >
                  COMMANDER BRYAN
                </span>
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 translate-y-[2px] -translate-x-[3px] bg-gradient-to-r from-fuchsia-500 to-fuchsia-400 bg-clip-text text-transparent opacity-40"
                >
                  COMMANDER BRYAN
                </span>
              </motion.h1>
              
              {/* Subtle glow under title */}
              <div className="absolute -bottom-4 left-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
            </div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mb-8 max-w-2xl font-mono text-lg text-slate-400 sm:text-xl"
            >
              <span className="text-cyan-400">&gt;</span> Desenvolvedor Full Stack <span className="text-fuchsia-400">/</span> Especialista em Sistemas
            </motion.p>

            <motion.a
              href="#operacoes"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(6,182,212,0.4)" }}
              whileTap={{ scale: 0.98 }}
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-lg border border-cyan-400/40 bg-gradient-to-r from-cyan-500/20 to-cyan-500/10 px-8 py-4 font-mono text-sm font-semibold uppercase tracking-[0.15em] text-cyan-100 transition-all duration-300 hover:border-cyan-400/60"
            >
              <span className="relative z-10 flex items-center gap-3">
                INICIAR SISTEMA
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
            </motion.a>
          </div>
        </motion.div>
      </section>

      {/* Telemetry Section */}
      <section id="about" className="relative z-10 mx-auto w-full max-w-6xl px-4 py-24 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <div className="mb-4 flex items-center gap-3">
            <Crosshair className="h-5 w-5 text-cyan-400" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-400">Modulo 01</span>
          </div>
          <h2 className="font-mono text-3xl font-bold uppercase tracking-[0.1em] text-white sm:text-4xl">
            Telemetria de Habilidades
          </h2>
          <div className="mt-3 h-px w-24 bg-gradient-to-r from-cyan-500 to-transparent" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-4 lg:grid-cols-2"
        >
          {/* Skills grid */}
          <div className="space-y-4">
            {habilidades.map((hab, index) => (
              <motion.article
                key={hab.name}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-xl border border-slate-800/80 bg-slate-900/40 p-5 backdrop-blur-md transition-all duration-300 hover:border-cyan-500/30"
              >
                {/* Hover glow */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-cyan-500/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                
                <div className="relative flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-cyan-500/30 bg-cyan-500/10">
                      <hab.icon className="h-4 w-4 text-cyan-400" />
                    </div>
                    <span className="font-mono font-semibold text-slate-100">{hab.name}</span>
                  </div>
                  <span className="font-mono text-sm font-bold text-cyan-400">{hab.level}%</span>
                </div>
                
                {/* HUD-style progress bar */}
                <div className="relative h-2 overflow-hidden rounded-full bg-slate-800/80">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${hab.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-cyan-500 via-cyan-400 to-fuchsia-500"
                  />
                  {/* Animated glow */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${hab.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-cyan-500 via-cyan-400 to-fuchsia-500 blur-sm"
                  />
                </div>
              </motion.article>
            ))}
          </div>

          {/* Profile card */}
          <motion.article
            variants={itemVariants}
            className="relative overflow-hidden rounded-xl border border-fuchsia-500/20 bg-slate-900/40 p-6 backdrop-blur-md"
          >
            <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-fuchsia-500/10 blur-3xl" />
            
            <h3 className="relative mb-6 flex items-center gap-2 font-mono text-sm font-semibold uppercase tracking-[0.15em] text-fuchsia-300">
              <Shield className="h-4 w-4" />
              Perfil de Operador
            </h3>
            
            <ul className="relative space-y-5 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded border border-cyan-500/30 bg-cyan-500/10">
                  <Zap className="h-3.5 w-3.5 text-cyan-400" />
                </div>
                <span>Velocidade de build otimizada para ciclos de deploy rapidos e CI/CD eficiente.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded border border-fuchsia-500/30 bg-fuchsia-500/10">
                  <Shield className="h-3.5 w-3.5 text-fuchsia-400" />
                </div>
                <span>Arquitetura de UI defensiva com componentes escalaveis e design system robusto.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded border border-cyan-500/30 bg-cyan-500/10">
                  <Radar className="h-3.5 w-3.5 text-cyan-400" />
                </div>
                <span>Foco em motion design, hierarquia visual e clareza na experiencia do usuario.</span>
              </li>
            </ul>
          </motion.article>
        </motion.div>
      </section>

      {/* Operations Section */}
      <section id="operacoes" className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-32 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <div className="mb-4 flex items-center gap-3">
            <Terminal className="h-5 w-5 text-fuchsia-400" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-fuchsia-400">Modulo 02</span>
          </div>
          <h2 className="font-mono text-3xl font-bold uppercase tracking-[0.1em] text-white sm:text-4xl">
            Arquivos de Operacao
          </h2>
          <div className="mt-3 h-px w-24 bg-gradient-to-r from-fuchsia-500 to-transparent" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {operacoes.map((op) => (
            <motion.article
              key={op.titulo}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative overflow-hidden rounded-xl border border-slate-800/80 bg-slate-900/40 backdrop-blur-md transition-all duration-300 hover:border-cyan-500/40"
            >
              {/* Gradient border on hover */}
              <div className="pointer-events-none absolute -inset-px rounded-xl bg-gradient-to-br from-cyan-500/20 via-transparent to-fuchsia-500/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              
              {/* Top accent line */}
              <div className="h-px w-full bg-gradient-to-r from-cyan-500/60 via-fuchsia-500/60 to-cyan-500/60" />
              
              <div className="relative p-6">
                {/* Header */}
                <div className="mb-4 flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-wider text-cyan-400">
                    Classe: {op.classificacao}
                  </span>
                  <span className="rounded border border-green-500/30 bg-green-500/10 px-2.5 py-1 font-mono text-xs uppercase text-green-400">
                    {op.status}
                  </span>
                </div>

                <h3 className="mb-3 font-mono text-lg font-semibold text-white">{op.titulo}</h3>
                <p className="mb-5 text-sm leading-relaxed text-slate-400">{op.descricao}</p>

                {/* Tech stack */}
                <div className="mb-6 flex flex-wrap gap-2">
                  {op.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded border border-slate-700/80 bg-slate-800/50 px-2.5 py-1 font-mono text-xs text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={op.link}
                  className="inline-flex items-center gap-2 font-mono text-sm font-medium text-cyan-400 transition-colors group-hover:text-fuchsia-400"
                >
                  <span>ACESSAR SISTEMA</span>
                  <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>

      {/* Footer accent */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
    </main>
  )
}
