import { z } from 'zod';

const GENDERS = ['masculino', 'femenino', 'otro'];
const STATUS = ['casado', 'soltero'];
const BLOOD_GROUPS = ['a+', 'a-', 'b+', 'b-', 'ab+', 'ab-', 'o+', 'o-'];

export const PatientForm = z
	.object({
		name: z.string().min(1),
		surname: z.string().min(1),
		birth: z.date(),
		dni: z.coerce.number().min(1_000_000).max(999_999_999),
		phone: z.coerce.number().min(1100000001).max(1199999999),
		gender: z.string().refine(
			args => {
				return GENDERS.includes(args.toLowerCase());
			},
			{ message: 'Invalid gender' },
		),
		civil_status: z.string().refine(args => STATUS.includes(args.toLowerCase()), {
			message: 'Invalid civil status',
		}),
		street: z.string().min(1),
		street_number: z.coerce.number().min(1),
		neighborhood: z.string().min(1),
		province: z.string().min(1),
		house_type: z.string().min(1),
		department_annotation: z.string().default('-'),
		department_number: z.coerce.number().nullable().default(null),
		area: z.string().min(1),
		bed_number: z.coerce.number().default(0),
		blood_type: z
			.string()
			.refine(args => BLOOD_GROUPS.includes(args.toLowerCase()), {
				message: 'Invalid blood type',
			}),
		affiliation_type: z.string().min(1),
		affiliation_name: z.string().min(1),
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
