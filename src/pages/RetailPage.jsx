import { ArrowRight, ArrowUpRight, BadgeCheck, MapPin, ShoppingBag, Store } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BrandName, LogoMark } from '../components/Logo';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { categories } from '../data/products';

const storefrontImage = '/images/products/png/528559389_122137140884835103_7428299957765391714_n.png';
const shelfImage = '/images/bg-1.jpg';
const productImage = '/images/products/png/499050267_122116870742835103_876951089144574182_n.png';

const benefits = [
  {
    icon: ShoppingBag,
    title: 'Pour toute la famille',
    text: 'Des formats accessibles pour les achats réguliers et les repas du quotidien.',
  },
  {
    icon: BadgeCheck,
    title: 'Qualité et praticité',
    text: 'Une sélection de produits alimentaires de grande consommation, simples à conserver et à préparer.',
  },
  {
    icon: MapPin,
    title: 'Près de chez vous',
    text: 'Retrouvez nos points de vente dans les principales villes de notre réseau.',
  },
];

function RetailPage() {
  return (
    <section>
      <PageHero
        eyebrow="Particuliers"
        title="Vente au détail"
        description="Une sélection pensée pour les familles, les consommateurs et les achats réguliers : qualité, praticité et bon rapport qualité-prix, au plus près de chez vous."
        image={storefrontImage}
        imageAlt="Façade d’un point de vente Frais & Congelé"
        imageCaption="Un point de vente près de chez vous"
        actions={
          <>
            <Link
              to="/produits"
              className="inline-flex items-center gap-2 rounded-full bg-brand-red px-6 py-3 text-sm font-bold text-white transition hover:bg-brand-red-dark"
            >
              Voir les produits <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
            >
              Trouver un magasin <ArrowUpRight size={16} />
            </Link>
          </>
        }
      />

      <div className="mt-6 grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal>
          <article className="flex h-full flex-col justify-between overflow-hidden rounded-[28px] border border-blue-950/5 bg-white p-7 shadow-card md:p-9">
            <div>
              <div className="flex items-center gap-4">
                <LogoMark size={56} />
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-red"><BrandName /></p>
                  <h2 className="mt-1 font-heading text-2xl font-bold uppercase leading-tight text-brand-navy">
                    Une offre adaptée au quotidien
                  </h2>
                </div>
              </div>
              <p className="mt-5 text-sm leading-7 text-slate-600 md:text-base">
                Une sélection pensée pour les familles, les consommateurs et les achats réguliers disponibles dans le
                cadre de l’activité de <BrandName />.
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                Le site met en avant la qualité, la praticité et le bon rapport qualité-prix dans les choix de produits
                alimentaires surgelés.
              </p>
            </div>

            <div className="mt-6 grid gap-2 border-t border-blue-950/5 pt-5 sm:grid-cols-2">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  to={`/produits?categorie=${category.id}`}
                  className="group flex items-center gap-3 rounded-xl border border-blue-950/5 bg-brand-sky/60 p-2.5 text-sm font-semibold text-brand-navy transition hover:border-brand-red/20 hover:bg-brand-sky"
                >
                  <img
                    src={category.image}
                    alt=""
                    className="size-10 shrink-0 rounded-lg bg-white object-contain p-0.5"
                    loading="lazy"
                  />
                  <span className="flex-1 text-xs leading-4">{category.name}</span>
                  <ArrowRight size={13} className="shrink-0 opacity-40 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
                </Link>
              ))}
            </div>
          </article>
        </Reveal>

        <Reveal delay={100}>
          <div className="relative h-full min-h-[320px] overflow-hidden rounded-[28px] bg-brand-navy shadow-card">
            <img
              src={shelfImage}
              alt="Rio de produits alimentaires en magasin"
              className="absolute inset-0 size-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-ink via-brand-navy/30 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-8">
              <LogoMark size={50} className="mb-4" />
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold">En magasin</p>
              <h2 className="mt-2 font-heading text-2xl font-bold uppercase leading-tight text-brand-cream">
                Mille découvertes, un seul lieu.
              </h2>
              <p className="mt-2 max-w-sm text-sm leading-6 text-white/65">
                Des rayons produits à parcourir et des équipes disponibles pour vous conseiller.
              </p>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="mt-4 grid gap-3 md:grid-cols-3">
        {benefits.map((benefit, index) => {
          const Icon = benefit.icon;
          return (
            <Reveal key={benefit.title} delay={index * 80}>
              <article className="group h-full rounded-[24px] border border-blue-950/5 bg-white p-6 shadow-card transition hover:-translate-y-1 hover:shadow-soft">
                <span className="grid size-11 place-items-center rounded-xl bg-brand-cream text-brand-red transition group-hover:bg-brand-red group-hover:text-white">
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
            eyebrow="En rayon"
            title="Des produits pour chaque moment"
            description="Poissons, viandes, huiles et épicerie : composez vos repas avec les références disponibles dans nos points de vente."
            action={
              <Link
                to="/produits"
                className="inline-flex items-center gap-2 rounded-full border border-blue-950/10 bg-white px-5 py-2.5 text-sm font-bold text-brand-navy shadow-sm transition hover:border-brand-red/30 hover:text-brand-red"
              >
                Tout le catalogue <ArrowRight size={16} />
              </Link>
            }
          />
        </Reveal>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => (
            <Reveal key={category.id} delay={index * 70}>
              <Link
                to={`/produits?categorie=${category.id}`}
                className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-blue-950/5 bg-white shadow-card transition duration-300 hover:-translate-y-1.5 hover:shadow-soft"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-brand-cream/60 to-brand-sky">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="size-full object-contain p-5 transition duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <LogoMark size={24} className="absolute bottom-3 right-3 rounded-full bg-white/85 p-1" />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-heading text-base font-bold uppercase leading-tight text-brand-navy">{category.name}</h3>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-brand-red">
                    Découvrir <ArrowRight size={13} className="transition group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative mt-14 overflow-hidden rounded-[28px] border border-brand-navy/10 bg-brand-cream p-7 shadow-card md:mt-16 md:p-10">
        <div className="dot-grid-dark absolute inset-0 opacity-50" aria-hidden="true" />
        <img
          src={productImage}
          alt=""
          className="pointer-events-none absolute -bottom-16 -right-10 hidden w-72 rotate-[-6deg] opacity-90 drop-shadow-2xl lg:block"
          loading="lazy"
        />
        <div className="relative max-w-2xl">
          <LogoMark size={52} />
          <h2 className="mt-5 font-heading text-2xl font-bold uppercase leading-tight text-brand-navy md:text-3xl">
            Besoin d’un produit précis ?
          </h2>
          <p className="mt-2 text-sm leading-7 text-slate-600 md:text-base">
            Contactez l’équipe pour obtenir des informations ou demander un conseil sur la gamme disponible dans votre
            ville.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-brand-navy px-6 py-3 text-sm font-bold text-white transition hover:bg-brand-red"
            >
              Nous contacter <ArrowRight size={16} />
            </Link>
            <Link
              to="/vente-en-gros"
              className="inline-flex items-center gap-2 rounded-full border border-brand-navy/20 px-6 py-3 text-sm font-bold text-brand-navy transition hover:bg-white/60"
            >
              <Store size={16} /> Offre professionnels
            </Link>
          </div>
        </div>
      </section>
    </section>
  );
}

export default RetailPage;
