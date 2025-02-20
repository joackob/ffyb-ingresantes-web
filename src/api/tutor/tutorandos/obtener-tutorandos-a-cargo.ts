import db from "@/db";
import { tratarExcepcionesEnConsultasALaBdd } from "@/src/api/excepciones/tratar-excepciones-en-consultas-a-la-bdd";

export const obtenerTutorandosACargoDeUnTutorPorSuId = async (id: string) => {
  try {
    const tutor = await db.tutores.findUniqueOrThrow({
      where: {
        // id: id,
        usuarioId: id,
      },
      select: {
        tutorandos: {
          select: {
            usuario: {
              select: {
                nombre: true,
                apellido: true,
                email: true,
              },
            },
          },
        },
      },
    });

    return tutor.tutorandos.map((tutorando) => {
      return {
        nombre: tutorando.usuario.nombre,
        apellido: tutorando.usuario.apellido,
        email: tutorando.usuario.email,
      };
    });
  } catch (excepcion) {
    throw tratarExcepcionesEnConsultasALaBdd(excepcion);
  }
};
