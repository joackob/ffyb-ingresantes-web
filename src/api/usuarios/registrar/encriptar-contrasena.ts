import bcrypt from "bcrypt";

export const encriptarContrasena = async (
  contrasena: string
): Promise<string> => {
  try {
    return await bcrypt.hash(contrasena, 10);
  } catch {
    throw new Error("Error al encriptar la contraseña");
  }
};
