import { ArrowRight, ArrowUpRight, RotateCcw, Search, SlidersHorizontal } from 'lucide-react';
import { useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { LogoMark } from '../components/Logo';
import PageHero from '../components/PageHero';
import { categories, products } from '../data/products';

function ProductCard({ product }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-blue-950/5 bg-white shadow-card transition duration-300 hover:-translate-y-1.5 hover:shadow-soft">
      <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-brand-sky via-white to-brand-cream/40">
        <img
          src={product.image}
          alt={product.name}
          className="size-full object-contain p-5 transition duration-500 group-hover:scale-[1.04]"
          loading="lazy"
        />
        <span className="absolute left-4 top-4 max-w-[75%] truncate rounded-full bg-brand-navy px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.14em] text-brand-cream">
          {product.category}
        </span>
        <LogoMark size={26} className="absolute bottom-3 right-3 rounded-full bg-white/85 p-1 shadow-sm backdrop-blur" />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-heading text-lg font-bold uppercase leading-tight text-brand-navy">{product.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">{product.description}</p>
        <div className="mt-4 flex items-center justify-between gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-sm font-bold text-brand-red transition hover:gap-3"
          >
            Demander un devis <ArrowRight size={15} />
          </Link>
          <span className="grid size-8 place-items-center rounded-full bg-brand-sky text-brand-blue transition group-hover:bg-brand-navy group-hover:text-white">
            <ArrowUpRight size={15} />
          </span>
        </div>
      </div>
    </article>
  );
}

function ProductsPage() {
  const [search, setSearch] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedCategory = searchParams.get('categorie') || 'all';

  const selectCategory = (categoryId) => {
    setSearchParams(categoryId === 'all' ? {} : { categorie: categoryId });
  };

  const counts = useMemo(
    () =>
      products.reduce(
        (accumulator, product) => {
          accumulator[product.categoryId] = (accumulator[product.categoryId] || 0) + 1;
          return accumulator;
        },
        { all: products.length }
      ),
    []
  );

  const filteredProducts = useMemo(() => {
    const term = search.trim().toLowerCase();

    return products.filter((product) => {
      const matchesSearch =
        !term ||
        product.name.toLowerCase().includes(term) ||
        product.category.toLowerCase().includes(term) ||
        product.description.toLowerCase().includes(term);
      const matchesCategory = selectedCategory === 'all' || product.categoryId === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, selectedCategory]);

  const resetFilters = () => {
    setSearch('');
    setSearchParams({});
  };

  const activeCategory = categories.find((category) => category.id === selectedCategory);

  return (
    <section>
      <PageHero
        eyebrow="Catalogue"
        title="Nos produits"
        description="Poissons, viandes, huiles et épicerie : une sélection de produits alimentaires pensée pour les professionnels, les revendeurs et les particuliers."
        image={categories[0].featuredImage}
        imageAlt="Affiche produits Frais & Congelé"
        imageCaption="Une sélection commerciale de référence"
        actions={
          <>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-brand-red px-6 py-3 text-sm font-bold text-white transition hover:bg-brand-red-dark"
            >
              Demander un devis <ArrowRight size={16} />
            </Link>
            <Link
              to="/vente-en-gros"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
            >
              Offre professionnels <ArrowUpRight size={16} />
            </Link>
          </>
        }
      />

      <div className="mt-6 rounded-[24px] border border-blue-950/5 bg-white p-4 shadow-card sm:p-5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <label
            className="flex w-full max-w-md items-center gap-3 rounded-xl border border-blue-950/10 bg-slate-50 px-4 py-3 transition focus-within:border-brand-blue/40 focus-within:bg-white focus-within:ring-4 focus-within:ring-brand-blue/10"
            htmlFor="search-products"
          >
            <Search size={17} className="shrink-0 text-brand-blue" />
            <input
              id="search-products"
              type="text"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Rechercher un produit, une catégorie…"
              className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
            />
            {search && (
              <button
                type="button"
                onClick={() => setSearch('')}
                className="shrink-0 rounded-full p-1 text-slate-400 transition hover:bg-slate-200 hover:text-slate-700"
                aria-label="Effacer la recherche"
              >
                <RotateCcw size={14} />
              </button>
            )}
          </label>

          <div className="flex items-center gap-2 text-sm text-slate-500">
            <SlidersHorizontal size={15} className="text-brand-red" />
            <span>
              <strong className="font-bold text-brand-navy">{filteredProducts.length}</strong> produit
              {filteredProducts.length > 1 ? 's' : ''}
              {activeCategory ? ` · ${activeCategory.name}` : ' au total'}
            </span>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2 border-t border-blue-950/5 pt-4" aria-label="Filtres de catégorie">
          <button
            className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold transition ${
              selectedCategory === 'all'
                ? 'bg-brand-navy text-white shadow-md shadow-brand-navy/15'
                : 'bg-brand-sky text-brand-navy hover:bg-blue-100'
            }`}
            type="button"
            aria-pressed={selectedCategory === 'all'}
            onClick={() => selectCategory('all')}
          >
            Tous <span className="text-[10px] opacity-60">{counts.all}</span>
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              type="button"
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold transition ${
                selectedCategory === category.id
                  ? 'bg-brand-navy text-white shadow-md shadow-brand-navy/15'
                  : 'bg-brand-sky text-brand-navy hover:bg-blue-100'
              }`}
              aria-pressed={selectedCategory === category.id}
              onClick={() => selectCategory(category.id)}
            >
              {category.name} <span className="text-[10px] opacity-60">{counts[category.id] || 0}</span>
            </button>
          ))}
        </div>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="mt-6 flex flex-col items-center rounded-[24px] border border-blue-950/5 bg-white p-10 text-center shadow-card">
          <LogoMark size={80} className="opacity-80" />
          <h2 className="mt-5 font-heading text-2xl font-bold uppercase text-brand-navy">Aucun produit trouvé</h2>
          <p className="mt-2 max-w-md text-sm leading-6 text-slate-600">
            Aucun produit ne correspond à votre recherche. Essayez un autre terme ou parcourez toutes nos catégories.
          </p>
          <button
            type="button"
            onClick={resetFilters}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-red px-5 py-3 text-sm font-bold text-white transition hover:bg-brand-red-dark"
          >
            <RotateCcw size={16} /> Réinitialiser les filtres
          </button>
        </div>
      ) : (
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

      <div className="relative mt-8 overflow-hidden rounded-[24px] bg-brand-navy p-6 text-white md:p-8">
        <div className="dot-grid absolute inset-0 opacity-25" aria-hidden="true" />
        <LogoMark size={250} className="pointer-events-none absolute -bottom-24 -right-10 opacity-[0.07]" />
        <div className="relative flex flex-col items-start gap-5 md:flex-row md:items-center md:justify-between">
          <div className="flex items-start gap-4">
            <LogoMark size={48} className="hidden shrink-0 sm:block" />
            <div>
              <h2 className="font-heading text-xl font-bold uppercase leading-tight text-brand-cream">
                Disponibilités et prix à confirmer
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-white/65">
                Les références présentées dépendent des arrivages et des points de vente. Contactez notre équipe pour
                connaître les disponibilités dans votre ville.
              </p>
            </div>
          </div>
          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-brand-red px-5 py-3 text-sm font-bold text-white transition hover:bg-brand-red-dark"
          >
            Nous contacter <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ProductsPage;
