'use client';

import Link from 'next/link';
import Script from 'next/script';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';

declare global {
  interface Window {
    WidgetCheckout: any;
  }
}

function formatCOP(value: number) {
  return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 }).format(value);
}

export default function CartPage() {
  const { items, updateQuantity, removeFromCart, totalPrice, clearCart } = useCart();
  const router = useRouter();

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
    const publicKey = process.env.NEXT_PUBLIC_WOMPI_PUBLIC_KEY;
    
    if (!publicKey) {
      alert('Error: No se ha configurado la clave pública de Wompi (NEXT_PUBLIC_WOMPI_PUBLIC_KEY).');
      return;
    }

    if (typeof window === 'undefined' || !window.WidgetCheckout) {
      alert('El widget de pagos está cargando, por favor intenta en unos segundos...');
      return;
    }

    // Generar una referencia única para la transacción
    const reference = `ORDER_${Date.now()}_${Math.floor(Math.random() * 1000)}`;

    const checkout = new window.WidgetCheckout({
      currency: 'COP',
      amountInCents: Math.round(total * 100), // Wompi requiere centavos
      reference: reference,
      publicKey: publicKey,
      // redirectUrl: Opcional, si no se pone, usa el modal in-page
    });

    checkout.open((result: any) => {
      const transaction = result.transaction;
      if (transaction.status === 'APPROVED') {
        clearCart();
        router.push('/checkout/success');
      } else {
        alert(`El pago no fue aprobado. Estado: ${transaction.status}`);
      }
    });
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
      <Script src="https://checkout.wompi.co/widget.js" strategy="lazyOnload" />
    </div>
  );
}
