import { validarSolicitud } from "./validar-solicitud";
import { encriptarContrasena } from "./encriptar-contrasena";
import { registrarUsuario } from "./registrar-usuario";

export const registrarUnUsuario = async (
  solicitudEnCrudo: any
): Promise<void> => {
  const solicitud = validarSolicitud(solicitudEnCrudo);
  const contrasena = await encriptarContrasena(solicitud.contrasena);
  await registrarUsuario({
    ...solicitud,
    contrasena,
  });
};

export default registrarUnUsuario;
