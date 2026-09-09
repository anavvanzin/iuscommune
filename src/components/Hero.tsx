export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center gradient-hero overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#d4af37]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0f3460]/30 rounded-full blur-3xl"></div>
      </div>

      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4af37' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8 animate-fade-in">
            <div className="w-2 h-2 bg-[#d4af37] rounded-full animate-pulse"></div>
            <span className="text-white/80 text-sm font-medium">Desde 2004 • UFSC / CNPq</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in-up">
            <span className="block">Ius Commune</span>
            <span className="block text-[#d4af37] text-2xl sm:text-3xl md:text-4xl mt-2 font-light">
              Grupo Interinstitucional em
            </span>
            <span className="block text-xl sm:text-2xl md:text-3xl mt-1 font-light text-white/80">
              História da Cultura Jurídica
            </span>
          </h1>

          {/* Description */}
          <p className="max-w-2xl mx-auto text-white/70 text-lg md:text-xl mb-10 animate-fade-in-up animate-delay-200">
            Problematizando as experiências jurídicas ocidentais como fenômenos culturais 
            localizados historicamente, no Centro de Ciências Jurídicas da Universidade 
            Federal de Santa Catarina.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animate-delay-400">
            <a
              href="#sobre"
              className="px-8 py-3 bg-[#d4af37] text-[#1a1a2e] font-semibold rounded-lg hover:bg-[#e8c547] transition-all shadow-lg hover:shadow-xl"
            >
              Conheça o Grupo
            </a>
            <a
              href="#publicacoes"
              className="px-8 py-3 border border-white/30 text-white font-medium rounded-lg hover:bg-white/10 transition-all"
            >
              Publicações
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-16 border-t border-white/10 animate-fade-in-up animate-delay-600">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#d4af37]">20+</div>
              <div className="text-white/60 text-sm mt-1">Anos de atividade</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#d4af37]">41</div>
              <div className="text-white/60 text-sm mt-1">Edições do Grupo de Estudos</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#d4af37]">100+</div>
              <div className="text-white/60 text-sm mt-1">Publicações</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#d4af37]">30+</div>
              <div className="text-white/60 text-sm mt-1">Pesquisadores</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
