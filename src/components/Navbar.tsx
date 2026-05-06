'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const { totalItems } = useCart();

  return (
    <nav className="navbar">
      <Link href="/" className="logo">
        🌮 La Casa del Taco
      </Link>
      <div className="nav-links">
        <Link href="/">Inicio</Link>
        <Link href="/menu">Menú</Link>
        <Link href="/cart" className="nav-cart-link">
          🛒 Carrito
          {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
        </Link>
        <Link href="/login" className="btn-secondary btn-sm">
          Iniciar Sesión
        </Link>
      </div>
    </nav>
  );
}
