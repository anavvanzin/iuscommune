import Logo from './Logo';

export default function About() {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-gray-50 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4af37]/3 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#1a1a2e]/3 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#d4af37] font-semibold text-sm uppercase tracking-[0.2em]">Sobre nós</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mt-3 font-serif">
            O Grupo Ius Commune
          </h2>
          <div className="ornament-line mt-4">
            <div className="w-16 h-0.5 bg-[#d4af37] rounded-full"></div>
            <Logo size="sm" variant="dark" />
            <div className="w-16 h-0.5 bg-[#d4af37] rounded-full"></div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text */}
          <div>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              O <strong className="text-[#1a1a2e]">Ius Commune – UFSC/CNPq</strong> é o Grupo Interinstitucional 
              de Estudos e Pesquisa em <strong className="text-[#1a1a2e]">História da Cultura Jurídica</strong>, 
              sediado no Centro de Ciências Jurídicas (CCJ) da Universidade Federal de Santa Catarina (UFSC).
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Vinculado ao Curso de Graduação em Direito e ao Programa de Pós-Graduação em Direito (PPGD), 
              o grupo é formado por pesquisadores e estudantes provenientes de universidades brasileiras e 
              estrangeiras, sendo o <strong className="text-[#1a1a2e]">grupo mais longevo do CCJ em atividade, desde 2004</strong>.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              O Ius Commune objetiva problematizar as experiências jurídicas ocidentais como fenômenos 
              culturais localizados historicamente, afastando-se simultaneamente de abordagens que alçam 
              as juridicidades a uma dimensão atemporal, bem como daquelas que reduzem as experiências 
              jurídicas a reflexos automáticos das formações sociais.
            </p>

            {/* Key features */}
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                'Vinculado ao CNPq',
                'Cooperação Internacional',
                'Ativo desde 2004',
                'Pós-Graduação em Direito',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-100">
                  <div className="w-8 h-8 rounded-lg bg-[#d4af37]/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-[#d4af37]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Visual Card */}
          <div className="relative">
            <div className="bg-white rounded-2xl p-8 card-shadow border border-gray-100">
              {/* Logo header */}
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-100">
                <div className="w-16 h-16 rounded-xl bg-[#1a1a2e] flex items-center justify-center">
                  <Logo size="lg" variant="light" />
                </div>
                <div>
                  <h3 className="font-bold text-[#1a1a2e] text-lg font-serif">Missão</h3>
                  <p className="text-gray-500 text-sm">Pesquisa e formação acadêmica em história jurídica</p>
                </div>
              </div>

              <blockquote className="border-l-4 border-[#d4af37] pl-4 py-2 mb-6">
                <p className="text-gray-600 italic font-serif text-lg">
                  "Problematizar as experiências jurídicas ocidentais como fenômenos culturais 
                  localizados historicamente."
                </p>
              </blockquote>

              <div className="space-y-3">
                {[
                  { code: 'CCJ', title: 'Centro de Ciências Jurídicas', sub: 'Universidade Federal de Santa Catarina' },
                  { code: 'PPGD', title: 'Programa de Pós-Graduação', sub: 'em Direito – UFSC' },
                  { code: 'CNPq', title: 'Conselho Nacional de Desenvolvimento', sub: 'Científico e Tecnológico' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-[#d4af37]/5 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-[#1a1a2e] flex items-center justify-center flex-shrink-0">
                      <span className="text-[#d4af37] font-bold text-xs">{item.code}</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-800">{item.title}</p>
                      <p className="text-xs text-gray-500">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#d4af37]/10 rounded-2xl -z-10"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#1a1a2e]/5 rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
