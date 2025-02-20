import { Usuarios } from "@prisma/client";
import { CredencialesParaAutenticarAUnUsuario } from "./validar-credenciales";
import bcrypt from "bcrypt";

export const validarContrasena = async ({
  credenciales,
  usuario,
}: {
  credenciales: CredencialesParaAutenticarAUnUsuario;
  usuario: Usuarios;
}): Promise<void> => {
  try {
    const contrasenaValida = await bcrypt.compare(
      credenciales.contrasena,
      usuario.contrasena
    );

    if (!contrasenaValida) throw new Error("Contraseña incorrecta");
  } catch {
    throw new Error("No se logro validar la contraseña");
  }
};
