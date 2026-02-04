import { Product } from '@/data/products';
import { ProductCard } from './ProductCard';

interface ProductGalleryProps {
    products: Product[];
    onAddToCart?: (product: Product) => void;
}

export function ProductGallery({ products, onAddToCart }: ProductGalleryProps) {
    if (products.length === 0) {
        return (
            <div className="flex h-64 w-full flex-col items-center justify-center rounded-xl border border-dashed border-white/10 bg-white/5 p-8 text-center">
                <p className="text-lg font-medium text-gray-300">Nenhum produto encontrado</p>
                <p className="text-sm text-gray-500">Tente ajustar os filtros da sua busca.</p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={onAddToCart}
                />
            ))}
        </div>
    );
}
