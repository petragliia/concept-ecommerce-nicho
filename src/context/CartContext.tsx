'use client';

import { createContext, useContext, useEffect, useMemo, useState, ReactNode } from 'react';
import { Product } from '@/data/products';
import { useLocalStorage } from '@/hooks/useLocalStorage';

export interface CartItem extends Product {
    quantity: number;
}

interface CartContextType {
    items: CartItem[];
    addItem: (product: Product) => void;
    removeItem: (productId: string) => void;
    updateQuantity: (productId: string, quantity: number) => void;
    clearCart: () => void;
    totalItems: number;
    totalPrice: number;
    isCartOpen: boolean;
    toggleCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
    // Inicializamos com array vazio e deixamos o useEffect do useLocalStorage hidratar,
    // ou usamos o value direto se o hook já suportar. 
    // O hook useLocalStorage retornado anteriormente tem [value, setValue, isHydrated]
    const [items, setItems, isHydrated] = useLocalStorage<CartItem[]>('cart-storage', []);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    // Evitar hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    const addItem = (product: Product) => {
        setItems((currentItems) => {
            const existingItem = currentItems.find((item) => item.id === product.id);
            if (existingItem) {
                return currentItems.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...currentItems, { ...product, quantity: 1 }];
        });
        // Opcional: abrir o carrinho ao adicionar
        setIsCartOpen(true);
    };

    const removeItem = (productId: string) => {
        setItems((currentItems) => currentItems.filter((item) => item.id !== productId));
    };

    const updateQuantity = (productId: string, quantity: number) => {
        if (quantity < 1) {
            removeItem(productId);
            return;
        }
        setItems((currentItems) =>
            currentItems.map((item) =>
                item.id === productId ? { ...item, quantity } : item
            )
        );
    };

    const clearCart = () => setItems([]);

    const toggleCart = () => setIsCartOpen((prev) => !prev);

    const totalItems = useMemo(() => items.reduce((acc, item) => acc + item.quantity, 0), [items]);

    const totalPrice = useMemo(
        () => items.reduce((acc, item) => acc + item.price * item.quantity, 0),
        [items]
    );

    // Se não montou, não renderiza children dependentes de browser API ou renderiza estado vazio seguro
    // Aqui optamos por renderizar children mas com valores iniciais seguros se não hidratado
    const values = {
        items: mounted ? items : [],
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalItems: mounted ? totalItems : 0,
        totalPrice: mounted ? totalPrice : 0,
        isCartOpen,
        toggleCart,
    };

    return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
}

export const useCart = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
