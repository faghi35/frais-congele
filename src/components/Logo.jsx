import { siteConfig } from '../config/siteConfig';

export function BrandName({ className = '' }) {
  const [beforeAmpersand, afterAmpersand] = siteConfig.name.split('&');

  return (
    <span className={className}>
      {beforeAmpersand}
      <span className="text-brand-red">&amp;</span>
      {afterAmpersand}
    </span>
  );
}

export function LogoMark({ size = 48, className = '', alt = '' }) {
  return (
    <img
      src="/images/logo.png"
      alt={alt}
      width={size}
      height={size}
      decoding="async"
      className={`shrink-0 object-contain ${className}`}
      style={{ width: size, height: size }}
    />
  );
}

export function BrandLockup({ size = 50, tone = 'dark', subtitle = siteConfig.legalName, className = '' }) {
  const light = tone === 'light';

  return (
    <span className={`inline-flex min-w-0 items-center gap-3 ${className}`}>
      <LogoMark
        size={size}
        className={light ? 'drop-shadow-[0_12px_26px_rgba(0,0,0,0.45)]' : 'drop-shadow-[0_10px_22px_rgba(8,21,48,0.22)]'}
      />
      <span className="min-w-0 leading-none">
        <span
          className={`block truncate font-display text-xl leading-none sm:text-2xl ${
            light ? 'text-brand-cream' : 'text-brand-navy'
          }`}
        >
          <BrandName />
        </span>
        <span
          className={`mt-1.5 block truncate text-[9px] font-bold uppercase tracking-[0.24em] sm:text-[10px] ${
            light ? 'text-white/55' : 'text-slate-500'
          }`}
        >
          {subtitle}
        </span>
      </span>
    </span>
  );
}
