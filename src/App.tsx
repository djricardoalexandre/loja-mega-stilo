import { useEffect, useState } from 'react';
import {
  ArrowRight,
  ChevronRight,
  Download,
  Instagram,
  MapPin,
  Menu,
  MessageCircle,
  MoveUpRight,
  Search,
  ShoppingBag,
  Sparkles,
  X,
} from 'lucide-react';

const whatsappNumber = '555499033340';

const images = {
  hero: '/images/feminino_5.jpg',
  women: '/images/feminino_5.jpg',
  men: '/images/masculino_5.jpg',
  homewear: '/images/lingerie.jpg',
  lingerie: '/images/lingerie_3.jpg',
  belts: '/images/cintos_femininos.jpg',
  editorial: '/images/feminino_5.jpg',
};

const categories = [
  { name: 'Pijamas', detail: 'Conforto que veste bem', image: images.homewear },
  { name: 'Moda feminina', detail: 'Sua melhor versão', image: images.women },
  { name: 'Cintos feminino', detail: 'O toque final', image: images.belts },
  { name: 'Lingerie', detail: 'Intimidade & atitude', image: images.lingerie },
  { name: 'Moda masculina', detail: 'Presença sem esforço', image: images.men },
];

const products = [
  { name: 'Conjunto essencial', label: 'Conforto para todos os dias', image: images.homewear },
  { name: 'Cintura marcada', label: 'Cintos femininos', image: images.belts },
  { name: 'Noite de charme', label: 'Lingerie premium', image: images.lingerie },
  { name: 'Estilo masculino', label: 'Moda masculina', image: images.men },
];

