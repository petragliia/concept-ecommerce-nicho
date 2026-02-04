'use client';

import { X, ShoppingBag, ArrowRight, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { CartItem } from './CartItem';
import { useState } from 'react';

export function CartDrawer() {
    const { isCartOpen, toggleCart, items, updateQuantity, removeItem, totalPrice } = useCart();
    const [isCheckingOut, setIsCheckingOut] = useState(false);

    if (!isCartOpen) return null;

    const handleCheckout = () => {
        setIsCheckingOut(true);
        setTimeout(() => {
            setIsCheckingOut(false);
            alert('Redirecionando para o Stripe... (Simulação de Sucesso)');
            toggleCart();
        }, 2000);
    };

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 z-50 bg-black/80 transition-opacity"
                onClick={toggleCart}
                aria-hidden="true"
            />

            {/* Drawer - Brutalist Style */}
            <div className="fixed inset-y-0 right-0 z-50 flex h-full w-full max-w-md flex-col bg-black border-l-2 border-white shadow-2xl transition-transform duration-300 transform translate-x-0">
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-6 border-b-2 border-white bg-black">
                    <h2 className="text-2xl font-display font-bold uppercase text-white flex items-center gap-3">
                        <ShoppingBag size={24} strokeWidth={2} />
                        Carrinho
                    </h2>
                    <button
                        onClick={toggleCart}
                        className="border-2 border-white p-2 text-white hover:bg-white hover:text-black transition-all"
                    >
                        <X size={20} strokeWidth={2} />
                    </button>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto px-6 py-6">
                    {items.length === 0 ? (
                        <div className="flex h-full flex-col items-center justify-center text-center space-y-6 border-2 border-dashed border-white/20 p-12">
                            <div className="w-24 h-24 border-2 border-white/20 flex items-center justify-center text-gray-500">
                                <ShoppingBag size={48} strokeWidth={1.5} />
                            </div>
                            <p className="text-gray-400 text-xl font-display uppercase">Carrinho Vazio</p>
                            <button
                                onClick={toggleCart}
                                className="border-2 border-white px-6 py-3 text-white font-mono text-sm uppercase hover:bg-white hover:text-black transition-all"
                            >
                                Continuar Comprando
                            </button>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {items.map((item) => (
                                <CartItem
                                    key={item.id}
                                    item={item}
                                    onUpdateQuantity={updateQuantity}
                                    onRemove={removeItem}
                                />
                            ))}
                        </div>
                    )}
                </div>

                {/* Footer */}
                {items.length > 0 && (
                    <div className="border-t-2 border-white bg-black p-6 space-y-6">
                        <div className="flex items-center justify-between text-xl font-mono font-bold text-white border-b border-white/20 pb-4">
                            <p className="uppercase text-sm tracking-widest">Total</p>
                            <p>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(totalPrice)}</p>
                        </div>
                        <p className="text-xs text-gray-500 font-mono uppercase tracking-widest text-center">
                            Frete e impostos calculados no checkout
                        </p>
                        <button
                            onClick={handleCheckout}
                            disabled={isCheckingOut}
                            className="group w-full flex items-center justify-between bg-primary text-black px-6 py-5 font-display text-lg font-bold uppercase border-2 border-primary hover:bg-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isCheckingOut ? (
                                <>
                                    <div className="h-5 w-5 animate-spin rounded-full border-2 border-black/30 border-t-black" />
                                    Processando...
                                </>
                            ) : (
                                <>
                                    <span className="flex items-center gap-3">
                                        <ShoppingBag size={20} strokeWidth={2} />
                                        Finalizar Compra
                                    </span>
                                    <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                                </>
                            )}
                        </button>
                    </div>
                )}
            </div>
        </>
    );
}
