import Personal from '@/app/(dashboard)/personal/page';
import {
	PersonalForm,
	type PersonalFormData,
} from '@/app/schemas/personal-form';
import prisma from '@/prisma/singleton';
import { NextRequest, NextResponse } from 'next/server';
import { ZodError } from 'zod';

BigInt.prototype.toJSON = function() {
	return this.toString();
};

export const GET = async (request: NextRequest) => {
	const { searchParams: query } = request.nextUrl;

	if (!query.get('dni') || query.get('dni') === '0') {
		const data = await prisma.datos_usuario.findMany();
		return Response.json({ data });
	} else {
		const dni = query.get('dni');
		const data = await prisma.usuario.findFirst({
			select: {
				mail: true,
				rel_usuario_datos: {
					select: {
						datos_usuario: {
							select: {
								name: true,
								surname: true,
								fec_inicio: true,
								fec_nacimiento: true,
								genero: true,
								cuil: true,
								est_civil: true,
								telefono: true,
								domicilio_usuario: {
									select: {
										calle: true,
										numero: true,
										localidad: true,
										provincia: true,
									},
								},
							},
						},
					},
					where: { dni : Number(dni) },
				}
			},
		});

		if (!data)
			return Response.json({ message: { errors: 'not found' } }, { status: 404 });
		
		const result = data.rel_usuario_datos[0].datos_usuario;
		const { calle, localidad, provincia, numero } = result.domicilio_usuario ?? {
			calle: 'calle desconocida',
			localidad: 'localidad desconocida',
			provincia: 'provincia desconocida',
			numero: 'numero desconocido',
		};

		return Response.json({
			message: {
				name: result.name,
				surname: result.surname,
				birth: result.fec_nacimiento,
				gender: result.genero,
				dni,
				start_date: result.fec_inicio,
				cuit: result.cuil,
				mail: data.mail,
				civil_status: result.est_civil,
				phone: result.telefono,
				address: `${calle} ${numero}, ${localidad} | ${provincia}`,
			},
		});
	}
};

type FlattenZodError = {
	[x in keyof PersonalFormData]: string[] | undefined;
};

type Response = { message: string | { errors: FlattenZodError } };


export const POST = async (
	request: NextRequest,
): Promise<NextResponse<Response>> => {
	const data = await request.json();

	try {
		const user = PersonalForm.parse({ ...data, birth: new Date(data.birth), date_start: new Date(data.date_start) });

		await prisma.$executeRaw`CALL crear_usuario(${user.mail}, ${user.password}, 'Enfermero', ${user.dni}, ${user.name}, ${user.surname}, ${user.cuit}, ${user.phone}, ${user.civil_status}, ${user.date_start}, ${user.birth}, 'A+', '', ${user.street}, ${user.street_number}, ${user.neighborhood}, ${user.province}, ${user.house_type}, ${user.department_annotation}, ${user.department_number}, ${user.gender})`;

		for (const area in user.area) {
			await prisma.$executeRaw`CALL usuario_area(${user.mail}, ${area})`;
		}

		return NextResponse.json({ message: 'Inserted' });
	} catch (err) {
		if (err instanceof ZodError) {
			const { fieldErrors } = err.flatten();

			return NextResponse.json(
				{
					message: {
						errors: fieldErrors as FlattenZodError,
					},
				},
				{
					status: 400,
				},
			);
		}

		return NextResponse.json({ message: err as string }, { status: 500 });
	}
};
