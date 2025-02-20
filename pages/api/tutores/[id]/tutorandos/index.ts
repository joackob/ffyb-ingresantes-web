import { tratarExcepciones } from "@/src/api/excepciones";
import { obtenerTutorandosACargoDeUnTutor } from "@/src/api/tutor/tutorandos";
import { NextApiRequest, NextApiResponse } from "next";

const route = async (consulta: NextApiRequest, respuesta: NextApiResponse) => {
  switch (consulta.method) {
    case "GET":
      await intentarObtenerTutorandosACargoDeUnTutor(consulta, respuesta);
      break;
    default:
      respuesta.status(405).end();
      break;
  }
};

const intentarObtenerTutorandosACargoDeUnTutor = async (
  consulta: NextApiRequest,
  respuesta: NextApiResponse
) => {
  try {
    const tutorandos = await obtenerTutorandosACargoDeUnTutor(consulta.query);
    respuesta.status(200).json(tutorandos);
  } catch (excepcion) {
    tratarExcepciones({ excepcion, respuesta });
  }
};

export default route;
