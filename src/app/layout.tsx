import type { Metadata } from 'next';
import './globals.css';
import { CartProvider } from '@/context/CartContext';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'La Casa del Taco | Restaurante Mexicano',
  description: 'Auténtica cocina mexicana. Tacos al pastor, mole poblano, enchiladas y más. Pide en línea con PSE, Nequi o tarjeta.',
  keywords: 'restaurante mexicano, tacos, comida mexicana, pedidos online, PSE, Nequi',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <CartProvider>
          <Navbar />
          <main>{children}</main>
          <footer className="footer">
            <div className="footer-links">
              <a href="/">Inicio</a>
              <a href="/menu">Menú</a>
              <a href="/cart">Carrito</a>
              <a href="/login">Mi Cuenta</a>
              <a href="/admin">Admin</a>
            </div>
            <p>© 2026 La Casa del Taco. Todos los derechos reservados.</p>
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}
