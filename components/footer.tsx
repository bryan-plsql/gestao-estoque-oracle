import { GamerLogo } from "./gamer-logo"
import { Mail, Phone, MapPin, Instagram, Twitter, Youtube, Twitch } from "lucide-react"

const footerLinks = {
  produtos: [
    { name: "Smartphones", href: "#" },
    { name: "Controles", href: "#" },
    { name: "Acessórios", href: "#" },
    { name: "Audio", href: "#" },
  ],
  suporte: [
    { name: "Central de Ajuda", href: "#" },
    { name: "Trocas e Devoluções", href: "#" },
    { name: "Garantia", href: "#" },
    { name: "Rastrear Pedido", href: "#" },
  ],
  empresa: [
    { name: "Sobre Nós", href: "#" },
    { name: "Carreiras", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Parceiros", href: "#" },
  ],
}

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Twitch, href: "#", label: "Twitch" },
]

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-card/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-6">
              <GamerLogo className="drop-shadow-[0_0_10px_rgba(139,92,246,0.5)]" />
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                NexusGamer
              </span>
            </a>
            <p className="text-muted-foreground mb-6 max-w-sm">
              A maior loja de equipamentos gaming do Brasil. Qualidade premium e atendimento de excelência.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a href="mailto:contato@nexusgamer.com" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="h-4 w-4 text-purple-400" />
                contato@nexusgamer.com
              </a>
              <a href="tel:+5511999999999" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Phone className="h-4 w-4 text-cyan-400" />
                (11) 99999-9999
              </a>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-purple-400" />
                São Paulo, SP - Brasil
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Produtos</h4>
            <ul className="space-y-3">
              {footerLinks.produtos.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Suporte</h4>
            <ul className="space-y-3">
              {footerLinks.suporte.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 NexusGamer. Todos os direitos reservados.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
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
