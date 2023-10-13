import { Materia, Carrera, Cuatrimestre } from "../interfaces";

export class LCTDeAlimentos extends Carrera {
  constructor(planHeredado?: Cuatrimestre[]) {
    const plan =
      planHeredado ||
      (() => {
        const planXCuatrimestre: Cuatrimestre[] = [];
        //primer cuatrimestre
        const qmg1 = new Materia({ id: "qmg1", nombre: "Química General" });
        const biol1 = new Materia({ id: "biol1", nombre: "Biologia" });
        const quim1 = new Materia({ id: "quim1", nombre: "Quimica" });
        const bioq = new Materia({ id: "bioq", nombre: "Bioquimica" });
        const farm = new Materia({ id: "farm", nombre: "Farmacologia" });
        const fis1 = new Materia({ id: "fis1", nombre: "Fisica" });
        const mcr1 = new Materia({ id: "mcr1", nombre: "Microbiologia" });
        //segundo cuatrimestre
        const mat1 = new Materia({
          id: "mat1",
          nombre: "Matematica",
          correlativas: [qmg1],
        });
        const ddhh = new Materia({
          id: "ddhh",
          nombre: "Matematica",
          correlativas: [biol1],
        });
        //tercer cuatrimestre
        const qgm2 = new Materia({
          id: "qgm2",
          nombre: "Química General II",
          correlativas: [quim1],
        });
        const biol2 = new Materia({
          id: "biol2",
          nombre: "Biologia II",
          correlativas: [bioq],
        });
        //cuarto cuatrimestre
        const qo = new Materia({
          id: "qo",
          nombre: "Quimica Organica",
          correlativas: [qgm2],
        });
        const fisi = new Materia({
          id: "fisi",
          nombre: "Fisiologia",
          correlativas: [mcr1],
        });
        //quinto cuatrimestre
        const qf = new Materia({
          id: "qf",
          nombre: "Quimica Farmaceutica",
          correlativas: [qo],
        });
        const qf2 = new Materia({
          id: "qf2",
          nombre: "Quimica Farmaceutica II",
          correlativas: [qf],
        });

        //agregamos todas las materias al plan segun el cuatrimestre correspondiente
        planXCuatrimestre.push({
          materias: [qmg1, biol1, quim1, bioq, farm, fis1, mcr1],
        });
        planXCuatrimestre.push({ materias: [mat1, ddhh] });
        planXCuatrimestre.push({ materias: [qgm2, biol2] });
        planXCuatrimestre.push({ materias: [qo, fisi] });
        planXCuatrimestre.push({ materias: [qf, qf2] });

        return planXCuatrimestre;
      })();

    super({
      id: "lctdealimentos",
      nombre: "Licenciatura en Ciencias y Tecnología de Alimentos",
      descripcion:
        "Son profesionales competentes para realizar actividades relacionadas con la investigación de todo tipo de alimentos",
      plan: plan,
    });
  }
}
