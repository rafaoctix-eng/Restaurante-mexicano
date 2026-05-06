'use client';

import { useState } from 'react';
import { menuItems } from '@/data/menu';
import { useCart } from '@/context/CartContext';

const categories = ['Todos', 'Entradas', 'Platos Fuertes', 'Postres', 'Bebidas'];

function formatCOP(value: number) {
  return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 }).format(value);
}

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const { addToCart } = useCart();

  const filtered = activeCategory === 'Todos'
    ? menuItems
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <div className="menu-page">
      <div className="menu-header">
        <h1>Nuestro Menú</h1>
        <p>Selecciona tus platos favoritos y agrégalos al carrito</p>
      </div>

      <div className="category-filters">
        {categories.map(cat => (
          <button
            key={cat}
            className={`category-btn ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="food-grid">
        {filtered.map((item, index) => (
          <div key={item.id} className="food-card" style={{ animationDelay: `${index * 0.05}s` }}>
            <div className="food-card-image">
              <img src={item.image} alt={item.name} loading="lazy" />
            </div>
            <div className="food-card-body">
              <div className="food-card-category">{item.category}</div>
              <div className="food-card-name">{item.name}</div>
              <div className="food-card-desc">{item.description}</div>
              <div className="food-card-footer">
                <div className="food-card-price">{formatCOP(item.price)}</div>
                <button
                  className="btn-add-cart"
                  onClick={() => addToCart({ id: item.id, name: item.name, price: item.price, image: item.image })}
                >
                  + Agregar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
