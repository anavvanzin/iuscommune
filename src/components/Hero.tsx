import Logo from './Logo';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center gradient-hero overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#d4af37]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0f3460]/30 rounded-full blur-3xl"></div>
      </div>

      {/* Decorative Latin pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-10 left-10 text-[#d4af37] text-6xl font-serif italic">
          IUS
        </div>
        <div className="absolute bottom-20 right-16 text-[#d4af37] text-5xl font-serif italic">
          COMMUNE
        </div>
        <div className="absolute top-1/3 right-10 text-[#d4af37] text-3xl font-serif italic opacity-50">
          §
        </div>
        <div className="absolute bottom-1/3 left-16 text-[#d4af37] text-4xl font-serif italic opacity-50">
          ⚖
        </div>
      </div>

      {/* Decorative border lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          {/* Logo central */}
          <div className="flex justify-center mb-8 animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-[#d4af37]/10 rounded-full blur-2xl scale-150"></div>
              <Logo size="xl" variant="light" className="relative" />
              <div className="absolute -inset-4 border border-[#d4af37]/20 rounded-full"></div>
              <div className="absolute -inset-8 border border-[#d4af37]/10 rounded-full"></div>
            </div>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-[#d4af37]/30 rounded-full px-5 py-2 mb-8 animate-fade-in">
            <div className="w-2 h-2 bg-[#d4af37] rounded-full animate-pulse"></div>
            <span className="text-[#d4af37] text-sm font-medium tracking-wider uppercase">UFSC • CNPq • Desde 2004</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 animate-fade-in-up">
            <span className="block font-serif italic text-[#d4af37]">Ius Commune</span>
          </h1>
          <div className="flex items-center justify-center gap-4 mb-6 animate-fade-in-up animate-delay-200">
            <div className="h-px w-12 bg-[#d4af37]/50"></div>
            <span className="text-white/90 text-xl sm:text-2xl md:text-3xl font-light tracking-wide">
              Grupo Interinstitucional
            </span>
            <div className="h-px w-12 bg-[#d4af37]/50"></div>
          </div>
          <p className="text-lg sm:text-xl md:text-2xl text-white/70 font-light mb-2 animate-fade-in-up animate-delay-200">
            em História da Cultura Jurídica
          </p>

          {/* Latin motto */}
          <p className="text-[#d4af37]/60 text-sm italic font-serif mb-10 animate-fade-in-up animate-delay-200">
            "Ius est ars boni et aequi"
          </p>

          {/* Description */}
          <p className="max-w-2xl mx-auto text-white/60 text-base md:text-lg mb-10 animate-fade-in-up animate-delay-400 leading-relaxed">
            Problematizando as experiências jurídicas ocidentais como fenômenos culturais 
            localizados historicamente, no Centro de Ciências Jurídicas da Universidade 
            Federal de Santa Catarina.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animate-delay-400">
            <a
              href="#sobre"
              className="group px-8 py-3.5 bg-[#d4af37] text-[#1a1a2e] font-semibold rounded-lg hover:bg-[#e8c547] transition-all shadow-lg hover:shadow-xl shadow-[#d4af37]/20 flex items-center gap-2"
            >
              <span>Conheça o Grupo</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#publicacoes"
              className="px-8 py-3.5 border border-white/20 text-white font-medium rounded-lg hover:bg-white/5 hover:border-[#d4af37]/50 transition-all flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <span>Publicações</span>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-12 border-t border-white/10 animate-fade-in-up animate-delay-600">
            {[
              { value: '20+', label: 'Anos de atividade' },
              { value: '41', label: 'Edições do Grupo de Estudos' },
              { value: '100+', label: 'Publicações' },
              { value: '30+', label: 'Pesquisadores' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#d4af37] font-serif">{stat.value}</div>
                <div className="text-white/50 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-white/30 text-xs uppercase tracking-widest">Explorar</span>
        <div className="w-5 h-8 border border-white/30 rounded-full flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-[#d4af37] rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}
