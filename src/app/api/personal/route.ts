import {
	PersonalForm,
	type PersonalFormData,
} from '@/app/schemas/personal-form';
import prisma from '@/prisma/singleton';
import { NextRequest, NextResponse } from 'next/server';

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
	return NextResponse.json({ message: 'i got u' });
};
