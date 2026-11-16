import { LogoMark } from './Logo';

const items = [
  'Qualité',
  'Fraîcheur',
  'Disponibilité',
  'Vente en gros',
  'Vente au détail',
  'Liberty SARL',
];

function Track() {
  return (
    <div className="flex shrink-0 items-center gap-8 pr-8">
      {items.map((item) => (
        <span key={item} className="flex items-center gap-8">
          <span className="whitespace-nowrap text-[11px] font-bold uppercase tracking-[0.24em] text-brand-cream/80">{item}</span>
          <LogoMark size={16} className="opacity-70" />
        </span>
      ))}
    </div>
  );
}

export default function BrandMarquee() {
  return (
    <div className="relative overflow-hidden border-y border-white/10 bg-brand-navy py-4" aria-hidden="true">
      <div className="dot-grid absolute inset-0 opacity-20" />
      <div className="relative flex w-max animate-marquee">
        <Track />
        <Track />
      </div>
    </div>
  );
}
