import { defineAction } from 'astro:actions';
import prisma from '../../db/prisma';

export const getPeriodo = defineAction({
  accept: 'json',
  handler: async ({ request }) => {
    try {
      const rangos = await prisma.periodo_vcs.findMany();
      return rangos;
    } catch (error) {
      console.error('Error fetching periodo:', error);
      throw new Error('Failed to fetch periodos');
    }
  },
});
