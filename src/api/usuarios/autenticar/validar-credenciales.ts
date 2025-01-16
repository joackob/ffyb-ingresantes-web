import z from "zod";

const EsquemaParaLasCredencialesDeUnUsuario = z.object({
  email: z.string().email({ message: "El email no es válido" }),
  contrasena: z.string({ message: "La contraseña no es válida" }),
});

export type CredencialesParaAutenticarAUnUsuario = z.infer<
  typeof EsquemaParaLasCredencialesDeUnUsuario
>;

export const validarCredenciales = (
  credencialesEnCrudo: any,
): CredencialesParaAutenticarAUnUsuario => {
  try {
    return EsquemaParaLasCredencialesDeUnUsuario.parse(credencialesEnCrudo);
  } catch (camposInvalidos) {
    const informacionSobreLosCamposInvalidos = (
      camposInvalidos as z.ZodError
    ).issues.map((campo) => {
      return campo.message;
    });
    throw new Error(informacionSobreLosCamposInvalidos.join(", "));
  }
};
