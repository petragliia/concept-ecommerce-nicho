import Link from 'next/link';
import Image from 'next/image';
import { ShoppingBag, Star, Plus } from 'lucide-react';
import { Product } from '@/data/products';

interface ProductCardProps {
    product: Product;
    onAddToCart?: (product: Product) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
    return (
        <div className="group relative flex flex-col border-2 border-white bg-black transition-all duration-200 hover:border-primary hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_#CCFF00]">
            {/* Image Container - Raw Borders */}
            <div className="relative aspect-square w-full overflow-hidden border-b-2 border-white group-hover:border-primary transition-colors">
                {/* Category Tag */}
                <div className="absolute top-0 left-0 z-10 bg-white px-2 py-1 text-xs font-mono font-bold uppercase text-black">
                    {product.category}
                </div>

                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Overlay Grid Lines (Decorative) */}
                <div className="absolute inset-0 bg-[linear-gradient(transparent_1px,_transparent_1px),_linear-gradient(90deg,rgba(255,255,255,0.1)_1px,_transparent_1px)] bg-[size:20px_20px] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col p-4">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-display font-bold uppercase leading-none text-white group-hover:text-primary transition-colors">
                        <Link href={`/product/${product.id}`} className="focus:outline-none">
                            <span aria-hidden="true" className="absolute inset-0" />
                            {product.name}
                        </Link>
                    </h3>
                </div>

                <p className="font-mono text-xs text-gray-400 line-clamp-2 mb-4">
                    {product.description}
                </p>

                <div className="mt-auto flex items-end justify-between border-t border-white/20 pt-4">
                    <p className="text-xl font-mono font-bold text-white">
                        {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price)}
                    </p>

                    {/* Fake Add Button (Visual only, actual click handled by parent/link override if needed, but here we want quick add) */}
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            onAddToCart?.(product);
                        }}
                        className="flex items-center gap-2 bg-white px-3 py-1 font-mono text-xs font-bold text-black uppercase hover:bg-primary hover:text-black transition-colors"
                    >
                        <Plus size={14} strokeWidth={3} />
                        ADD
                    </button>
                </div>
            </div>
        </div>
    );
}
