import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { checkoutSchema } from '@/lib/validations';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2024-04-10',
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validación con Zod
    const validation = checkoutSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { error: validation.error.errors[0].message },
        { status: 400 }
      );
    }

    const { items } = validation.data;

    // Crear sesión de Stripe Checkout
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: items.map(item => ({
        price_data: {
          currency: 'usd',
          product_data: {
            name: item.name,
          },
          unit_amount: Math.round(item.price * 100), // Stripe usa centavos
        },
        quantity: item.quantity,
      })),
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/cart`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error('Error en checkout:', error);
    return NextResponse.json(
      { error: 'Error al procesar el pago. Verifica tu configuración de Stripe.' },
      { status: 500 }
    );
  }
}
