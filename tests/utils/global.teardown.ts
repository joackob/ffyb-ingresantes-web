import db from "@/db";

export const eliminarCualquierUsuario = async () => {
  try {
    await db.tutorandos.deleteMany();
    await db.tutores.deleteMany();
    await db.usuarios.deleteMany();
  } catch (error) {
    console.error("No se eliminaron los usuarios");
    console.error(error);
  }
};

export default eliminarCualquierUsuario;
