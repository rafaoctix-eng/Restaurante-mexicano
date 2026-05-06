import Link from 'next/link';

export default function CheckoutSuccessPage() {
  return (
    <div className="auth-page">
      <div className="auth-card" style={{ textAlign: 'center' }}>
        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🎉</div>
        <h1>¡Pago Exitoso!</h1>
        <p className="auth-subtitle">
          Tu pedido ha sido procesado correctamente. Te avisaremos cuando esté listo.
        </p>
        <Link href="/menu" className="btn-primary" style={{ display: 'inline-flex', marginTop: '1rem' }}>
          🍽️ Seguir Comprando
        </Link>
      </div>
    </div>
  );
}
