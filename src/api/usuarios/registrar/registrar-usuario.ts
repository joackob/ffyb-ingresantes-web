import db from "@/db";
import { Prisma } from "@prisma/client";
import { SolicitudParaRegistrarUnNuevoUsuario } from "./validar-solicitud";

export const registrarUsuario = async (
  usuario: SolicitudParaRegistrarUnNuevoUsuario,
): Promise<void> => {
  try {
    await db.usuarios.create({ data: { ...usuario } });
  } catch (error) {
    console.error("Error al guardar los datos del usuario en la base de datos");
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      console.error("Se trata de un error conocido");
      console.error(error.message);
      throw new Error(error.message);
    }
    throw new Error(
      "Error desconocido al guardar los datos del usuario en la base de datos",
    );
  }
};
