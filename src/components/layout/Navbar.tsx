'use client';

import Link from 'next/link';
import { Search, ShoppingCart, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navbar({ cartCount = 0, onOpenCart }: { cartCount?: number; onOpenCart?: () => void }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <>
            {/* Top Marquee Bar */}
            <div className="w-full bg-primary text-black overflow-hidden py-1 border-b border-white select-none">
                <div className="animate-marquee whitespace-nowrap font-mono text-xs font-bold uppercase tracking-widest flex gap-8">
                    <span>/// Frete Grátis Acima de R$300</span>
                    <span>/// Autenticidade Garantida</span>
                    <span>/// Entrega Expressa</span>
                    <span>/// Checkout Seguro</span>
                    <span>/// Frete Grátis Acima de R$300</span>
                    <span>/// Autenticidade Garantida</span>
                    <span>/// Entrega Expressa</span>
                    <span>/// Checkout Seguro</span>
                </div>
            </div>

            <header className="sticky top-0 z-50 w-full border-b-2 border-white bg-background/95 backdrop-blur-none">
                <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
                    {/* Logo */}
                    <div className="flex items-center gap-2 group">
                        <Link href="/" className="text-3xl font-display font-bold tracking-tighter text-white uppercase italic border-2 border-transparent group-hover:border-primary px-2 transition-all">
                            Concept<span className="text-primary">.</span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-1">
                        <Link
                            href="/"
                            className="px-4 py-2 text-sm font-mono font-bold uppercase text-white transition-colors hover:text-primary hover:underline"
                        >
                            Início
                        </Link>
                        <Link
                            href="/catalog"
                            className="px-4 py-2 text-sm font-mono font-bold uppercase text-white transition-colors hover:text-primary hover:underline"
                        >
                            Catálogo
                        </Link>
                        <Link
                            href="/sobre"
                            className="px-4 py-2 text-sm font-mono font-bold uppercase text-white transition-colors hover:text-primary hover:underline"
                        >
                            Sobre
                        </Link>
                    </nav>

                    {/* Actions */}
                    <div className="flex items-center gap-2">
                        {/* Search Icon */}
                        <button className="border-2 border-white p-2 text-white hover:bg-primary hover:text-black hover:border-primary transition-all active:translate-y-1">
                            <Search size={20} strokeWidth={2.5} />
                        </button>

                        {/* Cart Button */}
                        <button
                            onClick={onOpenCart}
                            className="group relative flex items-center justify-center border-2 border-white p-2 text-white hover:bg-primary hover:text-black hover:border-primary transition-all active:translate-y-1"
                        >
                            <ShoppingCart size={20} strokeWidth={2.5} />
                            {cartCount > 0 && (
                                <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center bg-primary text-black text-[10px] font-bold border border-black">
                                    {cartCount}
                                </span>
                            )}
                        </button>

                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden border-2 border-white p-2 text-white hover:bg-primary hover:text-black hover:border-primary transition-all"
                        >
                            {mobileMenuOpen ? <X size={20} strokeWidth={2.5} /> : <Menu size={20} strokeWidth={2.5} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                {mobileMenuOpen && (
                    <div className="md:hidden fixed inset-0 top-[81px] bg-black z-40 border-t-2 border-white flex flex-col items-center justify-center gap-8 p-8">
                        <Link
                            href="/"
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-5xl font-display font-bold uppercase text-white hover:text-primary transition-colors"
                        >
                            Início
                        </Link>
                        <Link
                            href="/catalog"
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-5xl font-display font-bold uppercase text-white hover:text-primary transition-colors"
                        >
                            Catálogo
                        </Link>
                        <Link
                            href="/sobre"
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-5xl font-display font-bold uppercase text-white hover:text-primary transition-colors"
                        >
                            Sobre
                        </Link>
                    </div>
                )}
            </header>
        </>
    );
}
