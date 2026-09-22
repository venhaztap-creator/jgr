"use client";

import { useState, useMemo, useEffect } from 'react';
import { MOCK_PRODUCTS } from '@/data/products';

const ALL_PRODUCTS = MOCK_PRODUCTS.map(p => ({
  id: p.id,
  key: p.type, // We will use exact type match
  cat: p.type,
  name: p.title,
  brand: p.brand,
  price: p.pricing.retail,
  img: p.images[0],
  offer: p.pricing.b2bTiers && p.pricing.b2bTiers.length > 1,
  stock: true
}));

const SIDEBAR_CATS = [
  'Lubricantes y Fluidos',
  'Llantas y Neumáticos',
  'Sistema Eléctrico',
  'Amortiguador de Suspensión'
];

const SIDEBAR_BRANDS = [
  'Valvoline',
  'Michelin',
  'VoltMax',
  'Monroe'
];

const PRICE_MAP: Record<string, (p: number) => boolean> = {
  'Menos de $10': p => p < 10,
  '$10 - $30': p => p >= 10 && p <= 30,
  '$30 - $50': p => p > 30 && p <= 50,
  'Más de $50': p => p > 50
};

const PAGE_SIZE = 12;

export default function FilterSection() {
  const [activeCats, setActiveCats] = useState<string[]>([]);
  const [activeBrands, setActiveBrands] = useState<string[]>([]);
  const [activePrices, setActivePrices] = useState<string[]>([]);
  
  const [sortMode, setSortMode] = useState('Relevancia');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [shownMax, setShownMax] = useState(PAGE_SIZE);

  const [collapsedGroups, setCollapsedGroups] = useState<Record<string, boolean>>({});
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);

  // Toggle filter arrays
  const toggleFilter = (set: React.Dispatch<React.SetStateAction<string[]>>, val: string) => {
    set(prev => prev.includes(val) ? prev.filter(x => x !== val) : [...prev, val]);
    setShownMax(PAGE_SIZE); // reset pagination
  };

  const clearAll = () => {
    setActiveCats([]);
    setActiveBrands([]);
    setActivePrices([]);
    setShownMax(PAGE_SIZE);
  };

  // Compute active filters
  const filteredProducts = useMemo(() => {
    let result = ALL_PRODUCTS;
    if (activeCats.length > 0) {
      result = result.filter(p => activeCats.includes(p.key));
    }
    if (activeBrands.length > 0) {
      result = result.filter(p => activeBrands.includes(p.brand));
    }
    if (activePrices.length > 0) {
      result = result.filter(p => activePrices.some(priceKey => PRICE_MAP[priceKey] && PRICE_MAP[priceKey](p.price)));
    }
    
    // Sort
    if (sortMode === 'Precio: Menor a Mayor') {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (sortMode === 'Precio: Mayor a Menor') {
      result = [...result].sort((a, b) => b.price - a.price);
    }

    return result;
  }, [activeCats, activeBrands, activePrices, sortMode]);

  const displayedProducts = filteredProducts.slice(0, shownMax);
  const totalActiveFilters = activeCats.length + activeBrands.length + activePrices.length;

  const toggleGroup = (group: string) => {
    setCollapsedGroups(prev => ({ ...prev, [group]: !prev[group] }));
  };

  useEffect(() => {
    if (isMobileDrawerOpen) {
      document.body.classList.add('is-locked');
    } else {
      document.body.classList.remove('is-locked');
    }
    return () => document.body.classList.remove('is-locked');
  }, [isMobileDrawerOpen]);

  // Hash navigation (legacy support)
  useEffect(() => {
    const handleHashChange = () => {
      // Disabled since we use full page routing now
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [activeCats]);

  return (
    <section className="catalog" id="catalog" data-od-id="catalog">
      <div className="container container--wide">
        <div>
          <h2>Filtra y arma tu pedido rápido.</h2>
          <p className="catalog__sub">Más de 2,500 repuestos disponibles en inventario.</p>
        </div>

        <div className="catalog__cols">
          <aside className={`filters ${isMobileDrawerOpen ? 'is-open' : ''}`} id="filterPanel" tabIndex={-1} aria-label="Filtros" data-od-id="filter-panel">
            <div className="filters__card">
              <span className="filters__handle" aria-hidden="true"></span>
              <div className="filters__hd">
                <h3>Filtros</h3>
                <button className="filters__clear" onClick={clearAll}>Limpiar</button>
              </div>

              {/* Categorías */}
              <div className={`fgroup ${collapsedGroups['cat'] ? 'is-collapsed' : ''}`}>
                <h4 className="fgroup__title" role="button" tabIndex={0} onClick={() => toggleGroup('cat')} aria-expanded={!collapsedGroups['cat']}>
                  Categoría <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="m6 9 6 6 6-6"/></svg>
                </h4>
                <div className="fgroup__body">
                  <div className="fgroup__inner" id="catFilters">
                    {SIDEBAR_CATS.map(cat => (
                      <label key={cat} className={`fcheck ${activeCats.includes(cat) ? 'is-checked' : ''}`} onClick={(e) => { e.preventDefault(); toggleFilter(setActiveCats, cat); }}>
                        <span className="fcheck__box">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                        </span>
                        <span className="fcheck__label">{cat}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Marca */}
              <div className={`fgroup ${collapsedGroups['brand'] ? 'is-collapsed' : ''}`}>
                <h4 className="fgroup__title" role="button" tabIndex={0} onClick={() => toggleGroup('brand')} aria-expanded={!collapsedGroups['brand']}>
                  Marca <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="m6 9 6 6 6-6"/></svg>
                </h4>
                <div className="fgroup__body">
                  <div className="fgroup__inner" id="brandFilters">
                    {SIDEBAR_BRANDS.map(brand => (
                      <label key={brand} className={`fcheck ${activeBrands.includes(brand) ? 'is-checked' : ''}`} onClick={(e) => { e.preventDefault(); toggleFilter(setActiveBrands, brand); }}>
                        <span className="fcheck__box">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                        </span>
                        <span className="fcheck__label">{brand}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Precio */}
              <div className={`fgroup ${collapsedGroups['price'] ? 'is-collapsed' : ''}`}>
                <h4 className="fgroup__title" role="button" tabIndex={0} onClick={() => toggleGroup('price')} aria-expanded={!collapsedGroups['price']}>
                  Precio <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="m6 9 6 6 6-6"/></svg>
                </h4>
                <div className="fgroup__body">
                  <div className="fgroup__inner" id="priceFilters">
                    {['Menos de $10', '$10 - $30', '$30 - $50', 'Más de $50'].map(price => (
                      <label key={price} className={`fcheck ${activePrices.includes(price) ? 'is-checked' : ''}`} onClick={(e) => { e.preventDefault(); toggleFilter(setActivePrices, price); }}>
                        <span className="fcheck__box fcheck__box--round">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                        </span>
                        <span className="fcheck__label">{price}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              <div className="filters__foot">
                <button type="button" className="filters__apply" onClick={() => setIsMobileDrawerOpen(false)}>
                  Ver <span>{filteredProducts.length}</span> productos
                </button>
              </div>
            </div>
          </aside>

          <div className="results">
            <div className="results__bar">
              <button type="button" className="filters__trigger" onClick={() => setIsMobileDrawerOpen(true)}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 6h16M7 12h10M10 18h4"/></svg>
                <span>Filtros</span>
                {totalActiveFilters > 0 && <span className="filters__count">{totalActiveFilters}</span>}
              </button>
              <span className="results__count"><span>{filteredProducts.length}</span> <span>productos encontrados</span></span>
              
              <div className="results__tools">
                <div className="results__sort">
                  <span className="hide-sm">Ordenar por</span>
                  <div className="sortwrap">
                    <select aria-label="Ordenar por" value={sortMode} onChange={e => setSortMode(e.target.value)}>
                      <option>Relevancia</option>
                      <option>Precio: Menor a Mayor</option>
                      <option>Precio: Mayor a Menor</option>
                    </select>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
                  </div>
                </div>
                <div className="viewtoggle">
                  <button className={viewMode === 'grid' ? 'is-active' : ''} onClick={() => setViewMode('grid')} aria-label="Vista cuadrícula">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg>
                  </button>
                  <button className={viewMode === 'list' ? 'is-active' : ''} onClick={() => setViewMode('list')} aria-label="Vista lista">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/></svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Active Chips */}
            {totalActiveFilters > 0 && (
              <div className="chips">
                {[...activeCats, ...activeBrands, ...activePrices].map(chip => (
                  <button key={chip} type="button" className="chip" onClick={() => {
                    if (activeCats.includes(chip)) toggleFilter(setActiveCats, chip);
                    else if (activeBrands.includes(chip)) toggleFilter(setActiveBrands, chip);
                    else if (activePrices.includes(chip)) toggleFilter(setActivePrices, chip);
                  }}>
                    {chip} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
                  </button>
                ))}
              </div>
            )}

            <div className={`pgrid ${viewMode === 'list' ? 'is-list' : ''}`}>
              {displayedProducts.length > 0 ? (
                displayedProducts.map(p => (
                  <article key={p.id} className="pcard">
                    <div className="pcard__media">
                      <div className="pcard__badges">
                        {p.offer ? <span className="badge badge--dark">Oferta</span> : <span />}
                        {p.stock && <span className="badge badge--ok"><i></i>Stock</span>}
                      </div>
                      <img src={p.img} alt={p.name} loading="lazy" className="w-full h-full object-contain mix-blend-multiply p-4" />
                    </div>
                    <div className="pcard__body">
                      <p className="pcard__cat">{p.cat}</p>
                      <h4 className="pcard__name">{p.name}</h4>
                      <div className="pcard__foot">
                        <span className="pcard__brand">{p.brand}</span>
                        <span className="pcard__price num">${p.price.toFixed(2)}</span>
                      </div>
                    </div>
                  </article>
                ))
              ) : (
                <div className="pempty">
                  <p>No encontramos repuestos con esos filtros.</p>
                  <button type="button" onClick={clearAll}>Limpiar filtros</button>
                </div>
              )}
            </div>

            {filteredProducts.length > shownMax && (
              <div className="loadmore">
                <button onClick={() => setShownMax(prev => prev + 6)}>Cargar más productos</button>
              </div>
            )}
          </div>
        </div>
        
        {/* Mobile backdrop */}
        <div className={`filters__backdrop ${isMobileDrawerOpen ? 'is-open' : ''}`} onClick={() => setIsMobileDrawerOpen(false)}></div>
      </div>
    </section>
  );
}
