import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  CheckCircle2,
  Headset,
  MapPin,
  PackageCheck,
  ShoppingBag,
  Sparkles,
} from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BrandName, LogoMark } from '../components/Logo';
import BrandMarquee from '../components/BrandMarquee';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { siteConfig } from '../config/siteConfig';
import { categories, products } from '../data/products';

const heroImage = '/images/bg-1.jpg';
const campaignImage = '/images/hero-campaign.png';
const wideImage = '/images/products/png/499050267_122116870742835103_876951089144574182_n.png';
const storeImage = '/images/bg-1.jpg';

const trustItems = [
  {
    icon: BadgeCheck,
    title: 'Produits sélectionnés',
    text: 'Qualité et fraîcheur au cœur de notre offre.',
  },
  {
    icon: PackageCheck,
    title: 'Gros & détail',
    text: 'Des formats adaptés aux professionnels comme aux familles.',
  },
  {
    icon: MapPin,
    title: '8 villes couvertes',
    text: 'Un réseau de points de vente à travers la RDC.',
  },
  {
    icon: Headset,
    title: 'Équipe à l’écoute',
    text: 'Un accompagnement simple pour chaque demande.',
  },
];

const values = [
  {
    title: 'Une sélection exigeante',
    text: 'Des produits alimentaires de grande consommation choisis pour leur fraîcheur, leur praticité et leur valeur au quotidien.',
  },
  {
    title: 'Une distribution de proximité',
    text: 'Une organisation tournée vers la disponibilité, avec des points de vente dans les principales villes de notre réseau.',
  },
  {
    title: 'Une relation de confiance',
    text: 'Un accompagnement clair pour les revendeurs, les professionnels et les particuliers, du premier contact au réassort.',
  },
];

const cityNotes = [
  'Lubumbashi',
  'Likasi',
  'Fungurume',
  'Kolwezi',
  'Kikwit',
  'Tshikapa',
  'Kananga',
  'Mbuji-Mayi',
];

