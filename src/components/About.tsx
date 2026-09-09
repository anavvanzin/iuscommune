export default function About() {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#d4af37] font-semibold text-sm uppercase tracking-wider">Sobre nós</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mt-3">
            O Grupo Ius Commune
          </h2>
          <div className="w-20 h-1 bg-[#d4af37] mx-auto mt-4 rounded-full"></div>
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
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#d4af37]/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-[#d4af37]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700 text-sm">Vinculado ao CNPq</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#d4af37]/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-[#d4af37]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700 text-sm">Cooperação Internacional</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#d4af37]/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-[#d4af37]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700 text-sm">Ativo desde 2004</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#d4af37]/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-[#d4af37]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700 text-sm">Pós-Graduação em Direito</span>
              </div>
            </div>
          </div>

          {/* Right - Visual Card */}
          <div className="relative">
            <div className="bg-white rounded-2xl p-8 card-shadow border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-[#1a1a2e] flex items-center justify-center">
                  <svg className="w-7 h-7 text-[#d4af37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-[#1a1a2e] text-lg">Missão</h3>
                  <p className="text-gray-500 text-sm">Pesquisa e formação acadêmica</p>
                </div>
              </div>

              <blockquote className="border-l-4 border-[#d4af37] pl-4 py-2 mb-6">
                <p className="text-gray-600 italic">
                  "Problematizar as experiências jurídicas ocidentais como fenômenos culturais 
                  localizados historicamente."
                </p>
              </blockquote>

              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-10 h-10 rounded-lg bg-[#d4af37]/10 flex items-center justify-center">
                    <span className="text-[#d4af37] font-bold text-sm">CCJ</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">Centro de Ciências Jurídicas</p>
                    <p className="text-xs text-gray-500">Universidade Federal de Santa Catarina</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-10 h-10 rounded-lg bg-[#d4af37]/10 flex items-center justify-center">
                    <span className="text-[#d4af37] font-bold text-sm">PPGD</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">Programa de Pós-Graduação</p>
                    <p className="text-xs text-gray-500">em Direito – UFSC</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-10 h-10 rounded-lg bg-[#d4af37]/10 flex items-center justify-center">
                    <span className="text-[#d4af37] font-bold text-sm">CNPq</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">Conselho Nacional de Desenvolvimento</p>
                    <p className="text-xs text-gray-500">Científico e Tecnológico</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#d4af37]/10 rounded-2xl -z-10"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#1a1a2e]/5 rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
