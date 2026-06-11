import {
  Instagram,
  Music2,
  Github,
  Globe,
  Mail,
  Send,
  Briefcase,
  Sparkles,
  ArrowUpRight,
  Code2,
  MessageCircle,
} from 'lucide-react';

const primaryLinks = [
  {
    icon: Sparkles,
    label: 'Silveira Stack',
    sub: 'SaaS de IA pra criadores',
    url: 'https://app.kaduapps.site',
    accent: 'green',
  },
  {
    icon: Globe,
    label: 'kaduapps.site',
    sub: 'Build in public · meu portfolio',
    url: 'https://kaduapps.site',
    accent: 'purple',
  },
];

const socials = [
  { icon: Instagram, label: '@dzk.real', url: 'https://instagram.com/dzk.real', color: '#E1306C' },
  { icon: Music2, label: 'TikTok @dzk.real', url: 'https://tiktok.com/@dzk.real', color: '#fff' },
  { icon: Github, label: 'github.com/SILVEIRA-SOFTWARE', url: 'https://github.com/SILVEIRA-SOFTWARE', color: '#fff' },
];

const work = [
  { label: 'Trabalha comigo (consultoria)', icon: Briefcase, url: 'mailto:contato@kaduapps.site' },
  { label: 'Contratos N8N hardcore', icon: Code2, url: 'mailto:contato@kaduapps.site?subject=N8N' },
  { label: 'WhatsApp comercial', icon: MessageCircle, url: 'https://wa.me/55XXXXXXXXXXX' },
];

export default function SocialPage() {
  return (
    <main className="min-h-screen flex flex-col items-center px-6 py-12">
      {/* Avatar + bio */}
      <div className="w-full max-w-md text-center mb-10">
        <div className="relative inline-block mb-5">
          <div className="w-28 h-28 rounded-full bg-gradient-to-br from-neon-green to-neon-purple p-1">
            <div className="w-full h-full rounded-full bg-bg flex items-center justify-center text-4xl font-bold">
              C
            </div>
          </div>
          <div className="absolute bottom-0 right-0 w-7 h-7 rounded-full bg-neon-green border-4 border-bg flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-bg animate-pulse" />
          </div>
        </div>

        <h1 className="text-3xl font-bold mb-2">
          Carlos<span className="text-neon-green">.</span>
        </h1>
        <p className="text-text-muted text-sm mb-1">Dev de IA · Silveira Software</p>
        <p className="text-text-muted/70 text-xs font-mono">
          building.in.public · São Paulo, BR
        </p>
      </div>

      {/* Links principais */}
      <div className="w-full max-w-md space-y-3 mb-8">
        <p className="text-xs font-mono text-neon-green mb-3 pl-1">// MEUS APPS</p>
        {primaryLinks.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.label}
              href={link.url}
              className={`group flex items-center gap-4 p-4 rounded-xl border bg-surface transition ${
                link.accent === 'green'
                  ? 'border-border hover:border-neon-green/40 hover:bg-neon-green/5'
                  : 'border-border hover:border-neon-purple/40 hover:bg-neon-purple/5'
              }`}
            >
              <div
                className={`w-11 h-11 rounded-lg flex items-center justify-center ${
                  link.accent === 'green'
                    ? 'bg-neon-green/10 text-neon-green'
                    : 'bg-neon-purple/10 text-neon-purple'
                }`}
              >
                <Icon className="w-5 h-5" />
              </div>
              <div className="flex-1 text-left">
                <p className="font-medium">{link.label}</p>
                <p className="text-xs text-text-muted">{link.sub}</p>
              </div>
              <ArrowUpRight className="w-4 h-4 text-text-muted group-hover:text-text-primary transition" />
            </a>
          );
        })}
      </div>

      {/* Sociais */}
      <div className="w-full max-w-md space-y-2 mb-8">
        <p className="text-xs font-mono text-neon-purple mb-3 pl-1">// REDES SOCIAIS</p>
        {socials.map((s) => {
          const Icon = s.icon;
          return (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noopener"
              className="flex items-center gap-3 p-3 rounded-lg border border-border bg-surface hover:bg-surface/70 transition"
            >
              <Icon className="w-4 h-4" style={{ color: s.color }} />
              <span className="text-sm flex-1">{s.label}</span>
              <ArrowUpRight className="w-3 h-3 text-text-muted" />
            </a>
          );
        })}
      </div>

      {/* Trabalho */}
      <div className="w-full max-w-md space-y-2 mb-12">
        <p className="text-xs font-mono text-neon-green mb-3 pl-1">// TRABALHA COMIGO</p>
        {work.map((w) => {
          const Icon = w.icon;
          return (
            <a
              key={w.label}
              href={w.url}
              className="flex items-center gap-3 p-3 rounded-lg border border-border bg-surface hover:border-neon-green/30 transition"
            >
              <Icon className="w-4 h-4 text-neon-green" />
              <span className="text-sm flex-1">{w.label}</span>
              <ArrowUpRight className="w-3 h-3 text-text-muted" />
            </a>
          );
        })}
      </div>

      {/* Newsletter / fica por dentro */}
      <div className="w-full max-w-md p-5 rounded-xl border border-border bg-surface mb-8">
        <p className="text-xs font-mono text-neon-purple mb-2">// FIQUE POR DENTRO</p>
        <h3 className="font-bold mb-2">Lista de espera Silveira Stack</h3>
        <p className="text-sm text-text-muted mb-4">
          Quando abrir pra usuários, quem tá na lista entra no primeiro lote com 50% off.
        </p>
        <form
          action="/api/waitlist"
          method="POST"
          className="flex gap-2"
        >
          <input
            type="email"
            name="email"
            placeholder="seu@email.com"
            required
            className="flex-1 px-3 py-2 rounded-md bg-bg border border-border text-sm focus:outline-none focus:border-neon-green/50"
          />
          <button
            type="submit"
            className="px-4 py-2 rounded-md bg-neon-green text-bg font-medium text-sm hover:bg-neon-green/90 transition"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>

      <footer className="text-xs font-mono text-text-muted/60 text-center">
        kaduapps.site · {new Date().getFullYear()}
      </footer>
    </main>
  );
}
