import prisma from '@/prisma/singleton';
import { NextRequest, NextResponse } from 'next/server';
import { AreaForm, type AreaFormData } from '@/app/schemas/area-form';
import { ZodError } from 'zod';

type FlattenZodError = {
	[x in keyof AreaFormData]: string[] | undefined;
};

type Response = { message: string | { errors: FlattenZodError } };

export const GET = async (request: NextRequest) => {
	const params = request.nextUrl.searchParams;
	const data = await prisma.area.findMany({
		select: {
			descripcion: true,
			_count: true,
			rel_area_cama: {
				select: { cama: { select: { estado: true } } },
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

	const mapped = data
		.filter(({ rel_area_usuario }) => rel_area_usuario.length > 0)
		.map(({ descripcion: areaname, _count, rel_area_cama, rel_area_usuario }) => {
			const { name, surname } =
				rel_area_usuario[0].usuario.rel_usuario_datos[0].datos_usuario;
			const variant = rel_area_cama[0].cama.estado ? 'occupied' : 'open' ?? 'open';
			const beds = _count.rel_area_cama;
			return {
				areaname,
				incharge: `${name} ${surname}`,
				beds,
				variant,
			};
		});

	return Response.json({ data: mapped });
};

export const POST = async (
	request: NextRequest,
): Promise<NextResponse<Response>> => {
	const data = await request.json();
	try {
		const area = AreaForm.parse(data);

		await prisma.area.create({
			data: {
				descripcion: area.name,
				piso: area.floor,
			},
		});

		return NextResponse.json({ message: 'inserted' });
	} catch (err) {
		if (err instanceof ZodError) {
			const { fieldErrors } = err.flatten();
			return NextResponse.json(
				{ message: { errors: fieldErrors as FlattenZodError } },
				{ status: 400 },
			);
		}
		return NextResponse.json({ message: err as string }, { status: 500 });
	}
};
