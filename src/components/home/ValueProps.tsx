"use client";

export default function ValueProps() {
  return (
    <section className="py-24 bg-gray-50 flex items-center justify-center px-4" id="value-props">
      
      {/* Container simulating the exact width and background of the user's HTML */}
      <div className="w-full max-w-[1040px] mx-auto bg-white shadow-[0_10px_40px_rgba(0,0,0,0.06)] overflow-hidden rounded-xl">
        
        {/* Banner with Image */}
        <div className="relative h-[180px] md:h-[220px] overflow-hidden">
          <img 
            src="/assets/jgr/taller-mecanico.jpg" 
            alt="Taller Mecánico JGR" 
            className="w-full h-full object-cover block"
          />
          {/* Orange Accent Strip */}
          <div className="absolute left-0 top-0 bottom-0 w-[6px] bg-[#F35F0F]"></div>
        </div>

        {/* Content Area */}
        <div className="py-12 md:py-[60px] px-8 md:px-[48px]">
          
          <div className="text-center mb-10 md:mb-[44px]">
            <span className="font-bold text-[11px] tracking-[0.14em] text-[#F35F0F] uppercase">JGR Autopartes</span>
            <h2 className="font-black text-2xl md:text-[26px] text-[#1c1c1c] mt-2.5 tracking-tight">Por qué comprar con JGR</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-[36px]">
            
            {/* Value 1: Retiro en Tienda */}
            <div className="text-center">
              <div className="w-[44px] h-[44px] rounded-full bg-[#F35F0F] mx-auto mb-4 md:mb-[18px] flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"/><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"/><path d="M2 7h20"/><path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7"/></svg>
              </div>
              <h3 className="font-bold text-[15.5px] text-[#1c1c1c] mb-2 leading-tight">Retiro en Tienda</h3>
              <p className="font-normal text-[13px] text-[#767676] leading-[1.6] m-0">
                Compra online y recoge en 30 minutos sin costo adicional en cualquiera de nuestras sucursales.
              </p>
            </div>

            {/* Value 2: Envíos Rápidos */}
            <div className="text-center">
              <div className="w-[44px] h-[44px] rounded-full bg-[#F35F0F] mx-auto mb-4 md:mb-[18px] flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 17h4V5H2v12h3"/><path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5v8h2"/><path d="M14 9h5.51"/><path d="M9 17a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z"/><path d="M19 17a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z"/></svg>
              </div>
              <h3 className="font-bold text-[15.5px] text-[#1c1c1c] mb-2 leading-tight">Envíos Rápidos</h3>
              <p className="font-normal text-[13px] text-[#767676] leading-[1.6] m-0">
                Entrega el mismo día en áreas seleccionadas y envíos rápidos a nivel nacional.
              </p>
            </div>

            {/* Value 3: JGR Rewards */}
            <div className="text-center">
              <div className="w-[44px] h-[44px] rounded-full bg-[#F35F0F] mx-auto mb-4 md:mb-[18px] flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              </div>
              <h3 className="font-bold text-[15.5px] text-[#1c1c1c] mb-2 leading-tight">JGR Rewards</h3>
              <p className="font-normal text-[13px] text-[#767676] leading-[1.6] m-0">
                Gana puntos por cada compra y canjéalos por descuentos exclusivos en tu próximo pedido.
              </p>
            </div>

            {/* Value 4: Atención Experta */}
            <div className="text-center">
              <div className="w-[44px] h-[44px] rounded-full bg-[#F35F0F] mx-auto mb-4 md:mb-[18px] flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
              </div>
              <h3 className="font-bold text-[15.5px] text-[#1c1c1c] mb-2 leading-tight">Atención Experta</h3>
              <p className="font-normal text-[13px] text-[#767676] leading-[1.6] m-0">
                Asesoría técnica personalizada para garantizar que encuentres la pieza exacta que necesitas.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
