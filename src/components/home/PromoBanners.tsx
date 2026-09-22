import Image from 'next/image';

export default function PromoBanners() {
  return (
    <section className="py-12 container mx-auto px-4">
      <h2 className="text-2xl font-bold tracking-tight mb-8 lowercase text-center md:text-left">ofertas exclusivas</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Banner 1: Large (Takes 2 cols) */}
        <div className="lg:col-span-2 relative rounded-3xl overflow-hidden bg-neutral-900 aspect-[2/1] flex items-center group cursor-pointer">
          <div className="absolute inset-0 z-0">
            <Image 
              src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80&w=800" 
              alt="Promo 1" 
              fill 
              className="object-cover opacity-40 group-hover:opacity-50 transition-opacity duration-500"
            />
          </div>
          <div className="relative z-10 p-8 text-white">
            <span className="inline-block px-3 py-1 bg-red-600 text-white text-[10px] font-bold rounded-full mb-3 uppercase tracking-wider">
              Hot Deal
            </span>
            <h3 className="text-2xl md:text-3xl font-bold mb-2 leading-tight">Lleva 2,<br/>Paga 1</h3>
            <p className="text-gray-300 text-sm mb-4">Aplica para filtros de alto flujo.</p>
            <span className="text-sm font-semibold border-b border-white pb-0.5">Comprar ahora</span>
          </div>
        </div>

        {/* Banner 2: Small */}
        <div className="relative rounded-3xl overflow-hidden bg-neutral-100 aspect-square md:aspect-auto md:h-full flex flex-col group cursor-pointer p-6">
           <div className="absolute inset-0 z-0">
            <Image 
              src="https://images.unsplash.com/photo-1599360889420-da1afbea9a12?auto=format&fit=crop&q=80&w=600" 
              alt="Promo 2" 
              fill 
              className="object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500"
            />
          </div>
          <div className="relative z-10 text-black flex flex-col h-full justify-between">
            <div>
              <span className="inline-block px-3 py-1 bg-black text-white text-[10px] font-bold rounded-full mb-3 uppercase tracking-wider">
                Nuevo
              </span>
              <h3 className="text-xl font-bold mb-1 leading-tight">Sintéticos</h3>
              <p className="text-gray-600 text-xs">Protección extrema 4T.</p>
            </div>
            <span className="text-sm font-semibold mt-4">Desde $12.99 &rarr;</span>
          </div>
        </div>

        {/* Banner 3: Small */}
        <div className="relative rounded-3xl overflow-hidden bg-stone-100 aspect-square md:aspect-auto md:h-full flex flex-col group cursor-pointer p-6">
           <div className="absolute inset-0 z-0">
            <Image 
              src="https://images.unsplash.com/photo-1590634638706-92d6e382fa68?auto=format&fit=crop&q=80&w=600" 
              alt="Promo 3" 
              fill 
              className="object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500 mix-blend-multiply"
            />
          </div>
          <div className="relative z-10 text-black flex flex-col h-full justify-between">
            <div>
              <span className="inline-block px-3 py-1 bg-[#fde047] text-black text-[10px] font-bold rounded-full mb-3 uppercase tracking-wider">
                Rebaja
              </span>
              <h3 className="text-xl font-bold mb-1 leading-tight">Bujías Iridium</h3>
              <p className="text-gray-600 text-xs">Mayor potencia y vida útil.</p>
            </div>
            <span className="text-sm font-semibold mt-4">Ver opciones &rarr;</span>
          </div>
        </div>

      </div>
    </section>
  );
}
