import z from "zod";
import { tratarExcepcionesEnLaValidacionDeSolicitudes } from "../../excepciones/tratar-excepciones-en-la-validacion-de-solicitudes";

export const EsquemaDeLaSolicitudParaRegistrarUnNuevoUsuario = z.object({
  nombre: z.string(),
  apellido: z.string(),
  email: z.string(),
  contrasena: z.string(),
  tipo: z.union([
    z.literal("tutor"),
    z.literal("tutorando"),
    z.literal("coordinador"),
  ]),
});

export type SolicitudParaRegistrarUnNuevoUsuario = z.infer<
  typeof EsquemaDeLaSolicitudParaRegistrarUnNuevoUsuario
>;

export const validarSolicitud = (
  datos: any
): SolicitudParaRegistrarUnNuevoUsuario => {
  try {
    return EsquemaDeLaSolicitudParaRegistrarUnNuevoUsuario.parse(datos);
  } catch (excepcion) {
    throw tratarExcepcionesEnLaValidacionDeSolicitudes(excepcion);
  }
};
