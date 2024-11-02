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
    } catch (e) {
      console.log("hubo un error al intentar inicializar la base de datos");
    } finally {
      await client.$disconnect();
    }
  } catch (error) {
    console.error("Error al conectar a la base de datos", error);
  }
})();
