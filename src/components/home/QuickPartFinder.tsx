"use client";

import { useState, useRef } from 'react';

const MARCAS = [
  'Valvoline',
  'Michelin',
  'VoltMax',
  'Monroe',
  'Bosch',
  'Castrol'
];

const CATEGORIAS = [
  'Lubricantes y Fluidos',
  'Llantas y Neumáticos',
  'Sistema Eléctrico',
  'Suspensión y Dirección',
  'Frenos'
];

const SUBCATEGORIAS: Record<string, string[]> = {
  'Lubricantes y Fluidos': ['Aceite de Motor', 'Refrigerante', 'Líquido de Frenos', 'Aceite de Transmisión'],
  'Llantas y Neumáticos': ['All-Terrain', 'Mud-Terrain', 'Carretera', 'Deportivas'],
  'Sistema Eléctrico': ['Baterías', 'Alternadores', 'Bujías', 'Faros y Focos'],
  'Suspensión y Dirección': ['Amortiguadores', 'Bujes', 'Terminales de Dirección', 'Bandejas'],
  'Frenos': ['Pastillas de Freno', 'Discos de Freno', 'Tambores', 'Sensores ABS']
};

export default function QuickPartFinder() {
  const [marca, setMarca] = useState('');
  const [categoria, setCategoria] = useState('');
  const [subcategoria, setSubcategoria] = useState('');
  
  const [invalidFields, setInvalidFields] = useState({ marca: false, categoria: false, subcategoria: false });
  const [isSearching, setIsSearching] = useState(false);

  const marcaRef = useRef<HTMLSelectElement>(null);
  const categoriaRef = useRef<HTMLSelectElement>(null);
  const subcategoriaRef = useRef<HTMLSelectElement>(null);

  const handleMarcaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setMarca(e.target.value);
    setInvalidFields({ marca: false, categoria: false, subcategoria: false });
  };

  const handleCategoriaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategoria(e.target.value);
    setSubcategoria('');
    setInvalidFields({ marca: false, categoria: false, subcategoria: false });
  };

  const handleSubcategoriaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSubcategoria(e.target.value);
    setInvalidFields({ marca: false, categoria: false, subcategoria: false });
  };

  const handleSearch = () => {
    const isMarcaInvalid = !marca;
    const isCategoriaInvalid = !categoria;
    const isSubcategoriaInvalid = !subcategoria;

    if (isMarcaInvalid || isCategoriaInvalid || isSubcategoriaInvalid) {
      setInvalidFields({
        marca: isMarcaInvalid,
        categoria: isCategoriaInvalid,
        subcategoria: isSubcategoriaInvalid,
      });

      if (isMarcaInvalid) marcaRef.current?.focus();
      else if (isCategoriaInvalid) categoriaRef.current?.focus();
      else if (isSubcategoriaInvalid) subcategoriaRef.current?.focus();

      setTimeout(() => {
        setInvalidFields({ marca: false, categoria: false, subcategoria: false });
      }, 1200);
      return;
    }

    setIsSearching(true);
    setTimeout(() => {
      setIsSearching(false);
      const catalog = document.getElementById('catalog');
      if (catalog) {
        catalog.scrollIntoView({ behavior: 'smooth' });
      }
    }, 1000);
  };

  const availableSubcategorias = categoria ? SUBCATEGORIAS[categoria] : [];

  return (
    <section className="finder relative overflow-hidden" id="buscar" data-od-id="vehicle-finder">
      {/* Real tire background detail */}
      <div 
        className="absolute right-0 top-0 bottom-0 w-2/3 md:w-1/2 pointer-events-none opacity-20 mix-blend-multiply" 
        style={{
          backgroundImage: `url("/assets/jgr/prod-tires-ai.jpg")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          maskImage: 'linear-gradient(to right, transparent, black 60%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 60%)'
        }}
      ></div>
      <div className="container relative z-10">
        <div className="finder__row">
          <div className="finder__lead" style={{ alignSelf: 'flex-start' }}>
            <div className="flex-shrink-0 flex items-center gap-3 bg-gray-900 rounded-[2rem] px-5 py-3.5 shadow-xl border border-white/10 mr-4 mt-1">
              {/* Box/Part Icon */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                <line x1="12" y1="22.08" x2="12" y2="12"/>
              </svg>
              {/* Divider */}
              <div className="w-px h-6 bg-gray-700"></div>
              {/* Search Icon */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.3-4.3"/>
              </svg>
            </div>
            <div>
              <span className="finder__eyebrow">Búsqueda rápida</span>
              <h2>Encuentra tu repuesto</h2>
              <p>Busca directamente por marca, categoría y subcategoría en nuestro catálogo.</p>
            </div>
          </div>
          
          <div className="flex-1 flex flex-col gap-5 w-full">
            {/* Manual Selection Form */}
            <div className="finder__form">
              <div className="finder__field">
                <select 
                  ref={marcaRef}
                  className={`${!marca ? 'is-empty' : ''} ${invalidFields.marca ? 'is-invalid' : ''}`} 
                  aria-label="Marca"
                  value={marca}
                  onChange={handleMarcaChange}
                >
                  <option value="">Marca</option>
                  {MARCAS.map(m => (
                    <option key={m} value={m}>{m}</option>
                  ))}
                </select>
              </div>
              <div className="finder__field">
                <select 
                  ref={categoriaRef}
                  className={`${!categoria ? 'is-empty' : ''} ${invalidFields.categoria ? 'is-invalid' : ''}`} 
                  aria-label="Categoría" 
                  value={categoria}
                  onChange={handleCategoriaChange}
                >
                  <option value="">Categoría</option>
                  {CATEGORIAS.map(c => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
              <div className="finder__field">
                <select 
                  ref={subcategoriaRef}
                  className={`${!subcategoria ? 'is-empty' : ''} ${invalidFields.subcategoria ? 'is-invalid' : ''}`} 
                  aria-label="Subcategoría" 
                  disabled={!categoria}
                  value={subcategoria}
                  onChange={handleSubcategoriaChange}
                >
                  <option value="">Subcategoría</option>
                  {availableSubcategorias.map(sc => (
                    <option key={sc} value={sc}>{sc}</option>
                  ))}
                </select>
              </div>
              <button 
                className={`finder__go ${invalidFields.marca || invalidFields.categoria || invalidFields.subcategoria ? 'is-invalid' : ''} ${isSearching ? 'is-done' : ''}`} 
                onClick={handleSearch}
              >
                <span className="finder__go-label">{isSearching ? 'Buscando...' : 'Buscar'}</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="11" cy="11" r="8"/>
                  <path d="m21 21-4.3-4.3"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

