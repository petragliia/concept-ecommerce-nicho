import Image from 'next/image';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { Product } from '@/data/products';

interface CartItemProps {
    item: Product & { quantity: number };
    onUpdateQuantity: (id: string, qty: number) => void;
    onRemove: (id: string) => void;
}

export function CartItem({ item, onUpdateQuantity, onRemove }: CartItemProps) {
    return (
        <div className="flex gap-4 py-4 border-b border-white/10 last:border-0">
            <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-white/5">
                <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                />
            </div>
            <div className="flex flex-1 flex-col justify-between">
                <div>
                    <h4 className="text-sm font-medium text-white line-clamp-1">{item.name}</h4>
                    <p className="mt-1 text-sm text-gray-400">{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.price)}</p>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center rounded-lg border border-white/10 bg-white/5">
                        <button
                            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                            className="p-1 hover:text-white text-gray-400 transition-colors"
                            aria-label="Decrease quantity"
                        >
                            <Minus size={14} />
                        </button>
                        <span className="w-8 text-center text-xs font-medium text-white">{item.quantity}</span>
                        <button
                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                            className="p-1 hover:text-white text-gray-400 transition-colors"
                            aria-label="Increase quantity"
                        >
                            <Plus size={14} />
                        </button>
                    </div>
                    <button
                        onClick={() => onRemove(item.id)}
                        className="text-gray-500 hover:text-red-400 transition-colors"
                        aria-label="Remove item"
                    >
                        <Trash2 size={16} />
                    </button>
                </div>
            </div>
        </div>
    );
}
