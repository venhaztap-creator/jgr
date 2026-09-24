"use client";

import { Map, Users, ClipboardCheck, Package } from 'lucide-react';

export default function CompanyStats() {
  return (
    <section className="py-12 bg-white border-t border-gray-100 flex justify-center w-full">
      <div className="w-full max-w-[1280px] mx-auto px-2 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-gray-300">
          
          {/* Block 1 */}
          <div className="flex flex-col items-center justify-center text-center px-2 w-full md:w-1/5 py-6 md:py-0">
            <span className="text-[11px] md:text-[13px] font-black text-[#1c1c1c] tracking-wide uppercase">Fundados en</span>
            <span className="text-5xl md:text-5xl lg:text-[60px] font-black text-[#F35F0F] leading-none mt-1">2019</span>
          </div>
          
          {/* Block 2 */}
          <div className="flex items-center justify-center gap-3 px-2 w-full md:w-1/5 py-6 md:py-0">
            <div className="relative text-[#F35F0F]">
              <Map size={48} strokeWidth={1.5} />
              <div className="absolute top-1 left-2 w-2 h-2 bg-[#F35F0F] rounded-full ring-2 ring-white"></div>
              <div className="absolute top-3 right-3 w-2 h-2 bg-[#F35F0F] rounded-full ring-2 ring-white"></div>
              <div className="absolute bottom-4 left-4 w-2 h-2 bg-[#F35F0F] rounded-full ring-2 ring-white"></div>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-[11px] md:text-[13px] font-black text-[#1c1c1c] tracking-wide uppercase">Activos en</span>
              <span className="text-5xl md:text-5xl lg:text-[60px] font-black text-[#F35F0F] leading-none mt-1 mb-1">20</span>
              <span className="text-[10px] md:text-[11px] font-black text-[#1c1c1c] tracking-wide uppercase leading-tight">Estados del País</span>
            </div>
          </div>
          
          {/* Block 3 */}
          <div className="flex items-center justify-center gap-3 px-2 w-full md:w-1/5 py-6 md:py-0">
            <div className="text-[#F35F0F]">
              <Users size={54} strokeWidth={1.5} />
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-[11px] md:text-[13px] font-black text-[#1c1c1c] tracking-wide uppercase">Más de</span>
              <span className="text-5xl md:text-5xl lg:text-[60px] font-black text-[#F35F0F] leading-none mt-1 mb-1">5000</span>
              <span className="text-[11px] md:text-[13px] font-black text-[#1c1c1c] tracking-wide uppercase">Clientes</span>
            </div>
          </div>
          
          {/* Block 4 */}
          <div className="flex items-center justify-center gap-3 px-2 w-full md:w-1/5 py-6 md:py-0">
            <div className="text-[#F35F0F] relative">
              <ClipboardCheck size={44} strokeWidth={1.5} />
              <div className="absolute -bottom-2 -right-2 bg-white rounded text-[#F35F0F]">
                <Package size={24} strokeWidth={2} />
              </div>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-[11px] md:text-[13px] font-black text-[#1c1c1c] tracking-wide uppercase">Más de</span>
              <span className="text-5xl md:text-4xl lg:text-[50px] font-black text-[#F35F0F] leading-none mt-1 mb-1 tracking-tighter">40.000</span>
              <span className="text-[10px] md:text-[11px] font-black text-[#1c1c1c] tracking-wide uppercase leading-tight">Despachos al Año</span>
            </div>
          </div>
          
          {/* Block 5 */}
          <div className="flex items-center justify-center gap-2 px-2 w-full md:w-1/5 py-6 md:py-0">
            <span className="text-5xl md:text-5xl lg:text-[60px] font-black text-[#F35F0F] leading-none">+20</span>
            <div className="flex flex-col text-left">
              <span className="text-[11px] md:text-[13px] font-black text-[#1c1c1c] leading-none tracking-wide uppercase mb-1">Marcas</span>
              <span className="text-[11px] md:text-[13px] font-black text-[#1c1c1c] leading-none tracking-wide uppercase">Distribuidas</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
