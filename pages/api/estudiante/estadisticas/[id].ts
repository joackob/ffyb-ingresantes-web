import { NextApiRequest, NextApiResponse } from "next";

const route = async (
  consulta: NextApiRequest,
  respuesta: NextApiResponse
): Promise<void> => {
  const idEstudiante = parseInt(consulta.query.id as string); // Convertir el id a número

  // Definir los datos de los estudiantes (datos falsos)
  const estudiantes = [
    {
      estudiante: 1,
      nombre: "Juan Pérez",
      edad: 20,
      genero: "Masculino",
      plan_estudios: {
        carrera: "Ingeniería Informática",
        porcentajeDeLaCarreraTerminada: 40,
        aprobadasPorCuatrimestre: 4,
        añoDeEgreso: 2025,
        notaPromedio: 8.5,
        aprovadosEnELMejorCuatri: 5,
        mejorNota: 9.8,
      },
      estadisticas: {
        asistencias: 85,
        participacion: "Alta",
        tareas_entregadas_a_tiempo: 90,
        examenes_aprobados: 100,
      },
    },
    {
      estudiante: 2,
      nombre: "Ana Gómez",
      edad: 22,
      genero: "Femenino",
      plan_estudios: {
        carrera: "Medicina",
        porcentajeDeLaCarreraTerminada: 30,
        aprobadasPorCuatrimestre: 3,
        añoDeEgreso: 2025,
        notaPromedio: 8.5,
        aprovadosEnELMejorCuatri: 5,
        mejorNota: 9.8,
      },
      estadisticas: {
        asistencias: 88,
        participacion: "Media",
        tareas_entregadas_a_tiempo: 92,
        examenes_aprobados: 96,
      },
    },
    {
      estudiante: 3,
      nombre: "Carlos Díaz",
      edad: 21,
      genero: "Masculino",
      plan_estudios: {
        carrera: "Derecho",
        porcentajeDeLaCarreraTerminada: 50,
        aprobadasPorCuatrimestre: 9,
        añoDeEgreso: 2025,
        notaPromedio: 8.5,
        aprovadosEnELMejorCuatri: 5,
        mejorNota: 9.8,
      },
      estadisticas: {
        asistencias: 90,
        participacion: "Alta",
        tareas_entregadas_a_tiempo: 94,
        examenes_aprobados: 99,
      },
    },
    {
      estudiante: 4,
      nombre: "Laura Fernández",
      edad: 23,
      genero: "Femenino",
      plan_estudios: {
        carrera: "Arquitectura",
        porcentajeDeLaCarreraTerminada: 60,
        aprobadasPorCuatrimestre: 2,
        añoDeEgreso: 2024,
        notaPromedio: 8.5,
        aprovadosEnELMejorCuatri: 2,
        mejorNota: 7,
      },
      estadisticas: {
        asistencias: 95,
        participacion: "Alta",
        tareas_entregadas_a_tiempo: 98,
        examenes_aprobados: 100,
      },
    },
  ];

  // Filtrar el estudiante por id
  const estudianteEncontrado = estudiantes.find(
    (estudiante) => estudiante.estudiante === idEstudiante
  );

  if (estudianteEncontrado) {
    return respuesta.status(200).json(estudianteEncontrado);
  } else {
    return respuesta.status(404).json({ error: "Estudiante no encontrado" });
  }
};

export default route;
