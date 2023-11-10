import { z } from 'zod';

export const AreaForm = z
    .object({
        name: z.string().min(1),
        beds: z.coerce.number().min(1).max(100),
        floor: z.coerce.number().min(1),
    })

export type AreaFormData = z.infer<typeof AreaForm>;