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
				name: true,
				surname: true,
				fecha_nacimiento: true,
				genero: true,
				estado_civil: true,
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
			where: { dni : Number(dni) },
		});

		if (!data)
			return Response.json({ message: { errors: 'not found' } }, { status: 404 });
		const { calle, localidad, prvincia, numero } = data.domicilio_paciente ?? {
			calle: 'calle desconocida',
			localidad: 'localidad desconocida',
			provincia: 'provincia desconocida',
			numero: 'numero desconocido',
		};
		
		return Response.json({
			message: {
				name: data.name,
				surname: data.surname,
				birth: data.fecha_nacimiento,
				gender: data.genero,
				dni,
				civil_status: data.estado_civil,
				phone: data.telefono,
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
