import { Cursada } from ".";
import { v4 as uuidv4 } from "uuid";

export class Materia {
  id: string;
  nombre: string;
  cursada: Cursada;
  correlativas: Materia[];

  constructor({
    nombre,
    correlativas = [],
  }: {
    nombre: string;
    correlativas?: Materia[];
  }) {
    this.id = uuidv4();
    this.nombre = nombre;
    this.cursada = Cursada.PENDIENTE;
    this.correlativas = correlativas;
  }
}
