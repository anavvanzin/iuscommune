const publicationCategories = [
  {
    title: 'Livros',
    count: '25+',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    description: 'Obras publicadas pelos integrantes do grupo em editoras nacionais e internacionais.',
  },
  {
    title: 'Artigos',
    count: '50+',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    description: 'Artigos científicos em periódicos qualificados nacionais e internacionais.',
  },
  {
    title: 'Teses e Dissertações',
    count: '30+',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    description: 'Trabalhos acadêmicos orientados por membros do grupo na pós-graduação.',
  },
  {
    title: 'Anais de Eventos',
    count: '15+',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    description: 'Coletâneas de trabalhos apresentados nos eventos organizados pelo grupo.',
  },
];

export default function Publications() {
  return (
    <section id="publicacoes" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#d4af37] font-semibold text-sm uppercase tracking-wider">Produção Acadêmica</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mt-3">
            Publicações
          </h2>
          <div className="w-20 h-1 bg-[#d4af37] mx-auto mt-4 rounded-full"></div>
          <p className="max-w-2xl mx-auto text-gray-600 mt-6">
            A produção científica do grupo abrange livros, artigos, teses, dissertações e anais de eventos, 
            refletindo a diversidade de nossas linhas de pesquisa.
          </p>
        </div>

        {/* Publication Categories */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {publicationCategories.map((cat, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:border-[#d4af37]/30 transition-all group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#1a1a2e]/5 group-hover:bg-[#d4af37]/10 flex items-center justify-center text-[#1a1a2e] group-hover:text-[#d4af37] transition-colors">
                  {cat.icon}
                </div>
                <span className="text-2xl font-bold text-[#d4af37]">{cat.count}</span>
              </div>
              <h3 className="font-bold text-[#1a1a2e] mb-2">{cat.title}</h3>
              <p className="text-gray-600 text-sm">{cat.description}</p>
            </div>
          ))}
        </div>

        {/* Featured Publications */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-10">
          <h3 className="text-xl font-bold text-[#1a1a2e] mb-6 flex items-center gap-3">
            <svg className="w-5 h-5 text-[#d4af37]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            Publicações em Destaque
          </h3>

          <div className="space-y-4">
            {[
              {
                author: 'DAL RI Jr., Arno',
                title: 'François Laurent in Brazil. The defense of the Principle of Nationalities that crossed (1899-1978)',
                journal: 'Sartoniana, 38 (2026), p. 53-83',
                type: 'Artigo',
              },
              {
                author: 'NUNES, Diego',
                title: 'Legislação penal e repressão política no estado novo: uma análise a partir de julgamentos do tribunal de segurança nacional (1936-1945)',
                journal: 'Acervo: Revista do Arquivo Nacional, v. 30, p. 126-143, 2017',
                type: 'Artigo',
              },
              {
                author: 'NUNES, Diego',
                title: 'O Tribunal de Segurança Nacional: um estudo de jurimetria histórica',
                journal: 'I Jornadas de Historia del Derecho Penal, Penitenciario y Criminológico, Buenos Aires, 2024',
                type: 'Capítulo',
              },
            ].map((pub, index) => (
              <div key={index} className="bg-white rounded-lg p-5 border border-gray-100 hover:border-[#d4af37]/20 transition-colors">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-[#d4af37] mb-1">{pub.author}</p>
                    <p className="text-[#1a1a2e] font-medium text-sm leading-relaxed">{pub.title}</p>
                    <p className="text-gray-500 text-xs mt-2 italic">{pub.journal}</p>
                  </div>
                  <span className="flex-shrink-0 text-xs px-2 py-1 bg-[#1a1a2e]/5 text-[#1a1a2e] rounded font-medium">
                    {pub.type}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <a
              href="https://iuscommune.paginas.ufsc.br/publicacoes/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#d4af37] font-semibold hover:text-[#c9a227] transition-colors"
            >
              Ver todas as publicações
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Library */}
        <div className="mt-12 flex flex-col md:flex-row items-center gap-6 bg-[#1a1a2e] rounded-2xl p-8 text-white">
          <div className="w-16 h-16 rounded-xl bg-[#d4af37]/20 flex items-center justify-center flex-shrink-0">
            <svg className="w-8 h-8 text-[#d4af37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-1">Biblioteca R. von Caenegen</h3>
            <p className="text-white/70">
              Acervo especializado em história da cultura jurídica disponível para consulta 
              pelos integrantes do grupo e pela comunidade acadêmica.
            </p>
          </div>
          <a
            href="https://iuscommune.paginas.ufsc.br/biblioteca-r-von-caenegen/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 px-5 py-2.5 border border-[#d4af37] text-[#d4af37] rounded-lg font-medium hover:bg-[#d4af37] hover:text-[#1a1a2e] transition-colors"
          >
            Acessar
          </a>
        </div>
      </div>
    </section>
  );
}
