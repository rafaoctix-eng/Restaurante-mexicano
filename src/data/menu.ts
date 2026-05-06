export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
}

export const menuItems: MenuItem[] = [
  // ENTRADAS
  {
    id: '1',
    name: 'Guacamole Tradicional',
    description: 'Aguacate fresco machacado con cilantro, cebolla, tomate, chile serrano y limón. Servido con totopos.',
    price: 18000,
    category: 'Entradas',
    image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=400&h=300&fit=crop',
  },
  {
    id: '2',
    name: 'Queso Fundido con Chorizo',
    description: 'Queso Oaxaca derretido con chorizo artesanal, rajas de poblano y tortillas recién hechas.',
    price: 22000,
    category: 'Entradas',
    image: 'https://images.unsplash.com/photo-1628191139360-4083564d03fd?w=400&h=300&fit=crop',
  },
  {
    id: '3',
    name: 'Elotes Callejeros',
    description: 'Elotes asados con mayonesa, chile en polvo, queso cotija y un toque de limón.',
    price: 12000,
    category: 'Entradas',
    image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=400&h=300&fit=crop',
  },
  // PLATOS FUERTES
  {
    id: '4',
    name: 'Tacos al Pastor',
    description: 'Tortillas de maíz con carne de cerdo adobada al pastor, piña, cebolla y cilantro. Orden de 4.',
    price: 28000,
    category: 'Platos Fuertes',
    image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=400&h=300&fit=crop',
  },
  {
    id: '5',
    name: 'Enchiladas Suizas',
    description: 'Tortillas rellenas de pollo bañadas en salsa verde cremosa, gratinadas con queso y crema.',
    price: 32000,
    category: 'Platos Fuertes',
    image: 'https://images.unsplash.com/photo-1534352956036-cd81e27dd615?w=400&h=300&fit=crop',
  },
  {
    id: '6',
    name: 'Birria de Res',
    description: 'Estofado tradicional de res con chiles guajillo y ancho, servido con consomé, cebolla y limón.',
    price: 35000,
    category: 'Platos Fuertes',
    image: 'https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?w=400&h=300&fit=crop',
  },
  {
    id: '7',
    name: 'Mole Poblano',
    description: 'Pieza de pollo bañada en auténtico mole poblano con más de 20 ingredientes. Arroz y tortillas.',
    price: 38000,
    category: 'Platos Fuertes',
    image: 'https://images.unsplash.com/photo-1615870216519-2f9fa575fa5c?w=400&h=300&fit=crop',
  },
  {
    id: '8',
    name: 'Chiles en Nogada',
    description: 'Chile poblano relleno de picadillo con frutas, bañado en nogada de nuez y granada.',
    price: 42000,
    category: 'Platos Fuertes',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop',
  },
  {
    id: '9',
    name: 'Pozole Rojo',
    description: 'Caldo rojo de maíz cacahuazintle con carne de cerdo, lechuga, rábano y tostadas.',
    price: 30000,
    category: 'Platos Fuertes',
    image: 'https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?w=400&h=300&fit=crop',
  },
  // POSTRES
  {
    id: '10',
    name: 'Churros con Chocolate',
    description: 'Churros crujientes espolvoreados con azúcar y canela, acompañados de chocolate caliente.',
    price: 15000,
    category: 'Postres',
    image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=400&h=300&fit=crop',
  },
  {
    id: '11',
    name: 'Tres Leches',
    description: 'Bizcocho esponjoso bañado en tres leches (condensada, evaporada y crema), con merengue.',
    price: 16000,
    category: 'Postres',
    image: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=400&h=300&fit=crop',
  },
  {
    id: '12',
    name: 'Flan Napolitano',
    description: 'Flan cremoso de queso crema con caramelo casero.',
    price: 14000,
    category: 'Postres',
    image: 'https://images.unsplash.com/photo-1528975604071-b4dc52a2d18c?w=400&h=300&fit=crop',
  },
  // BEBIDAS
  {
    id: '13',
    name: 'Agua de Horchata',
    description: 'Bebida refrescante de arroz con canela y vainilla.',
    price: 8000,
    category: 'Bebidas',
    image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&h=300&fit=crop',
  },
  {
    id: '14',
    name: 'Margarita Clásica',
    description: 'Tequila, triple sec y jugo de limón con sal en el borde. Servida en las rocas.',
    price: 20000,
    category: 'Bebidas',
    image: 'https://images.unsplash.com/photo-1556855810-ac404aa91e85?w=400&h=300&fit=crop',
  },
  {
    id: '15',
    name: 'Michelada',
    description: 'Cerveza con jugo de limón, salsa picante, salsa inglesa y sal con chile.',
    price: 15000,
    category: 'Bebidas',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400&h=300&fit=crop',
  },
];
