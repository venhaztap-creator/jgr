"use client";

import { useState, useRef } from 'react';

const MODELS: Record<string, string[]> = { 
  toyota: ['Hilux', 'Corolla', 'Tacoma', 'Land Cruiser', 'RAV4'], 
  chevrolet: ['Cruze', 'Silverado', 'Tahoe', 'Tracker', 'Equinox'], 
  ford: ['Ranger', 'F-150', 'Explorer', 'Escape', 'Maverick'], 
  hyundai: ['Tucson', 'Santa Fe', 'Accent', 'Elantra', 'Creta'] 
};

export default function QuickPartFinder() {
  const [make, setMake] = useState('');
  const [year, setYear] = useState('');
  const [model, setModel] = useState('');
  
  const [invalidFields, setInvalidFields] = useState({ make: false, year: false, model: false });
  const [isSaved, setIsSaved] = useState(false);

  // VIN State
  const [vin, setVin] = useState('');
  const [isDecoding, setIsDecoding] = useState(false);
  const [vinDecoded, setVinDecoded] = useState(false);

  const makeRef = useRef<HTMLSelectElement>(null);
  const yearRef = useRef<HTMLSelectElement>(null);
  const modelRef = useRef<HTMLSelectElement>(null);

  const handleMakeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setMake(e.target.value);
    setYear('');
    setModel('');
    setInvalidFields({ make: false, year: false, model: false });
    setVinDecoded(false);
  };

  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setYear(e.target.value);
    setModel('');
    setInvalidFields({ make: false, year: false, model: false });
  };

  const handleModelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setModel(e.target.value);
    setInvalidFields({ make: false, year: false, model: false });
  };

  const handleSave = () => {
    const isMakeInvalid = !make;
    const isYearInvalid = !year;
    const isModelInvalid = !model;

    if (isMakeInvalid || isYearInvalid || isModelInvalid) {
      setInvalidFields({
        make: isMakeInvalid,
        year: isYearInvalid,
        model: isModelInvalid,
      });

      if (isMakeInvalid) makeRef.current?.focus();
      else if (isYearInvalid) yearRef.current?.focus();
      else if (isModelInvalid) modelRef.current?.focus();

      setTimeout(() => {
        setInvalidFields({ make: false, year: false, model: false });
      }, 1200);
      return;
    }

    setIsSaved(true);
    setTimeout(() => {
      setIsSaved(false);
    }, 2200);
  };

  const handleDecodeVin = () => {
    if (vin.length < 10) return; // Basic validation
    setIsDecoding(true);
    // Simulate API decode delay
    setTimeout(() => {
      setIsDecoding(false);
      setVinDecoded(true);
      // Auto-fill form as a visual feedback of decode
      setMake('toyota');
      setYear('2024');
      setModel('hilux');
    }, 1500);
  };

  const availableModels = make ? MODELS[make] : [];

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
              {/* Car Icon */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/>
                <circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/>
              </svg>
              {/* Divider */}
              <div className="w-px h-6 bg-gray-700"></div>
              {/* SUV/Truck Icon */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11h1"/>
                <path d="M15 18H9"/>
                <path d="M19 18h2v-6l-1.4-5.4a2 2 0 0 0-1.9-1.6H14"/>
                <circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/>
              </svg>
            </div>
            <div>
              <span className="finder__eyebrow">Ajuste exacto</span>
              <h2>Todo empieza aquí</h2>
              <p>Agrega tu vehículo o usa el VIN para obtener repuestos 100% compatibles sin devoluciones.</p>
            </div>
          </div>
          
          <div className="flex-1 flex flex-col gap-5 w-full">
            {/* Manual Selection Form */}
            <div className="finder__form">
              <div className="finder__field">
                <select 
                  ref={makeRef}
                  className={`${!make ? 'is-empty' : ''} ${invalidFields.make ? 'is-invalid' : ''}`} 
                  aria-label="Marca"
                  value={make}
                  onChange={handleMakeChange}
                >
                  <option value="">Marca</option>
                  <option value="toyota">Toyota</option>
                  <option value="chevrolet">Chevrolet</option>
                  <option value="ford">Ford</option>
                  <option value="hyundai">Hyundai</option>
                </select>
              </div>
              <div className="finder__field">
                <select 
                  ref={yearRef}
                  className={`${!year ? 'is-empty' : ''} ${invalidFields.year ? 'is-invalid' : ''}`} 
                  aria-label="Año" 
                  disabled={!make}
                  value={year}
                  onChange={handleYearChange}
                >
                  <option value="">Año</option>
                  <option value="2024">2024</option>
                  <option value="2023">2023</option>
                  <option value="2022">2022</option>
                </select>
              </div>
              <div className="finder__field">
                <select 
                  ref={modelRef}
                  className={`${!model ? 'is-empty' : ''} ${invalidFields.model ? 'is-invalid' : ''}`} 
                  aria-label="Modelo" 
                  disabled={!year}
                  value={model}
                  onChange={handleModelChange}
                >
                  <option value="">Modelo</option>
                  {availableModels.map(m => (
                    <option key={m} value={m.toLowerCase()}>{m}</option>
                  ))}
                </select>
              </div>
              <button 
                className={`finder__go ${invalidFields.make || invalidFields.year || invalidFields.model ? 'is-invalid' : ''} ${isSaved ? 'is-done' : ''}`} 
                onClick={handleSave}
              >
                <span className="finder__go-label">{isSaved ? 'Vehículo guardado' : 'Seleccionar'}</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </button>
            </div>

            {/* Separator */}
            <div className="flex items-center gap-4 opacity-50 px-2 my-2">
              <div className="h-px bg-current flex-1"></div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">O busca por chasis</span>
              <div className="h-px bg-current flex-1"></div>
            </div>

            {/* Simple VIN Decoding Field */}
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <input 
                  type="text" 
                  className="w-full h-12 px-4 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:border-black focus:ring-1 focus:ring-black outline-none transition-colors uppercase text-sm"
                  placeholder="Tu VIN (17 caracteres)"
                  value={vin}
                  onChange={(e) => setVin(e.target.value.toUpperCase())}
                  maxLength={17}
                />
                <span className={`absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono ${vin.length === 17 ? 'text-green-600 font-bold' : 'text-gray-400'}`}>
                  {vin.length}/17
                </span>
              </div>
              <button 
                className={`h-12 px-6 font-bold text-sm rounded-lg transition-all flex items-center justify-center gap-2 whitespace-nowrap ${
                  vin.length === 17 
                    ? 'bg-black hover:bg-gray-900 text-white border-2 border-black shadow-lg transform hover:-translate-y-0.5 cursor-pointer' 
                    : 'bg-white/80 border border-black/20 text-gray-500 cursor-not-allowed opacity-80'
                }`}
                disabled={vin.length < 17 || isDecoding}
                onClick={handleDecodeVin}
              >
                {isDecoding ? (
                  <>
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                    Buscando...
                  </>
                ) : (
                  <>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21 16-4 4-4-4"/><path d="M17 20V4"/><path d="m3 8 4-4 4 4"/><path d="M7 4v16"/></svg>
                    Decodificar VIN
                  </>
                )}
              </button>
            </div>

            {/* Success Message for VIN */}
            {vinDecoded && (
              <div className="bg-green-50 text-green-700 border border-green-200 px-4 py-3 rounded-lg flex items-start gap-3 text-sm animate-in fade-in slide-in-from-top-1">
                <svg className="flex-shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                <span>¡Vehículo decodificado exitosamente! Tus búsquedas ahora estarán filtradas por compatibilidad exacta.</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
