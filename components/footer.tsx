import { GamerLogo } from "./gamer-logo"
import { Mail, Phone, MapPin, User, Github, Linkedin } from 'lucide-react'

const footerLinks = {
  empresa: [{ name: "Sobre Nós", href: "#" }],
}

const socialLinks = [
  { 
    icon: Github, 
    href: "https://github.com/bryan-plsql/gestao-estoque-oracle", 
    label: "GitHub" 
  },
  { 
    icon: Linkedin, 
    href: "https://www.linkedin.com/in/bryan-daniel-pereira-b5a3241b7/", 
    label: "LinkedIn" 
  },
]

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-card/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Brand Column */}
          <div>
            <a href="#" className="flex items-center gap-3 mb-4">
              <GamerLogo className="drop-shadow-[0_0_10px_rgba(139,92,246,0.5)]" />
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                NexusDEV
              </span>
            </a>

          <div className="flex flex-wrap gap-4 text-sm opacity-80 mb-4">
            <span>Curiosidade Ativa</span>
            <span>Aprendizado Constante</span>
            <span>Evolução Full-Stack</span>
          </div>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a href="mailto:contato@nexusgamer.com" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="h-4 w-4 text-purple-400" />
                Bryand.720@gmail.com
              </a>
              <a href="tel:+554399124-4116" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Phone className="h-4 w-4 text-cyan-400" />
                (43) 99124-4116
              </a>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-purple-400" />
                Londrina, PR - Brasil
              </div>
              <a href="/sobre" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <User className="h-4 w-4 text-cyan-400" />
              Sobre Mim
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
          <div className="mt-4 pt-4 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 NexusDEV. Todos os direitos reservados.
          </p>

        {/* Social Links */}
          <div className="flex items-center gap-4">
         {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank" // isso para abrir em nova aba!
              rel="noopener noreferrer" // isso por segurança!
              aria-label={social.label}
              className="p-2 text-muted-foreground hover:text-foreground bg-secondary/50 rounded-lg border border-border/50 hover:border-purple-500/50 transition-all"
            >
              <social.icon className="h-4 w-4" />
            </a>
          ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
