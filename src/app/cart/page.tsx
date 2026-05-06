'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';

function formatCOP(value: number) {
  return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 }).format(value);
}

export default function CartPage() {
  const { items, updateQuantity, removeFromCart, totalPrice } = useCart();

  const subtotal = totalPrice;
  const iva = subtotal * 0.19;
  const total = subtotal + iva;

  if (items.length === 0) {
    return (
      <div className="cart-page">
        <div className="cart-header"><h1>Tu Carrito</h1></div>
        <div className="cart-empty">
          <div className="cart-empty-icon">🛒</div>
          <h2>Tu carrito está vacío</h2>
          <p>¡Explora nuestro menú y agrega tus platos favoritos!</p>
          <Link href="/menu" className="btn-primary">🍽️ Ver Menú</Link>
        </div>
      </div>
    );
  }

  const handlePay = async (method: string) => {
    alert(`Pago con ${method}: En producción, esto te redirige a Wompi para completar el pago con ${method}.\n\nTotal: ${formatCOP(total)}\n\nPara activarlo, configura tu clave pública de Wompi en las variables de entorno.`);
  };

  return (
    <div className="cart-page">
      <div className="cart-header">
        <h1>Tu Carrito</h1>
        <p>{items.length} {items.length === 1 ? 'producto' : 'productos'}</p>
      </div>

      {items.map((item, index) => (
        <div key={item.id} className="cart-item" style={{ animationDelay: `${index * 0.08}s` }}>
          <div className="cart-item-image">
            <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }} />
          </div>
          <div className="cart-item-info">
            <div className="cart-item-name">{item.name}</div>
            <div className="cart-item-price">{formatCOP(item.price)} c/u</div>
          </div>
          <div className="cart-item-controls">
            <button className="btn-icon" onClick={() => updateQuantity(item.id, item.quantity - 1)}>−</button>
            <span className="cart-item-qty">{item.quantity}</span>
            <button className="btn-icon" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
          </div>
          <div className="cart-item-total">{formatCOP(item.price * item.quantity)}</div>
          <button className="cart-item-remove" onClick={() => removeFromCart(item.id)} title="Eliminar">✕</button>
        </div>
      ))}

      <div className="cart-summary">
        <div className="cart-summary-row"><span>Subtotal</span><span>{formatCOP(subtotal)}</span></div>
        <div className="cart-summary-row"><span>IVA (19%)</span><span>{formatCOP(iva)}</span></div>
        <div className="cart-summary-row total"><span>Total</span><span>{formatCOP(total)}</span></div>

        <div className="payment-methods">
          <p className="payment-title">Elige tu método de pago:</p>
          <button className="btn-payment btn-pse" onClick={() => handlePay('PSE')}>
            🏦 Pagar con PSE
          </button>
          <button className="btn-payment btn-nequi" onClick={() => handlePay('Nequi')}>
            💜 Pagar con Nequi
          </button>
          <button className="btn-payment btn-card" onClick={() => handlePay('Tarjeta')}>
            💳 Pagar con Tarjeta
          </button>
        </div>
      </div>
    </div>
  );
}
