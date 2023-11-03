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

type Response = { message: string | { errors: FlattenZodError } }

export const POST = async (request: NextRequest): Promise<NextResponse<Response>> => {
	const data = await request.json();
	try {
		const a = PatientForm.parse(data);

		console.log('✅ Everything goes OK!');
		return NextResponse.json({ message: 'Inserted' })
	} catch (err) {
		if (err instanceof ZodError) {
			const { fieldErrors } = err.flatten();

			return NextResponse.json({
				message: {
					errors: (fieldErrors as FlattenZodError)
				}
			}, { status: 400 })
		}
		return NextResponse.json({ message: (err as string) }, { status: 500 })
	}
}