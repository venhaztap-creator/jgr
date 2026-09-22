import Image from 'next/image';
import { ShoppingCart } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  category: string;
  image: string;
  isNew?: boolean;
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group flex flex-col cursor-pointer">
      <div className="relative aspect-square overflow-hidden rounded-2xl bg-gray-100 mb-4">
        {product.isNew && (
          <span className="absolute top-3 left-3 bg-white text-black text-xs font-bold px-2.5 py-1 rounded-md z-10 shadow-sm">
            NUEVO
          </span>
        )}
        <Image 
          src={product.image} 
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Quick add button overlay */}
        <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <button className="w-full bg-white/90 backdrop-blur-sm hover:bg-black hover:text-white text-black font-medium py-3 rounded-xl flex items-center justify-center gap-2 shadow-lg transition-colors">
            <ShoppingCart className="w-4 h-4" />
            <span>Agregar</span>
          </button>
        </div>
      </div>

      <div className="flex flex-col flex-1">
        <span className="text-xs text-gray-500 font-medium tracking-wider mb-1">{product.brand}</span>
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 leading-snug group-hover:text-black">{product.name}</h3>
        <div className="mt-auto flex items-center justify-between">
          <span className="text-lg font-bold">${product.price.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}
