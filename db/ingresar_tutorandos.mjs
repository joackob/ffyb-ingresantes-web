import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

(async () => {
  try {
    const db = new PrismaClient();
    await db.$connect(); // Conectar a la base de datos

    try {
      // Crear los tutorandos con 'email' y 'contrasena' para evitar errores
      await db.usuarios.createMany({
        data: [
          {
            nombre: "Juan Pérez",
            apellido: "Pérez",
            tipo: "tutorando",
            email: "juan.perez@gmail.com", // Añadir email para cada tutorando
            contrasena: await bcrypt.hash("juan123", 10), // Cifrar la contraseña
          },
          {
            nombre: "Ana García",
            apellido: "García",
            tipo: "tutorando",
            email: "ana.garcia@gmail.com",
            contrasena: await bcrypt.hash("ana123", 10),
          },
          {
            nombre: "Carlos Martínez",
            apellido: "Martínez",
            tipo: "tutorando",
            email: "carlos.martinez@gmail.com",
            contrasena: await bcrypt.hash("carlos123", 10),
          },
          {
            nombre: "María López",
            apellido: "López",
            tipo: "tutorando",
            email: "maria.lopez@gmail.com",
            contrasena: await bcrypt.hash("maria123", 10),
          },
          {
            nombre: "Luis Rodríguez",
            apellido: "Rodríguez",
            tipo: "tutorando",
            email: "luis.rodriguez@gmail.com",
            contrasena: await bcrypt.hash("luis123", 10),
          },
          {
            nombre: "Elena Gómez",
            apellido: "Gómez",
            tipo: "tutorando",
            email: "elena.gomez@gmail.com",
            contrasena: await bcrypt.hash("elena123", 10),
          },
          {
            nombre: "Pedro Sánchez",
            apellido: "Sánchez",
            tipo: "tutorando",
            email: "pedro.sanchez@gmail.com",
            contrasena: await bcrypt.hash("pedro123", 10),
          },
        ],
      });

      console.log("\nBase de datos de tutorandos inicializada\n"); // Mensaje de confirmación
    } catch (error) {
      console.error("Error al insertar tutorandos:", error); // Muestra error si ocurre
    }

    // Crear usuarios con contraseñas cifradas
    const usuarios = [
      {
        nombre: "Juan",
        apellido: "Pérez",
        email: "juan.perez@gmail.com",
        password: "juan123",
      },
      {
        nombre: "Ana",
        apellido: "García",
        email: "ana.garcia@gmail.com",
        password: "ana123",
      },
      {
        nombre: "Carlos",
        apellido: "Martínez",
        email: "carlos.martinez@gmail.com",
        password: "carlos123",
      },
      {
        nombre: "María",
        apellido: "López",
        email: "maria.lopez@gmail.com",
        password: "maria123",
      },
      {
        nombre: "Luis",
        apellido: "Rodríguez",
        email: "luis.rodriguez@gmail.com",
        password: "luis123",
      },
      {
        nombre: "Elena",
        apellido: "Gómez",
        email: "elena.gomez@gmail.com",
        password: "elena123",
      },
      {
        nombre: "Pedro",
        apellido: "Sánchez",
        email: "pedro.sanchez@gmail.com",
        password: "pedro123",
      },
    ];

    const usuariosConPasswordCifrada = await Promise.all(
      usuarios.map(async (usuario) => {
        // Cifrar la contraseña antes de guardarla
        const passwordCifrada = await bcrypt.hash(usuario.password, 10);
        // Devolver el usuario con la contraseña cifrada
        return {
          ...usuario,
          password: passwordCifrada, // Reemplazar la contraseña con la cifrada
        };
      })
    );

    console.log(usuariosConPasswordCifrada); // Muestra los usuarios con las contraseñas cifradas
  } catch (error) {
    console.error("Error al conectar con la base de datos:", error); // Muestra error si no se puede conectar a la base de datos
  }
})();
