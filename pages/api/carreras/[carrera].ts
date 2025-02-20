import obtenerInformacionDeUnaDeterminadaCarrera from "@/src/api/carreras";
import { tratarExcepciones } from "@/src/api/excepciones";
import { NextApiRequest, NextApiResponse } from "next";

const route = async (consulta: NextApiRequest, respuesta: NextApiResponse) => {
  switch (consulta.method) {
    case "GET":
      await intentarObtenerInformacionDeUnaDeterminadaCarrera(
        consulta,
        respuesta
      );
      break;
    default:
      respuesta.status(405).end();
      break;
  }
};

const intentarObtenerInformacionDeUnaDeterminadaCarrera = async (
  consulta: NextApiRequest,
  respuesta: NextApiResponse
) => {
  try {
    const carrera = await obtenerInformacionDeUnaDeterminadaCarrera(
      consulta.query
    );
    respuesta.status(200).json(carrera);
  } catch (excepcion) {
    tratarExcepciones({ excepcion, respuesta });
  }
};

export default route;
