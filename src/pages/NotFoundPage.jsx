import { ArrowLeft, ArrowRight, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BrandName, LogoMark } from '../components/Logo';

function NotFoundPage() {
  return (
    <section className="relative overflow-hidden rounded-[28px] bg-brand-navy px-6 py-16 text-center text-white shadow-soft md:rounded-[36px] md:py-24">
      <div className="dot-grid absolute inset-0 opacity-25" aria-hidden="true" />
      <div className="hero-ring absolute left-1/2 top-1/2 size-[40rem] -translate-x-1/2 -translate-y-1/2" aria-hidden="true" />
      <div className="relative mx-auto flex max-w-xl flex-col items-center">
        <LogoMark size={92} className="animate-float drop-shadow-[0_16px_36px_rgba(0,0,0,0.4)]" />
        <p className="mt-6 font-display text-7xl leading-none text-brand-cream md:text-8xl">404</p>
        <h1 className="mt-3 font-heading text-2xl font-bold uppercase leading-tight text-brand-cream md:text-3xl">
          Cette page n’existe pas
        </h1>
        <p className="mt-3 text-sm leading-7 text-white/60">
          La page que vous recherchez a peut-être été déplacée. Retrouvez les produits et les informations de{' '}
          <BrandName /> depuis l’accueil.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full bg-brand-red px-6 py-3 text-sm font-bold text-white transition hover:bg-brand-red-dark"
          >
            <Home size={16} /> Retour à l’accueil
          </Link>
          <Link
            to="/produits"
            className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
          >
            Voir le catalogue <ArrowRight size={16} />
          </Link>
        </div>
        <Link to="/contact" className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-white/50 transition hover:text-brand-cream">
          <ArrowLeft size={13} /> Besoin d’aide ? Contactez-nous
        </Link>
      </div>
    </section>
  );
}

export default NotFoundPage;
