export const MOCK_PRODUCTS = [
  {
    id: "oil-valvoline-5w30",
    title: "Aceite de Motor Sintético Valvoline 5W-30 (1 Cuarto / 946ml)",
    shortName: "Aceite Sintético 5W-30",
    type: "Lubricantes y Fluidos",
    position: "Motor",
    brand: "Valvoline",
    application: "Multivehículo",
    mpn: "VV955",
    oem: ["DEXOS1 GEN 3", "API SP", "ILSAC GF-6A", "FORD WSS-M2C961-A1", "GM 6094M"],
    condition: "Producto Original Sellado",
    
    images: [
      "/assets/jgr/prod-oil-ai.jpg", 
      "https://images.unsplash.com/photo-1621370213508-31fc0f0732dc?q=80&w=1200&auto=format&fit=crop", 
    ],
    diagramUrl: "https://images.unsplash.com/photo-1537233267597-85b46d75c1c0?q=80&w=1200&auto=format&fit=crop", 

    specs: {
      "Grado de Viscosidad SAE": "5W-30",
      "Composición": "100% Sintético",
      "Volumen": "1 Cuarto (946 ml)",
      "Aditivos Especiales": "Anti-Fricción y Limpieza Activa",
      "Resistencia a Temperatura": "Alta protección contra desgaste térmico",
      "Peso (kg)": "0.95",
    },

    applications: [
      { make: "Universal", model: "Multimarcas", years: "2010 - 2024", engine: "Varios", valves: "N/A", trans: "N/A", drive: "N/A", notes: "Sistemas a Gasolina y Flex-Fuel modernos" }
    ],

    crossReferences: [
      { brand: "Mobil 1", mpn: "M1-5W30", link: "/product/oil-valvoline-5w30" },
      { brand: "Castrol EDGE", mpn: "03084", link: "/product/oil-valvoline-5w30" },
    ],

    pricing: {
      retail: 12.50,
      b2bTiers: [
        { min: 1, max: 11, price: 12.50, discount: "0%" },
        { min: 12, max: 47, price: 10.90, discount: "12%" },
        { min: 48, max: 999, price: 9.50, discount: "24%" }
      ],
      taxInfo: "Precio incluye IVA (16%)"
    },

    inventory: [
      { branch: "Centro de Distribución Nacional", stock: 1250, status: "Alto" },
      { branch: "Sede Comercial Norte", stock: 320, status: "Alto" }
    ],

    crossSell: [
      { name: "Filtro de Aceite Premium", brand: "Bosch", price: 8.50, img: "https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=300" }
    ],

    downloads: [
      { title: "Hoja de Datos de Seguridad (MSDS)", size: "1.2 MB" },
      { title: "Ficha Técnica Valvoline Synthetic", size: "850 KB" }
    ]
  },
  {
    id: "michelin-ps5-2454018",
    title: "Llanta Michelin Pilot Sport 5 245/40 ZR18 97Y XL",
    shortName: "Llanta Pilot Sport 5",
    type: "Llantas y Neumáticos",
    position: "Ruedas",
    brand: "Michelin",
    application: "Sedanes Premium y Deportivos",
    mpn: "08985",
    oem: ["BMW Star", "Audi AO", "Mercedes MO"],
    condition: "Nuevo OEM",
    
    images: [
      "/assets/jgr/prod-tires-ai.jpg", 
    ],
    diagramUrl: "/assets/jgr/prod-tires-ai.jpg", 

    specs: {
      "Ancho de sección (mm)": "245",
      "Perfil (%)": "40",
      "Diámetro (pulgadas)": "18",
      "Índice de Carga": "97 (730 kg)",
      "Índice de Velocidad": "Y (300 km/h)",
      "Tecnología": "Dynamic Response / Extra Load (XL)",
      "Desgaste (Treadwear)": "320",
      "Tracción / Temperatura": "AA / A",
      "Peso (kg)": "11.2",
    },

    applications: [
      { make: "Audi", model: "A4 / S4", years: "2015 - 2023", engine: "2.0L / 3.0L", valves: "N/A", trans: "S-Tronic", drive: "Quattro", notes: "Medida original de fábrica" },
      { make: "BMW", model: "Serie 3 (G20)", years: "2019 - 2024", engine: "Varios", valves: "N/A", trans: "Automática", drive: "RWD / xDrive", notes: "Eje delantero o ambas posiciones según rin" }
    ],

    crossReferences: [
      { brand: "Pirelli", mpn: "P ZERO 245/40R18", link: "/product/michelin-ps5-2454018" },
      { brand: "Continental", mpn: "ExtremeContact 245/40", link: "/product/michelin-ps5-2454018" }
    ],

    pricing: {
      retail: 215.00,
      b2bTiers: [
        { min: 1, max: 3, price: 215.00, discount: "0%" },
        { min: 4, max: 9, price: 195.00, discount: "9%" },
        { min: 10, max: 999, price: 180.00, discount: "16%" } 
      ],
      taxInfo: "Precio incluye IVA (16%)"
    },

    inventory: [
      { branch: "Centro de Distribución Nacional", stock: 84, status: "Medio" },
      { branch: "Sede Comercial Norte", stock: 12, status: "Bajo" }
    ],

    crossSell: [
      { name: "Válvula de Aire Deportiva TR413", brand: "Schrader", price: 2.50, img: "https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=300" }
    ],

    downloads: [
      { title: "Garantía de Kilometraje Michelin", size: "3.5 MB" }
    ]
  },
  {
    id: "battery-voltmax-agm",
    title: "Batería AGM 12V 75Ah Start-Stop VoltMax Aurora",
    shortName: "Batería AGM 75Ah",
    type: "Sistema Eléctrico",
    position: "Compartimiento Motor / Maletero",
    brand: "VoltMax",
    application: "Vehículos Start-Stop Modernos",
    mpn: "AGM-75-L3",
    oem: ["VARTA E39", "BOSCH S5A08", "000915105CD", "61219069277"],
    condition: "Nueva AGM Premium",
    
    images: [
      "/assets/jgr/prod-battery-ai.jpg", 
    ],
    diagramUrl: "https://images.unsplash.com/photo-1537233267597-85b46d75c1c0?q=80&w=1200&auto=format&fit=crop", 

    specs: {
      "Tecnología": "AGM (Absorbent Glass Mat)",
      "Voltaje": "12V",
      "Capacidad (Ah)": "75 Ah",
      "CCA (Arranque en Frío)": "720A (EN) / 680A (SAE)",
      "Start-Stop": "Compatible (Ciclo Profundo)",
      "Polaridad": "Derecha (+)",
      "Mantenimiento": "Libre de mantenimiento (Sellada)",
      "Dimensiones (L x A x Al mm)": "278 x 175 x 190",
      "Peso (kg)": "20.5",
    },

    applications: [
      { make: "Volkswagen", model: "Tiguan", years: "2018 - 2024", engine: "2.0T", valves: "16V", trans: "DSG", drive: "4Motion", notes: "Soporte completo Start-Stop" },
      { make: "Jeep", model: "Grand Cherokee", years: "2016 - 2021", engine: "3.6L V6", valves: "24V", trans: "Automática", drive: "4x4", notes: "Aplica versión AGM de fábrica" }
    ],

    crossReferences: [
      { brand: "Bosch", mpn: "S5 A08 AGM", link: "/product/battery-voltmax-agm" },
      { brand: "Varta", mpn: "Silver Dynamic AGM E39", link: "/product/battery-voltmax-agm" }
    ],

    pricing: {
      retail: 198.50,
      b2bTiers: [
        { min: 1, max: 2, price: 198.50, discount: "0%" },
        { min: 3, max: 9, price: 175.00, discount: "11%" },
        { min: 10, max: 999, price: 155.00, discount: "21%" } 
      ],
      taxInfo: "Precio incluye recargo ecológico."
    },

    inventory: [
      { branch: "Centro de Distribución Nacional", stock: 45, status: "Medio" },
      { branch: "Centro de Distribución Occidente", stock: 8, status: "Bajo" }
    ],

    crossSell: [
      { name: "Terminales de Batería Cobre", brand: "Pico", price: 6.00, img: "https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=300" }
    ],

    downloads: [
      { title: "Manual de Codificación BMS Batería", size: "1.1 MB" }
    ]
  },
  {
    id: "monroe-72367st",
    title: "Amortiguador Delantero Derecho Monroe OESpectrum Chevrolet Cruze 1.8L 2011-2016",
    shortName: "Amortiguador Delantero",
    type: "Amortiguador de Suspensión",
    position: "Delantero Derecho",
    brand: "Monroe",
    application: "Chevrolet Cruze 1.8L",
    mpn: "72367ST",
    oem: ["13331986", "13331988", "13331990", "13412588"],
    condition: "Aftermarket Homologado (Tier 1)",
    
    images: [
      "/assets/jgr/prod-shocks.jpg", 
      "https://images.unsplash.com/photo-1596720760455-d6d03f0b2f5b?q=80&w=1200&auto=format&fit=crop", 
    ],
    diagramUrl: "https://images.unsplash.com/photo-1537233267597-85b46d75c1c0?q=80&w=1200&auto=format&fit=crop", 

    specs: {
      "Cuerpo": "Estructural (MacPherson)",
      "Longitud Extendida (mm)": "528.3",
      "Longitud Comprimida (mm)": "358.1",
      "Carrera (mm)": "170.2",
      "Gas presurizado": "Gas Nitrógeno",
      "Medida Rosca Superior": "M14 x 1.50",
      "Peso (kg)": "4.65",
    },

    applications: [
      { make: "Chevrolet", model: "Cruze", years: "2011 - 2016", engine: "1.8L L4 Ecotec", valves: "16V", trans: "Auto / Sync", drive: "FWD", notes: "Solo chasis sin paquete deportivo" }
    ],

    crossReferences: [
      { brand: "KYB", mpn: "339265", link: "/product/monroe-72367st" },
      { brand: "ACDelco", mpn: "506-880", link: "/product/monroe-72367st" }
    ],

    pricing: {
      retail: 89.90,
      b2bTiers: [
        { min: 1, max: 5, price: 89.90, discount: "0%" },
        { min: 6, max: 11, price: 79.90, discount: "11%" },
        { min: 12, max: 999, price: 72.50, discount: "19%" } 
      ],
      taxInfo: "Precio incluye IVA (16%)"
    },

    inventory: [
      { branch: "Centro de Distribución Nacional", stock: 145, status: "Alto" }
    ],

    crossSell: [
      { name: "Base de Amortiguador", brand: "ACDelco", price: 35.00, img: "https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=300" }
    ],

    downloads: [
      { title: "Manual de Instalación Monroe OESpectrum", size: "2.4 MB" }
    ]
  },
  {
    id: "combo-afinacion",
    title: "Combo Afinación: Aceite Sintético Valvoline 5W-30 + Filtro de Aire",
    shortName: "Combo Afinación",
    type: "Combos Especiales",
    position: "Mantenimiento Motor",
    brand: "Valvoline & Multimarca",
    application: "Multivehículo",
    mpn: "CMB-AFIN-001",
    oem: ["Kit Universal", "Mantenimiento Preventivo"],
    condition: "Productos Originales Sellados",
    
    images: [
      "/assets/jgr/prod-oil-ai.jpg", 
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Car_engine_air_filter.jpg/320px-Car_engine_air_filter.jpg"
    ],
    diagramUrl: "https://images.unsplash.com/photo-1537233267597-85b46d75c1c0?q=80&w=1200&auto=format&fit=crop", 

    specs: {
      "Contenido del Combo": "1x Aceite Valvoline (1 Qt), 1x Filtro de Aire",
      "Viscosidad del Aceite": "5W-30 Sintético",
      "Garantía": "10,000 Km",
      "Peso Total (kg)": "1.25",
    },

    applications: [
      { make: "Universal", model: "Multimarcas", years: "2010 - 2024", engine: "Varios", valves: "N/A", trans: "N/A", drive: "N/A", notes: "Aplica para mayoría de sedanes 4 cilindros" }
    ],

    crossReferences: [],

    pricing: {
      retail: 19.99,
      b2bTiers: [
        { min: 1, max: 9, price: 19.99, discount: "0%" },
        { min: 10, max: 999, price: 16.50, discount: "17%" }
      ],
      taxInfo: "Precio rebajado - Combo"
    },

    inventory: [
      { branch: "Centro de Distribución Nacional", stock: 85, status: "Alto" }
    ],

    crossSell: [
      { name: "Bujías Iridium", brand: "NGK", price: 25.00, img: "/assets/jgr/prod-oil-ai.jpg" }
    ],

    downloads: [
      { title: "Guía de Mantenimiento Preventivo", size: "1.5 MB" }
    ]
  },
  {
    id: "combo-seguridad",
    title: "Combo Seguridad: 2x Llantas Michelin Pilot Sport 5 + Amortiguadores",
    shortName: "Combo Seguridad",
    type: "Combos Especiales",
    position: "Ruedas y Suspensión",
    brand: "Michelin & Monroe",
    application: "Sedanes Deportivos",
    mpn: "CMB-SEG-002",
    oem: ["Kit Suspensión", "Llantas OEM"],
    condition: "Nuevos OEM",
    
    images: [
      "/assets/jgr/prod-tires-ai.jpg", 
      "/assets/jgr/prod-shocks.jpg"
    ],
    diagramUrl: "https://images.unsplash.com/photo-1596720760455-d6d03f0b2f5b?q=80&w=1200&auto=format&fit=crop", 

    specs: {
      "Contenido del Combo": "2x Llantas 245/40 ZR18, 2x Amortiguadores Delanteros",
      "Garantía": "1 Año o 20,000 Km",
      "Instalación": "Incluye balanceo gratis",
      "Peso Total (kg)": "31.7",
    },

    applications: [
      { make: "Audi", model: "A4 / S4", years: "2015 - 2023", engine: "2.0L / 3.0L", valves: "N/A", trans: "S-Tronic", drive: "Quattro", notes: "Kit completo delantero" }
    ],

    crossReferences: [],

    pricing: {
      retail: 410.00,
      b2bTiers: [
        { min: 1, max: 3, price: 410.00, discount: "0%" },
        { min: 4, max: 999, price: 385.00, discount: "6%" } 
      ],
      taxInfo: "Precio de Oferta Especial"
    },

    inventory: [
      { branch: "Sede Comercial Norte", stock: 12, status: "Bajo" }
    ],

    crossSell: [
      { name: "Líquido de Frenos DOT 4", brand: "Bosch", price: 12.00, img: "/assets/jgr/prod-oil-ai.jpg" }
    ],

    downloads: [
      { title: "Garantía Extendida Combos", size: "2.1 MB" }
    ]
  }
];

export const MOCK_PRODUCT = MOCK_PRODUCTS[3];
