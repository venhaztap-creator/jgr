"use client";

import { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
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
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-2">Elige tu combo o arma tu pedido.</h2>
          <p className="catalog__sub mb-6">Más de 2,500 repuestos disponibles en inventario.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Combo 1: Aceite + Filtro */}
            <Link href="/product/combo-afinacion" className="group bg-orange-50 border border-orange-200 rounded-2xl p-4 flex items-center gap-4 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-24 h-20 bg-white rounded-xl border border-orange-100 flex items-center justify-center shrink-0 relative overflow-visible">
                <span className="absolute -top-3 -right-2 bg-red-500 text-white text-[10px] font-black px-2 py-0.5 rounded-full z-20 shadow-md transform rotate-6">-15%</span>
                {/* Overlapping images */}
                <div className="absolute left-2 w-12 h-12 z-10 transition-transform group-hover:scale-110 group-hover:-translate-x-1">
                  <img src="/assets/jgr/prod-oil-ai.jpg" alt="Aceite" className="w-full h-full object-contain mix-blend-multiply drop-shadow-md" />
                </div>
                <div className="absolute right-2 w-12 h-12 z-0 transition-transform group-hover:scale-110 group-hover:translate-x-1">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Car_engine_air_filter.jpg/320px-Car_engine_air_filter.jpg" alt="Filtro" className="w-full h-full object-contain mix-blend-multiply opacity-90 drop-shadow-sm" />
                </div>
              </div>
              <div>
                <p className="text-[10px] font-black text-orange-600 mb-1 tracking-wider">COMBO AFINACIÓN</p>
                <h4 className="text-sm font-bold text-gray-900 leading-tight mb-1 group-hover:text-orange-600 transition-colors">Aceite Sintético 5W-30 + Filtro de Aire</h4>
                <p className="text-lg font-black text-gray-900">$29.99 <span className="text-xs text-gray-400 line-through font-normal">$36.00</span></p>
              </div>
            </Link>
            
            {/* Combo 2: Llantas + Frenos (or Llantas + Válvulas) */}
            <Link href="/product/combo-seguridad" className="group bg-blue-50 border border-blue-200 rounded-2xl p-4 flex items-center gap-4 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-24 h-20 bg-white rounded-xl border border-blue-100 flex items-center justify-center shrink-0 relative overflow-visible">
                <span className="absolute -top-3 -right-2 bg-blue-600 text-white text-[10px] font-black px-2 py-0.5 rounded-full z-20 shadow-md transform -rotate-6">OFERTA</span>
                <div className="absolute left-2 w-12 h-12 z-10 transition-transform group-hover:scale-110 group-hover:-translate-x-1">
                  <img src="/assets/jgr/prod-tires-ai.jpg" alt="Llanta" className="w-full h-full object-contain mix-blend-multiply drop-shadow-md" />
                </div>
                <div className="absolute right-3 w-10 h-10 z-0 transition-transform group-hover:scale-110 group-hover:translate-x-1">
                  {/* Small brake pad image or just a generic shock absorber */}
                  <img src="/assets/jgr/prod-shocks.jpg" alt="Amortiguador" className="w-full h-full object-contain mix-blend-multiply opacity-90 drop-shadow-sm" />
                </div>
              </div>
              <div>
                <p className="text-[10px] font-black text-blue-600 mb-1 tracking-wider">COMBO SEGURIDAD</p>
                <h4 className="text-sm font-bold text-gray-900 leading-tight mb-1 group-hover:text-blue-600 transition-colors">2x Llantas All-Terrain + Amortiguadores</h4>
                <p className="text-lg font-black text-gray-900">$410.00 <span className="text-xs text-gray-400 line-through font-normal">$480.00</span></p>
              </div>
            </Link>
          </div>
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
                  <Link key={p.id} href={`/product/${p.id}`} className="pcard group cursor-pointer hover:shadow-lg transition-shadow">
                    <div className="pcard__media">
                      <div className="pcard__badges">
                        {p.offer ? <span className="badge badge--dark">Oferta</span> : <span />}
                        {p.stock && <span className="badge badge--ok"><i></i>Stock</span>}
                      </div>
                      <img src={p.img} alt={p.name} loading="lazy" className="w-full h-full object-contain mix-blend-multiply p-4 group-hover:scale-105 transition-transform" />
                    </div>
                    <div className="pcard__body">
                      <p className="pcard__cat">{p.cat}</p>
                      <h4 className="pcard__name group-hover:text-orange-600 transition-colors">{p.name}</h4>
                      <div className="pcard__foot">
                        <span className="pcard__brand">{p.brand}</span>
                        <span className="pcard__price num">${p.price.toFixed(2)}</span>
                      </div>
                    </div>
                  </Link>
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
