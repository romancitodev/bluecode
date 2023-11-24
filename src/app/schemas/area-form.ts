import { Value } from '@radix-ui/react-select';
import { z } from 'zod';

export const AreaForm = z.object({
	name: z.string().min(1, {
		message: 'Nombre inválido',
	}),
	beds: z.coerce
		.number()
		.min(1, {
			message: 'Número de camas inválido',
		})
		.max(100, {
			message: 'Número de camas inválido',
		}),
	floor: z.coerce.number().min(1, {
		message: 'Número de piso inválido',
	}),
});

export type AreaFormData = z.infer<typeof AreaForm>;
