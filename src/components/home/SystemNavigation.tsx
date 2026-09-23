"use client";

import Link from 'next/link';

const AUTO_SYSTEMS = [
  { id: 'motor', name: 'Motor y Distribución', img: '/assets/jgr/hero-1.jpg' },
  { id: 'frenos', name: 'Frenos y Discos', img: '/assets/jgr/hero-2.jpg' },
  { id: 'suspension', name: 'Tren Delantero y Suspensión', img: '/assets/jgr/prod-shocks.jpg' },
  { id: 'electrico', name: 'Sistema Eléctrico e Inyección', img: '/assets/jgr/prod-battery-ai.jpg' },
  { id: 'transmision', name: 'Embrague y Transmisión', img: '/assets/jgr/hero-3.jpg' },
  { id: 'enfriamiento', name: 'Enfriamiento y Climatización', img: '/assets/jgr/hero-1.jpg' },
  { id: 'lubricantes', name: 'Fluidos y Químicos', img: '/assets/jgr/prod-oil-ai.jpg' },
  { id: 'carroceria', name: 'Carrocería e Iluminación', img: '/assets/jgr/hero-2.jpg' },
];

/* ─── INLINE SVG LOGOS (vector = siempre nítidos, sin API externa) ─── */

// OEM brand logos – clean typographic marks
const BoschLogo = () => <img src="https://upload.wikimedia.org/wikipedia/commons/1/16/Bosch-logo.svg" className="w-24 h-auto object-contain" alt="Bosch" />;
const DensoLogo = () => <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/Denso_logo.svg" className="w-20 h-auto object-contain" alt="Denso" />;
const GatesLogo = () => (
  <svg viewBox="0 0 72 24" className="w-16 h-auto"><text x="36" y="20" textAnchor="middle" fontFamily="serif" fontSize="22" fontWeight="700" fontStyle="italic" fill="#E20015">Gates</text></svg>
);
const ACDelcoLogo = () => <img src="https://upload.wikimedia.org/wikipedia/commons/5/58/ACDelco_logo.svg" className="w-24 h-auto object-contain" alt="ACDelco" />;
const ValeoLogo = () => <img src="https://upload.wikimedia.org/wikipedia/commons/2/2b/Valeo_Logo.svg" className="w-20 h-auto object-contain" alt="Valeo" />;
const MoogLogo = () => (
  <svg viewBox="0 0 72 28" className="w-16 h-auto"><text x="36" y="22" textAnchor="middle" fontFamily="sans-serif" fontSize="24" fontWeight="900" fill="#F7941D">MOOG</text></svg>
);
const SKFLogo = () => <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/SKF_logo.svg" className="w-20 h-auto object-contain" alt="SKF" />;
const MonroeLogo = () => (
  <svg viewBox="0 0 100 28" className="w-24 h-auto"><text x="50" y="22" textAnchor="middle" fontFamily="sans-serif" fontSize="18" fontWeight="900" fill="#FFCC00" stroke="#000" strokeWidth="0.5">MONROE</text></svg>
);




const OEM_BRANDS = [
  { name: 'Bosch', Logo: BoschLogo },
  { name: 'Denso', Logo: DensoLogo },
  { name: 'Gates', Logo: GatesLogo },
  { name: 'ACDelco', Logo: ACDelcoLogo },
  { name: 'Valeo', Logo: ValeoLogo },
  { name: 'Moog', Logo: MoogLogo },
  { name: 'SKF', Logo: SKFLogo },
  { name: 'Monroe', Logo: MonroeLogo },
];

export default function SystemNavigation() {
  return (
    <section className="py-24 bg-gray-50 border-t border-gray-200 overflow-hidden" id="navigation">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* 1. NAVEGACIÓN VISUAL POR SISTEMAS */}
        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 mb-4">Navegación por Sistemas</h2>
            <p className="text-lg text-gray-500 font-medium">Encuentra exactamente lo que buscas filtrando por el sistema de tu vehículo.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {AUTO_SYSTEMS.map(sys => (
              <Link 
                key={sys.id} 
                href={`/catalog?category=${sys.id}`}
                className="group relative h-48 md:h-64 rounded-2xl overflow-hidden bg-gray-900 shadow-sm hover:shadow-2xl transition-all duration-300"
              >
                <div className="absolute inset-0">
                  <img 
                    src={sys.img} 
                    alt={sys.name} 
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                </div>
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h3 className="text-white font-bold text-lg md:text-xl leading-tight group-hover:text-orange-400 transition-colors">{sys.name}</h3>
                  <div className="flex items-center text-orange-500 text-sm font-bold mt-2 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <span>Ver repuestos</span>
                    <svg className="ml-1 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="w-full">
          
          {/* 2. MARCAS DE AUTOPARTES REPRESENTADAS (CARRUSEL) */}
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10">
            <div className="flex items-center gap-4 mb-6">
              {/* Premium Certified badge */}
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 text-white flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  {/* Shield outer */}
                  <path d="M12 2L4 6v5c0 5.55 3.84 10.74 8 12 4.16-1.26 8-6.45 8-12V6L12 2z" stroke="white" strokeWidth="1.8" fill="rgba(255,255,255,0.1)"/>
                  {/* Checkmark */}
                  <path d="M8.5 12.5l2.5 2.5 5-5" stroke="white" strokeWidth="2.2"/>
                </svg>
              </div>
              <div className="text-left">
                <h3 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight">Autopartes oficiales</h3>
                <p className="text-sm text-gray-400 font-medium mt-0.5">Distribuidor autorizado OEM</p>
              </div>
            </div>
            
            <p className="text-gray-500 font-medium">Distribuimos las marcas de mayor prestigio y calidad de equipo original (OEM) a nivel mundial, garantizando el respaldo de fábrica.</p>
          </div>

          <style>{`
            @keyframes scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-scroll {
              animation: scroll 25s linear infinite;
            }
            .animate-scroll:hover {
              animation-play-state: paused;
            }
          `}</style>
          
          <div className="relative flex overflow-x-hidden group py-4">
            <div className="flex animate-scroll whitespace-nowrap gap-6 w-max">
              {[...OEM_BRANDS, ...OEM_BRANDS].map((brand, idx) => (
                <Link 
                  href={`/marcas/${brand.name}`} 
                  key={idx} 
                  className="w-48 h-24 bg-white border border-gray-200 hover:border-orange-500 hover:shadow-[0_10px_20px_rgba(249,115,22,0.15)] transition-all rounded-2xl flex flex-col items-center justify-center cursor-pointer transform hover:-translate-y-1 flex-shrink-0"
                >
                  <div className="flex items-center justify-center h-10 transition-all duration-300">
                    <brand.Logo />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

