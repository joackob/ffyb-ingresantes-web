import { Usuarios } from "@prisma/client";
import { validarCredenciales } from "./validar-credenciales";
import { identificarAlUsuario } from "./identificar-al-usuario";
import { validarContrasena } from "./validar-contrasena";

export const autenticarAlUsuarioLigadoALasCredenciales = async (
  credencialesEnCrudo: any
): Promise<Usuarios> => {
  const credenciales = validarCredenciales(credencialesEnCrudo);
  const usuario = await identificarAlUsuario(credenciales);
  await validarContrasena({ credenciales, usuario });
  return usuario;
};
