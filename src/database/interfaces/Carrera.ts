import { Cursada, type Cuatrimestre } from ".";

export abstract class Carrera {
  id: string;
  nombre: string;
  descripcion: string;
  plan: Cuatrimestre[];

  constructor({
    id,
    nombre,
    descripcion,
    plan,
  }: {
    id: string;
    nombre: string;
    descripcion: string;
    plan: Cuatrimestre[];
  }) {
    this.id = id;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.plan = plan;
  }

  porcentajeDeMateriasAprobadas(): number {
    const datosParciales = {
      aprobadas: 0,
      totales: 0,
    };

    const datosFinales = this.plan.reduce((datos, cuatrimestre) => {
      const materiasAprobadas = cuatrimestre.materias.filter(
        (materia) => materia.cursada === Cursada.APROBADA
      );
      datos.aprobadas += materiasAprobadas.length;
      datos.totales += cuatrimestre.materias.length;
      return datos;
    }, datosParciales);

    return Math.round((datosFinales.aprobadas / datosFinales.totales) * 100);
  }
}
