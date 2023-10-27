import prisma from '@/prisma/singleton';
import { NextRequest } from 'next/server';

type Area = {
	areaname: string;
	incharge: string;
	beds: number;
	variant: 'open' | 'occupied';
};

export const GET = async (request: NextRequest) => {
	const params = request.nextUrl.searchParams;
	const name = params.get('name');
	console.log({ name });
	const data = await prisma.area.findMany({
		select: {
			_count: {
				select: {
					rel_area_cama: true,
				},
			},
			descripcion: true,
			rel_area_cama: {
				select: {
					cama: {
						select: {
							estado: true,
						},
					},
				},
			},
			rel_area_usuario: {
				select: {
					usuario: {
						select: {
							rel_usuario_datos: {
								select: {
									datos_usuario: {
										select: {
											name: true,
											surname: true,
										},
									},
								},
							},
						},
					},
				},
			},
		},
	});
	const mapped = data.map(
		({ descripcion: areaname, _count, rel_area_cama, rel_area_usuario }) => {
			const { name, surname } =
				rel_area_usuario[0].usuario.rel_usuario_datos[0].datos_usuario;
			const variant = rel_area_cama[0].cama.estado ? 'occupied' : 'open';
			const beds = _count.rel_area_cama;
			return {
				areaname,
				incharge: `${name} ${surname}`,
				beds,
				variant,
			};
		},
	);

	return Response.json({ data: mapped });
};
