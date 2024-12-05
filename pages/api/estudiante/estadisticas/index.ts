import { NextApiRequest, NextApiResponse } from "next";
import { intentarBrindarInformacionPorDefectoDeLasCarreras } from "@/src/api/carreras/intentar-brindar-informacion-por-defecto-de-las-carreras";

const route = async (
  consulta: NextApiRequest,
  respuesta: NextApiResponse
): Promise<void> => {
  // Si la solicitud es de tipo GET
  if (consulta.method === "GET") {
    // Definir los datos de los estudiantes
    const estudiantes = [
      {
        estudiante: 1,
        nombre: "Juan Pérez",
        edad: 20,
        genero: "Masculino",
        plan_estudios: {
          carrera: "Ingeniería Informática",
          DE_LA_CARRERA_TERMINADA: 40,
          MATERIAS_APROBADAS_POR_CUATRIMESTRE: 4,
          AÑO_DE_EGRESO_ESTIMADO: 2025,
          NOTA_PROMEDIO: 8.5,
          MATERIAS_APROBADAS_EN_EL_MEJOR_CUATRIMESTRE: 5,
          TU_MEJOR_NOTA: 9.8,
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
          DE_LA_CARRERA_TERMINADA: 30,
          MATERIAS_APROBADAS_POR_CUATRIMESTRE: 3,
          AÑO_DE_EGRESO_ESTIMADO: 2026,
          NOTA_PROMEDIO: 8.2,
          MATERIAS_APROBADAS_EN_EL_MEJOR_CUATRIMESTRE: 4,
          TU_MEJOR_NOTA: 9.0,
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
          DE_LA_CARRERA_TERMINADA: 50,
          MATERIAS_APROBADAS_POR_CUATRIMESTRE: 5,
          AÑO_DE_EGRESO_ESTIMADO: 2024,
          NOTA_PROMEDIO: 8.7,
          MATERIAS_APROBADAS_EN_EL_MEJOR_CUATRIMESTRE: 6,
          TU_MEJOR_NOTA: 9.5,
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
          DE_LA_CARRERA_TERMINADA: 60,
          MATERIAS_APROBADAS_POR_CUATRIMESTRE: 6,
          AÑO_DE_EGRESO_ESTIMADO: 2023,
          NOTA_PROMEDIO: 8.9,
          MATERIAS_APROBADAS_EN_EL_MEJOR_CUATRIMESTRE: 7,
          TU_MEJOR_NOTA: 10.0,
        },
        estadisticas: {
          asistencias: 95,
          participacion: "Alta",
          tareas_entregadas_a_tiempo: 98,
          examenes_aprobados: 100,
        },
      },
    ];

    // Retornar los datos de los estudiantes en formato JSON
    return respuesta.status(200).json(estudiantes);
  }
};

export default route;
