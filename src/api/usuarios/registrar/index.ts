import { NextApiRequest, NextApiResponse } from "next";
import { validarSolicitud } from "./validar-solicitud";
import { encriptarContrasena } from "./encriptar-contrasena";
import { registrarUsuario } from "./registrar-usuario";

export const intentarRegistrarUnUsuario = async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  try {
    const solicitud = validarSolicitud(req.body);
    const contrasena = await encriptarContrasena(solicitud.contrasena);
    await registrarUsuario({
      ...solicitud,
      contrasena,
    });
    return responderALaSolicitud(res);
  } catch (excepcion) {
    return atenderLasExcepciones(res, excepcion);
  }
};

const responderALaSolicitud = (respuesta: NextApiResponse) => {
  return respuesta
    .status(201)
    .json({ message: "todo bien, se pudo crear el usuario" });
};

const atenderLasExcepciones = (
  respuesta: NextApiResponse,
  excepcion: unknown,
) => {
  if (excepcion instanceof Error) {
    return respuesta.status(400).json({ message: excepcion.message });
  }
  return respuesta.status(500).json({ message: "Error desconocido" });
};

export default intentarRegistrarUnUsuario;
