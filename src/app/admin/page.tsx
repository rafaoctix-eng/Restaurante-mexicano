'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function AdminLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!email || !password) { setError('Todos los campos son obligatorios.'); return; }

    setLoading(true);
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (!res.ok) { setError(data.error || 'Credenciales inválidas.'); }
      else if (data.user?.role !== 'ADMIN') { setError('No tienes permisos de administrador.'); }
      else { window.location.href = '/admin/dashboard'; }
    } catch { setError('Error de conexión.'); }
    finally { setLoading(false); }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '0.5rem' }}>🔐</div>
        <h1>Panel Admin</h1>
        <p className="auth-subtitle">Acceso exclusivo para administradores</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="admin-email">Correo</label>
            <input id="admin-email" type="email" placeholder="admin@restaurante.com" value={email} onChange={e => setEmail(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="admin-pass">Contraseña</label>
            <input id="admin-pass" type="password" placeholder="••••••••" value={password} onChange={e => setPassword(e.target.value)} />
          </div>
          {error && <div className="form-error">{error}</div>}
          <button type="submit" className="btn-primary" disabled={loading}>
            {loading ? '⏳ Verificando...' : '🔐 Ingresar como Admin'}
          </button>
        </form>
        <div className="auth-footer"><Link href="/login">← Volver al login de clientes</Link></div>
      </div>
    </div>
  );
}
