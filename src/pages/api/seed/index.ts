import type { APIRoute } from 'astro';
import prisma from '../../../db/prisma';

const variables = [
  { nombre: "volumen", peso: 0.25 },
  { nombre: "margen", peso: 0.25 },
  { nombre: "frecuencia", peso: 0.25 },
  { nombre: "recencia", peso: 0.25 }
]


const rangos = [
  { nombre: "volumen", min_valor: 0, max_valor: 20, puntuacion: 1 },
  { nombre: "volumen", min_valor: 21, max_valor: 40, puntuacion: 2 },
  { nombre: "volumen", min_valor: 41, max_valor: 60, puntuacion: 3 },
  { nombre: "volumen", min_valor: 61, max_valor: 80, puntuacion: 4 },
  { nombre: "volumen", min_valor: 81, max_valor: 100, puntuacion: 5 },

  { nombre: "margen", min_valor: 0, max_valor: 20, puntuacion: 1 },
  { nombre: "margen", min_valor: 21, max_valor: 40, puntuacion: 2 },
  { nombre: "margen", min_valor: 41, max_valor: 60, puntuacion: 3 },
  { nombre: "margen", min_valor: 61, max_valor: 80, puntuacion: 4 },
  { nombre: "margen", min_valor: 81, max_valor: 100, puntuacion: 5 },

  { nombre: "frecuencia", min_valor: 0, max_valor: 20, puntuacion: 1 },
  { nombre: "frecuencia", min_valor: 21, max_valor: 40, puntuacion: 2 },
  { nombre: "frecuencia", min_valor: 41, max_valor: 60, puntuacion: 3 },
  { nombre: "frecuencia", min_valor: 61, max_valor: 80, puntuacion: 4 },
  { nombre: "frecuencia", min_valor: 81, max_valor: 100, puntuacion: 5 },

  { nombre: "recencia", min_valor: 0, max_valor: 20, puntuacion: 1 },
  { nombre: "recencia", min_valor: 21, max_valor: 40, puntuacion: 2 },
  { nombre: "recencia", min_valor: 41, max_valor: 60, puntuacion: 3 },
  { nombre: "recencia", min_valor: 61, max_valor: 80, puntuacion: 4 },
  { nombre: "recencia", min_valor: 81, max_valor: 100, puntuacion: 5 }
]


export const GET: APIRoute = async ({ request }) => {
  await prisma.pesos_vcs.deleteMany()
  await prisma.rangos_vcs.deleteMany()

  await prisma.pesos_vcs.createMany({
    data: variables
  });

  await prisma.rangos_vcs.createMany({
    data: rangos
  });

  return new Response('Database seeded successfully', { status: 200 });

};
