import { Usuarios } from "@prisma/client";
import { CredencialesParaAutenticarAUnUsuario } from "./validar-credenciales";
import db from "@/db";

export const identificarAlUsuario = async (
  credenciales: CredencialesParaAutenticarAUnUsuario,
): Promise<Usuarios> => {
  try {
    return await db.usuarios.findUniqueOrThrow({
      where: {
        email: credenciales?.email,
      },
    });
  } catch {
    throw new Error("El email no corresponde con un usuario registrado");
  }
};
