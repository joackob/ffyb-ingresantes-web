import { Cursada, type Cuatrimestre } from ".";
import { v4 as uuidv4 } from "uuid";

export abstract class Carrera {
  id: string;
  nombre: string;
  descripcion: string;
  plan: Cuatrimestre[];

  constructor({
    nombre,
    descripcion,
    plan,
  }: {
    nombre: string;
    descripcion: string;
    plan: Cuatrimestre[];
  }) {
    this.id = uuidv4();
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
