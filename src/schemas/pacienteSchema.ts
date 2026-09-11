import { z } from "zod";

export const schemaPaciente = z.object({
  nombre: z
    .string()
    .min(1, "El nombre es obligatorio")
    .trim(),

  fechaNacimiento: z.coerce.date()
    .max(new Date(), 'La fecha de nacimiento no puede ser futura'),

  email: z
    .string()
    .email('El correo no tiene un formato válido')
    .trim(),

  telefono: z
    .string()
    .max(15)
    .trim(),
})
export type SchemaPaciente = z.infer<typeof schemaPaciente>;