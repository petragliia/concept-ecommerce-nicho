'use client';

import { X } from 'lucide-react';

interface ProductFiltersProps {
    categories: string[];
    selectedCategory: string | null;
    onSelectCategory: (category: string | null) => void;
    className?: string;
}

export function ProductFilters({
    categories,
    selectedCategory,
    onSelectCategory,
    className = '',
}: ProductFiltersProps) {
    return (
        <div className={`space-y-8 ${className}`}>
            {/* Categories */}
            <div>
                <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-4">Categorias</h3>
                <div className="flex flex-col gap-2">
                    <button
                        onClick={() => onSelectCategory(null)}
                        className={`text-left px-3 py-2 rounded-lg text-sm transition-colors ${selectedCategory === null
                                ? 'bg-blue-600/20 text-blue-400 font-medium'
                                : 'text-gray-300 hover:bg-white/5 hover:text-white'
                            }`}
                    >
                        Todos
                    </button>
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => onSelectCategory(category)}
                            className={`text-left px-3 py-2 rounded-lg text-sm transition-colors ${selectedCategory === category
                                    ? 'bg-blue-600/20 text-blue-400 font-medium'
                                    : 'text-gray-300 hover:bg-white/5 hover:text-white'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            {/* Price Range (Placeholder for future expansion) */}
            <div>
                <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-4">Faixa de Preço</h3>
                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                    <p className="text-xs text-gray-500 text-center">Filtro de preço em breve</p>
                </div>
            </div>
        </div>
    );
}
