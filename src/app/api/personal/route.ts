import prisma from '@/prisma/singleton';
import { NextApiResponse } from 'next';

export const GET = async (request: Request) => {
	const data = await prisma.datos_usuario.findMany();
	return Response.json({ data });
};
