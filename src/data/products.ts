export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  rating: number;
  description: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Concept Minimal Sneaker',
    price: 499.90,
    category: 'Tênis',
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2000&auto=format&fit=crop',
    rating: 4.8,
    description: 'Design minimalista para o dia a dia urbano. Conforto premium com materiais sustentáveis.'
  },
  {
    id: '2',
    name: 'Urban Tech Runner',
    price: 649.00,
    category: 'Tênis',
    image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=2000&auto=format&fit=crop',
    rating: 4.5,
    description: 'Performance e estilo em um único modelo. Solado com tecnologia de absorção de impacto.'
  },
  {
    id: '3',
    name: 'Classic White Leather',
    price: 389.50,
    category: 'Tênis',
    image: 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?q=80&w=2000&auto=format&fit=crop',
    rating: 4.9,
    description: 'O clássico reinventado. Couro legítimo tratado para máxima durabilidade.'
  },
  {
    id: '4',
    name: 'Streetwear Oversized Tee',
    price: 129.90,
    category: 'Roupas',
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=2000&auto=format&fit=crop',
    rating: 4.7,
    description: 'Camiseta oversized em algodão egípcio. Caimento perfeito e toque suave.'
  },
  {
    id: '5',
    name: 'Concept Hoodie Black',
    price: 299.00,
    category: 'Roupas',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=2000&auto=format&fit=crop',
    rating: 4.6,
    description: 'Moletom essencial. Quente, confortável e com acabamento premium.'
  },
  {
    id: '6',
    name: 'Minimalist Backpack',
    price: 349.90,
    category: 'Acessórios',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=2000&auto=format&fit=crop',
    rating: 4.8,
    description: 'Mochila à prova d\'água com compartimento para laptop. Elegância e funcionalidade.'
  }
];
