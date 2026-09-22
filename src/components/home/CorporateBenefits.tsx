"use client";

import Link from 'next/link';

export default function CorporateBenefits() {
  return (
    <section className="py-24 bg-gray-50 flex items-center justify-center" id="corporate-benefits">
      
      {/* Container simulating the exact width and background of the user's HTML */}
      <div className="w-full max-w-[1040px] mx-auto bg-[#1c1c1c] shadow-2xl overflow-hidden rounded-xl">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 md:px-14 py-5 border-b border-white/10">
          <div className="flex items-center gap-3">
            <img src="/logo.webp" alt="JGR" className="w-8 h-8 md:w-9 md:h-9 object-contain" />
            <span className="font-black text-[13px] md:text-[15px] text-white tracking-[0.02em]">JGR AUTOPARTES</span>
          </div>
          <span className="font-semibold text-[10px] md:text-[11px] tracking-[0.1em] text-gray-400 uppercase">Programa B2B</span>
        </div>

        {/* Hero Area */}
        <div className="relative min-h-[460px] flex items-center overflow-hidden">
          {/* Repeating diagonal pattern */}
          <div className="absolute inset-0" style={{ background: 'repeating-linear-gradient(135deg, rgba(255,255,255,0.045) 0 12px, rgba(255,255,255,0.08) 12px 24px)' }}></div>
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1c1c1c] via-[#1c1c1c]/90 to-[#1c1c1c]/10"></div>
          
          {/* Decorative Circles */}
          <div className="absolute -right-[60px] top-1/2 -translate-y-1/2 w-[340px] h-[340px] border-2 border-dashed border-white/30 rounded-full pointer-events-none"></div>
          <div className="absolute right-[20px] top-1/2 -translate-y-1/2 w-[220px] h-[220px] border border-white/20 rounded-full pointer-events-none"></div>
          
          {/* Main Content */}
          <div className="relative px-6 md:px-14 py-16 max-w-[600px]">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#F35F0F] rounded-sm font-bold text-[11px] tracking-[0.08em] text-white uppercase">
              Cuenta Corporativa B2B
            </span>
            <h1 className="font-black text-4xl md:text-[52px] text-white mt-6 leading-[1.03] tracking-tight uppercase">
              Tu taller.<br/>
              Rodando<br/>
              <span className="text-[#F35F0F]">sin frenar.</span>
            </h1>
            <p className="font-normal text-base text-gray-300 mt-5 max-w-[38ch] leading-[1.6]">
              Crédito, logística exclusiva y atención dedicada para talleres y flotas que no pueden parar. Esto es operar en grande, con el respaldo de JGR.
            </p>
            <div className="flex flex-wrap items-center gap-5 mt-8">
              <Link href="#contacto" className="inline-flex items-center gap-2.5 bg-[#F35F0F] hover:bg-[#c94c0c] transition-colors text-white font-bold text-[15px] px-7 py-4 rounded-sm uppercase tracking-[0.02em]">
                Solicitar cuenta &rarr;
              </Link>
              <Link href="#contacto" className="font-semibold text-[13.5px] text-white border-b border-gray-400 pb-0.5 hover:text-gray-200 transition-colors">
                Ver requisitos
              </Link>
            </div>
          </div>
        </div>

        {/* Stats Dark Grid */}
        <div className="bg-[#232323] px-6 md:px-14 grid grid-cols-2 md:grid-cols-4">
          <div className="py-8 md:pr-5 border-b md:border-b-0 border-white/10 md:border-r border-white/10">
            <div className="font-black text-2xl md:text-[27px] text-white leading-none">30 días</div>
            <div className="font-medium text-[12.5px] text-[#a6a6a6] mt-1.5">de crédito flexible</div>
          </div>
          <div className="py-8 md:px-5 border-b md:border-b-0 border-white/10 md:border-r border-white/10 pl-6 md:pl-5">
            <div className="font-black text-2xl md:text-[27px] text-white leading-none">48h</div>
            <div className="font-medium text-[12.5px] text-[#a6a6a6] mt-1.5">despacho prioritario</div>
          </div>
          <div className="py-8 md:px-5 border-b md:border-b-0 border-white/10 md:border-r border-white/10">
            <div className="font-black text-2xl md:text-[27px] text-white leading-none">1 a 1</div>
            <div className="font-medium text-[12.5px] text-[#a6a6a6] mt-1.5">ejecutivo asignado</div>
          </div>
          <div className="py-8 md:pl-5 pl-6 md:pl-5 border-b md:border-b-0 border-white/10">
            <div className="font-black text-2xl md:text-[27px] text-white leading-none">100%</div>
            <div className="font-medium text-[12.5px] text-[#a6a6a6] mt-1.5">facturación fiscal</div>
          </div>
        </div>

        {/* Light Benefits Grid */}
        <div className="bg-white px-6 md:px-14 py-10 md:pt-[52px] md:pb-[56px]">
          <div className="flex items-baseline justify-between mb-7">
            <h2 className="font-black text-xl md:text-[24px] text-[#1c1c1c] m-0">Todo lo que incluye tu cuenta</h2>
            <span className="font-semibold text-xs text-[#8a8a8a]">04 beneficios</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-[20px]">
            <div className="border-t-[3px] border-[#F35F0F] pt-4 md:pt-[18px]">
              <h3 className="font-bold text-base text-[#1c1c1c] mb-2">Líneas de crédito</h3>
              <p className="font-normal text-[13px] leading-[1.55] text-[#666] m-0">
                Condiciones de pago flexibles y financiamiento estructurado para escalar tu inventario sin comprometer el flujo de caja.
              </p>
            </div>
            <div className="border-t-[3px] border-[#8a8a8a] pt-4 md:pt-[18px]">
              <h3 className="font-bold text-base text-[#1c1c1c] mb-2">Despacho prioritario</h3>
              <p className="font-normal text-[13px] leading-[1.55] text-[#666] m-0">
                Ruta de entrega B2B exclusiva. Tus repuestos llegan a la puerta de tu taller en tiempo récord.
              </p>
            </div>
            <div className="border-t-[3px] border-[#8a8a8a] pt-4 md:pt-[18px]">
              <h3 className="font-bold text-base text-[#1c1c1c] mb-2">Ejecutivo asignado</h3>
              <p className="font-normal text-[13px] leading-[1.55] text-[#666] m-0">
                Un experto técnico dedicado a tu cuenta, listo para ubicar piezas difíciles y procesar garantías al instante.
              </p>
            </div>
            <div className="border-t-[3px] border-[#F35F0F] pt-4 md:pt-[18px]">
              <h3 className="font-bold text-base text-[#1c1c1c] mb-2">Facturación fiscal</h3>
              <p className="font-normal text-[13px] leading-[1.55] text-[#666] m-0">
                Documentación administrativa en regla, con retenciones aplicadas y reportes mensuales de tu consumo.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
