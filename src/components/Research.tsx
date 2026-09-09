const researchAreas = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: 'História da Cultura Jurídica',
    description: 'Estudo das experiências jurídicas ocidentais como fenômenos culturais localizados historicamente, com foco nas tradições do Direito Continental.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
    title: 'Teoria Política e Direito',
    description: 'Investigações sobre as relações entre pensamento político e cultura jurídica, incluindo debates sobre estado de exceção e tribunais de exceção.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Transplantes Jurídicos',
    description: 'Análise da circulação de modelos jurídicos entre diferentes contextos culturais e geográficos, com ênfase na influência europeia no Brasil.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: 'Instituições Jurídicas',
    description: 'Pesquisa sobre a formação e transformação de instituições jurídicas, incluindo tribunais, codificações e sistemas normativos ao longo da história.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Direito e Sociedade',
    description: 'Exploração das interações entre sistemas jurídicos e contextos sociais, incluindo perspectivas de gênero, raça e classe na experiência jurídica.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: 'Historiografia Jurídica',
    description: 'Reflexões metodológicas sobre a escrita da história do direito, incluindo reconstrução, narrativa e as fronteiras entre história e ficção.',
  },
];

export default function Research() {
  return (
    <section id="pesquisas" className="py-20 md:py-28 bg-[#f8f9fb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#d4af37] font-semibold text-sm uppercase tracking-wider">Linhas de Pesquisa</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mt-3">
            Áreas de Investigação
          </h2>
          <div className="w-20 h-1 bg-[#d4af37] mx-auto mt-4 rounded-full"></div>
          <p className="max-w-2xl mx-auto text-gray-600 mt-6">
            O grupo desenvolve pesquisas em diversas áreas da história da cultura jurídica, 
            articulando perspectivas historiográficas, teóricas e comparativas.
          </p>
        </div>

        {/* Research Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {researchAreas.map((area, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl p-6 border border-gray-100 hover:border-[#d4af37]/30 transition-all duration-300 card-shadow-hover"
            >
              <div className="w-14 h-14 rounded-xl bg-[#1a1a2e]/5 group-hover:bg-[#d4af37]/10 flex items-center justify-center text-[#1a1a2e] group-hover:text-[#d4af37] transition-colors mb-5">
                {area.icon}
              </div>
              <h3 className="font-bold text-[#1a1a2e] text-lg mb-3 group-hover:text-[#d4af37] transition-colors">
                {area.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>

        {/* Study Groups Section */}
        <div className="mt-20 bg-[#1a1a2e] rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#d4af37]/5 rounded-full blur-3xl"></div>
          <div className="relative">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold mb-3">Grupo de Estudos Permanente</h3>
                <p className="text-white/70 max-w-xl">
                  O grupo mantém encontros regulares com debates sobre obras fundamentais da história 
                  do direito e da cultura jurídica. Atualmente na 41ª edição, com temas como 
                  "Introdução Histórica ao Direito e Feminismos".
                </p>
              </div>
              <a
                href="https://iuscommune.paginas.ufsc.br/grupo-de-estudos/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 px-6 py-3 bg-[#d4af37] text-[#1a1a2e] font-semibold rounded-lg hover:bg-[#e8c547] transition-colors"
              >
                Saiba mais
              </a>
            </div>

            {/* Recent editions */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 pt-8 border-t border-white/10">
              {[
                { edition: '41ª', title: 'Direito e Feminismos', year: '2025.2' },
                { edition: '40ª', title: 'Direito Penal e Fascismos', year: '2025.1' },
                { edition: '35ª', title: 'Teologia Política (Schmitt)', year: '2022.1' },
                { edition: '34ª', title: 'Escrever História do Direito', year: '2021' },
              ].map((ed, i) => (
                <div key={i} className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <div className="text-[#d4af37] font-bold text-sm">{ed.edition} Edição</div>
                  <div className="text-white/90 font-medium text-sm mt-1">{ed.title}</div>
                  <div className="text-white/50 text-xs mt-1">{ed.year}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
