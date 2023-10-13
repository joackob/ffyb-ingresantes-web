import { Cursada } from ".";

export class Materia {
  id: string;
  nombre: string;
  cursada: Cursada;
  correlativas: Materia[];

  constructor({
    id,
    nombre,
    correlativas = [],
  }: {
    id: string;
    nombre: string;
    correlativas?: Materia[];
  }) {
    this.id = id;
    this.nombre = nombre;
    this.cursada = Cursada.PENDIENTE;
    this.correlativas = correlativas;
  }
}
