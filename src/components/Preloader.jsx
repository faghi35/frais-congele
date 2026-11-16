import { useEffect, useState } from 'react';
import { BrandName, LogoMark } from './Logo';

const minimumDisplayTime = 500;
const exitDuration = 350;

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const startedAt = Date.now();
    let exitTimer;
    let hideTimer;

    const finishLoading = () => {
      const remainingTime = Math.max(0, minimumDisplayTime - (Date.now() - startedAt));

      exitTimer = window.setTimeout(() => setExiting(true), remainingTime);
      hideTimer = window.setTimeout(() => setVisible(false), remainingTime + exitDuration);
    };

    if (document.readyState === 'complete') {
      finishLoading();
    } else {
      window.addEventListener('load', finishLoading, { once: true });
    }

    return () => {
      window.removeEventListener('load', finishLoading);
      window.clearTimeout(exitTimer);
      window.clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] grid place-items-center bg-[#f4f6fb] transition-opacity duration-300 ${
        exiting ? 'pointer-events-none opacity-0' : 'opacity-100'
      }`}
      role="status"
      aria-live="polite"
      aria-hidden={exiting}
    >
      <div className="flex flex-col items-center px-6 text-center">
        <div className="relative grid size-32 place-items-center rounded-[2rem] border border-blue-950/5 bg-white shadow-card">
          <span
            className="absolute inset-2 rounded-[1.5rem] border-2 border-brand-red/15 border-t-brand-red motion-safe:animate-spin"
            aria-hidden="true"
          />
          <LogoMark size={82} alt="" className="relative" />
        </div>
        <p className="mt-6 font-display text-2xl leading-none text-brand-navy">
          <BrandName />
        </p>
        <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.24em] text-slate-500">
          Préparation de votre visite
        </p>
      </div>
    </div>
  );
}
