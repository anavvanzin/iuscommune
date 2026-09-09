import { useState } from 'react';
import Logo from './Logo';

interface HeaderProps {
  scrolled: boolean;
}

const navItems = [
  { label: 'Início', href: '#inicio' },
  { label: 'O Grupo', href: '#sobre' },
  { label: 'Notícias', href: '#noticias' },
  { label: 'Pesquisas', href: '#pesquisas' },
  { label: 'Publicações', href: '#publicacoes' },
  { label: 'Equipe', href: '#equipe' },
  { label: 'Contato', href: '#contato' },
];

export default function Header({ scrolled }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-3 group">
            <div className="relative">
              <Logo size="md" variant={scrolled ? 'dark' : 'light'} />
              <div className={`absolute inset-0 rounded-full transition-opacity duration-300 ${
                scrolled ? 'opacity-0' : 'opacity-100'
              }`}>
              </div>
            </div>
            <div className="hidden sm:block">
              <span className={`font-bold text-lg tracking-tight transition-colors ${
                scrolled ? 'text-[#1a1a2e]' : 'text-white'
              }`}>
                Ius Commune
              </span>
              <span className={`block text-[10px] font-medium tracking-widest uppercase ${
                scrolled ? 'text-[#d4af37]' : 'text-[#d4af37]'
              }`}>
                História da Cultura Jurídica
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  scrolled
                    ? 'text-gray-700 hover:text-[#1a1a2e] hover:bg-gray-100'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://iuscommune.paginas.ufsc.br/"
              target="_blank"
              rel="noopener noreferrer"
              className={`ml-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                scrolled
                  ? 'bg-[#d4af37] text-[#1a1a2e] hover:bg-[#c9a227]'
                  : 'bg-[#d4af37] text-[#1a1a2e] hover:bg-[#e8c547]'
              }`}
            >
              Site Original
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 rounded-lg ${
              scrolled ? 'text-gray-700' : 'text-white'
            }`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t shadow-lg">
          <nav className="px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-[#1a1a2e] font-medium"
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://iuscommune.paginas.ufsc.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-3 py-2 mt-2 rounded-lg bg-[#d4af37] text-[#1a1a2e] font-semibold text-center"
            >
              Site Original ↗
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
