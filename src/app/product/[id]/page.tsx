"use client";

import { useState, use } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { MOCK_PRODUCTS } from '@/data/products';
import Link from 'next/link';

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const p = MOCK_PRODUCTS.find(p => p.id === resolvedParams.id) || MOCK_PRODUCTS[0];

  const [activeImage, setActiveImage] = useState(0);
  const [activeTab, setActiveTab] = useState('especificaciones');
  
  // Compatibility Checker State
  const [checkMake, setCheckMake] = useState('');
  const [checkModel, setCheckModel] = useState('');
  const [checkYear, setCheckYear] = useState('');
  const [compatibilityResult, setCompatibilityResult] = useState<'none' | 'success' | 'error'>('none');

  const handleCheckCompatibility = () => {
    if (!checkMake || !checkModel || !checkYear) return;
    
    const yearInt = parseInt(checkYear);
    const isCompatible = p.applications.some(app => {
      const matchMake = app.make.toLowerCase() === checkMake.toLowerCase() || app.make.toLowerCase() === 'universal';
      
      const yearsMatch = app.years.match(/(\d+)\s*-\s*(\d+)/);
      let matchYear = false;
      if (yearsMatch) {
        matchYear = yearInt >= parseInt(yearsMatch[1]) && yearInt <= parseInt(yearsMatch[2]);
      } else {
        matchYear = true;
      }

      return matchMake && matchYear;
    });
    
    setCompatibilityResult(isCompatible ? 'success' : 'error');
  };

  const allMakes = Array.from(new Set(MOCK_PRODUCTS.flatMap(prod => prod.applications.map(app => app.make))));

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert(`Copiado: ${text}`);
  };

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar />

      {/* Breadcrumbs */}
      <div className="bg-white border-b border-gray-200 pt-40 pb-4 px-4">
        <div className="container mx-auto max-w-7xl text-sm text-gray-500 font-medium flex items-center gap-2">
          <Link href="/" className="hover:text-orange-500">Inicio</Link>
          <span>/</span>
          <Link href="/catalog" className="hover:text-orange-500">{p.type}</Link>
          <span>/</span>
          <span className="text-gray-900 truncate">{p.shortName || p.title}</span>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl py-8">
        
        {/* TOP SECTION: Gallery & Primary Info */}
        <div className="flex flex-col lg:flex-row gap-10 bg-white p-6 md:p-10 rounded-2xl shadow-sm border border-gray-100 mb-10">
          
          {/* Left: Gallery */}
          <div className="lg:w-5/12">
            <div className="aspect-square bg-white rounded-2xl border border-gray-200 overflow-hidden mb-4 relative flex items-center justify-center">
              <img src={p.images[activeImage]} alt={p.title} className="w-full h-full object-contain p-4" />
              {/* Zoom hint */}
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur text-gray-500 p-2 rounded-lg shadow-sm">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-3">
              {p.images.map((img, idx) => (
                <button 
                  key={idx} 
                  onClick={() => setActiveImage(idx)}
                  className={`aspect-square rounded-xl border-2 overflow-hidden bg-white ${activeImage === idx ? 'border-orange-500' : 'border-gray-200 hover:border-gray-300'}`}
                >
                  <img src={img} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Technical Info & Buy Box */}
          <div className="lg:w-7/12 flex flex-col">
            
            {/* Title Block */}
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-gray-900 text-white text-xs font-bold px-3 py-1 rounded-md uppercase tracking-wider">{p.brand}</span>
                <span className="bg-blue-50 text-blue-700 border border-blue-200 text-xs font-bold px-3 py-1 rounded-md">{p.condition}</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight mb-2">{p.title}</h1>
              <p className="text-gray-500 font-medium flex items-center gap-2">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                {p.position}
              </p>
            </div>

            {/* Quick Specs / MPN */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-8 flex flex-wrap gap-x-8 gap-y-4">
              <div>
                <p className="text-xs text-gray-500 font-bold uppercase mb-1">Número de Parte (MPN)</p>
                <div className="flex items-center gap-2">
                  <span className="font-mono font-black text-lg text-gray-900">{p.mpn}</span>
                  <button onClick={() => copyToClipboard(p.mpn)} className="text-gray-400 hover:text-orange-500" title="Copiar">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                  </button>
                </div>
              </div>
              <div>
                <p className="text-xs text-gray-500 font-bold uppercase mb-1">OEM Reemplazo Directo</p>
                <div className="flex items-center gap-2 flex-wrap">
                  {p.oem.slice(0,2).map(code => (
                    <span key={code} className="font-mono text-sm bg-white border border-gray-200 px-2 py-0.5 rounded text-gray-700">{code}</span>
                  ))}
                  <span className="text-xs text-orange-500 font-bold cursor-pointer" onClick={() => setActiveTab('oem')}>+ {p.oem.length - 2} más</span>
                </div>
              </div>
            </div>

            {/* Price & B2B Volume */}
            <div className="flex flex-col xl:flex-row gap-6 items-start mb-8">
              <div className="flex-1">
                <p className="text-sm text-gray-500 font-bold mb-1">Precio Unitario B2C</p>
                <div className="flex items-end gap-2 mb-1">
                  <span className="text-4xl font-black text-gray-900">${p.pricing.retail.toFixed(2)}</span>
                </div>
                <p className="text-xs text-gray-400">{p.pricing.taxInfo}</p>
              </div>
              
              <div className="flex-1 bg-orange-50 border border-orange-200 rounded-xl p-4 w-full">
                <p className="text-xs font-bold text-orange-800 uppercase mb-2 flex items-center gap-1">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
                  Precios Mayorista B2B
                </p>
                <table className="w-full text-sm">
                  <tbody>
                    {p.pricing.b2bTiers.map((tier, idx) => (
                      <tr key={idx} className="border-b border-orange-200/50 last:border-0">
                        <td className="py-1 text-orange-900 font-medium">{tier.min}{tier.max === 999 ? '+' : ` - ${tier.max}`} unds.</td>
                        <td className="py-1 text-right font-black text-orange-700">${tier.price.toFixed(2)}</td>
                        <td className="py-1 text-right text-xs text-orange-600 font-bold">-{tier.discount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Dynamic Compatibility Checker */}
            <div className="bg-gray-900 rounded-xl p-5 mb-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2 relative z-10">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-orange-500"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
                Verificador Dinámico de Compatibilidad
              </h3>
              <div className="flex flex-col sm:flex-row gap-3 relative z-10">
                <select className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 outline-none focus:border-orange-500" value={checkMake} onChange={e => setCheckMake(e.target.value)}>
                  <option value="">Marca</option>
                  {allMakes.map(make => (
                    <option key={make} value={make.toLowerCase()}>{make}</option>
                  ))}
                </select>
                <select className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 outline-none focus:border-orange-500" value={checkModel} onChange={e => setCheckModel(e.target.value)}>
                  <option value="">Modelo</option>
                  <option value="cruze">Cruze</option>
                  <option value="corolla">Corolla</option>
                  <option value="a4">A4 / S4</option>
                  <option value="tiguan">Tiguan</option>
                  <option value="grand cherokee">Grand Cherokee</option>
                  <option value="multimarcas">Multimarcas</option>
                </select>
                <select className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 outline-none focus:border-orange-500" value={checkYear} onChange={e => setCheckYear(e.target.value)}>
                  <option value="">Año</option>
                  {[2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011].map(y => (
                    <option key={y} value={y}>{y}</option>
                  ))}
                </select>
                <button onClick={handleCheckCompatibility} className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-lg font-bold transition-colors">Verificar</button>
              </div>

              {compatibilityResult === 'success' && (
                <div className="mt-4 bg-green-500/20 border border-green-500 text-green-400 p-3 rounded-lg flex items-center gap-3 text-sm font-medium animate-in fade-in">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  Esta pieza es 100% compatible con tu vehículo seleccionado.
                </div>
              )}
              {compatibilityResult === 'error' && (
                <div className="mt-4 bg-red-500/20 border border-red-500 text-red-400 p-3 rounded-lg flex items-center gap-3 text-sm font-medium animate-in fade-in">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
                  No aplica para tu vehículo. Revisa las opciones de la marca.
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap sm:flex-nowrap gap-3 sm:gap-4 mt-auto pt-4">
              <div className="flex border-2 border-gray-200 rounded-xl overflow-hidden bg-white shrink-0 w-full sm:w-auto">
                <button className="flex-1 sm:w-12 h-14 hover:bg-gray-100 active:bg-gray-200 flex items-center justify-center font-bold text-lg text-gray-600 transition-colors">−</button>
                <input type="text" className="w-16 sm:w-14 h-14 text-center font-bold text-lg border-x-2 border-gray-200 outline-none" value="1" readOnly />
                <button className="flex-1 sm:w-12 h-14 hover:bg-gray-100 active:bg-gray-200 flex items-center justify-center font-bold text-lg text-gray-600 transition-colors">+</button>
              </div>
              <button className="w-full sm:flex-1 h-14 bg-orange-500 text-white hover:bg-orange-600 active:bg-orange-700 font-bold text-lg rounded-xl flex items-center justify-center gap-3 shadow-lg shadow-orange-500/25 transition-all">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
                Agregar al Carrito
              </button>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION: Technical Anatomy (Tabs) */}
        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* Main Content Area (Tabs) */}
          <div className="lg:w-8/12">
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
              
              {/* Tab Nav */}
              <div className="flex overflow-x-auto border-b border-gray-200 hide-scrollbar bg-gray-50">
                <button onClick={() => setActiveTab('especificaciones')} className={`px-6 py-4 text-sm font-bold whitespace-nowrap transition-colors ${activeTab === 'especificaciones' ? 'bg-white text-orange-500 border-b-2 border-orange-500' : 'text-gray-500 hover:text-gray-900'}`}>Especificaciones Técnicas</button>
                <button onClick={() => setActiveTab('aplicaciones')} className={`px-6 py-4 text-sm font-bold whitespace-nowrap transition-colors ${activeTab === 'aplicaciones' ? 'bg-white text-orange-500 border-b-2 border-orange-500' : 'text-gray-500 hover:text-gray-900'}`}>Aplicaciones Vehiculares</button>
                <button onClick={() => setActiveTab('oem')} className={`px-6 py-4 text-sm font-bold whitespace-nowrap transition-colors ${activeTab === 'oem' ? 'bg-white text-orange-500 border-b-2 border-orange-500' : 'text-gray-500 hover:text-gray-900'}`}>Referencias OEM / Cross</button>
                <button onClick={() => setActiveTab('descargas')} className={`px-6 py-4 text-sm font-bold whitespace-nowrap transition-colors ${activeTab === 'descargas' ? 'bg-white text-orange-500 border-b-2 border-orange-500' : 'text-gray-500 hover:text-gray-900'}`}>Documentación</button>
              </div>

              {/* Tab Content */}
              <div className="p-6 md:p-8">
                
                {/* Especificaciones */}
                {activeTab === 'especificaciones' && (
                  <div className="animate-in fade-in">
                    <h3 className="text-xl font-black mb-6 text-gray-900">Anatomía Técnica y Cotas Dimensionales</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-0">
                      {Object.entries(p.specs).map(([key, value], idx) => (
                        <div key={key} className={`flex justify-between py-3 ${idx < Object.keys(p.specs).length - 2 ? 'border-b border-gray-100' : ''}`}>
                          <span className="text-gray-500 font-medium">{key}</span>
                          <span className="text-gray-900 font-bold text-right">{value}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-8 pt-8 border-t border-gray-200">
                      <h4 className="font-bold text-gray-900 mb-4">Diagrama de Montaje (Despiece Esquematico)</h4>
                      <img src={p.diagramUrl} alt="Diagrama" className="w-full h-64 object-cover rounded-xl border border-gray-200" />
                    </div>
                  </div>
                )}

                {/* Aplicaciones */}
                {activeTab === 'aplicaciones' && (
                  <div className="animate-in fade-in">
                    <h3 className="text-xl font-black mb-6 text-gray-900">Matriz de Compatibilidad Vehicular</h3>
                    <div className="overflow-x-auto rounded-xl border border-gray-200">
                      <table className="w-full text-sm text-left">
                        <thead className="text-xs text-gray-500 uppercase bg-gray-50 border-b border-gray-200">
                          <tr>
                            <th className="px-4 py-3">Vehículo</th>
                            <th className="px-4 py-3">Años</th>
                            <th className="px-4 py-3">Motorización</th>
                            <th className="px-4 py-3">Trans. / Tracción</th>
                            <th className="px-4 py-3">Notas Técnicas</th>
                          </tr>
                        </thead>
                        <tbody>
                          {p.applications.map((app, idx) => (
                            <tr key={idx} className="border-b border-gray-100 last:border-0 hover:bg-gray-50">
                              <td className="px-4 py-3 font-bold text-gray-900">{app.make} {app.model}</td>
                              <td className="px-4 py-3 text-gray-600">{app.years}</td>
                              <td className="px-4 py-3 text-gray-600">{app.engine} ({app.valves})</td>
                              <td className="px-4 py-3 text-gray-600">{app.trans} | {app.drive}</td>
                              <td className="px-4 py-3 text-gray-500 italic">{app.notes}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {/* Referencias Cruzadas & OEM */}
                {activeTab === 'oem' && (
                  <div className="animate-in fade-in">
                    <div className="mb-10">
                      <h3 className="text-xl font-black mb-4 text-gray-900">Códigos OEM (Equipo Original)</h3>
                      <p className="text-sm text-gray-500 mb-4">Esta pieza es un reemplazo directo y homologado para los siguientes números de parte originales de ensamble matriz:</p>
                      <div className="flex flex-wrap gap-2">
                        {p.oem.map(code => (
                          <div key={code} className="bg-gray-50 border border-gray-200 px-4 py-2 rounded-lg font-mono font-bold text-gray-700 flex items-center gap-2">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-400"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
                            {code}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-black mb-4 text-gray-900">Equivalencias de Mercado (Cross-Reference)</h3>
                      <div className="space-y-3">
                        {p.crossReferences.map((ref, idx) => (
                          <Link key={idx} href={ref.link} className="flex items-center justify-between bg-white border border-gray-200 p-4 rounded-xl hover:border-orange-500 hover:shadow-md transition-all group">
                            <div className="flex items-center gap-4">
                              <span className="w-16 h-8 bg-gray-100 rounded flex items-center justify-center font-black text-xs text-gray-500">{ref.brand}</span>
                              <span className="font-mono font-bold text-gray-900">{ref.mpn}</span>
                            </div>
                            <span className="text-sm text-orange-500 font-bold opacity-0 group-hover:opacity-100 transition-opacity">Ver repuesto &rarr;</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Descargas */}
                {activeTab === 'descargas' && (
                  <div className="animate-in fade-in">
                    <h3 className="text-xl font-black mb-6 text-gray-900">Material Técnico y Descargas</h3>
                    <div className="grid grid-cols-1 gap-4">
                      {p.downloads.map((doc, idx) => (
                        <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 border border-gray-200 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-red-100 text-red-600 rounded-lg flex items-center justify-center">
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/></svg>
                            </div>
                            <div>
                              <p className="font-bold text-gray-900">{doc.title}</p>
                              <p className="text-xs text-gray-500">PDF Document • {doc.size}</p>
                            </div>
                          </div>
                          <button className="text-gray-400 hover:text-orange-500">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            </div>
          </div>

          {/* Sidebar Area (Stock & Cross-sell) */}
          <div className="lg:w-4/12 space-y-6">
            
            {/* Inventory Status */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <h3 className="font-black text-gray-900 mb-4 flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                Disponibilidad por Almacén
              </h3>
              <div className="space-y-4">
                {p.inventory.map((inv, idx) => (
                  <div key={idx} className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 font-medium">{inv.branch}</span>
                    <div className="flex flex-col items-end">
                      <span className={`text-xs font-bold px-2 py-1 rounded-md ${inv.status === 'Alto' ? 'bg-green-100 text-green-700' : inv.status === 'Medio' ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'}`}>
                        {inv.status}
                      </span>
                      {inv.stock > 0 && <span className="text-[10px] text-gray-400 mt-1">{inv.stock} uds. en sitio</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Cross Sell */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <h3 className="font-black text-gray-900 mb-4">JGR te recomienda</h3>
              <p className="text-xs text-gray-500 mb-4 leading-relaxed">Piezas complementarias obligatorias recomendadas por el fabricante para mantener la garantía.</p>
              
              <div className="space-y-4">
                {p.crossSell.map((item, idx) => (
                  <Link key={idx} href={`/product/${MOCK_PRODUCTS[(idx + 1) % MOCK_PRODUCTS.length].id}`} className="flex items-center gap-3 group">
                    <div className="w-16 h-16 bg-gray-50 rounded-lg overflow-hidden border border-gray-100 flex-shrink-0">
                      <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                    </div>
                    <div>
                      <p className="text-xs text-orange-500 font-bold mb-0.5">{item.brand}</p>
                      <h4 className="text-sm font-bold text-gray-900 leading-tight group-hover:text-blue-600 transition-colors line-clamp-2">{item.name}</h4>
                      <p className="text-sm font-black text-gray-900 mt-1">${item.price.toFixed(2)}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>

      <Footer />
    </main>
  );
}
