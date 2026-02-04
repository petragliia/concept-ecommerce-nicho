import type { Metadata } from 'next';
import { Inter, Oswald, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { CartProvider } from '@/context/CartContext';
import { Navbar } from '@/components/layout/Navbar';
import { CartDrawer } from '@/components/cart/CartDrawer';
import { CartWrapper } from '@/components/layout/CartWrapper';
import { Footer } from '@/components/layout/Footer';
import { FloatingPortfolioButton } from '@/components/layout/FloatingPortfolioButton';
import clsx from 'clsx';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
});

const oswald = Oswald({
    subsets: ['latin'],
    variable: '--font-oswald',
});

const jetbrains = JetBrains_Mono({
    subsets: ['latin'],
    variable: '--font-jetbrains',
});

export const metadata: Metadata = {
    title: 'Concept Niche E-commerce',
    description: 'High performance niche store.',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="pt-BR" className={clsx(inter.variable, oswald.variable, jetbrains.variable)}>
            <body className="bg-background text-white antialiased font-sans selection:bg-primary selection:text-black">
                <CartProvider>
                    {/* 
            Navbar needs access to context for cart count and toggle.
            CartDrawer needs access to context.
            We use a client wrapper 'CartWrapper' to handle the context consumption 
            if Navbar/Drawer are not fully managing their own connection inside.
            Actually, Navbar and CartDrawer are client components (or should be connected).
            Navbar defined earlier was client-side? Yes, 'use client'.
            So we can just render them inside CartProvider.
          */}
                    <CartWrapper />
                    <main className="min-h-screen pt-4">
                        {children}
                    </main>
                    <Footer />
                    <FloatingPortfolioButton />
                </CartProvider>
            </body>
        </html>
    );
}
