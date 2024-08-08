import { Materia } from "./Materia";
import { v4 as uuidv4 } from "uuid";

export class Cuatrimestre {
  public id: string;
  public titulo: string;
  public materias: Materia[];
  private static idDeClase: number = 0;

  constructor(materias: Materia[]) {
    Cuatrimestre.idDeClase++;
    this.materias = materias;
    this.titulo = `{Cuatrimestre.idDeClase}° Cuatrimestre`;
    this.id = uuidv4();
  }
}
