import prisma from '@/prisma/singleton';

export const GET = async (request: Request) => {
	const data = await prisma.area.findMany();
	return Response.json({ data });
};
