import z from "zod";
import { tratarExcepcionesEnLaValidacionDeSolicitudes } from "../excepciones/tratar-excepciones-en-la-validacion-de-solicitudes";

const EsquemaDeSolicitudDeCarrera = z.object({
  carrera: z.union(
    [
      z.literal("farmacia"),
      z.literal("bioquimica"),
      z.literal("tecnico-universitario-en-medicina-nuclear"),
      z.literal("tecnico-universitario-en-optica-y-contactologia"),
      z.literal("licenciatura-en-ciencia-y-tecnologia-de-alimentos"),
      z.literal("tecnicatura-universitaria-en-gestion-integral-de-bioterio"),
    ],
    {
      message:
        "La carrera solicitada no coincide con las que el sistema puede proporcionar",
    },
  ),
});

export type SolicitudDeCarrera = z.infer<typeof EsquemaDeSolicitudDeCarrera>;

export const validarSolicitud = (solicitud: any): SolicitudDeCarrera => {
  try {
    return EsquemaDeSolicitudDeCarrera.parse(solicitud);
  } catch (excepcion) {
    throw tratarExcepcionesEnLaValidacionDeSolicitudes(excepcion);
  }
};
