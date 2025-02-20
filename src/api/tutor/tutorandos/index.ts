import { obtenerTutorandosACargoDeUnTutorPorSuId } from "./obtener-tutorandos-a-cargo";
import { validarSolicitudDeTutorandosACargoDeUnTutor } from "./validar-solicitud";

export const obtenerTutorandosACargoDeUnTutor = async (
  solicitudEnCrudo: any,
) => {
  const solicitud =
    validarSolicitudDeTutorandosACargoDeUnTutor(solicitudEnCrudo);
  return await obtenerTutorandosACargoDeUnTutorPorSuId(solicitud.id);
};
