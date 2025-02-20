import z from "zod";
import { tratarExcepcionesEnLaValidacionDeSolicitudes } from "@/src/api/excepciones/tratar-excepciones-en-la-validacion-de-solicitudes";

export const validarSolicitudDeTutorandosACargoDeUnTutor = (
  solicitud: any,
): SolicitudDeTutorandosACargoDeUnTutor => {
  try {
    return EsquemaDeSolicitudDeTutorandosACargoDeUnTutor.parse(solicitud);
  } catch (excepcion) {
    throw tratarExcepcionesEnLaValidacionDeSolicitudes(excepcion);
  }
};

export const EsquemaDeSolicitudDeTutorandosACargoDeUnTutor = z.object({
  id: z.string({ message: "El id del tutor es requerido" }),
});

export type SolicitudDeTutorandosACargoDeUnTutor = z.infer<
  typeof EsquemaDeSolicitudDeTutorandosACargoDeUnTutor
>;
