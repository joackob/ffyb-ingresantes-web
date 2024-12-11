import { NextApiRequest, NextApiResponse } from "next";
import db from "@/db";
import Email from "next-auth/providers/email";
const route = async (
  consulta: NextApiRequest,
  respuesta: NextApiResponse
): Promise<void> => {
  const idtutor = consulta.query.id;
  console.log(idtutor);
  if (consulta.method === "GET") {
    if (idtutor === undefined) return respuesta.status(401).json({ mensaje: "nunca me mandaste al tutor" });
    const tutorandos = await intentarObtenerTutorandos(idtutor as string);
    return respuesta.status(200).json({tutorandos})
  }
};
const intentarObtenerTutorandos = async (idDelTutor: string) => {
  try {
    const tutor = await db.tutor.findUniqueOrThrow({
      where: {
        id: idDelTutor,
      },
      select: {
        tutorandos: {
          select: {
            usuario: {
              select: {
                nombre: true,
                apellido: true,
                email: true,
              }
            }
          }
        }
      }
    })

    return tutor.tutorandos.map((tutorando) => {
      return {
        nombre: tutorando.usuario.nombre,
        apellido: tutorando.usuario.apellido,
        email: tutorando.usuario.email
      }
    })
  } catch (error) {
    console.error(error)
    throw Error("No pude encontrar a los tutorandos")
  }
}
export default route;
