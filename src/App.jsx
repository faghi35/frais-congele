import { useEffect, useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  Home,
  LayoutGrid,
  MapPin,
  Menu,
  MessageCircle,
  Package,
  Sparkles,
  X,
} from 'lucide-react';
import { Link, NavLink, Route, Routes } from 'react-router-dom';
import { BrandLockup, BrandName, LogoMark } from './components/Logo';
import ScrollToTop from './components/ScrollToTop';
import { navigation, siteConfig } from './config/siteConfig';
import { categories, promotions } from './data/products';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import ProductsPage from './pages/ProductsPage';
import RetailPage from './pages/RetailPage';
import WholesalePage from './pages/WholesalePage';

const cityMenuImage = '/images/products/png/528559389_122137140884835103_7428299957765391714_n.png';
const footerImage = '/images/488249650_122095713608835103_7638228132512024293_n.jpg';
const currentYear = new Date().getFullYear();

function FacebookIcon({ size = 17 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
      <path d="M13.5 22v-8.1h2.72l.41-3.16H13.5V8.72c0-.91.25-1.53 1.56-1.53h1.66V4.36c-.29-.04-1.28-.12-2.42-.12-2.4 0-4.04 1.46-4.04 4.15v2.35H7.5v3.16h2.76V22h3.24Z" />
    </svg>
  );
}

