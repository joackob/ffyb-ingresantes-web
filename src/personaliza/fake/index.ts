export type Materia = {
  nombre: string;
  estado: "Aprobada" | "En curso" | "No disponible" | "Disponible";
};

export type Cuatrimestre = {
  cuatrimestre: number;
  materias: Materia[];
};

export const planDeEstudios: Cuatrimestre[] = [
  {
    cuatrimestre: 1,
    materias: [
      {
        nombre: "Química General",
        estado: "Disponible",
      },
      {
        nombre: "Biología Celular y Molecular",
        estado: "Disponible",
      },
      {
        nombre: "Matemáticas Aplicadas",
        estado: "Aprobada",
      },
      {
        nombre: "Introducción a la Farmacia",
        estado: "No disponible",
      },
    ],
  },
  {
    cuatrimestre: 2,
    materias: [
      {
        nombre: "Química Orgánica I",
        estado: "En curso",
      },
      {
        nombre: "Anatomía y Fisiología",
        estado: "Disponible",
      },
      {
        nombre: "Microbiología",
        estado: "Disponible",
      },
      {
        nombre: "Farmacología I",
        estado: "No disponible",
      },
    ],
  },
  {
    cuatrimestre: 3,
    materias: [
      {
        nombre: "Química Orgánica II",
        estado: "Disponible",
      },
      {
        nombre: "Bioquímica",
        estado: "Disponible",
      },
      {
        nombre: "Farmacología II",
        estado: "Aprobada",
      },
      {
        nombre: "Toxicología",
        estado: "En curso",
      },
    ],
  },
  {
    cuatrimestre: 4,
    materias: [
      {
        nombre: "Química Farmacéutica",
        estado: "Disponible",
      },
      {
        nombre: "Farmacia Clínica",
        estado: "No disponible",
      },
      {
        nombre: "Botánica y Fitoterapia",
        estado: "Disponible",
      },
      {
        nombre: "Estadística",
        estado: "Aprobada",
      },
    ],
  },
  {
    cuatrimestre: 5,
    materias: [
      {
        nombre: "Tecnología Farmacéutica",
        estado: "Disponible",
      },
      {
        nombre: "Farmacia Comunitaria",
        estado: "En curso",
      },
      {
        nombre: "Química Analítica",
        estado: "Disponible",
      },
      {
        nombre: "Farmacognosia",
        estado: "No disponible",
      },
    ],
  },
  {
    cuatrimestre: 6,
    materias: [
      {
        nombre: "Farmacia Hospitalaria",
        estado: "Disponible",
      },
      {
        nombre: "Legislación Farmacéutica",
        estado: "Disponible",
      },
      {
        nombre: "Farmacia Industrial",
        estado: "En curso",
      },
      {
        nombre: "Investigación en Farmacia",
        estado: "No disponible",
      },
    ],
  },
  {
    cuatrimestre: 7,
    materias: [
      {
        nombre: "Prácticas Profesionales I",
        estado: "Aprobada",
      },
      {
        nombre: "Farmacoterapia",
        estado: "Disponible",
      },
      {
        nombre: "Farmacovigilancia",
        estado: "En curso",
      },
      {
        nombre: "Ética y Deontología Farmacéutica",
        estado: "No disponible",
      },
    ],
  },
  {
    cuatrimestre: 8,
    materias: [
      {
        nombre: "Prácticas Profesionales II",
        estado: "Disponible",
      },
      {
        nombre: "Gestión y Administración Farmacéutica",
        estado: "Disponible",
      },
      {
        nombre: "Investigación Aplicada en Farmacia",
        estado: "En curso",
      },
      {
        nombre: "Seminario de Investigación",
        estado: "No disponible",
      },
    ],
  },
];
