import bcrypt from "bcrypt";

export const encriptarContrasena = async (
  contrasena: string,
): Promise<string> => {
  try {
    return await bcrypt.hash(contrasena, 10);
  } catch (error) {
    console.error("Error al encriptar la contraseña");
    console.error(error);
    throw new Error("Error al encriptar la contraseña");
  }
};
