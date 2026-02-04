'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useMemo, useCallback } from 'react';
import { Product } from '@/data/products';

export function useFilters(products: Product[]) {
    const router = useRouter();
    const searchParams = useSearchParams();

    // Ler filtros da URL
    const selectedCategory = searchParams.get('category');
    const minPrice = searchParams.get('minPrice') ? Number(searchParams.get('minPrice')) : null;
    const maxPrice = searchParams.get('maxPrice') ? Number(searchParams.get('maxPrice')) : null;
    const searchQuery = searchParams.get('q')?.toLowerCase() || '';

    // Aplicar filtros
    const filteredProducts = useMemo(() => {
        return products.filter((product) => {
            // Filtro de Categoria
            if (selectedCategory && product.category !== selectedCategory) return false;

            // Filtro de Preço
            if (minPrice !== null && product.price < minPrice) return false;
            if (maxPrice !== null && product.price > maxPrice) return false;

            // Filtro de Texto (Busca)
            if (searchQuery && !product.name.toLowerCase().includes(searchQuery)) return false;

            return true;
        });
    }, [products, selectedCategory, minPrice, maxPrice, searchQuery]);

    // Função para atualizar a URL
    const setFilter = useCallback(
        (key: string, value: string | null) => {
            const params = new URLSearchParams(searchParams.toString());
            if (value === null) {
                params.delete(key);
            } else {
                params.set(key, value);
            }
            router.replace(`?${params.toString()}`, { scroll: false });
        },
        [router, searchParams]
    );

    return {
        filteredProducts,
        selectedCategory,
        minPrice,
        maxPrice,
        searchQuery,
        setFilter,
    };
}
