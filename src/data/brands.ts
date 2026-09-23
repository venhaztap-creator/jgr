export const BRAND_DATA: Record<string, any> = {
  bosch: {
    name: 'Bosch',
    slogan: 'Inventado para la vida',
    description: 'Líder mundial en tecnología automotriz. Desde sistemas de inyección de combustible hasta frenos y baterías con la máxima tecnología alemana.',
    heroImage: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2000&auto=format&fit=crop',
    categories: ['Inyección', 'Frenos', 'Eléctrico', 'Bujías'],
    banners: [
      {
        tag: 'Tecnología Alemana',
        title: 'Bujías Iridium',
        desc: 'Mayor potencia y ahorro de combustible con la serie Double Iridium.',
        bg: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=1000&auto=format&fit=crop',
        color: 'blue'
      },
      {
        tag: 'Seguridad',
        title: 'Frenos QuietCast',
        desc: 'Pastillas de freno con formulación libre de cobre para un frenado silencioso.',
        bg: 'https://images.unsplash.com/photo-1493238792000-8113da705763?q=80&w=1000&auto=format&fit=crop',
        color: 'red'
      }
    ]
  },
  denso: {
    name: 'Denso',
    slogan: 'Calidad OEM Japonesa',
    description: 'El mayor proveedor de componentes automotrices del mundo. Expertos en climatización, alternadores, y sistemas de encendido avanzado.',
    heroImage: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2000&auto=format&fit=crop',
    categories: ['Climatización', 'Ignición', 'Alternadores', 'Sensores'],
    banners: [
      {
        tag: 'Rendimiento',
        title: 'Bujías Twin Tip',
        desc: 'Tecnología TT para una combustión más eficiente y menos emisiones.',
        bg: 'https://images.unsplash.com/photo-1493238792000-8113da705763?q=80&w=1000&auto=format&fit=crop',
        color: 'blue'
      },
      {
        tag: 'Confort',
        title: 'Compresores A/C',
        desc: 'Silenciosos, eficientes y exactos al equipo original de tu vehículo.',
        bg: 'https://images.unsplash.com/photo-1632731885566-664dc1bc0292?q=80&w=1000&auto=format&fit=crop',
        color: 'teal'
      }
    ]
  },
  gates: {
    name: 'Gates',
    slogan: 'Driven by Possibility',
    description: 'Especialistas mundiales en sistemas de transmisión de potencia. Las correas, tensores y mangueras más resistentes y duraderas del mercado.',
    heroImage: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=2000&auto=format&fit=crop',
    categories: ['Correas', 'Tensores', 'Mangueras', 'Bombas de Agua'],
    banners: [
      {
        tag: 'Distribución',
        title: 'Kits de Tiempo',
        desc: 'Todo lo necesario para un cambio de correa de distribución seguro.',
        bg: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=1000&auto=format&fit=crop',
        color: 'red'
      }
    ]
  },
  acdelco: {
    name: 'ACDelco',
    slogan: 'Confianza Original',
    description: 'La verdadera marca de repuestos originales de General Motors. Calidad de fábrica para el mantenimiento perfecto de tu Chevrolet, GMC o Cadillac.',
    heroImage: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=2000&auto=format&fit=crop',
    categories: ['Baterías', 'Filtros', 'Frenos', 'Fluidos'],
    banners: [
      {
        tag: 'Garantía GM',
        title: 'Baterías Gold',
        desc: 'Alta capacidad de arranque en frío y 18 meses de garantía total.',
        bg: 'https://images.unsplash.com/photo-1632731885566-664dc1bc0292?q=80&w=1000&auto=format&fit=crop',
        color: 'blue'
      }
    ]
  },
  valeo: {
    name: 'Valeo',
    slogan: 'Smart technology for smarter mobility',
    description: 'Líder en sistemas de embrague, limpiaparabrisas e iluminación. Tecnología europea innovadora orientada a la reducción de emisiones de CO2.',
    heroImage: 'https://images.unsplash.com/photo-1600706432502-77a0e2e32729?q=80&w=2000&auto=format&fit=crop',
    categories: ['Embragues', 'Limpiaparabrisas', 'Iluminación', 'Alternadores'],
    banners: [
      {
        tag: 'Innovación',
        title: 'Kits de Embrague',
        desc: 'Transmisión de potencia suave y reducción de vibraciones HEC.',
        bg: 'https://images.unsplash.com/photo-1493238792000-8113da705763?q=80&w=1000&auto=format&fit=crop',
        color: 'green'
      }
    ]
  },
  moog: {
    name: 'Moog',
    slogan: 'The Problem Solver',
    description: 'La marca preferida por los mecánicos profesionales para sistemas de dirección y suspensión. Diseñados para superar las especificaciones originales.',
    heroImage: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=2000&auto=format&fit=crop',
    categories: ['Suspensión', 'Dirección', 'Rótulas', 'Bujes'],
    banners: [
      {
        tag: 'Extrema Durabilidad',
        title: 'Brazos de Control',
        desc: 'Aleaciones reforzadas para absorber el castigo de los peores caminos.',
        bg: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=1000&auto=format&fit=crop',
        color: 'orange'
      }
    ]
  },
  skf: {
    name: 'SKF',
    slogan: 'The Power of Knowledge Engineering',
    description: 'Inventores del rodamiento a rótula. Máxima precisión en rodamientos, cubos de rueda y retenes para reducir la fricción al mínimo absoluto.',
    heroImage: 'https://images.unsplash.com/photo-1590650046522-7f9780026e6d?q=80&w=2000&auto=format&fit=crop',
    categories: ['Rodamientos', 'Cubos de Rueda', 'Retenes', 'Bombas'],
    banners: [
      {
        tag: 'Precisión',
        title: 'Cubos de Rueda',
        desc: 'Ensamblados con tolerancias micrométricas para una rodadura perfecta.',
        bg: 'https://images.unsplash.com/photo-1632731885566-664dc1bc0292?q=80&w=1000&auto=format&fit=crop',
        color: 'blue'
      }
    ]
  },
  monroe: {
    name: 'Monroe',
    slogan: 'Built to Last',
    description: '100 años de liderazgo en el control de manejo. Amortiguadores y struts que devuelven a tu vehículo la estabilidad y confort de cuando era nuevo.',
    heroImage: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop',
    categories: ['Amortiguadores', 'Struts', 'Bases', 'Resortes'],
    banners: [
      {
        tag: 'Confort Total',
        title: 'OESpectrum',
        desc: 'Tecnología patentada de válvulas activas para un control superior.',
        bg: 'https://images.unsplash.com/photo-1493238792000-8113da705763?q=80&w=1000&auto=format&fit=crop',
        color: 'orange'
      }
    ]
  }
};
