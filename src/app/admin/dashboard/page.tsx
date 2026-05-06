'use client';

import { useState } from 'react';
import Link from 'next/link';

const mockOrders = [
  { id: 'ORD-001', customer: 'Juan Pérez', total: 68000, status: 'PAID', date: '2026-05-05' },
  { id: 'ORD-002', customer: 'María López', total: 45000, status: 'PREPARING', date: '2026-05-05' },
  { id: 'ORD-003', customer: 'Carlos Ruiz', total: 92000, status: 'DELIVERED', date: '2026-05-04' },
  { id: 'ORD-004', customer: 'Ana García', total: 38000, status: 'PENDING', date: '2026-05-05' },
];

const statusLabels: Record<string, string> = {
  PENDING: '⏳ Pendiente',
  PAID: '💰 Pagado',
  PREPARING: '👨‍🍳 Preparando',
  DELIVERED: '✅ Entregado',
  CANCELLED: '❌ Cancelado',
};

function formatCOP(v: number) {
  return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 }).format(v);
}

export default function AdminDashboard() {
  const [tab, setTab] = useState<'orders' | 'menu'>('orders');

  return (
    <div className="admin-page">
      <div className="admin-header">
        <h1>🛠️ Panel de Administración</h1>
        <p>Gestiona pedidos, menú y usuarios de tu restaurante</p>
      </div>

      <div className="admin-stats">
        <div className="stat-card">
          <div className="stat-number">24</div>
          <div className="stat-label">Pedidos Hoy</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{formatCOP(1250000)}</div>
          <div className="stat-label">Ventas Hoy</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">156</div>
          <div className="stat-label">Clientes Registrados</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">15</div>
          <div className="stat-label">Platos en Menú</div>
        </div>
      </div>

      <div className="admin-tabs">
        <button className={`admin-tab ${tab === 'orders' ? 'active' : ''}`} onClick={() => setTab('orders')}>
          📦 Pedidos
        </button>
        <button className={`admin-tab ${tab === 'menu' ? 'active' : ''}`} onClick={() => setTab('menu')}>
          🍽️ Menú
        </button>
      </div>

      {tab === 'orders' && (
        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Cliente</th>
                <th>Total</th>
                <th>Estado</th>
                <th>Fecha</th>
              </tr>
            </thead>
            <tbody>
              {mockOrders.map(order => (
                <tr key={order.id}>
                  <td><strong>{order.id}</strong></td>
                  <td>{order.customer}</td>
                  <td>{formatCOP(order.total)}</td>
                  <td><span className={`status-badge status-${order.status.toLowerCase()}`}>{statusLabels[order.status]}</span></td>
                  <td>{order.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {tab === 'menu' && (
        <div style={{ textAlign: 'center', padding: '3rem' }}>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
            Gestiona los platos desde la base de datos a través de la API <code>/api/products</code>
          </p>
          <Link href="/menu" className="btn-secondary">Ver Menú Público</Link>
        </div>
      )}
    </div>
  );
}
