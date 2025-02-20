import { encriptarContrasena } from "@/src/api/usuarios/registrar/encriptar-contrasena";
import { eliminarCualquierUsuario } from "./global.teardown";
import db from "@/db";

export const inicializarBaseDeDatosParaTesting = async () => {
  await registrarUnEstudiante();
  await registrarAUnTutor();
  await registrarTutorYTutorandosACargo();
  return eliminarCualquierUsuario;
};

export const registrarUnEstudiante = async () => {
  try {
    const contrasena = await encriptarContrasena("contrasena-larga");
    await db.usuarios.create({
      data: {
        email: "estudiante@ffyb.uba.ar",
        contrasena: contrasena,
        nombre: "Estudiante",
        apellido: "Apellido",
        tipo: "tutorando",
      },
    });
  } catch {
    console.error("No se registro al estudiante");
  }
};

export const registrarAUnTutor = async () => {
  try {
    const contrasena = await encriptarContrasena("contrasena-larga");
    await db.usuarios.create({
      data: {
        email: "tutor@ffyb.uba.ar",
        contrasena: contrasena,
        nombre: "Tutor",
        apellido: "Apellido",
        tipo: "tutor",
      },
    });
  } catch {
    console.error("No se registro al estudiante");
  }
};

export const registrarTutorYTutorandosACargo = async () => {
  try {
    const tutorandosSinTutor = await db.usuarios.createManyAndReturn({
      data: await Promise.all(
        usuarios.slice(0, 4).map(async (tutorando) => ({
          ...tutorando,
          tipo: "tutorando",
          contrasena: await encriptarContrasena(tutorando.contrasena),
        }))
      ),
    });

    const tutorSinTutorandos = await db.usuarios.create({
      data: {
        id: "tutor-id",
        nombre: "Tutor",
        apellido: "Apellido",
        email: "tutor-con-tutorandos@ffyb.uba.ar",
        tipo: "tutor",
        contrasena: await encriptarContrasena("contrasena-larga"),
      },
    });

    await db.tutores.create({
      data: {
        id: tutorSinTutorandos.id,
        usuarioId: tutorSinTutorandos.id,
        tutorandos: {
          create: tutorandosSinTutor.map((tutorando) => ({
            usuarioId: tutorando.id,
          })),
        },
      },
    });

    console.log("\nBase de datos de tutorandos inicializada\n");
  } catch (error) {
    console.error("Error al insertar tutorandos:");
    console.error(error);
  }
};

const usuarios = [
  {
    nombre: "Juan",
    apellido: "Pérez",
    email: "juan.perez@gmail.com",
    contrasena: "juan123",
  },
  {
    nombre: "Ana",
    apellido: "García",
    email: "ana.garcia@gmail.com",
    contrasena: "ana123",
  },
  {
    nombre: "Carlos",
    apellido: "Martínez",
    email: "carlos.martinez@gmail.com",
    contrasena: "carlos123",
  },
  {
    nombre: "María",
    apellido: "López",
    email: "maria.lopez@gmail.com",
    contrasena: "maria123",
  },
  {
    nombre: "Luis",
    apellido: "Rodríguez",
    email: "luis.rodriguez@gmail.com",
    contrasena: "luis123",
  },
  {
    nombre: "Elena",
    apellido: "Gómez",
    email: "elena.gomez@gmail.com",
    contrasena: "elena123",
  },
  {
    nombre: "Pedro",
    apellido: "Sánchez",
    email: "pedro.sanchez@gmail.com",
    contrasena: "pedro123",
  },
];
export default inicializarBaseDeDatosParaTesting;
