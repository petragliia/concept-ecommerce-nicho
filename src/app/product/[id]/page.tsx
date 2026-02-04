import { products } from '@/data/products';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { AddToCartButton } from './AddToCartButton';
import Link from 'next/link';

export function generateStaticParams() {
    return products.map((product) => ({
        id: product.id,
    }));
}

export default function ProductPage({ params }: { params: { id: string } }) {
    const product = products.find((p) => p.id === params.id);

    if (!product) {
        notFound();
    }

    return (
        <div className="min-h-screen border-t-2 border-white">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-80px)]">

                {/* Visual Section - Left (Desktop) */}
                <div className="relative border-b-2 lg:border-b-0 lg:border-r-2 border-white min-h-[500px] lg:min-h-auto group overflow-hidden">
                    <div className="absolute top-4 left-4 z-10 bg-primary px-2 py-1 text-xs font-mono font-bold uppercase text-black">
                        {product.category} // {product.id.padStart(3, '0')}
                    </div>

                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover grayscale contrast-125 transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                        priority
                    />

                    {/* Grid Overlay */}
                    <div className="absolute inset-0 bg-[linear-gradient(transparent_1px,_transparent_1px),_linear-gradient(90deg,rgba(255,255,255,0.1)_1px,_transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
                </div>

                {/* Details Section - Right (Desktop) */}
                <div className="flex flex-col">
                    {/* Header Pannel */}
                    <div className="p-8 lg:p-12 border-b-2 border-white bg-black">
                        <div className="flex justify-between items-start mb-4">
                            <Link href="/catalog" className="text-gray-500 hover:text-white font-mono text-xs uppercase tracking-widest hover:underline">
                                &larr; Voltar ao Catálogo
                            </Link>
                            <div className="flex items-center gap-1 text-primary">
                                <span className="text-lg font-mono font-bold">{product.rating}</span>
                                <span className="text-xs font-mono text-gray-500">/ 5.0 AVALIAÇÃO</span>
                            </div>
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-display font-bold uppercase leading-[0.9] text-white mb-6">
                            {product.name}
                        </h1>

                        <div className="text-4xl font-mono font-bold text-white mb-2">
                            {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price)}
                        </div>
                        <p className="text-xs font-mono text-gray-500 uppercase tracking-widest">
                            Inclui Taxas e Impostos
                        </p>
                    </div>

                    {/* Description Panel */}
                    <div className="flex-1 p-8 lg:p-12 border-b-2 border-white flex flex-col justify-center">
                        <h3 className="text-sm font-mono font-bold uppercase text-gray-400 mb-4">/// Descrição do Produto</h3>
                        <p className="text-xl text-gray-300 leading-relaxed max-w-xl font-sans">
                            {product.description}
                        </p>

                        <div className="mt-8 grid grid-cols-2 gap-4">
                            <div className="border border-white/20 p-4">
                                <span className="block text-xs font-mono text-gray-500 uppercase mb-1">Material</span>
                                <span className="block text-white font-bold uppercase">Qualidade Premium</span>
                            </div>
                            <div className="border border-white/20 p-4">
                                <span className="block text-xs font-mono text-gray-500 uppercase mb-1">Autenticidade</span>
                                <span className="block text-white font-bold uppercase">Verificado 100%</span>
                            </div>
                        </div>
                    </div>

                    {/* Actions Panel */}
                    <div className="p-8 lg:p-12 bg-black">
                        <AddToCartButton product={product} />

                        <div className="mt-6 flex justify-center gap-8 font-mono text-xs text-gray-500 uppercase tracking-widest">
                            <span className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                Em Estoque
                            </span>
                            <span>///</span>
                            <span>Frete Grátis</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
