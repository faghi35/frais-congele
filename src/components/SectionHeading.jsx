export default function SectionHeading({ eyebrow, title, description, action, tone = 'dark', className = '' }) {
  const light = tone === 'light';

  return (
    <div className={`flex flex-wrap items-end justify-between gap-6 ${className}`}>
      <div className="max-w-2xl">
        <span
          className={`inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.22em] ${
            light ? 'text-brand-gold' : 'text-brand-red'
          }`}
        >
          <span className={`h-px w-8 ${light ? 'bg-brand-gold/70' : 'bg-brand-red/70'}`} aria-hidden="true" />
          {eyebrow}
        </span>
        <h2
          className={`mt-3 font-heading text-3xl font-bold uppercase leading-[1.08] md:text-4xl ${
            light ? 'text-brand-cream' : 'text-brand-navy'
          }`}
        >
          {title}
        </h2>
        {description && (
          <p className={`mt-3 max-w-xl text-sm leading-7 md:text-base ${light ? 'text-white/65' : 'text-slate-600'}`}>
            {description}
          </p>
        )}
      </div>
      {action}
    </div>
  );
}
