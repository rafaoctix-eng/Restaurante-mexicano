import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET: Obtener todos los productos del menú
export async function GET() {
  try {
    const products = await prisma.product.findMany({
      where: { isAvailable: true },
      orderBy: { category: 'asc' },
    });

    return NextResponse.json(products);
  } catch (error) {
    console.error('Error obteniendo productos:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor.' },
      { status: 500 }
    );
  }
}

// POST: Crear un nuevo producto (solo admins)
export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validación básica
    const { name, description, price, category, image } = body;
    if (!name || !description || !price || !category) {
      return NextResponse.json(
        { error: 'Faltan campos obligatorios.' },
        { status: 400 }
      );
    }

    const product = await prisma.product.create({
      data: {
        name,
        description,
        price: parseFloat(price),
        category,
        image: image || null,
      },
    });

    return NextResponse.json(product, { status: 201 });
  } catch (error) {
    console.error('Error creando producto:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor.' },
      { status: 500 }
    );
  }
}
