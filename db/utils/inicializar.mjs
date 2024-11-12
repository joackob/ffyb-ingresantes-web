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
      //asignaturas de farmacia
      await client.asignaturas.create({
        data: {
          id: "Matematica",
          nombre: "Matematica",
          cuatrimestreId: "tres",
        },
      });
      await client.asignaturas.create({
        data: {
          id: "Química General e Inorgánica",
          nombre: "Química General e Inorgánica",
          cuatrimestreId: "tres",
        },
      });
      await client.asignaturas.create({
        data: {
          id: "Anatomía e Histología",
          nombre: "Anatomía e Histología",
          cuatrimestreId: "tres",
        },
      });
      await client.asignaturas.create({
        data: {
          id: "Biología Celular y Molecula",
          nombre: "Biología Celular y Molecula",
          cuatrimestreId: "cuatro",
        },
      });
      await client.asignaturas.create({
        data: {
          id: "Física",
          nombre: "Física",
          cuatrimestreId: "cuatro",
        },
      });
      await client.asignaturas.create({
        data: {
          id: "Química Orgánica I",
          nombre: "Química Orgánica I",
          cuatrimestreId: "cuatro",
        },
      });
      await client.asignaturas.create({
        data: {
          id: "Química Orgánica II",
          nombre: "Química Orgánica II",
          cuatrimestreId: "cinco",
        },
      });
      await client.asignaturas.create({
        data: {
          id: "Fisiología",
          nombre: "Fisiología",
          cuatrimestreId: "cinco",
        }
      })
      await client.asignaturas.create({
        data: {
          id: "Química Analítica",
          nombre: "Química Analítica",
          cuatrimestreId: "cinco",
        }
      })
      await client.asignaturas.create({
        data: {
          id: "Fisicoquímica",
          nombre: "Fisicoquímica",
          cuatrimestreId: "seis",
        }
      })
      await client.asignaturas.create({
        data: {
          id: "Química Analítica Instrumental",
          nombre: "Química Analítica Instrumental",
          cuatrimestreId: "seis",
        }
      })
      await client.asignaturas.create({
        data: {
          id: "Química Biológica",
          nombre: "Química Biológica",
          cuatrimestreId: "seis",
        }
      })
      await client.asignaturas.create({
        data: {
          id: "Fisiopatología",
          nombre: "Fisiopatología",
          cuatrimestreId: "siete",
        }
      })
      await client.asignaturas.create({
        data: {
          id: "Microbiología",
          nombre: "Microbiología",
          cuatrimestreId: "siete",
        }
      })
      await client.asignaturas.create({
        data: {
          id: "Farmacobotánica",
          nombre: "Farmacobotánica",
          cuatrimestreId: "siete",
        }
      })
      await client.asignaturas.create({
        data: {
          id: "Inmunología",
          nombre: "Inmunología",
          cuatrimestreId: "siete",
        }
      })
      await client.asignaturas.create({
        data: {
          id: "Farmacología I",
          nombre: "Farmacología I",
          cuatrimestreId: "ocho",
        }
      })
      await client.asignaturas.create({
        data: {
          id: "Farmacognosia",
          nombre: "Farmacognosia",
          cuatrimestreId: "ocho",
        }
      })
      await client.asignaturas.create({
        data: {
          id: "Nutrición",
          nombre: "Nutrición",
          cuatrimestreId: "ocho",
        }
      })
      await client.asignaturas.create({
        data: {
          id: "Salud Pública e Higiene ambiental",
          nombre: "Salud Pública e Higiene ambiental",
          cuatrimestreId: "ocho",
        }
      })
      await client.asignaturas.create({
        data: {
          id: "Farmacología II",
          nombre: "Farmacología II",
          cuatrimestreId: "nueve",
        }
      })
      await client.asignaturas.create({
        data: {
          id: " Toxicología",
          nombre: " Toxicología",
          cuatrimestreId: "nueve",
        }
      })
      await client.asignaturas.create({
        data: {
          id: "Tecnología Farmacéutica I",
          nombre: "Tecnología Farmacéutica I",
          cuatrimestreId: "nueve",
        }
      })
      await client.asignaturas.create({
        data: {
          id: "Farmacología Clínica",
          nombre: "Farmacología Clínica",
          cuatrimestreId: "nueve",
        }
      })
      await client.asignaturas.create({
        data: {
          id: "Farmacología Clínica y Asistencia",
          nombre: "Farmacología Clínica y Asistencia",
          cuatrimestreId: "nueve",
        }
      })
      await client.asignaturas.create({
        data: {
          id: "Calidad de Medicamentos",
          nombre: "Calidad de Medicamentos",
          cuatrimestreId: "diez",
        }
      })
      await client.asignaturas.create({
        data: {
          id: "Bromatología",
          nombre: "Bromatología",
          cuatrimestreId: "diez",
        }
      })
      await client.asignaturas.create({
        data: {
          id: "Tecnología Farmacéutica II",
          nombre: "Tecnología Farmacéutica II",
          cuatrimestreId: "diez",
        }
      })
      await client.asignaturas.create({
        data: {
          id: "Química Medicinal",
          nombre: "Química Medicinal",
          cuatrimestreId: "diez",
        }
      })
      await client.asignaturas.create({
        data: {
          id: "l",
          nombre: "l",
          cuatrimestreId: "uno Bio",
        }
      })

      //correlativas de farmacia
      await client.correlativas.create({
        data: {
          asignaturaId: "Farmacología II",
          correlativaId: "Farmacología I"
        }
      })
      await client.correlativas.create({
        data: {
          asignaturaId: "Química Orgánica II",
          correlativaId: "Química Orgánica I"
        }
      })

      await client.correlativas.create({
        data: {
          asignaturaId: "Tecnología Farmacéutica II",
          correlativaId: "Tecnología Farmacéutica I"
        }
      })


    } catch (e) {
      console.log("hubo un error al intentar inicializar la base de datos");
    } finally {
      await client.$disconnect();
    }
  } catch (error) {
    console.error("Error al conectar a la base de datos", error);
  }
})();
