import { PrismaClient } from "@prisma/client";

(async () => {
  try {
    const client = new PrismaClient();
    await client.$connect();
    try {
      await client.usuarios.create({
        data: {
          id: "anonimo",
          nombre: "anonimo",
          apellido: "estudiante",
          email: "aestudiante@ffyb.uba.ar",
          contrasena: "1234",
          tipo: "tutorando",
        },
      });
      await client.carreras.create({
        data: {
          nombre: "Farmacia",
          tutorandoId: "anonimo",
        },
      });
      await client.carreras.create({
        data: {
          nombre: "Bioquimica",
          tutorandoId: "anonimo",
        },
      });
      await client.cuatrimestre.create({
        data: {
          carrera: "Farmacia",
          carreraId: "Farmacia",
        },
      });
      await client.cuatrimestre.create({
        data: {
          carrera: "Bioquimica",
          carreraId: "Bioquimica",
        },
      });
      await client.asignaturas.create({
        data: {
          nombre: "Matematica",
          cuatrimestreId: "uno",
        },
      });
      await client.asignaturas.create({
        data: {
          nombre: "Quimica",
          cuatrimestreId: "uno",
        },
      });
      await client.carreras.create({
        data: {
          nombre: "Introducción al Conocimiento de la Sociedad y el Estado",
          cuatrimestreId: "uno",
        },
      });
      await client.carreras.create({
        data: {
          nombre: "Biología e Introducción a la Biología Celular",
          cuatrimestreId: "dos",
        },
      });
      await client.carreras.create({
        data: {
          nombre: "Física e Introducción a la Biofísica",
          cuatrimestreId: "dos",
        },
      });
      await client.carreras.create({
        data: {
          nombre: "Introducción al Pensamiento Científico",
          cuatrimestreId: "dos",
        },
      });
    } catch (e) {
      console.log("hubo un error al intentar inicializar la base de datos");
    } finally {
      await client.$disconnect();
    }
  } catch (error) {
    console.error("Error al conectar a la base de datos", error);
  }
})();
