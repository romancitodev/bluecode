import { z } from 'zod';

const GENDERS = ['masculino', 'femenino', 'otro'];
const STATUS = ['casado', 'soltero'];
const BLOOD_GROUPS = ['a+', 'a-', 'b+', 'b-', 'ab+', 'ab-', 'o+', 'o-'];

export const PatientForm = z
	.object({
		name: z.string().min(1, {
			message: 'Nombre inválido'
		}),
		surname: z.string().min(1, {
			message: 'Apellido inválido'
		}),
		birth: z.date({
			required_error: 'Fecha de nacimiento inválida',
		}),
		dni: z.coerce.number().min(1_000_000, {
			message: 'DNI inválido'
		}).max(999_999_999, {
			message: 'DNI inválido'
		}),
		phone: z.coerce.number().min(1100000001, {
			message: 'Número de teléfono inválido'
		}).max(1199999999, {
			message: 'Número de teléfono inválido'
		}),
		gender: z.string({
			required_error: 'Sexo inválido'
		}).refine(
			args => {
				return GENDERS.includes(args.toLowerCase());
			}
		),
		civil_status: z.string({
			required_error: 'Estado civil inválido'
		}).refine(args => STATUS.includes(args.toLowerCase())),
		street: z.string().min(1, {
			message: 'Domicilio inválido'
		}),
		street_number: z.coerce.number().min(1, {
			message: 'Número de domicilio inválido'
		}).max(9999, {
			message: 'Número de domicilio inválido'
		}),
		neighborhood: z.string().min(1, {
			message: 'Localidad inválida'
		}),
		province: z.string().min(1, {
			message: 'Provincia inválida'
		}),
		house_type: z.string({
			required_error: 'Tipo de vivienda inválida'
		}).min(1),
		department_annotation: z.string().default('-'),
		department_number: z.coerce.number().nullable().default(null),
		area: z.string().min(1),
		bed_number: z.coerce.number().default(0),
		blood_type: z.string({
			required_error: 'Grupo sanguíneo inválido'
		}).refine(args => BLOOD_GROUPS.includes(args.toLowerCase())),
		affiliation_type: z.string({
			required_error: 'Tipo de afiliación inválida'
		}).min(1),
		affiliation_name: z.string().min(1, {
			message: 'Afiliación inválida'
		}),
		allergies: z.array(z.string()).optional(),
		illnesses: z.array(z.string()).optional(),
		vacuums: z.array(z.string()).optional(),
		accidents: z.string().min(1),
		antecedents: z.string().min(1),
		observations: z.string().min(1),
	})
	.superRefine((data, ctx) => {
		if (data.house_type === 'departamento' && data.department_annotation === '') {
			ctx.addIssue({
				message: 'Missing annotation',
				code: 'unrecognized_keys',
				keys: ['department_annotation'],
				path: ['department_annotation'],
			});
		}
		if (data.house_type === 'departamento' && !data.department_number) {
			ctx.addIssue({
				message: 'Missing numeration',
				code: 'unrecognized_keys',
				keys: ['department_number'],
				path: ['department_number'],
			});
		}
		return z.NEVER;
	});

export type PatientFormData = z.infer<typeof PatientForm>;
