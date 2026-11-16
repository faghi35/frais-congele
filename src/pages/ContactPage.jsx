import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  ShieldCheck,
  Store,
} from 'lucide-react';
import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { BrandName, LogoMark } from '../components/Logo';
import PageHero from '../components/PageHero';
import { siteConfig } from '../config/siteConfig';

const storeImage = '/images/bg-1.jpg';

const aboutValues = [
  { icon: ShieldCheck, label: 'Confiance' },
  { icon: Store, label: 'Proximité' },
  { icon: BadgeCheck, label: 'Qualité' },
];

const totalLocations = siteConfig.locations.reduce((sum, location) => sum + location.points.length, 0);

const initialForm = {
  name: '',
  email: '',
  phone: '',
  city: '',
  subject: 'Demande d’information',
  message: '',
};

function ContactPage() {
  const [searchParams] = useSearchParams();
  const selectedCity = searchParams.get('ville') || '';
  const [formData, setFormData] = useState(() => ({ ...initialForm, city: selectedCity }));
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const cityValue = formData.city || selectedCity;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
    setSubmitted(false);
  };

  const validateForm = () => {
    const nextErrors = {};

    if (!formData.name.trim()) nextErrors.name = 'Le nom est requis.';
    if (!formData.email.trim()) nextErrors.email = 'L’adresse e-mail est requise.';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) nextErrors.email = 'Adresse e-mail invalide.';
    if (!formData.message.trim()) nextErrors.message = 'Le message est requis.';

    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validateForm();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
      setFormData((current) => ({ ...initialForm, city: current.city }));
    } else {
      setSubmitted(false);
    }
  };

  const inputClass =
    'w-full rounded-xl border border-blue-950/10 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-brand-blue/40 focus:bg-white focus:ring-4 focus:ring-brand-blue/10';
  const labelClass = 'mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-brand-navy';

  return (
    <section>
      <PageHero
        eyebrow="Contact"
        title="Nous contacter"
        description="Une question sur nos produits, une demande de devis ou la recherche d’un point de vente ? Notre équipe vous accompagne et vous oriente vers la bonne offre."
        image={storeImage}
        imageAlt="Magasin Frais & Congelé"
        imageCaption="Notre équipe, à votre écoute"
        actions={
          <a
            href="#formulaire-contact"
            className="inline-flex items-center gap-2 rounded-full bg-brand-red px-6 py-3 text-sm font-bold text-white transition hover:bg-brand-red-dark"
          >
            Écrire un message <ArrowRight size={16} />
          </a>
        }
      />

      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <div className="flex items-start gap-3 rounded-2xl border border-blue-950/5 bg-white p-4 shadow-sm">
          <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand-sky text-brand-blue">
            <MapPin size={18} />
          </span>
          <div>
            <h2 className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">Adresse</h2>
            <p className="mt-1 text-sm font-semibold leading-5 text-brand-navy">{siteConfig.address}</p>
            <a
              href="#points-de-vente"
              className="mt-1.5 inline-flex items-center gap-1 text-xs font-bold text-brand-red transition hover:text-brand-red-dark"
            >
              Voir les adresses <ArrowRight size={12} />
            </a>
          </div>
        </div>
        <div className="flex items-start gap-3 rounded-2xl border border-blue-950/5 bg-white p-4 shadow-sm">
          <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand-sky text-brand-blue">
            <Phone size={18} />
          </span>
          <div>
            <h2 className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">Téléphone</h2>
            <p className="mt-1 text-sm font-semibold leading-5 text-brand-navy">{siteConfig.phone || 'À compléter'}</p>
          </div>
        </div>
        <div className="flex items-start gap-3 rounded-2xl border border-blue-950/5 bg-white p-4 shadow-sm">
          <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand-sky text-brand-blue">
            <Mail size={18} />
          </span>
          <div>
            <h2 className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">E-mail</h2>
            <p className="mt-1 text-sm font-semibold leading-5 text-brand-navy">{siteConfig.email || 'À compléter'}</p>
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-5 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
        <aside className="relative overflow-hidden rounded-[28px] bg-brand-navy p-6 text-white shadow-soft md:p-7 lg:sticky lg:top-24">
          <div className="dot-grid absolute inset-0 opacity-25" aria-hidden="true" />
          <div className="absolute -right-16 -top-16 size-48 rounded-full bg-brand-red/25 blur-2xl" aria-hidden="true" />
          <div className="relative flex items-center gap-4">
            <LogoMark size={62} className="drop-shadow-[0_12px_26px_rgba(0,0,0,0.4)]" />
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold">{siteConfig.legalName}</p>
              <p className="mt-1 font-display text-2xl leading-none text-brand-cream"><BrandName /></p>
            </div>
          </div>

          <p className="relative mt-5 text-sm leading-7 text-white/65">{siteConfig.slogan}</p>

          <div className="relative mt-6 border-t border-white/10 pt-5">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-gold">Choisir ma ville</h2>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {siteConfig.cityList.map((city) => (
                <button
                  key={city}
                  type="button"
                  onClick={() => setFormData((current) => ({ ...current, city }))}
                  className={`inline-flex items-center gap-1 rounded-full border px-3 py-1.5 text-[11px] font-semibold transition ${
                    cityValue === city
                      ? 'border-brand-cream/40 bg-brand-cream text-brand-navy'
                      : 'border-white/15 bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <MapPin size={10} /> {city}
                </button>
              ))}
            </div>
          </div>

          <div className="relative mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-cream">Besoin d’un devis ?</p>
            <p className="mt-1.5 text-xs leading-5 text-white/60">
              Précisez le produit, la quantité et votre ville pour un accompagnement plus rapide.
            </p>
            <Link
              to="/vente-en-gros"
              className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-brand-cream transition hover:text-white"
            >
              Offre professionnels <ArrowRight size={13} />
            </Link>
          </div>
        </aside>

        <form
          id="formulaire-contact"
          className="grid gap-5 rounded-[28px] border border-blue-950/5 bg-white p-6 shadow-card md:grid-cols-2 md:p-8"
          onSubmit={handleSubmit}
          noValidate
        >
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <LogoMark size={34} />
              <div>
                <h2 className="font-heading text-xl font-bold uppercase leading-none text-brand-navy">Votre message</h2>
                <p className="mt-1 text-xs text-slate-500">
                  Les champs marqués d’un <span className="text-brand-red">*</span> sont obligatoires.
                </p>
              </div>
            </div>
          </div>

          <div>
            <label className={labelClass} htmlFor="name">
              Nom <span className="text-brand-red">*</span>
            </label>
            <input
              className={inputClass}
              id="name"
              name="name"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? 'name-error' : undefined}
            />
            {errors.name && (
              <small id="name-error" className="mt-1.5 block text-sm text-red-700">
                {errors.name}
              </small>
            )}
          </div>

          <div>
            <label className={labelClass} htmlFor="email">
              E-mail <span className="text-brand-red">*</span>
            </label>
            <input
              className={inputClass}
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email && (
              <small id="email-error" className="mt-1.5 block text-sm text-red-700">
                {errors.email}
              </small>
            )}
          </div>

          <div>
            <label className={labelClass} htmlFor="phone">
              Téléphone <span className="font-normal normal-case tracking-normal text-slate-400">(optionnel)</span>
            </label>
            <input
              className={inputClass}
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+243 …"
            />
          </div>

          <div>
            <label className={labelClass} htmlFor="city">
              Ville
            </label>
            <select className={inputClass} id="city" name="city" value={cityValue} onChange={handleChange}>
              <option value="">Choisir une ville</option>
              {siteConfig.cityList.map((city) => (
                <option key={city}>{city}</option>
              ))}
            </select>
          </div>

          <div className="md:col-span-2">
            <label className={labelClass} htmlFor="subject">
              Motif de la demande
            </label>
            <select className={inputClass} id="subject" name="subject" value={formData.subject} onChange={handleChange}>
              <option>Demande d’information</option>
              <option>Demande de devis</option>
              <option>Vente en gros</option>
              <option>Vente au détail</option>
              <option>Point de vente / disponibilité</option>
            </select>
          </div>

          <div className="md:col-span-2">
            <label className={labelClass} htmlFor="message">
              Message <span className="text-brand-red">*</span>
            </label>
            <textarea
              className={`${inputClass} resize-y`}
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              placeholder="Décrivez votre besoin, les produits concernés et les quantités souhaitées…"
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? 'message-error' : undefined}
            />
            {errors.message && (
              <small id="message-error" className="mt-1.5 block text-sm text-red-700">
                {errors.message}
              </small>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-3 md:col-span-2">
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-brand-red px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand-red/20 transition hover:-translate-y-0.5 hover:bg-brand-red-dark"
            >
              Envoyer le message <Send size={16} />
            </button>
            <span className="inline-flex items-center gap-1.5 text-xs text-slate-400">
              <MessageCircle size={14} /> Réponse selon disponibilité de l’équipe
            </span>
          </div>

          {submitted && (
            <p
              className="flex items-start gap-2.5 rounded-xl border border-green-200 bg-green-50 p-4 text-sm leading-6 text-green-800 md:col-span-2"
              role="status"
            >
              <CheckCircle2 size={18} className="mt-0.5 shrink-0" />
              Merci ! Votre demande a bien été enregistrée. Notre équipe vous recontactera dès que possible.
            </p>
          )}
        </form>
      </div>

      <section className="relative mt-6 overflow-hidden rounded-[28px] border border-brand-navy/10 bg-brand-cream shadow-card">
        <div className="dot-grid-dark absolute inset-0 opacity-40" aria-hidden="true" />
        <div className="absolute -right-20 -top-20 size-56 rounded-full bg-brand-red/5 blur-2xl" aria-hidden="true" />
        <div className="relative grid gap-6 p-6 md:grid-cols-[auto_1fr] md:items-center md:p-8">
          <div className="flex items-center gap-4">
            <LogoMark size={78} className="animate-float drop-shadow-[0_14px_28px_rgba(8,21,48,0.2)]" />
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-red">À propos</p>
              <p className="mt-1 font-display text-2xl leading-none text-brand-navy">
                <BrandName />
              </p>
              <p className="mt-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
                {siteConfig.legalName}
              </p>
            </div>
          </div>
          <div>
            <h2 className="font-heading text-lg font-bold uppercase leading-tight text-brand-navy md:text-xl">
              Une enseigne de {siteConfig.legalName}
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
              Produits alimentaires surgelés et de grande consommation pour les professionnels, les revendeurs et les
              particuliers. Gros, détail et approvisionnement : une organisation tournée vers la disponibilité, la
              qualité et la confiance.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-2">
              {aboutValues.map((value) => {
                const Icon = value.icon;
                return (
                  <span
                    key={value.label}
                    className="inline-flex items-center gap-1.5 rounded-full border border-brand-navy/10 bg-white/70 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.1em] text-brand-navy"
                  >
                    <Icon size={13} className="text-brand-red" /> {value.label}
                  </span>
                );
              })}
              <Link
                to="/produits"
                className="inline-flex items-center gap-1.5 rounded-full bg-brand-navy px-4 py-2 text-[11px] font-bold uppercase tracking-[0.1em] text-white transition hover:bg-brand-red"
              >
                Voir le catalogue <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="points-de-vente" className="mt-10 scroll-mt-28 md:mt-14">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.22em] text-brand-red">
              <span className="h-px w-8 bg-brand-red/70" aria-hidden="true" />
              Points de vente
            </span>
            <h2 className="mt-3 font-heading text-2xl font-bold uppercase leading-tight text-brand-navy md:text-3xl">
              Nos adresses en République Démocratique du Congo
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
              Retrouvez nos points de vente ville par ville. Pour toute précision sur une adresse ou une disponibilité,
              notre équipe reste à votre écoute.
            </p>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-navy/10 bg-white px-4 py-2 text-[11px] font-bold uppercase tracking-[0.12em] text-brand-navy shadow-sm">
            <MapPin size={13} className="text-brand-red" />
            {totalLocations} adresses · {siteConfig.locations.length} villes
          </span>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {siteConfig.locations.map((location) => (
            <article
              key={location.city}
              className="flex h-full flex-col rounded-[24px] border border-blue-950/5 bg-white p-5 shadow-card"
            >
              <div className="flex items-center justify-between gap-3 border-b border-blue-950/5 pb-4">
                <div className="flex min-w-0 items-center gap-3">
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand-sky text-brand-blue">
                    <MapPin size={18} />
                  </span>
                  <div className="min-w-0">
                    <h3 className="truncate font-heading text-lg font-bold uppercase leading-none text-brand-navy">
                      {location.city}
                    </h3>
                    <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
                      Points de vente
                    </p>
                  </div>
                </div>
                <span className="grid size-7 shrink-0 place-items-center rounded-full bg-brand-cream text-[11px] font-bold text-brand-red">
                  {location.points.length}
                </span>
              </div>
              <ul className="mt-3 grid gap-2.5 sm:grid-cols-2 sm:gap-x-6">
                {location.points.map((point) => (
                  <li key={point} className="flex gap-2.5 text-[13px] leading-5 text-slate-600">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand-red/70" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </section>
  );
}

export default ContactPage;
