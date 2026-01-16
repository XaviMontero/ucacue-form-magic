import { z } from "zod";

export const schema = z.object({
  nombre: z
    .string()
    .min(1, "Campo requerido")
    .min(2, "Mínimo 2 caracteres")
    .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, "Solo letras y espacios"),
  
  apellido: z.string().min(1, "Campo requerido"),
  email: z.string().min(1, "Campo requerido"),
  telefono: z.string().min(1, "Campo requerido"),
  edad: z.string().min(1, "Campo requerido"),
  direccion: z.string().min(1, "Campo requerido"),
});

export type FormData = z.infer<typeof schema>;
