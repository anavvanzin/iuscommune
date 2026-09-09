import Logo from './Logo';

export default function Contact() {
  return (
    <section id="contato" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#d4af37] font-semibold text-sm uppercase tracking-[0.2em]">Fale Conosco</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mt-3 font-serif">
            Contato
          </h2>
          <div className="ornament-line mt-4">
            <div className="w-16 h-0.5 bg-[#d4af37] rounded-full"></div>
            <span className="text-[#d4af37] text-lg">§</span>
            <div className="w-16 h-0.5 bg-[#d4af37] rounded-full"></div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Logo size="md" variant="dark" />
              <div>
                <h3 className="text-xl font-bold text-[#1a1a2e] font-serif">Entre em contato</h3>
                <p className="text-gray-500 text-sm">Canais oficiais do grupo</p>
              </div>
            </div>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Para informações sobre o grupo, participação em pesquisas, eventos ou publicações, 
              entre em contato conosco através dos canais abaixo.
            </p>

            <div className="space-y-5">
              {/* Email */}
              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-[#d4af37]/20 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-[#d4af37]/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#d4af37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-[#1a1a2e] text-sm">E-mail</p>
                  <a href="mailto:iuscommune.ufsc@gmail.com" className="text-gray-600 hover:text-[#d4af37] transition-colors text-sm">
                    iuscommune.ufsc@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-[#d4af37]/20 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-[#d4af37]/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#d4af37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-[#1a1a2e] text-sm">Telefone</p>
                  <a href="tel:+554837216739" className="text-gray-600 hover:text-[#d4af37] transition-colors text-sm">
                    (48) 3721-6739
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-[#d4af37]/20 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-[#d4af37]/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#d4af37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-[#1a1a2e] text-sm">Endereço</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Centro de Ciências Jurídicas (CCJ)<br />
                    Universidade Federal de Santa Catarina<br />
                    Campus Universitário, Trindade<br />
                    Florianópolis – SC, Brasil
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8 pt-8 border-t border-gray-100">
              <p className="font-medium text-[#1a1a2e] mb-4 text-sm">Redes Sociais</p>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.facebook.com/ufsciuscommune"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-[#d4af37]/10 border border-gray-200 hover:border-[#d4af37]/30 flex items-center justify-center text-gray-600 hover:text-[#d4af37] transition-all"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/iuscommuneufsc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-[#d4af37]/10 border border-gray-200 hover:border-[#d4af37]/30 flex items-center justify-center text-gray-600 hover:text-[#d4af37] transition-all"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/@AvdotiaIusCommuneUFSC"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-[#d4af37]/10 border border-gray-200 hover:border-[#d4af37]/30 flex items-center justify-center text-gray-600 hover:text-[#d4af37] transition-all"
                  aria-label="YouTube"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                <a
                  href="https://iuscommune.paginas.ufsc.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-[#d4af37]/10 border border-gray-200 hover:border-[#d4af37]/30 flex items-center justify-center text-gray-600 hover:text-[#d4af37] transition-all"
                  aria-label="Website"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Map / Visual */}
          <div className="relative">
            <div className="bg-gray-50 rounded-2xl p-8 h-full flex flex-col justify-center border border-gray-100 relative overflow-hidden">
              {/* Decorative */}
              <div className="absolute top-4 right-4 text-[#d4af37]/10 text-6xl font-serif">⚖</div>
              
              <div className="text-center relative">
                <div className="w-20 h-20 rounded-full bg-[#1a1a2e] flex items-center justify-center mx-auto mb-6 ring-4 ring-[#d4af37]/20">
                  <Logo size="lg" variant="light" />
                </div>
                <h4 className="font-bold text-[#1a1a2e] text-lg mb-2 font-serif">Centro de Ciências Jurídicas</h4>
                <p className="text-gray-600 text-sm mb-2">Universidade Federal de Santa Catarina</p>
                <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                  Campus Universitário, Trindade<br />
                  Florianópolis – SC, 88040-900<br />
                  Brasil
                </p>

                <a
                  href="https://maps.google.com/?q=Centro+de+Ciencias+Juridicas+UFSC"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1a1a2e] text-white rounded-lg text-sm font-medium hover:bg-[#16213e] transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Ver no mapa
                </a>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="text-xs text-gray-400">
                    <span className="text-[#d4af37]">●</span> Sala 313 – Centro de Ciências Jurídicas
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    <span className="text-[#d4af37]">●</span> Sala dos Conselhos (4º andar) – Grupo de Estudos
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
