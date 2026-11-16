import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BrandName, LogoMark } from './Logo';

export default function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt = '',
  imageCaption = 'Qualité et fraîcheur au meilleur prix',
  actions,
  children,
  className = '',
}) {
  return (
    <section
      className={`relative isolate overflow-hidden rounded-[28px] bg-brand-navy text-white shadow-soft md:rounded-[36px] ${className}`}
    >
      <div className="dot-grid absolute inset-0 opacity-30" aria-hidden="true" />
      <div className="hero-ring absolute -left-64 -top-64 size-[48rem]" aria-hidden="true" />
      <div className="absolute -right-24 -top-28 size-80 rounded-full bg-brand-red/25 blur-3xl" aria-hidden="true" />

      <div
        className={`relative grid items-center gap-10 px-6 py-12 sm:px-10 md:px-12 md:py-16 ${
          image ? 'lg:grid-cols-[1.08fr_0.92fr]' : ''
        }`}
      >
        <div className="max-w-2xl">
          <nav aria-label="Fil d’Ariane" className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-white/45">
            <Link to="/" className="transition hover:text-brand-cream">
              Accueil
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-brand-cream/85">{eyebrow}</span>
          </nav>

          <span className="mt-6 inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-brand-cream backdrop-blur">
            <LogoMark size={18} />
            {eyebrow}
          </span>

          <h1 className="mt-4 font-display text-5xl leading-[0.92] text-brand-cream sm:text-6xl md:text-7xl">{title}</h1>

          {description && (
            <p className="mt-5 max-w-xl text-sm leading-7 text-white/70 md:text-base md:leading-8">{description}</p>
          )}

          {actions && <div className="mt-8 flex flex-wrap items-center gap-3">{actions}</div>}

          {children}
        </div>

        {image && (
          <div className="relative mx-auto hidden w-full max-w-md lg:block">
            <div className="absolute -inset-3 rounded-[2rem] border border-white/10" aria-hidden="true" />
            <figure className="relative overflow-hidden rounded-[1.75rem] border border-white/15 bg-white/5 p-2 shadow-soft">
              <img src={image} alt={imageAlt} className="aspect-[4/3] w-full rounded-[1.4rem] object-cover" />
              <figcaption className="flex items-center gap-3 px-3 py-3">
                <LogoMark size={38} />
                <div className="min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold"><BrandName /></p>
                  <p className="truncate font-heading text-sm font-bold text-white">{imageCaption}</p>
                </div>
                <ArrowRight size={16} className="ml-auto shrink-0 text-white/40" />
              </figcaption>
            </figure>
            <div className="absolute -left-5 -top-5 hidden rounded-2xl border border-white/15 bg-brand-ink/85 px-4 py-3 backdrop-blur md:block">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/50">Notre réseau</p>
              <p className="font-display text-2xl leading-none text-brand-cream">8 villes</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
