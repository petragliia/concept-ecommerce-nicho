'use client';

import { ProductGallery } from '@/components/product/ProductGallery';
import { ProductFilters } from '@/components/product/ProductFilters';
import { products } from '@/data/products';
import { useFilters } from '@/hooks/useFilters';
import { useCart } from '@/context/CartContext';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
    const { filteredProducts, selectedCategory, setFilter } = useFilters(products);
    const { addItem } = useCart();

    const categories = Array.from(new Set(products.map((p) => p.category)));

    return (
        <div className="flex flex-col min-h-screen">
            {/* HERO SECTION - DIGITAL STREETWEAR */}
            <section className="relative w-full border-b-2 border-white overflow-hidden">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 grid lg:grid-cols-2 gap-12 items-center">

                    {/* Text Content */}
                    <div className="relative z-10 flex flex-col gap-6">
                        <div className="inline-flex items-center gap-2 border border-primary px-3 py-1 w-fit bg-primary/10">
                            <span className="w-2 h-2 bg-primary rounded-none animate-pulse"></span>
                            <span className="text-primary font-mono text-xs font-bold uppercase tracking-widest">
                                Nova Coleção 2024
                            </span>
                        </div>

                        <h1 className="text-6xl sm:text-8xl lg:text-9xl font-display font-bold uppercase leading-[0.8] tracking-tighter text-white">
                            Urbano<br />
                            <span className="text-transparent stroke-white" style={{ WebkitTextStroke: '2px white' }}>Caos</span><br />
                            V.01
                        </h1>

                        <p className="max-w-md text-gray-400 font-mono text-sm leading-relaxed border-l-2 border-primary pl-4">
                            Redefinindo os limites da moda digital.
                            Materiais brutos encontram precisão industrial.
                            Drops limitados exclusivos.
                        </p>

                        <div className="flex gap-4 mt-8">
                            <Link href="/catalog" className="group bg-white text-black px-8 py-4 font-display font-bold uppercase tracking-wider text-xl hover:bg-primary hover:text-black transition-colors flex items-center gap-2">
                                Comprar Agora
                                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <button className="px-8 py-4 border-2 border-white text-white font-mono font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">
                                Ver Lookbook
                            </button>
                        </div>
                    </div>

                    {/* Visual / Image (Abstract or Model) */}
                    <div className="relative h-[500px] w-full border-2 border-white p-2">
                        <div className="absolute top-0 right-0 bg-primary text-black font-mono font-bold text-xs p-2 z-20">
                            FIG. 01 // HERO_IMG
                        </div>
                        {/* Placeholder for Hero Image - using CSS pattern for now if no image */}
                        <div className="h-full w-full bg-[#111] relative overflow-hidden group">
                            {/* Glitch layers could go here */}
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700"></div>
                            <div className="absolute inset-0 bg-black/30 bg-[linear-gradient(transparent_2px,_#000_2px)] bg-[size:100%_4px] pointer-events-none"></div>
                        </div>
                    </div>
                </div>

                {/* Scrolling Marquee Bottom of Hero */}
                <div className="absolute bottom-0 w-full border-t border-white/20 py-2 bg-black">
                    <div className="animate-marquee-reverse whitespace-nowrap font-mono text-xs text-gray-500 uppercase flex gap-12 opacity-50">
                        <span>/// Loja Digital Concept</span>
                        <span>/// Frete Mundial</span>
                        <span>/// Checkout Seguro</span>
                        <span>/// Estoque Limitado</span>
                        <span>/// Produtos Digitais</span>
                        <span>/// Loja Digital Concept</span>
                        <span>/// Frete Mundial</span>
                        <span>/// Checkout Seguro</span>
                        <span>/// Estoque Limitado</span>
                        <span>/// Produtos Digitais</span>
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Sidebar Filters - Sticky & Brutalist */}
                    <aside className="w-full lg:w-64 flex-shrink-0">
                        <div className="sticky top-24 border-2 border-white p-6">
                            <h3 className="font-display text-2xl uppercase mb-6 border-b-2 border-white pb-2">Filtros</h3>
                            <ProductFilters
                                categories={categories}
                                selectedCategory={selectedCategory}
                                onSelectCategory={(cat) => setFilter('category', cat)}
                            />
                        </div>
                    </aside>

                    {/* Product Grid */}
                    <main className="flex-1">
                        <div className="flex justify-between items-end mb-8 border-b-2 border-white pb-4">
                            <h2 className="text-4xl font-display font-bold uppercase">Últimos Lançamentos</h2>
                            <span className="font-mono text-xs text-gray-400">
                                EXIBINDO {filteredProducts.length} ITENS
                            </span>
                        </div>

                        <ProductGallery
                            products={filteredProducts}
                            onAddToCart={(product) => {
                                addItem(product);
                            }}
                        />
                    </main>
                </div>
            </div>
        </div>
    );
}
