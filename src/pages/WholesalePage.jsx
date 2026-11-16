import { ArrowRight, ArrowUpRight, ClipboardCheck, FileText, PackageCheck, Store, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BrandName, LogoMark } from '../components/Logo';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { categories } from '../data/products';

const storeImage = '/images/bg-1.jpg';

const benefits = [
  {
    icon: PackageCheck,
    title: 'Achats en quantité',
    text: 'Une offre pensée pour les revendeurs, commerçants et acheteurs qui constituent leurs stocks.',
  },
  {
    icon: ClipboardCheck,
    title: 'Disponibilité suivie',
    text: 'Un suivi des arrivages et des références pour anticiper vos besoins de réassort.',
  },
  {
    icon: Users,
    title: 'Interlocuteur dédié',
    text: 'Un échange direct avec notre équipe pour cadrer votre demande et vos volumes.',
  },
];

const steps = [
  {
    title: 'Partagez votre besoin',
    text: 'Indiquez les produits, les quantités envisagées et votre ville via le formulaire ou par téléphone.',
  },
  {
    title: 'Échangez avec l’équipe',
    text: 'Nous vérifions les disponibilités et les modalités adaptées à votre activité.',
  },
  {
    title: 'Organisez votre réassort',
    text: 'Validez votre commande et convenez du point de retrait ou de l’organisation de la livraison.',
  },
];

function WholesalePage() {
  return (
    <section>
      <PageHero
        eyebrow="Professionnels"
        title="Vente en gros"
        description={
          <>
            <BrandName /> accompagne les revendeurs, commerçants et acheteurs institutionnels avec un cadre de vente clair,
            orienté vers la confiance et la disponibilité.
          </>
        }
        image={storeImage}
        imageAlt="Rayons du magasin Frais & Congelé"
        imageCaption="Un approvisionnement structuré"
        actions={
          <>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-brand-red px-6 py-3 text-sm font-bold text-white transition hover:bg-brand-red-dark"
            >
              Demander un devis <ArrowRight size={16} />
            </Link>
            <Link
              to="/produits"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
            >
              Parcourir le catalogue <ArrowUpRight size={16} />
            </Link>
          </>
        }
      />

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {benefits.map((benefit, index) => {
          const Icon = benefit.icon;
          return (
            <Reveal key={benefit.title} delay={index * 80}>
              <article className="group h-full rounded-[24px] border border-blue-950/5 bg-white p-6 shadow-card transition hover:-translate-y-1 hover:shadow-soft">
                <span className="grid size-11 place-items-center rounded-xl bg-brand-sky text-brand-blue transition group-hover:bg-brand-navy group-hover:text-brand-cream">
                  <Icon size={20} />
                </span>
                <h2 className="mt-4 font-heading text-lg font-bold uppercase leading-tight text-brand-navy">{benefit.title}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">{benefit.text}</p>
              </article>
            </Reveal>
          );
        })}
      </div>

      <section className="mt-14 md:mt-16">
        <Reveal>
          <SectionHeading
            eyebrow="Comment ça marche"
            title="Un parcours simple en trois étapes"
            description="De la première demande à la réception de vos produits, notre équipe vous accompagne à chaque étape."
          />
        </Reveal>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {steps.map((step, index) => (
            <Reveal key={step.title} delay={index * 90}>
              <article className="relative h-full overflow-hidden rounded-[24px] border border-blue-950/5 bg-white p-6 shadow-card">
                <LogoMark size={108} className="pointer-events-none absolute -bottom-6 -right-4 opacity-[0.05]" />
                <div className="flex items-center justify-between">
                  <span className="font-display text-4xl leading-none text-brand-red">0{index + 1}</span>
                  <span className="grid size-8 place-items-center rounded-full bg-brand-sky text-brand-blue">
                    <ArrowRight size={15} />
                  </span>
                </div>
                <h3 className="mt-4 font-heading text-xl font-bold uppercase leading-tight text-brand-navy">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{step.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative mt-14 overflow-hidden rounded-[28px] bg-brand-navy p-7 text-white shadow-soft md:p-10">
        <div className="dot-grid absolute inset-0 opacity-25" aria-hidden="true" />
        <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <div className="flex items-center gap-4">
              <LogoMark size={50} />
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold">Votre devis professionnel</p>
            </div>
            <h2 className="mt-5 max-w-2xl font-heading text-2xl font-bold uppercase leading-tight text-brand-cream md:text-3xl">
              Décrivez votre besoin, votre volume ou votre type d’activité
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-7 text-white/65">
              Notre équipe vous répond avec les références disponibles et les modalités adaptées à votre activité.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  to={`/produits?categorie=${category.id}`}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3.5 py-2 text-xs font-semibold text-white/75 transition hover:border-brand-red/40 hover:bg-white/10 hover:text-brand-cream"
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
          <Link
            to="/contact"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-brand-red px-6 py-3.5 text-sm font-bold text-white transition hover:bg-brand-red-dark"
          >
            Demander un devis <FileText size={16} />
          </Link>
        </div>
      </section>

      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        {['Revendeurs', 'Commerçants', 'Acheteurs institutionnels'].map((profile) => (
          <div
            key={profile}
            className="flex items-center gap-3 rounded-2xl border border-blue-950/5 bg-white p-4 text-sm font-semibold text-brand-navy shadow-sm"
          >
            <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-brand-cream text-brand-red">
              <Store size={16} />
            </span>
            {profile}
          </div>
        ))}
      </div>
    </section>
  );
}

export default WholesalePage;
