import { Usuarios } from "@prisma/client";
import { CredencialesParaAutenticarAUnUsuario } from "./validar-credenciales";
import db from "@/db";
import { tratarExcepcionesEnConsultasALaBdd } from "../../excepciones/tratar-excepciones-en-consultas-a-la-bdd";

export const identificarAlUsuario = async (
  credenciales: CredencialesParaAutenticarAUnUsuario
): Promise<Usuarios> => {
  try {
    return await db.usuarios.findUniqueOrThrow({
      where: {
        email: credenciales?.email,
      },
    });
  } catch (excepcion) {
    throw tratarExcepcionesEnConsultasALaBdd(excepcion);
  }
};
