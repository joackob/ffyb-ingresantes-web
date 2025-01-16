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
  const contrasenaValida = await bcrypt.compare(
    credenciales.contrasena,
    usuario.contrasena,
  );

  if (!contrasenaValida) throw new Error("Contraseña incorrecta");
};
