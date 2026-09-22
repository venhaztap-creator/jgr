"use client";

import { useState, useRef, useEffect } from 'react';

// Simulated database response for the predictive engine
const getMockResults = (query: string) => {
  const q = query.toLowerCase();
  const results = [];
  
  if ("15208-65f0a".includes(q) || "filtro".includes(q) || "nissan".includes(q)) {
    results.push({ type: 'OEM', label: '15208-65F0A', desc: 'Filtro de Aceite Original Nissan', badgeColor: 'bg-blue-100 text-blue-700' });
  }
  if ("bosch".includes(q) || "0986452041".includes(q) || "filtro".includes(q)) {
    results.push({ type: 'MPN', label: 'BOSCH-0986452041', desc: 'Filtro de Aceite Premium', badgeColor: 'bg-purple-100 text-purple-700' });
  }
  if ("pastillas".includes(q) || "freno".includes(q) || "ceramica".includes(q)) {
    results.push({ type: 'PIEZA', label: 'Pastillas de Freno Cerámicas', desc: 'Sistema de Frenos Eje Delantero', badgeColor: 'bg-green-100 text-green-700' });
  }
  if ("toyota".includes(q) || "hilux".includes(q) || "2021".includes(q)) {
    results.push({ type: 'VEHÍCULO', label: 'Toyota Hilux 2021', desc: '2.4L Diesel 4x4', badgeColor: 'bg-orange-100 text-orange-700' });
  }
  if ("motul".includes(q) || "aceite".includes(q) || "7100".includes(q)) {
    results.push({ type: 'PIEZA', label: 'Aceite Motul 7100 4T', desc: '10W-40 Sintético Moto', badgeColor: 'bg-green-100 text-green-700' });
  }

  // Generic fallback to show predictive nature
  if (results.length === 0 && q.length > 1) {
    results.push({ type: 'OEM', label: `OEM-${query.toUpperCase()}`, desc: 'Autocompletado de Código Original', badgeColor: 'bg-blue-100 text-blue-700' });
    results.push({ type: 'VEHÍCULO', label: `Repuestos para "${query}"`, desc: 'Búsqueda por modelo de vehículo', badgeColor: 'bg-orange-100 text-orange-700' });
    results.push({ type: 'PIEZA', label: `Buscar "${query}"`, desc: 'Catálogo General', badgeColor: 'bg-gray-100 text-gray-700' });
  }

  return results;
};

export default function PredictiveSearch({ isMobile = false }: { isMobile?: boolean }) {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsFocused(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [wrapperRef]);

  const results = getMockResults(query);
  const showResults = isFocused && query.length > 0;

  return (
    <div className={`relative ${isMobile ? 'w-full' : 'w-full flex-1'}`} ref={wrapperRef} style={{ overflow: 'visible' }}>
      
      <div className="search">
        {!isMobile && (
          <select aria-label="Categoría de búsqueda">
            <option>Todo el catálogo</option>
            <option>OEM / MPN</option>
            <option>Vehículos</option>
          </select>
        )}
        
        <input 
          type="search" 
          placeholder={isMobile ? "OEM, MPN o vehículo..." : "Busca OEM, MPN, pieza o vehículo..."}
          aria-label="Buscar"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
        />
        
        <button className="search__go" aria-label="Buscar">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          <span>Buscar</span>
        </button>
      </div>

      {/* Autocomplete Dropdown */}
      {showResults && (
        <div className="absolute top-[calc(100%+8px)] left-0 right-0 bg-white rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.2)] border border-gray-100 overflow-hidden z-[100] flex flex-col">
          <div className="bg-gray-50 px-4 py-2 border-b border-gray-100 flex justify-between items-center text-xs text-gray-500 font-semibold uppercase tracking-wider">
            <span>Resultados Predictivos</span>
            <span className="text-[10px] bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full font-bold">Global AI</span>
          </div>
          <ul className="max-h-[350px] overflow-y-auto">
            {results.map((result, i) => (
              <li key={i} className="hover:bg-blue-50 transition-colors cursor-pointer border-b border-gray-50 last:border-0">
                <a href="#buscar" className="flex items-center px-4 py-3 gap-3" onClick={() => setIsFocused(false)}>
                  <div className="flex-shrink-0 w-10 h-10 bg-white rounded-lg border border-gray-100 shadow-sm flex items-center justify-center text-gray-400">
                    {result.type === 'VEHÍCULO' ? (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>
                    ) : result.type === 'OEM' || result.type === 'MPN' ? (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
                    ) : (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>
                    )}
                  </div>
                  <div className="flex-grow min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="font-bold text-gray-900 truncate">{result.label}</span>
                      <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-sm whitespace-nowrap ${result.badgeColor}`}>
                        {result.type}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 truncate">{result.desc}</p>
                  </div>
                  <div className="flex-shrink-0 text-gray-300">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
