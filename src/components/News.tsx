const newsItems = [
  {
    date: '21 Ago 2026',
    category: 'Edital',
    title: 'Seleção de Bolsista de Iniciação Científica – 2026/2027',
    description: 'Processo seletivo destinado a classificar alunos para atividades de iniciação científica (bolsista e voluntária) no período entre setembro de 2026 e agosto de 2027.',
    tag: 'PIBIC',
    highlight: true,
  },
  {
    date: '20 Ago 2026',
    category: 'Evento',
    title: 'XI Curso de História do Direito',
    description: '"É como se vê um tribunal de encomenda": 90 anos de instauração do Tribunal de Segurança Nacional (1936-1945). 24 a 26 de agosto de 2026, no Auditório do CSE/UFSC.',
    tag: 'Curso',
    highlight: true,
  },
  {
    date: '12 Set 2025',
    category: 'Grupo de Estudos',
    title: '41ª Edição – Introdução Histórica ao Direito e Feminismos',
    description: 'Debates sobre feminismos sufragistas, feminismos negros e interseccionais, feminismos de(s)coloniais e ecofeministas. Terças-feiras, 16h30, Sala dos Conselhos – CCJ/UFSC.',
    tag: '41ª Edição',
    highlight: false,
  },
  {
    date: '27 Ago 2025',
    category: 'Seminário',
    title: 'As Metamorfoses da Globalização: O papel do Direito no conflito geopolítico',
    description: 'Seminário ministrado pelo Prof. Dr. Federico Losurdo (Università di Urbino Carlo Bo, Itália). Gravações disponíveis no canal AVDOTIA IUS COMMUNE.',
    tag: 'Internacional',
    highlight: false,
  },
  {
    date: '03 Mar 2026',
    category: 'Monitoria',
    title: 'Edital de Seleção de Monitoria – 2026/I',
    description: 'Seleção de estudantes PPN para monitoria em Teoria Política no Curso de Graduação em Direito (diurno) no semestre de 2026/I.',
    tag: 'Monitoria',
    highlight: false,
  },
];

export default function News() {
  return (
    <section id="noticias" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#d4af37] font-semibold text-sm uppercase tracking-[0.2em]">Atualidades</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mt-3 font-serif">
            Notícias e Eventos
          </h2>
          <div className="ornament-line mt-4">
            <div className="w-16 h-0.5 bg-[#d4af37] rounded-full"></div>
            <span className="text-[#d4af37] text-lg">§</span>
            <div className="w-16 h-0.5 bg-[#d4af37] rounded-full"></div>
          </div>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((item, index) => (
            <article
              key={index}
              className={`group relative bg-white rounded-xl border transition-all duration-300 card-shadow-hover overflow-hidden ${
                item.highlight
                  ? 'border-[#d4af37]/30 ring-1 ring-[#d4af37]/10'
                  : 'border-gray-100 hover:border-[#d4af37]/20'
              }`}
            >
              {item.highlight && (
                <div className="absolute top-0 left-0 right-0 h-1 gradient-gold"></div>
              )}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-medium text-gray-400 font-mono">{item.date}</span>
                  <span className={`text-xs px-2.5 py-0.5 rounded-full font-semibold tracking-wide ${
                    item.highlight
                      ? 'bg-[#d4af37]/10 text-[#d4af37] border border-[#d4af37]/20'
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    {item.tag}
                  </span>
                </div>
                <h3 className="font-bold text-[#1a1a2e] text-lg mb-3 group-hover:text-[#d4af37] transition-colors line-clamp-2 font-serif">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                  {item.description}
                </p>
                <div className="mt-4 pt-4 border-t border-gray-50 flex items-center justify-between">
                  <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                    {item.category}
                  </span>
                  <svg className="w-4 h-4 text-gray-300 group-hover:text-[#d4af37] group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://iuscommune.paginas.ufsc.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#1a1a2e] text-white rounded-lg font-medium hover:bg-[#16213e] transition-colors group"
          >
            Ver todas as notícias
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
