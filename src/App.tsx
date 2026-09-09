import { useEffect, useState } from 'react';
import { ArrowRight, BookOpen, ChevronDown, ExternalLink, Instagram, Mail, MapPin, Menu, Phone, Scale, X } from 'lucide-react';

const news = [
  { tag:'Iniciação científica', date:'09 set. 2026', title:'Resultado da seleção de bolsista de iniciação científica — 2026/2027', text:'Confira a classificação final do processo seletivo vinculado ao Edital Propesq nº 01/2026.', href:'https://iuscommune.paginas.ufsc.br/2026/08/21/selecao-de-bolsista-de-iniciacao-cientifica-20262027/' },
  { tag:'Grupo de estudos', date:'09 set. 2024', title:'39ª edição: História do Direito e Marxismo', text:'Módulo dedicado ao diálogo entre história jurídica, crítica social e teoria marxista.', href:'https://iuscommune.paginas.ufsc.br/category/grupo-de-estudos/' },
  { tag:'Evento', date:'04 abr. 2024', title:'História dos Direitos das Mulheres', text:'XIX Encontros de História do Direito do Ius Commune.', href:'https://iuscommune.paginas.ufsc.br/category/eventos/' }
];
const areas = [
  ['História da cultura jurídica','Investigações sobre ideias, práticas e instituições jurídicas em perspectiva histórica.'],
  ['Direito internacional','Circulação de doutrinas, formação de ordens internacionais e trajetórias institucionais.'],
  ['História do direito público','Constitucionalismo, Estado, administração e cultura política entre Brasil e Europa.']
];

