import { NextApiRequest, NextApiResponse } from "next";
import registrarUnUsuario from "@/src/api/usuarios/registrar";
import { tratarExcepciones } from "@/src/api/excepciones";

const route = async (
  solicitud: NextApiRequest,
  respuesta: NextApiResponse
): Promise<void> => {
  switch (solicitud.method) {
    case "POST":
      await intentarRegistrarUnUsuario(solicitud, respuesta);
    default:
      respuesta.status(405).end();
      break;
  }
};

const intentarRegistrarUnUsuario = async (
  solicitud: NextApiRequest,
  respuesta: NextApiResponse
) => {
  try {
    await registrarUnUsuario(solicitud.body);
    respuesta.status(201).end();
  } catch (excepcion) {
    tratarExcepciones({ excepcion, respuesta });
  }
};

export default route;
