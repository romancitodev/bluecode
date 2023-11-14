import Personal from '@/app/(dashboard)/personal/page';
import {
	PersonalForm,
	type PersonalFormData,
} from '@/app/schemas/personal-form';
import prisma from '@/prisma/singleton';
import { NextRequest, NextResponse } from 'next/server';
import { ZodError } from 'zod';

BigInt.prototype.toJSON = function () {
	return this.toString()
}

export const GET = async (request: Request) => {
	const data = await prisma.datos_usuario.findMany();
	return Response.json({ data });
};

type FlattenZodError = {
	[x in keyof PersonalFormData]: string[] | undefined;
};

type Response = { message: string | { errors: FlattenZodError } };

export const POST = async (
	request: NextRequest,
): Promise<NextResponse<Response>> => {
	const data = await request.json();
	console.log(data);

	try {
		const user = PersonalForm.parse({ ...data, birth: new Date(data.birth) });

		await prisma.$executeRaw`CALL crear_usuario(${user.mail}, ${user.password}, 'Enfermero', ${user.dni}, ${user.name}, ${user.surname}, ${user.cuit}, ${user.phone}, ${user.civil_status}, ${user.date_start}, ${user.birth}, 'A+', '', ${user.street}, ${user.street_number}, ${user.neighborhood}, ${user.province}, ${user.house_type}, ${user.department_annotation}, ${user.department_number}, ${user.area})`;

		for (const area in user.area) {
			await prisma.$executeRaw`CALL usuario_area(${user.mail}, ${user.area})`;
		}

		return NextResponse.json({ message: 'Inserted' });
	} catch (err) {
		if (err instanceof ZodError) {
			const { fieldErrors } = err.flatten();

			return NextResponse.json(
				{
					message: {
						errors: fieldErrors as FlattenZodError,
					}
				},
				{
					status: 400,
				},
			);
		} 

		return NextResponse.json({ message: err as string }, { status: 500 });
	}
};
