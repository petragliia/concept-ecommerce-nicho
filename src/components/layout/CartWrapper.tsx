'use client';

import { Navbar } from '@/components/layout/Navbar';
import { CartDrawer } from '@/components/cart/CartDrawer';
import { useCart } from '@/context/CartContext';

export function CartWrapper() {
    const { totalItems, toggleCart } = useCart();

    return (
        <>
            <Navbar cartCount={totalItems} onOpenCart={toggleCart} />
            <CartDrawer />
        </>
    );
}
