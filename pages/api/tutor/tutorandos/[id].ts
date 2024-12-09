import { NextApiRequest, NextApiResponse } from "next";
import db from "@/db";
const route = async (
  consulta: NextApiRequest,
  respuesta: NextApiResponse
): Promise<void> => {
  const idtutor = consulta.query.id;
  console.log(idtutor);
  if (consulta.method === "GET") {
    return respuesta.status(200).json({
      personas: [
        {
          nombre: "Juan Pérez",
          correo: "juan.perez@gmail.com",
        },
        {
          nombre: "Ana García",
          correo: "ana.garcia@gmail.com",
        },
        {
          nombre: "Carlos Martínez",
          correo: "carlos.martinez@gmail.com",
        },
        {
          nombre: "María López",
          correo: "maria.lopez@gmail.com",
        },
        {
          nombre: "Luis Rodríguez",
          correo: "luis.rodriguez@gmail.com",
        },
        {
          nombre: "Elena Gómez",
          correo: "elena.gomez@gmail.com",
        },
        {
          nombre: "Pedro Sánchez",
          correo: "pedro.sanchez@gmail.com",
        },
      ],
    });
  }
};

export default route;
