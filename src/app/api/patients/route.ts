import prisma from '@/prisma/singleton';

export const GET = async (request: Request) => {
	const data = await prisma.paciente.findMany();
	return Response.json({ data });
};
