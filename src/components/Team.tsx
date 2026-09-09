import Logo from './Logo';

const coordinators = [
  {
    name: 'Prof. Dr. Arno Dal Ri Jr.',
    role: 'Coordenador',
    affiliation: 'UFSC – Departamento de Direito',
    specialization: 'História da Cultura Jurídica, Transplantes Jurídicos, Influência Francesa no Direito Brasileiro',
    initials: 'AD',
  },
  {
    name: 'Prof. Dr. Diego Nunes',
    role: 'Coordenador',
    affiliation: 'UFSC – Departamento de Direito',
    specialization: 'Tribunal de Segurança Nacional, Jurimetria Histórica, Estado de Exceção',
    initials: 'DN',
  },
  {
    name: 'Prof. Dr. Caetano Dias Corrêa',
    role: 'Coordenador',
    affiliation: 'UFSC – Departamento de Direito',
    specialization: 'História do Direito, Instituições Jurídicas, Cultura Política',
    initials: 'CC',
  },
  {
    name: 'Prof. Dr. Fernando Nagib Marcos Coelho',
    role: 'Coordenador',
    affiliation: 'UFSC/UFBA',
    specialization: 'História da Cultura Jurídica, Direito e Sociedade',
    initials: 'FN',
  },
];

const internationalPartners = [
  { name: 'Università di Urbino Carlo Bo', country: 'Itália' },
  { name: 'Università di Macerata', country: 'Itália' },
  { name: 'Universiteit Gent', country: 'Bélgica' },
];

export default function Team() {
  return (
    <section id="equipe" className="py-20 md:py-28 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#d4af37] font-semibold text-sm uppercase tracking-[0.2em]">Nossa Equipe</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mt-3 font-serif">
            Coordenação
          </h2>
          <div className="ornament-line mt-4">
            <div className="w-16 h-0.5 bg-[#d4af37] rounded-full"></div>
            <Logo size="sm" variant="dark" />
            <div className="w-16 h-0.5 bg-[#d4af37] rounded-full"></div>
          </div>
          <p className="max-w-2xl mx-auto text-gray-600 mt-6">
            O grupo é coordenado por professores do Departamento de Direito da UFSC, 
            com ampla experiência em pesquisa na área de história da cultura jurídica.
          </p>
        </div>

        {/* Coordinators Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {coordinators.map((person, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 border border-gray-100 hover:border-[#d4af37]/30 transition-all card-shadow-hover text-center group relative overflow-hidden"
            >
              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#d4af37] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="w-20 h-20 rounded-full bg-[#1a1a2e] flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform ring-2 ring-[#d4af37]/20 group-hover:ring-[#d4af37]/50">
                <span className="text-[#d4af37] font-bold text-xl font-serif group-hover:scale-110 transition-transform">
                  {person.initials}
                </span>
              </div>
              <h3 className="font-bold text-[#1a1a2e] text-base mb-1 font-serif">{person.name}</h3>
              <span className="text-[#d4af37] text-xs font-semibold uppercase tracking-[0.15em]">{person.role}</span>
              <p className="text-gray-500 text-xs mt-2">{person.affiliation}</p>
              <p className="text-gray-600 text-xs mt-3 leading-relaxed">{person.specialization}</p>
            </div>
          ))}
        </div>

        {/* Members info */}
        <div className="bg-white rounded-2xl p-8 md:p-10 border border-gray-100 mb-12 relative overflow-hidden">
          <div className="absolute top-4 right-6 text-[#d4af37]/5 text-7xl font-serif italic">IC</div>
          
          <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="flex -space-x-3">
              {['RS', 'MF', 'LM', 'SS', 'HB', 'CR'].map((initials, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-[#1a1a2e] border-2 border-white flex items-center justify-center"
                >
                  <span className="text-[#d4af37] text-xs font-bold">{initials}</span>
                </div>
              ))}
              <div className="w-10 h-10 rounded-full bg-[#d4af37] border-2 border-white flex items-center justify-center">
                <span className="text-[#1a1a2e] text-xs font-bold">+25</span>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-[#1a1a2e] text-lg font-serif">Integrantes do Grupo</h3>
              <p className="text-gray-600 text-sm mt-1">
                O grupo conta com mais de 30 integrantes entre professores, pesquisadores de pós-doutorado, 
                doutorandos, mestrandos e bolsistas de iniciação científica de diversas instituições 
                nacionais e internacionais.
              </p>
            </div>
            <a
              href="https://iuscommune.paginas.ufsc.br/integrantes/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 px-5 py-2.5 bg-[#1a1a2e] text-white rounded-lg font-medium text-sm hover:bg-[#16213e] transition-colors"
            >
              Ver integrantes →
            </a>
          </div>
        </div>

        {/* International Cooperation */}
        <div className="text-center mb-8">
          <h3 className="text-xl font-bold text-[#1a1a2e] font-serif">Cooperação Internacional</h3>
          <p className="text-gray-600 text-sm mt-2">Parcerias com instituições estrangeiras</p>
        </div>
        <div className="grid sm:grid-cols-3 gap-4">
          {internationalPartners.map((partner, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-5 border border-gray-100 text-center hover:border-[#d4af37]/30 transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-[#d4af37]/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-[#d4af37]/20 transition-colors">
                <svg className="w-5 h-5 text-[#d4af37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-semibold text-[#1a1a2e] text-sm">{partner.name}</h4>
              <p className="text-gray-500 text-xs mt-1">{partner.country}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