function InstagramIcon({ size = 17 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

const mobileNavigation = [
  { label: 'Accueil', to: '/', icon: Home },
  { label: 'Produits', to: '/produits', icon: LayoutGrid },
  { label: 'Offres', to: '/vente-en-gros', icon: Package },
  { label: 'Contact', to: '/contact', icon: MessageCircle },
];

const navLinkClass = ({ isActive }) =>
  `relative block py-2 text-sm font-bold transition after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-0 after:rounded-full after:bg-brand-red after:transition-all hover:text-brand-red hover:after:w-full ${
    isActive ? 'text-brand-red after:w-full' : 'text-brand-navy'
  }`;

function MegaMenu({ visible, onNavigate }) {
  return (
    <div
      className={`${
        visible ? 'grid' : 'hidden group-hover:grid group-focus-within:grid'
      } absolute left-1/2 top-full z-50 mt-5 w-[min(960px,calc(100vw-2rem))] -translate-x-1/2 grid-cols-[1fr_0.72fr] gap-5 rounded-3xl border border-blue-950/10 border-t-4 border-t-brand-red bg-white p-5 text-slate-900 shadow-soft max-md:static max-md:mt-2 max-md:w-full max-md:translate-x-0 max-md:grid-cols-1 max-md:rounded-2xl`}
    >
      <div className="grid grid-cols-[0.8fr_1.2fr] gap-5 max-sm:grid-cols-1">
        <div className="p-2">
          <div className="flex items-center gap-3">
            <LogoMark size={38} />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-red"><BrandName /></span>
          </div>
          <h2 className="mt-4 font-heading text-2xl font-bold uppercase text-brand-navy">Le catalogue</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">Parcourez les produits et les marques de nos affiches.</p>
        </div>
        <div className="grid grid-cols-2 content-start gap-1.5 max-sm:grid-cols-1">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/produits?categorie=${category.id}`}
              className="group/item flex min-w-0 items-center gap-3 rounded-xl border border-transparent p-2 text-sm font-semibold text-brand-navy transition hover:border-blue-950/5 hover:bg-brand-sky hover:text-brand-red"
              onClick={onNavigate}
            >
              <img
                src={category.image}
                alt=""
                className="size-11 shrink-0 rounded-lg bg-white object-contain p-1 ring-1 ring-blue-950/5"
              />
              <span className="flex-1 leading-5">{category.name}</span>
              <ArrowRight size={15} className="shrink-0 transition group-hover/item:translate-x-0.5" />
            </Link>
          ))}
        </div>
      </div>
      <Link
        to="/produits"
        className="group/feature relative flex min-h-56 flex-col items-start justify-end gap-2 overflow-hidden rounded-2xl p-5 text-white"
        onClick={onNavigate}
      >
        <img
          src={categories[0].featuredImage}
          alt=""
          className="absolute inset-0 size-full object-cover transition duration-700 group-hover/feature:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/95 via-brand-navy/40 to-transparent" />
        <LogoMark size={30} className="relative mb-auto" />
        <span className="relative text-[10px] font-bold uppercase tracking-[0.18em] text-brand-gold">
          Toutes les catégories
        </span>
        <strong className="relative max-w-56 font-heading text-2xl font-bold uppercase">Explorer les produits</strong>
        <ArrowRight size={18} className="relative" />
      </Link>
    </div>
  );
}

function CitiesMenu({ visible, onNavigate }) {
  return (
    <div
      className={`${
        visible ? 'grid' : 'hidden group-hover:grid group-focus-within:grid'
      } absolute right-0 top-full z-50 mt-5 w-[min(900px,calc(100vw-2rem))] grid-cols-[1fr_0.72fr] gap-5 rounded-3xl border border-blue-950/10 border-t-4 border-t-brand-red bg-white p-5 shadow-soft max-md:static max-md:mt-2 max-md:w-full max-md:grid-cols-1 max-md:rounded-2xl`}
    >
      <div className="grid grid-cols-[0.72fr_1.28fr] gap-5 max-sm:grid-cols-1">
        <div className="p-2">
          <div className="flex items-center gap-3">
            <LogoMark size={38} />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-red">Notre réseau</span>
          </div>
          <h2 className="mt-4 font-heading text-2xl font-bold uppercase text-brand-navy">Choisissez votre ville</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Demandez à notre équipe l’adresse du point de vente le plus proche.
          </p>
        </div>
        <div className="grid grid-cols-2 content-start gap-1 max-sm:grid-cols-1">
          {siteConfig.cityList.map((city) => (
            <Link
              key={city}
              to={`/contact?ville=${encodeURIComponent(city)}`}
              className="flex items-center gap-2 rounded-lg border-b border-blue-950/5 px-2.5 py-2.5 text-sm font-semibold text-brand-navy transition hover:bg-brand-sky hover:text-brand-red"
              onClick={onNavigate}
            >
              <MapPin size={15} className="shrink-0 text-brand-red" />
              <span className="flex-1">{city}</span>
              <ArrowRight size={14} />
            </Link>
          ))}
        </div>
      </div>
      <Link
        to="/contact?ville=Lubumbashi"
        className="group/city relative flex min-h-56 flex-col justify-end gap-2 overflow-hidden rounded-2xl p-5 text-white"
        onClick={onNavigate}
      >
        <img
          src={cityMenuImage}
          alt=""
          className="absolute inset-0 size-full object-cover transition duration-700 group-hover/city:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/95 via-brand-navy/40 to-transparent" />
        <LogoMark size={30} className="relative mb-auto" />
        <span className="relative text-[10px] font-bold uppercase tracking-[0.18em] text-brand-gold">Points de vente</span>
        <strong className="relative font-heading text-2xl font-bold uppercase">Contacter notre équipe</strong>
        <ArrowRight size={18} className="relative" />
      </Link>
    </div>
  );
}

function PromotionBanner() {
  const promotion = promotions[0];

  return (
    <aside
      className="relative mt-12 overflow-hidden rounded-[28px] border border-brand-navy/10 bg-brand-cream text-brand-navy shadow-card"
      aria-label="Sélection de produits"
    >
      <div className="dot-grid-dark absolute inset-0 opacity-50" aria-hidden="true" />
      <div className="absolute -right-16 -top-20 size-56 rounded-full bg-brand-red/10 blur-2xl" aria-hidden="true" />
      <div className="relative grid items-center gap-5 p-5 sm:p-6 md:grid-cols-[auto_1fr_auto] md:gap-7 md:p-8">
        <div className="flex items-center gap-4">
          <LogoMark size={58} className="drop-shadow-[0_12px_24px_rgba(8,21,48,0.2)]" />
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-red"><BrandName /></p>
            <p className="mt-1 max-w-44 font-heading text-sm font-bold uppercase leading-5 text-brand-navy">
              La sélection de nos affiches
            </p>
          </div>
        </div>

        <div className="min-w-0">
          <strong className="font-heading text-xl font-bold uppercase leading-tight text-brand-navy md:text-2xl">
            Les produits du quotidien, près de chez vous.
          </strong>
          <p className="mt-1.5 text-sm leading-6 text-slate-600">
            Disponibilités et prix à confirmer selon le point de vente.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <img
            src={promotion.image}
            alt="Sélection de produits Frais & Congelé"
            className="h-20 w-20 rotate-3 rounded-2xl border-4 border-white bg-white object-contain shadow-card"
            loading="lazy"
          />
          <Link
            to="/produits"
            className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-brand-navy px-5 py-3 text-sm font-bold text-white transition hover:bg-brand-red"
          >
            Voir le catalogue <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </aside>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  const closeMenus = () => {
    setMenuOpen(false);
    setActiveMegaMenu(null);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#f4f6fb] font-sans text-slate-900">
      <ScrollToTop />
      <a
        href="#contenu"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-brand-navy focus:px-4 focus:py-3 focus:text-sm focus:font-bold focus:text-white"
      >
        Aller au contenu
      </a>

      <div className="border-b border-white/10 bg-brand-ink text-white/70">
        <div className="mx-auto flex h-9 w-full max-w-7xl items-center justify-between gap-4 px-4 text-[10px] font-bold uppercase tracking-[0.16em] sm:px-6 sm:text-[11px]">
          <p className="flex min-w-0 items-center gap-2">
            <span className="relative flex size-2 shrink-0">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand-red opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-brand-red" />
            </span>
            <span className="truncate">Surgelés &amp; grande consommation · Lubumbashi, RDC</span>
          </p>
          <div className="flex shrink-0 items-center gap-4">
            <Link to="/vente-en-gros" className="hidden transition hover:text-brand-cream lg:inline">
              Espace professionnels
            </Link>
            <span className="hidden text-white/20 lg:inline" aria-hidden="true">
              |
            </span>
            <Link to="/contact" className="inline-flex items-center gap-1.5 transition hover:text-brand-cream">
              <MessageCircle size={12} /> Nous écrire
            </Link>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-40 border-b backdrop-blur-xl transition-all duration-300 ${
          scrolled
            ? 'border-blue-950/10 bg-white/95 shadow-card'
            : 'border-transparent bg-[#f4f6fb]/85'
        }`}
      >
        <div className="mx-auto flex min-h-[76px] w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
          <Link
            to="/"
            className="shrink-0 rounded-xl transition hover:opacity-90"
            aria-label="Frais & Congelé, retour à l’accueil"
            onClick={closeMenus}
          >
            <BrandLockup size={48} />
          </Link>

          <nav
            id="navigation-principale"
            className={`${
              menuOpen ? 'flex' : 'hidden'
            } absolute inset-x-0 top-full z-50 max-h-[calc(100vh-8rem)] flex-col gap-1 overflow-y-auto rounded-b-2xl border-t-4 border-brand-red bg-white p-4 shadow-soft md:static md:flex md:max-h-none md:flex-row md:items-center md:gap-4 md:overflow-visible md:rounded-none md:border-0 md:bg-transparent md:p-0 md:shadow-none lg:gap-6`}
            aria-label="Navigation principale"
            onMouseLeave={() => setActiveMegaMenu(null)}
          >
            {navigation.map((item) =>
              item.to === '/produits' ? (
                <div key={item.to} className="group relative" onMouseEnter={() => setActiveMegaMenu(item.to)}>
                  <div className="flex items-center justify-between gap-1">
                    <NavLink to={item.to} className={navLinkClass} onClick={closeMenus}>
                      {item.label}
                    </NavLink>
                    <button
                      type="button"
                      className="grid size-9 place-items-center rounded-lg text-brand-navy transition hover:bg-brand-sky hover:text-brand-red md:size-7"
                      aria-label="Afficher les catégories produits"
                      aria-expanded={activeMegaMenu === item.to}
                      onClick={() => setActiveMegaMenu((current) => (current === item.to ? null : item.to))}
                    >
                      <ChevronDown size={15} className={`transition ${activeMegaMenu === item.to ? 'rotate-180' : ''}`} />
                    </button>
                  </div>
                  <MegaMenu visible={activeMegaMenu === item.to} onNavigate={closeMenus} />
                </div>
              ) : (
                <NavLink key={item.to} to={item.to} className={navLinkClass} onClick={closeMenus}>
                  {item.label}
                </NavLink>
              )
            )}

            <div className="group relative" onMouseEnter={() => setActiveMegaMenu('cities')}>
              <button
                type="button"
                className="flex w-full items-center justify-between gap-1 py-2 text-sm font-bold text-brand-navy transition hover:text-brand-red md:w-auto md:px-1"
                aria-expanded={activeMegaMenu === 'cities'}
                onClick={() => setActiveMegaMenu((current) => (current === 'cities' ? null : 'cities'))}
              >
                Villes
                <ChevronDown size={15} className={`transition ${activeMegaMenu === 'cities' ? 'rotate-180' : ''}`} />
              </button>
              <CitiesMenu visible={activeMegaMenu === 'cities'} onNavigate={closeMenus} />
            </div>

            <div className="mt-3 border-t border-blue-950/10 pt-3 md:hidden">
              <Link
                to="/contact"
                className="inline-flex w-full items-center justify-between rounded-xl bg-brand-red px-4 py-3 text-sm font-bold text-white"
                onClick={closeMenus}
              >
                Demander un devis <ArrowRight size={17} />
              </Link>
              <div className="mt-4 flex items-center gap-3 rounded-xl bg-brand-cream/60 p-3">
                <LogoMark size={36} />
                <p className="text-xs font-semibold leading-5 text-brand-navy">
                  {siteConfig.slogan}
                  <span className="mt-0.5 block text-[10px] uppercase tracking-[0.16em] text-slate-500">
                    {siteConfig.legalName}
                  </span>
                </p>
              </div>
            </div>
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <Link
              to="/contact"
              className="hidden items-center gap-2 rounded-full bg-brand-red px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-brand-red/20 transition hover:-translate-y-0.5 hover:bg-brand-red-dark lg:inline-flex"
            >
              Demander un devis <ArrowUpRight size={16} />
            </Link>
            <button
              type="button"
              className="grid size-11 place-items-center rounded-xl border border-blue-950/10 bg-white text-brand-navy transition hover:border-brand-red/30 hover:text-brand-red md:hidden"
              aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-controls="navigation-principale"
              aria-expanded={menuOpen}
              onClick={() => {
                setMenuOpen((value) => !value);
                setActiveMegaMenu(null);
              }}
            >
              {menuOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </div>
      </header>

      <main id="contenu" className="mx-auto w-full max-w-7xl px-4 pb-28 pt-6 sm:px-6 md:pb-16 md:pt-8">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/produits" element={<ProductsPage />} />
          <Route path="/vente-en-gros" element={<WholesalePage />} />
          <Route path="/vente-au-detail" element={<RetailPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <PromotionBanner />
      </main>

      <footer className="relative mt-16 overflow-hidden bg-brand-navy text-white">
        <img src={footerImage} alt="" className="absolute inset-0 size-full object-cover opacity-10" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/95 via-brand-navy to-brand-ink" />
        <div className="dot-grid absolute inset-0 opacity-20" aria-hidden="true" />
        <LogoMark
          size={430}
          className="pointer-events-none absolute -bottom-44 -right-24 opacity-[0.05]"
        />

        <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-4 pb-28 pt-14 sm:px-6 md:grid-cols-2 md:pb-12 lg:grid-cols-[1.35fr_0.7fr_1fr_1.1fr]">
          <div>
            <BrandLockup size={56} tone="light" />
            <p className="mt-5 max-w-sm text-sm leading-7 text-white/65">{siteConfig.slogan}</p>
            <p className="mt-3 max-w-sm text-sm leading-7 text-white/45">{siteConfig.description}</p>
            <div className="mt-6 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3.5 py-2 text-[11px] font-semibold text-white/60">
                <MapPin size={12} className="text-brand-red" /> Lubumbashi, RDC
              </span>
              {siteConfig.socials.facebook && (
                <a
                  href={siteConfig.socials.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="grid size-10 place-items-center rounded-full border border-white/15 text-white/70 transition hover:border-brand-cream/40 hover:bg-white/10 hover:text-brand-cream"
                  aria-label="Facebook Frais & Congelé"
                >
                  <FacebookIcon />
                </a>
              )}
              {siteConfig.socials.instagram && (
                <a
                  href={siteConfig.socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="grid size-10 place-items-center rounded-full border border-white/15 text-white/70 transition hover:border-brand-cream/40 hover:bg-white/10 hover:text-brand-cream"
                  aria-label="Instagram Frais & Congelé"
                >
                  <InstagramIcon />
                </a>
              )}
              {siteConfig.whatsapp && (
                <a
                  href={siteConfig.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="grid size-10 place-items-center rounded-full border border-white/15 text-white/70 transition hover:border-brand-cream/40 hover:bg-white/10 hover:text-brand-cream"
                  aria-label="WhatsApp Frais & Congelé"
                >
                  <MessageCircle size={17} />
                </a>
              )}
            </div>
          </div>

          <div>
            <h2 className="font-heading text-sm font-bold uppercase tracking-[0.16em] text-brand-cream">Navigation</h2>
            <ul className="mt-4 grid gap-2.5">
              {navigation.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="inline-flex items-center gap-2 text-sm text-white/65 transition hover:text-brand-cream"
                  >
                    <span className="h-px w-3 bg-brand-red/70" aria-hidden="true" />
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/vente-en-gros"
                  className="inline-flex items-center gap-2 text-sm text-white/65 transition hover:text-brand-cream"
                >
                  <span className="h-px w-3 bg-brand-red/70" aria-hidden="true" />
                  Vente en gros
                </Link>
              </li>
              <li>
                <Link
                  to="/vente-au-detail"
                  className="inline-flex items-center gap-2 text-sm text-white/65 transition hover:text-brand-cream"
                >
                  <span className="h-px w-3 bg-brand-red/70" aria-hidden="true" />
                  Vente au détail
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-sm font-bold uppercase tracking-[0.16em] text-brand-cream">Nos villes</h2>
            <ul className="mt-4 grid grid-cols-2 gap-2.5">
              {siteConfig.cityList.map((city) => (
                <li key={city}>
                  <Link
                    to={`/contact?ville=${encodeURIComponent(city)}`}
                    className="inline-flex items-center gap-1.5 text-sm text-white/65 transition hover:text-brand-cream"
                  >
                    <MapPin size={12} className="text-brand-red" />
                    {city}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-sm font-bold uppercase tracking-[0.16em] text-brand-cream">Contact</h2>
            <ul className="mt-4 grid gap-3 text-sm leading-6 text-white/65">
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="mt-1 shrink-0 text-brand-red" />
                {siteConfig.address}
              </li>
              <li>
                <span className="block text-[10px] font-bold uppercase tracking-[0.16em] text-white/35">Téléphone</span>
                {siteConfig.phone || 'À compléter'}
              </li>
              <li>
                <span className="block text-[10px] font-bold uppercase tracking-[0.16em] text-white/35">E-mail</span>
                {siteConfig.email || 'À compléter'}
              </li>
            </ul>
            <Link
              to="/contact"
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs font-bold text-brand-cream transition hover:bg-white/10"
            >
              Nous contacter <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>

        <div className="relative border-t border-white/10">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-4 py-5 text-[11px] text-white/40 sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <p>
              © {currentYear} <BrandName /> · {siteConfig.legalName}. Tous droits réservés.
            </p>
            <p className="inline-flex items-center gap-2">
              <Sparkles size={12} className="text-brand-gold" />
              Qualité et fraîcheur au meilleur prix.
            </p>
          </div>
        </div>
      </footer>

      <nav
        className="fixed inset-x-3 bottom-3 z-40 rounded-2xl border border-white/10 bg-brand-ink/95 px-2 py-2 text-white shadow-soft backdrop-blur-lg md:hidden"
        style={{ paddingBottom: 'calc(0.5rem + env(safe-area-inset-bottom))' }}
        aria-label="Navigation mobile"
      >
        <ul className="grid grid-cols-4 gap-1">
          {mobileNavigation.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `flex flex-col items-center gap-1 rounded-xl px-1 py-2 text-[10px] font-bold uppercase tracking-wide transition ${
                      isActive ? 'bg-white/10 text-brand-cream' : 'text-white/55 hover:text-white'
                    }`
                  }
                >
                  <Icon size={18} />
                  {item.label}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export default App;
