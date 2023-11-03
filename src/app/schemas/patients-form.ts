import { z } from 'zod';

const GENDERS = ['masculino', 'femenino', 'otro'];
const STATUS = ['casado', 'soltero'];
const BLOOD_GROUPS = ['a+', 'a-', 'b+', 'b-', 'ab+', 'ab-', 'o+', 'o-']

export const PatientForm = z.object({
    name: z.string(),
    surname: z.string(),
    birth: z.coerce.date(),
    dni: z.coerce.number(),
    gender: z.string().refine(args =>
        GENDERS.includes(args), { message: 'Invalid gender' }
    ),
    civil_status: z.string().refine(args =>
        STATUS.includes(args), { message: 'Invalid civil status' }
    ),
    address: z.string(),
    phone: z.coerce.number(),
    blood_type: z.string().refine(args =>
        BLOOD_GROUPS.includes(args), { message: 'Invalid blood type' }
    ),
    affiliation_type: z.string(),
    affiliation_name: z.string(),
    allergies: z.array(z.string()),
    illnesses: z.array(z.string()),
    vacuums: z.array(z.string()),
    accidents: z.string(),
    antecedents: z.string(),
    observations: z.string()
})

export type PatientFormData = z.infer<typeof PatientForm>;