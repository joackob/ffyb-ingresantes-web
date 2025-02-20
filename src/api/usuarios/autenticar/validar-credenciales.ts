import z from "zod";
import { tratarExcepcionesEnLaValidacionDeSolicitudes } from "../../excepciones/tratar-excepciones-en-la-validacion-de-solicitudes";

const EsquemaParaLasCredencialesDeUnUsuario = z.object({
  email: z.string().email({ message: "El email no es válido" }),
  contrasena: z.string({ message: "La contraseña no es válida" }),
});

export type CredencialesParaAutenticarAUnUsuario = z.infer<
  typeof EsquemaParaLasCredencialesDeUnUsuario
>;

export const validarCredenciales = (
  credencialesEnCrudo: any
): CredencialesParaAutenticarAUnUsuario => {
  try {
    return EsquemaParaLasCredencialesDeUnUsuario.parse(credencialesEnCrudo);
  } catch (excepcion) {
    throw tratarExcepcionesEnLaValidacionDeSolicitudes(excepcion);
  }
};
