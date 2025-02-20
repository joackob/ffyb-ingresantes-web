import { validarSolicitudDeCarrera } from "./validar-solicitud";
import { obtenerCarreraPorSuID } from "./obtener-carrera-por-su-id";

export const obtenerInformacionDeUnaDeterminadaCarrera = async (
  solicitudEnCrudo: any,
) => {
  const solicitud = validarSolicitudDeCarrera(solicitudEnCrudo);
  return await obtenerCarreraPorSuID(solicitud.carrera);
};

export default obtenerInformacionDeUnaDeterminadaCarrera;
