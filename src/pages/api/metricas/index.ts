import type { APIRoute } from 'astro';
import prisma from '../../../db/prisma';

export const GET: APIRoute = async () => {
  try {
    // Consulta los datos desde el modelo vcs_clientes
    const clientes = await prisma.vcs.findMany({
      select: {
        id_cliente: true,
        segmento_actual: true,

      },

    });

    // Filtrar para obtener solo el último segmento de cada cliente
    const latestSegments = clientes.reduce((acc: Record<string, string>, cliente) => {
      if (!acc[cliente.id_cliente]) {
        acc[cliente.id_cliente] = cliente.segmento_actual || 'Sin segmento';
      }
      return acc;
    }, {});

    // Contar la cantidad de clientes por segmento
    const segmentCounts = Object.values(latestSegments).reduce(
      (acc: Record<string, number>, segmento_actual) => {
        acc[segmento_actual] = (acc[segmento_actual] || 0) + 1;
        return acc;
      },
      {}
    );

    // Formatear los datos para el gráfico
    const series = [
      {
        name: 'Clientes',
        data: Object.values(segmentCounts),
      },
    ];

    const categories = Object.keys(segmentCounts);

    return new Response(JSON.stringify({ series, categories }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error al obtener las métricas:', error);
    return new Response(JSON.stringify({ error: 'Error al obtener las métricas' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
