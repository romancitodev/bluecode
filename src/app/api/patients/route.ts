import { type PatientFormData, PatientForm } from '@/app/schemas/patients-form';
import prisma from '@/prisma/singleton';
import { NextRequest, NextResponse } from 'next/server';
import { ZodError } from 'zod';

export const GET = async (request: Request) => {
	const data = await prisma.paciente.findMany();
	return Response.json({ data });
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
