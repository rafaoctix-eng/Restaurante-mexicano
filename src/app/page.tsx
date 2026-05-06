import Link from 'next/link';

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <span className="hero-badge">🌮 Auténtica Cocina Mexicana</span>
          <h1>
            El Sabor de <span className="gradient-text">México</span> en tu Mesa
          </h1>
          <p>
            Tacos al pastor, mole poblano, birria y más. Ingredientes frescos,
            recetas de la abuela y el sazón que solo México puede dar.
          </p>
          <div className="hero-buttons">
            <Link href="/menu" className="btn-primary">
              🍽️ Ver Menú Completo
            </Link>
            <Link href="/register" className="btn-secondary">
              Crear Cuenta
            </Link>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="feature-card">
          <div className="feature-icon">🔥</div>
          <h3>Recetas Auténticas</h3>
          <p>Platos preparados con técnicas tradicionales mexicanas y los mejores chiles.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🚀</div>
          <h3>Entrega Rápida</h3>
          <p>Tu pedido llega caliente a tu puerta en menos de 45 minutos.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🔒</div>
          <h3>Pago Seguro</h3>
          <p>Paga con PSE, Nequi o tarjeta. Transacciones 100% seguras con Wompi.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🌿</div>
          <h3>Ingredientes Frescos</h3>
          <p>Productos del mercado local seleccionados diariamente por nuestro chef.</p>
        </div>
      </section>
    </>
  );
}
