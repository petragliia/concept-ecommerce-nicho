'use client';

import { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { ShoppingBag, ArrowRight } from 'lucide-react';

export function AddToCartButton({ product }: { product: Product }) {
    const { addItem } = useCart();

    return (
        <button
            onClick={() => addItem(product)}
            className="group w-full flex items-center justify-between bg-white text-black font-display font-bold uppercase text-xl py-6 px-8 border-2 border-white hover:bg-primary hover:border-primary transition-all active:translate-y-1"
        >
            <span className="flex items-center gap-4">
                <ShoppingBag size={24} strokeWidth={2} />
                Adicionar ao Carrinho
            </span>
            <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
        </button>
    );
}