function whatsappLink(product?: string) {
  const message = product
    ? `Olá, Mega Stillo! Tenho interesse em: ${product}. Pode me enviar mais detalhes?`
    : 'Olá, Mega Stillo! Quero conhecer as novidades da loja.';
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [installPrompt, setInstallPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [installVisible, setInstallVisible] = useState(true);

  useEffect(() => {
    const handleBeforeInstall = (event: Event) => {
      event.preventDefault();
      setInstallPrompt(event as BeforeInstallPromptEvent);
    };
    window.addEventListener('beforeinstallprompt', handleBeforeInstall);
    return () => window.removeEventListener('beforeinstallprompt', handleBeforeInstall);
  }, []);

  const installApp = async () => {
    if (installPrompt) {
      await installPrompt.prompt();
      setInstallPrompt(null);
      setInstallVisible(false);
      return;
    }
    document.getElementById('install-instructions')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="site-shell">
      <div className="announcement-bar">
        <span>ATITUDE PARA TODOS OS MOMENTOS</span>
        <span className="announcement-divider" />
        <span>Atendimento personalizado pelo WhatsApp</span>
        <a href={whatsappLink()} target="_blank" rel="noreferrer">Falar com a loja <ArrowRight size={14} /></a>
      </div>

      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Mega Stillo início">
          <img src="/LOGO_NOVA_LOJA.jpg" alt="Logo Loja Mega Stillo" />
        </a>
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'}>
          <a href="#categorias" onClick={() => setMenuOpen(false)}>Categorias</a>
          <a href="#tendencias" onClick={() => setMenuOpen(false)}>Tendências</a>
          <a href="#novidades" onClick={() => setMenuOpen(false)}>Novidades</a>
          <a href="#sobre" onClick={() => setMenuOpen(false)}>A loja</a>
        </nav>
        <div className="header-actions">
          <button className="icon-button" aria-label="Pesquisar"><Search size={20} /></button>
          <a className="icon-button bag-link" href="#novidades" aria-label="Ver novidades"><ShoppingBag size={20} /><span>0</span></a>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}>
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-copy">
            <div className="eyebrow"><Sparkles size={15} /> NOVA COLEÇÃO / 2026 — 2027</div>
            <h1>Vista o seu <em>melhor</em> estilo.</h1>
            <p className="hero-text">Moda com personalidade, conforto e aquele detalhe que transforma tudo. Encontre peças para viver cada momento do seu jeito.</p>
            <div className="hero-actions">
              <a className="button button-dark" href="#novidades">Explorar coleção <ArrowRight size={17} /></a>
              <a className="text-link" href={whatsappLink()} target="_blank" rel="noreferrer">Atendimento exclusivo <MoveUpRight size={16} /></a>
            </div>
            <div className="hero-meta"><span><strong>01</strong> Curadoria especial</span><span><strong>02</strong> Para ela e para ele</span></div>
          </div>
          <div className="hero-visual">
            <div className="hero-circle" />
            <div className="hero-image-wrap"><img src={images.hero} alt="Duas mulheres usando looks sofisticados" /></div>
            <div className="hero-stamp"><span>MEGA</span><strong>STILLO</strong><small>EST. 2026/27</small></div>
            <div className="floating-note"><span className="note-dot" /> Peças que contam<br />a sua história</div>
          </div>
        </section>

        <section className="category-strip" id="categorias">
          <div className="section-heading compact-heading"><div><span className="kicker">EXPLORE POR ESTILO</span><h2>Encontre o seu mood.</h2></div><a className="text-link" href="#novidades">Ver tudo <ArrowRight size={16} /></a></div>
          <div className="category-grid">
            {categories.map((category) => <a className="category-card" href="#novidades" key={category.name}><img src={category.image} alt={category.name} /><div className="category-overlay" /><div className="category-content"><span>{category.detail}</span><h3>{category.name}</h3><ChevronRight size={20} /></div></a>)}
          </div>
        </section>

        <section className="trend-section" id="tendencias">
          <div className="trend-image"><img src={images.editorial} alt="Editorial de moda com casal" /><div className="image-caption">EDITORIAL / 01</div></div>
          <div className="trend-copy"><span className="kicker">A CURADORIA MEGA STILLO</span><h2>O novo luxo é se sentir <em>você.</em></h2><p>Descubra uma seleção pensada para acompanhar sua rotina e celebrar quem você é. Do básico elevado ao look que rouba a cena.</p><a className="button button-outline" href="#novidades">Conheça as tendências <ArrowRight size={17} /></a><div className="trend-detail"><span>01</span><p>Texturas que abraçam<br /><strong>Conforto em primeiro lugar.</strong></p></div></div>
        </section>

        <section className="products-section" id="novidades">
          <div className="section-heading"><div><span className="kicker">FRESH DROP</span><h2>Novidades & lançamentos.</h2></div><a className="text-link" href={whatsappLink()} target="_blank" rel="noreferrer">Comprar pelo WhatsApp <MoveUpRight size={16} /></a></div>
          <div className="product-grid">{products.map((product, index) => <a className="product-card" href={whatsappLink(product.name)} target="_blank" rel="noreferrer" key={product.name}><div className="product-image"><img src={product.image} alt={product.name} /><span className="product-number">0{index + 1}</span><span className="product-arrow"><MoveUpRight size={18} /></span></div><div className="product-info"><div><span>{product.label}</span><h3>{product.name}</h3></div><span className="product-cta">Consultar <ArrowRight size={14} /></span></div></a>)}</div>
        </section>

        <section className="install-banner" id="install-instructions"><div className="install-icon"><Download size={23} /></div><div><span className="kicker">TENHA A MEGA STILLO SEMPRE COM VOCÊ</span><h2>Instale nosso app.</h2><p>Acesse a loja de um jeito rápido, direto e com a experiência completa no seu dispositivo.</p></div><button className="button button-light" onClick={installApp}>Instalar agora <Download size={17} /></button></section>
      </main>

      <footer className="site-footer" id="sobre"><div className="footer-brand"><img src="/LOGO_NOVA_LOJA.jpg" alt="Logo Mega Stillo" /><p>A loja que veste você.</p></div><div className="footer-column"><span className="footer-label">VISITE A LOJA</span><p><MapPin size={15} /> Dois Lajeados — RS<br />Centro, nº 340 sala 101</p></div><div className="footer-column"><span className="footer-label">FALE COM A GENTE</span><a href={whatsappLink()} target="_blank" rel="noreferrer"><MessageCircle size={15} /> (54) 9903-3340</a><a href="https://instagram.com/lojamegastillo" target="_blank" rel="noreferrer"><Instagram size={15} /> @lojamegastillo</a></div><div className="footer-bottom"><span>© 2026–2027 Mega Stillo. Todos os direitos reservados.</span><span>Moda, cama, mesa & banho.</span></div></footer>
      {installVisible && <button className="install-floating" onClick={installApp}><Download size={17} /> Instalar app</button>}
    </div>
  );
}

declare interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>;
}

export default App;
