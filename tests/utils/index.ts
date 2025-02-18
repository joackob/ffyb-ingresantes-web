import { encriptarContrasena } from "@/src/api/usuarios/registrar/encriptar-contrasena";
import { registrarUsuario } from "@/src/api/usuarios/registrar/registrar-usuario";
import db from "@/db";

export const registrarUnEstudiante = async () => {
  try {
    const contrasena = await encriptarContrasena("contrasena-larga");
    await registrarUsuario({
      email: "estudiante@ffyb.uba.ar",
      contrasena: contrasena,
      nombre: "Estudiante",
      apellido: "Apellido",
      tipo: "tutorando",
    });
  } catch {
    console.error("No se registro al estudiante");
  }
};

export const eliminarCualquierUsuario = async () => {
  try {
    await db.usuarios.deleteMany();
  } catch {
    console.error("No se eliminaron los usuarios");
  }
};