function App() {
  const [menuOpen,setMenuOpen]=useState(false); const [scrolled,setScrolled]=useState(false);
  useEffect(()=>{const f=()=>setScrolled(window.scrollY>32);f();window.addEventListener('scroll',f,{passive:true});return()=>window.removeEventListener('scroll',f)},[]);
  const close=()=>setMenuOpen(false);
  return <main>
    <a className="skip-link" href="#conteudo">Ir para o conteúdo</a>
    <header className={scrolled?'site-header is-scrolled':'site-header'}>
      <a className="brand" href="#inicio" onClick={close} aria-label="Ius Commune — início"><span className="brand-mark">IC</span><span><strong>Ius Commune</strong><small>UFSC · CNPq</small></span></a>
      <button className="menu-button" onClick={()=>setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Abrir menu">{menuOpen?<X/>:<Menu/>}</button>
      <nav className={menuOpen?'nav is-open':'nav'} aria-label="Principal"><a href="#grupo" onClick={close}>O grupo</a><a href="#pesquisa" onClick={close}>Pesquisa</a><a href="#noticias" onClick={close}>Notícias</a><a href="#publicacoes" onClick={close}>Publicações</a><a href="#contato" onClick={close}>Contato</a><a className="lang" href="https://iuscommune.paginas.ufsc.br/?lang=en">EN</a></nav>
    </header>
    <section className="hero" id="inicio"><div className="hero-grid" aria-hidden="true"/><div className="hero-content" id="conteudo"><p className="eyebrow">Grupo Interinstitucional em História da Cultura Jurídica</p><h1>O direito tem<br/><em>história.</em></h1><p className="hero-lead">Pesquisa, formação e cooperação acadêmica para compreender como ideias e instituições jurídicas atravessam o tempo.</p><div className="hero-actions"><a className="button primary" href="#noticias">Acompanhe o grupo <ArrowRight size={18}/></a><a className="button ghost" href="#grupo">Conheça nossa trajetória</a></div></div><div className="hero-aside"><span className="latin">Historia<br/>magistra<br/>vitae</span><a href="#grupo" aria-label="Descer para apresentação"><ChevronDown/></a></div></section>
    <section className="ticker" aria-label="Vínculos institucionais"><span>Universidade Federal de Santa Catarina</span><i>✦</i><span>Centro de Ciências Jurídicas</span><i>✦</i><span>Diretório dos Grupos de Pesquisa · CNPq</span></section>
    <section className="section about" id="grupo"><div className="section-number">01</div><div className="section-heading"><p className="eyebrow dark">Sobre o Ius Commune</p><h2>Uma comunidade de pesquisa dedicada à cultura jurídica.</h2></div><div className="about-copy"><p>O Ius Commune é um grupo de estudos e pesquisa sediado na Universidade Federal de Santa Catarina. Reúne docentes, pesquisadores e estudantes em torno da história do direito, de suas linguagens e de suas instituições.</p><p>Coordenado pelos professores Arno Dal Ri Jr., Diego Nunes e Caetano Dias Corrêa, o grupo promove pesquisa, formação, publicações e cooperação internacional.</p><a className="text-link" href="https://iuscommune.paginas.ufsc.br/ius-commune/o-grupo/">Conheça o grupo completo <ArrowRight size={17}/></a></div></section>
    <section className="section research" id="pesquisa"><div className="section-intro"><p className="eyebrow">Linhas de investigação</p><h2>O passado como problema do presente.</h2></div><div className="area-list">{areas.map(([title,text],i)=><article className="area" key={title}><span>0{i+1}</span><div><h3>{title}</h3><p>{text}</p></div><ArrowRight/></article>)}</div></section>
    <section className="section news" id="noticias"><div className="news-head"><div><p className="eyebrow dark">Agenda & atualizações</p><h2>Em destaque</h2></div><a className="text-link" href="https://iuscommune.paginas.ufsc.br/">Ver todas as notícias <ArrowRight size={17}/></a></div><div className="news-grid">{news.map((item,i)=><a className={i===0?'news-card featured':'news-card'} href={item.href} key={item.title}><div className="news-meta"><span>{item.tag}</span><time>{item.date}</time></div><h3>{item.title}</h3><p>{item.text}</p><span className="read">Ler notícia <ArrowRight size={16}/></span></a>)}</div></section>
    <section className="section publications" id="publicacoes"><div><p className="eyebrow">Acervo acadêmico</p><h2>Conhecimento que circula.</h2><p>Produção de integrantes do grupo reunida por tipologia, com acesso a trabalhos acadêmicos e publicações.</p></div><div className="publication-links"><a href="https://iuscommune.paginas.ufsc.br/publicacoes/livros/"><BookOpen/><span><b>Livros</b><small>Obras individuais e coletivas</small></span><ArrowRight/></a><a href="https://iuscommune.paginas.ufsc.br/publicacoes/artigos/"><Scale/><span><b>Artigos</b><small>Produção em periódicos e coletâneas</small></span><ArrowRight/></a><a href="https://iuscommune.paginas.ufsc.br/publicacoes/trabalhos-academicos/"><ExternalLink/><span><b>Trabalhos acadêmicos</b><small>Teses, dissertações e monografias</small></span><ArrowRight/></a></div></section>
    <section className="contact" id="contato"><div><p className="eyebrow">Contato</p><h2>Vamos continuar<br/>a conversa.</h2></div><div className="contact-details"><a href="mailto:iuscommune.ufsc@gmail.com"><Mail/>iuscommune.ufsc@gmail.com</a><a href="tel:+554837216739"><Phone/>(48) 3721-6739</a><span><MapPin/>Centro de Ciências Jurídicas · UFSC<br/>Florianópolis, Santa Catarina</span><a href="https://instagram.com/iuscommuneufsc"><Instagram/>@iuscommuneufsc</a></div></section>
    <footer><div className="brand inverse"><span className="brand-mark">IC</span><span><strong>Ius Commune</strong><small>UFSC · CNPq</small></span></div><p>Grupo Interinstitucional em História da Cultura Jurídica</p><p>© {new Date().getFullYear()} Ius Commune</p></footer>
  </main>
}
export default App;
