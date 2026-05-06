# 🌮 La Casa del Taco - Restaurante Mexicano

Plataforma web full-stack para restaurante mexicano con pedidos en línea, pagos colombianos (PSE, Nequi) y panel de administración.

## Tecnologías

- **Frontend:** Next.js 14 (React) + Vanilla CSS
- **Backend:** Next.js API Routes (Node.js)
- **Base de Datos:** PostgreSQL + Prisma ORM
- **Pagos:** Wompi (PSE, Nequi, Tarjeta)
- **Seguridad:** bcrypt, Zod, validación server-side
- **Autenticación:** Roles (USER / ADMIN)

## Instalación

```bash
npm install
cp .env.example .env   # Configura tus variables
npx prisma migrate dev  # Crea las tablas en PostgreSQL
npm run dev
```

## Variables de Entorno

Ver `.env.example` para la lista completa de variables necesarias.

## Estructura

```
src/
├── app/
│   ├── api/           # Endpoints REST (auth, products, checkout)
│   ├── admin/         # Panel de administración
│   ├── menu/          # Catálogo de platos
│   ├── cart/          # Carrito de compras
│   ├── login/         # Login de clientes
│   └── register/      # Registro de clientes
├── components/        # Componentes reutilizables
├── context/           # Estado global (Carrito)
├── data/              # Datos del menú
└── lib/               # Prisma client, validaciones Zod
```

## Despliegue en Railway

1. Sube este repo a GitHub
2. En Railway: New Project → Deploy from GitHub
3. Añade un servicio PostgreSQL al proyecto
4. Copia `DATABASE_URL` a las variables de entorno del servicio web
5. Railway compilará y desplegará automáticamente