function HomePage() {
  const [citiesOpen, setCitiesOpen] = useState(false);

  return (
    <>
      <section className="relative isolate overflow-hidden rounded-[28px] bg-brand-navy text-white shadow-soft md:rounded-[36px]">
        <div className="dot-grid absolute inset-0 opacity-30" aria-hidden="true" />
        <div className="hero-ring absolute -left-72 -top-72 size-[54rem]" aria-hidden="true" />
        <div className="absolute -right-20 top-1/3 size-72 rounded-full bg-brand-red/25 blur-3xl" aria-hidden="true" />

        <div className="relative grid lg:grid-cols-[1.04fr_0.96fr]">
          <div className="flex flex-col justify-center px-6 py-12 sm:px-10 md:px-12 md:py-16 lg:py-20">
            <span className="inline-flex w-fit items-center gap-2.5 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-cream backdrop-blur sm:text-[11px]">
              <Sparkles size={13} className="text-brand-gold" />
              Enseigne de {siteConfig.legalName}
            </span>

            <h1 className="mt-6 font-display text-[3.4rem] leading-[0.9] text-brand-cream sm:text-7xl md:text-8xl">
              Frais <span className="text-brand-gold">&amp;</span>
              <br />
              Congelé
            </h1>

            <p className="mt-5 max-w-md text-lg font-semibold leading-7 text-white/90">{siteConfig.slogan}</p>
            <p className="mt-3 max-w-xl text-sm leading-7 text-white/60 md:text-base">{siteConfig.description}</p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/produits"
                className="inline-flex items-center gap-2 rounded-full bg-brand-red px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand-red/25 transition hover:-translate-y-0.5 hover:bg-brand-red-dark"
              >
                Découvrir nos produits <ArrowRight size={17} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-bold text-white backdrop-blur transition hover:bg-white/15"
              >
                Demander un devis <ArrowUpRight size={16} />
              </Link>
            </div>

            <dl className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-white/10 pt-6">
              <div>
                <dt className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/40">Villes</dt>
                <dd className="mt-1 font-display text-3xl leading-none text-brand-cream">08</dd>
              </div>
              <div>
                <dt className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/40">Vente</dt>
                <dd className="mt-1 font-heading text-base font-bold leading-tight text-brand-cream">Gros &amp; détail</dd>
              </div>
              <div>
                <dt className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/40">Engagement</dt>
                <dd className="mt-1 font-heading text-base font-bold leading-tight text-brand-cream">Qualité</dd>
              </div>
            </dl>
          </div>

          <div className="relative min-h-[380px] overflow-hidden lg:min-h-full">
            <img
              src={heroImage}
              alt="Client dans les rayons du magasin Frais & Congelé à Lubumbashi"
              className="absolute inset-0 size-full object-cover object-[center_45%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/25 to-transparent lg:bg-gradient-to-r lg:from-brand-navy lg:via-brand-navy/10 lg:to-transparent" />

            <div className="absolute right-5 top-5 flex items-center gap-3 rounded-2xl border border-white/20 bg-brand-ink/60 p-3 pr-4 backdrop-blur-md">
              <LogoMark size={46} />
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-brand-gold"><BrandName /></p>
                <p className="mt-0.5 font-heading text-xs font-bold text-white">La qualité, au quotidien</p>
              </div>
            </div>

            <figure className="absolute inset-x-5 bottom-5 flex items-center gap-3 rounded-2xl border border-white/15 bg-brand-ink/70 p-3 backdrop-blur-md">
              <img
                src={wideImage}
                alt=""
                className="h-16 w-20 shrink-0 rounded-xl object-cover"
                loading="lazy"
              />
              <figcaption className="min-w-0">
                <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-brand-gold">Nos affiches</p>
                <p className="mt-1 truncate font-heading text-sm font-bold text-white">
                  Les offres du moment en magasin
                </p>
                <Link to="/produits" className="mt-1 inline-flex items-center gap-1 text-[11px] font-bold text-brand-cream/80 hover:text-white">
                  Voir la sélection <ArrowRight size={12} />
                </Link>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {trustItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <Reveal key={item.title} delay={index * 70}>
              <div className="group flex h-full items-start gap-3.5 rounded-2xl border border-blue-950/5 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-card">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand-sky text-brand-blue transition group-hover:bg-brand-navy group-hover:text-brand-cream">
                  <Icon size={19} />
                </span>
                <div>
                  <h2 className="font-heading text-sm font-bold uppercase leading-tight text-brand-navy">{item.title}</h2>
                  <p className="mt-1 text-xs leading-5 text-slate-500">{item.text}</p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </section>

      <div className="mt-10 overflow-hidden rounded-2xl">
        <BrandMarquee />
      </div>

      <section className="relative mt-16 overflow-hidden rounded-[28px] bg-brand-navy p-5 text-white shadow-soft md:mt-20 md:rounded-[36px] md:p-9 lg:p-12">
        <div className="dot-grid absolute inset-0 opacity-20" aria-hidden="true" />
        <div className="absolute -right-20 -top-24 size-72 rounded-full bg-brand-red/20 blur-3xl" aria-hidden="true" />
        <div className="relative grid items-center gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:gap-10">
          <Reveal>
            <div className="max-w-md">
              <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold">
                <span className="h-px w-7 bg-brand-gold/70" aria-hidden="true" />
                La vie en magasin
              </span>
              <h2 className="mt-4 font-heading text-3xl font-bold uppercase leading-tight text-brand-cream md:text-4xl">
                Au cœur de nos magasins
              </h2>
              <p className="mt-4 text-sm leading-7 text-white/65 md:text-base">
                Des rayons bien approvisionnés, des produits surgelés et une équipe prête à vous accueillir.
                Découvrez l’expérience Frais &amp; Congelé.
              </p>
              <Link
                to="/vente-au-detail"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-red px-5 py-3 text-sm font-bold text-white transition hover:bg-brand-red-dark"
              >
                Découvrir nos points de vente <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>

          <div className="grid grid-cols-5 items-center gap-3 sm:gap-5">
            <Reveal className="col-span-2">
              <figure className="relative aspect-[3/4] overflow-hidden rounded-[22px] border border-white/15 shadow-card md:rounded-[28px]">
                <img
                  src="/images/nf1s16nf1s16nf1s.jpg"
                  alt="Une membre de l’équipe accueille les clients dans le magasin"
                  className="absolute inset-0 size-full object-cover object-[58%_center] transition duration-700 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/80 via-transparent to-transparent" />
                <figcaption className="absolute inset-x-3 bottom-3 text-[10px] font-bold uppercase tracking-[0.14em] text-white sm:inset-x-4 sm:bottom-4 sm:text-xs">
                  Un accueil de proximité
                </figcaption>
              </figure>
            </Reveal>
            <Reveal className="col-span-3 translate-y-3 sm:translate-y-5" delay={100}>
              <figure className="relative aspect-[4/3] overflow-hidden rounded-[22px] border border-white/15 shadow-card md:rounded-[28px]">
                <img
                  src="/images/utre.jpg"
                  alt="Vue des rayons et des congélateurs dans le magasin"
                  className="absolute inset-0 size-full object-cover object-[58%_center] transition duration-700 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/80 via-transparent to-transparent" />
                <figcaption className="absolute inset-x-3 bottom-3 text-[10px] font-bold uppercase tracking-[0.14em] text-white sm:inset-x-4 sm:bottom-4 sm:text-xs">
                  Des rayons bien approvisionnés
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mt-16 md:mt-20">
        <Reveal>
          <SectionHeading
            eyebrow="Nos catégories"
            title="Un catalogue pour tous vos besoins"
            description={
              <>
                Poissons, viandes, huiles et épicerie : retrouvez les familles de produits mises en avant par <BrandName />.
              </>
            }
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

        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => {
            const count = products.filter((product) => product.categoryId === category.id).length;
            return (
              <Reveal key={category.id} delay={index * 80}>
                <Link
                  to={`/produits?categorie=${category.id}`}
                  className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-blue-950/5 bg-white shadow-card transition duration-300 hover:-translate-y-1.5 hover:shadow-soft"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-brand-sky to-white">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="size-full object-contain p-5 transition duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-brand-navy shadow-sm backdrop-blur">
                      0{index + 1}
                    </span>
                    <span className="absolute right-4 top-4 grid place-items-center rounded-full bg-white/90 p-1 shadow-sm backdrop-blur">
                      <LogoMark size={22} />
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-heading text-lg font-bold uppercase leading-tight text-brand-navy">
                        {category.name}
                      </h3>
                      <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-full bg-brand-navy text-white transition group-hover:bg-brand-red">
                        <ArrowUpRight size={15} />
                      </span>
                    </div>
                    <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">{category.description}</p>
                    <span className="mt-4 text-[10px] font-bold uppercase tracking-[0.16em] text-brand-red">
                      {count} références
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="mt-16 md:mt-20">
        <Reveal>
          <SectionHeading
            eyebrow="Produits à la une"
            title="Les incontournables de notre sélection"
            description="Une sélection commerciale de référence, disponible selon les arrivages et les points de vente."
            action={
              <Link
                to="/produits"
                className="inline-flex items-center gap-2 text-sm font-bold text-brand-navy transition hover:text-brand-red"
              >
                Voir tous les produits <ArrowRight size={16} />
              </Link>
            }
          />
        </Reveal>

        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {products.slice(0, 4).map((product, index) => (
            <Reveal key={product.id} delay={index * 80}>
              <article className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-blue-950/5 bg-white shadow-card transition duration-300 hover:-translate-y-1.5 hover:shadow-soft">
                <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-brand-sky via-white to-brand-cream/40">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="size-full object-contain p-5 transition duration-500 group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-brand-navy px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.14em] text-brand-cream">
                    {product.category}
                  </span>
                  <LogoMark
                    size={26}
                    className="absolute bottom-3 right-3 rounded-full bg-white/85 p-1 shadow-sm backdrop-blur"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-heading text-lg font-bold uppercase leading-tight text-brand-navy">{product.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">{product.description}</p>
                  <Link
                    to="/contact"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-brand-red transition hover:gap-3"
                  >
                    Demander des infos <ArrowRight size={15} />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mt-16 md:mt-20">
        <Reveal>
          <SectionHeading
            eyebrow="Deux façons d’acheter"
            title="Un accompagnement pour chaque profil"
            description="Que vous soyez revendeur, professionnel ou particulier, notre équipe vous oriente vers l’offre la plus adaptée."
          />
        </Reveal>

        <div className="mt-7 grid gap-4 lg:grid-cols-2">
          <Reveal>
            <Link
              to="/vente-en-gros"
              className="group relative flex min-h-[330px] flex-col justify-end overflow-hidden rounded-[28px] bg-brand-navy p-7 text-white shadow-card md:p-9"
            >
              <img
                src={storeImage}
                alt="Rayons et réserves du magasin Frais & Congelé"
                className="absolute inset-0 size-full object-cover opacity-55 transition duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-ink via-brand-navy/70 to-brand-navy/10" />
              <LogoMark size={52} className="relative mb-auto" />
              <span className="relative inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-brand-cream backdrop-blur">
                <PackageCheck size={13} /> Professionnels
              </span>
              <h3 className="relative mt-3 font-heading text-3xl font-bold uppercase leading-none">Vente en gros</h3>
              <p className="relative mt-2 max-w-md text-sm leading-6 text-white/70">
                Des solutions pensées pour les revendeurs, commerçants et acheteurs en quantité.
              </p>
              <span className="relative mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-brand-red px-5 py-2.5 text-sm font-bold text-white transition group-hover:bg-brand-red-dark">
                Découvrir l’offre <ArrowRight size={16} />
              </span>
            </Link>
          </Reveal>

          <Reveal delay={100}>
            <Link
              to="/vente-au-detail"
              className="group relative flex min-h-[330px] flex-col justify-end overflow-hidden rounded-[28px] border border-brand-navy/10 bg-brand-cream p-7 text-brand-navy shadow-card md:p-9"
            >
              <div className="dot-grid-dark absolute inset-0 opacity-50" aria-hidden="true" />
              <img
                src={wideImage}
                alt=""
                className="absolute -right-6 bottom-0 w-40 rotate-[-6deg] drop-shadow-2xl transition duration-500 group-hover:-translate-y-2 group-hover:rotate-0 sm:-right-8 sm:w-56"
                loading="lazy"
              />
              <LogoMark size={52} className="relative mb-auto" />
              <span className="relative inline-flex w-fit items-center gap-2 rounded-full border border-brand-navy/15 bg-white/60 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-brand-red backdrop-blur">
                <ShoppingBag size={13} /> Particuliers
              </span>
              <h3 className="relative mt-3 max-w-[58%] font-heading text-3xl font-bold uppercase leading-none">Vente au détail</h3>
              <p className="relative mt-2 max-w-[55%] text-sm leading-6 text-slate-600">
                Une offre accessible pour les familles et les achats du quotidien.
              </p>
              <span className="relative mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-brand-navy px-5 py-2.5 text-sm font-bold text-white transition group-hover:bg-brand-red">
                Voir l’offre <ArrowRight size={16} />
              </span>
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="mt-16 md:mt-20">
        <Reveal>
          <SectionHeading
            eyebrow="Pourquoi nous choisir"
            title="Un cadre commercial sérieux et durable"
            description="Trois engagements simples qui guident notre façon de sélectionner, distribuer et accompagner."
          />
        </Reveal>

        <div className="mt-7 grid gap-4 md:grid-cols-3">
          {values.map((value, index) => (
            <Reveal key={value.title} delay={index * 90}>
              <article className="relative h-full overflow-hidden rounded-[24px] border border-blue-950/5 bg-white p-6 shadow-card">
                <LogoMark size={120} className="pointer-events-none absolute -bottom-8 -right-6 opacity-[0.05]" />
                <span className="font-display text-4xl leading-none text-brand-red">0{index + 1}</span>
                <h3 className="mt-4 font-heading text-xl font-bold uppercase leading-tight text-brand-navy">{value.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{value.text}</p>
                <CheckCircle2 size={18} className="mt-5 text-brand-blue" />
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative mt-16 overflow-hidden rounded-[28px] bg-brand-navy p-6 text-white shadow-soft md:mt-20 md:p-10">
        <div className="dot-grid absolute inset-0 opacity-25" aria-hidden="true" />
        <div className="absolute -right-24 -top-24 size-72 rounded-full bg-brand-red/20 blur-3xl" aria-hidden="true" />
        <div className="relative grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <div className="flex items-center gap-4">
              <LogoMark size={64} className="drop-shadow-[0_12px_30px_rgba(0,0,0,0.35)]" />
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold">Notre réseau</p>
                <p className="mt-1 font-heading text-sm font-bold text-brand-cream">Points de vente en RDC</p>
              </div>
            </div>
            <h2 className="mt-6 font-heading text-3xl font-bold uppercase leading-[1.08] text-brand-cream md:text-4xl">
              Un réseau commercial pensé autour des villes clés
            </h2>
            <p className="mt-3 max-w-md text-sm leading-7 text-white/65">
              Choisissez votre ville : notre équipe vous indiquera le point de vente le plus proche et les disponibilités.
            </p>
            <button
              type="button"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-red px-5 py-3 text-sm font-bold text-white transition hover:bg-brand-red-dark md:hidden"
              aria-expanded={citiesOpen}
              onClick={() => setCitiesOpen((open) => !open)}
            >
              <MapPin size={16} /> {citiesOpen ? 'Masquer les villes' : 'Voir les villes'}
              <ArrowRight size={16} className={`transition ${citiesOpen ? 'rotate-90' : ''}`} />
            </button>
            <Link
              to="/contact"
              className="mt-6 hidden items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-bold text-brand-cream transition hover:bg-white/10 md:inline-flex"
            >
              Contacter notre équipe <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className={`${citiesOpen ? 'grid' : 'hidden'} grid-cols-1 gap-2 sm:grid-cols-2 md:grid`}>
            {cityNotes.map((city, index) => (
              <Link
                key={city}
                to={`/contact?ville=${encodeURIComponent(city)}`}
                className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/80 transition hover:border-brand-red/40 hover:bg-white/10 hover:text-brand-cream"
              >
                <span className="font-display text-lg text-brand-gold/80">0{index + 1}</span>
                <MapPin size={14} className="shrink-0 text-brand-red" />
                <span className="flex-1">{city}</span>
                <ArrowRight size={14} className="opacity-40 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative mt-12 overflow-hidden rounded-[28px] bg-brand-blue text-white shadow-soft md:mt-16">
        <img
          src={campaignImage}
          alt=""
          className="absolute inset-0 size-full object-cover object-right opacity-40"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-ink via-brand-navy/90 to-brand-navy/30" />
        <div className="relative flex flex-col items-start gap-6 p-7 md:flex-row md:items-center md:justify-between md:p-10">
          <div className="flex items-center gap-5">
            <LogoMark size={72} className="hidden shrink-0 animate-float drop-shadow-[0_16px_36px_rgba(0,0,0,0.4)] sm:block" />
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold">Parlons de votre approvisionnement</p>
              <h2 className="mt-2 max-w-xl font-heading text-2xl font-bold uppercase leading-tight text-brand-cream md:text-3xl">
                Une demande précise ? Notre équipe vous répond.
              </h2>
              <p className="mt-2 max-w-xl text-sm leading-6 text-white/70">
                Gros, détail, disponibilités ou point de vente : dites-nous ce qu’il vous faut.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-brand-red px-6 py-3.5 text-sm font-bold text-white transition hover:bg-brand-red-dark"
            >
              Nous contacter <ArrowRight size={16} />
            </Link>
            <Link
              to="/produits"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
            >
              Voir le catalogue <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
