import { type PatientFormData, PatientForm } from '@/app/schemas/patients-form';
import prisma from '@/prisma/singleton';
import { NextRequest, NextResponse } from 'next/server';
import { ZodError } from 'zod';

export const GET = async (request: NextRequest) => {
	const { searchParams: query } = request.nextUrl;

	if (!query.get('dni') || query.get('dni') === '0') {
		const data = await prisma.paciente.findMany();
		return Response.json({ data });
	} else {
		const dni = query.get('dni');
		const data = await prisma.paciente.findFirst({
			select: {
				name: true,
				surname: true,
				fecha_nacimiento: true,
				genero: true,
				estado_civil: true,
				telefono: true,
				rel_ficha_paciente: {
					select: {
						ficha: {
							select: {
								grupo_sanguineo: true,
							},
						},
					},
				},
				rel_afil_paciente: {
					select: {
						afiliaciones: {
							select: { nombre: true, tipo: true },
						},
					},
				},
				domicilio_paciente: {
					select: {
						calle: true,
						numero: true,
						localidad: true,
						provincia: true,
					},
				},
			},
			where: { dni: Number(dni) },
		});
		if (!data)
			return Response.json({ message: { errors: 'not found' } }, { status: 404 });
			const { calle, localidad, provincia, numero } = data.domicilio_paciente ?? {
				calle: 'calle desconocida',
				localidad: 'localidad desconocida',
				provincia: 'provincia desconocida',
				numero: 'numero desconocido'
			};
		const { grupo_sanguineo } = data.rel_ficha_paciente[0].ficha;
		const { nombre, tipo } = data.rel_afil_paciente[0].afiliaciones;
		return Response.json({
			message: {
				name: data.name,
				surname: data.surname,
				birth: data.fecha_nacimiento,
				gender: data.genero,
				dni,
				civil_status: data.estado_civil,
				phone: data.telefono,
				blood_type: grupo_sanguineo,
				affiliation_type: tipo,
				affiliation_name: nombre,
				address: `${calle} ${numero}, ${localidad} | ${provincia}`,
			},
		});
	}
};

type FlattenZodError = {
	[x in keyof PatientFormData]: string[] | undefined;
};

type Response = { message: string | { errors: FlattenZodError } };

export const POST = async (
	request: NextRequest,
): Promise<NextResponse<Response>> => {
	const data = await request.json();
	console.log(data);
	try {
		const user = PatientForm.parse({ ...data, birth: new Date(data.birth) });

		await prisma.$executeRaw`CALL crear_paciente(${user.dni}, ${user.name}, ${user.surname}, ${user.birth}, ${user.gender}, '1', ${user.affiliation_name}, ${user.civil_status}, ${user.phone}, ${user.blood_type}, ${user.observations}, ${user.accidents}, ${user.antecedents}, ${user.street}, ${user.street_number}, ${user.neighborhood}, ${user.province}, ${user.house_type}, ${user.department_annotation}, ${user.department_number}, ${user.area}, ${user.bed_number})`;

		if (user.allergies && user.allergies.length > 0) {
			for (const allergie in user.allergies) {
				await prisma.$executeRaw`CALL añadir_alergia(${user.dni}, ${allergie})`;
			}
		}
		if (user.illnesses && user.illnesses.length > 0) {
			for (const illness in user.illnesses) {
				await prisma.$executeRaw`CALL añadir_enfermedad(${user.dni}, ${illness})`;
			}
		}
		if (user.vacuums && user.vacuums.length > 0) {
			for (const vacuum in user.vacuums) {
				await prisma.$executeRaw`CALL añadir_vacuna(${user.dni}, '${vacuum}')`;
			}
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
				{ status: 400 },
			);
		}
		return NextResponse.json({ message: err as string }, { status: 500 });
	}
};

export const DELETE = async (
	request: NextRequest,
): Promise<NextResponse<Response>> => {
	const query = request.nextUrl.searchParams;
	const dni = query.get('dni');
	if (!dni)
		return NextResponse.json({ message: 'missing dni' }, { status: 400 });

	if (Number.isNaN(dni))
		return NextResponse.json({ message: 'invalid id' }, { status: 400 });

	console.log(dni);
	await prisma.paciente.delete({ where: { dni: Number(dni) } });

	return NextResponse.json({ message: 'deleted' });
};
