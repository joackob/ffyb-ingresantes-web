import { Materia, Carrera, Cuatrimestre } from "../interfaces";

export class TUEnMedicinaNuclear extends Carrera {
  constructor(planHeredado?: Cuatrimestre[]) {
    const plan =
      planHeredado ||
      (() => {
        const planXCuatrimestre: Cuatrimestre[] = [];
        //primer cuatrimestre
        const qmg1 = new Materia({ nombre: "Química General" });
        const biol1 = new Materia({ nombre: "Biologia" });
        const quim1 = new Materia({ nombre: "Quimica" });
        const bioq = new Materia({ nombre: "Bioquimica" });
        const farm = new Materia({ nombre: "Farmacologia" });
        const fis1 = new Materia({ nombre: "Fisica" });
        const mcr1 = new Materia({ nombre: "Microbiologia" });
        //segundo cuatrimestre
        const mat1 = new Materia({
          nombre: "Matematica",
          correlativas: [qmg1],
        });
        const ddhh = new Materia({
          nombre: "Matematica",
          correlativas: [biol1],
        });
        //tercer cuatrimestre
        const qgm2 = new Materia({
          nombre: "Química General II",
          correlativas: [quim1],
        });
        const biol2 = new Materia({
          nombre: "Biologia II",
          correlativas: [bioq],
        });
        //cuarto cuatrimestre
        const qo = new Materia({
          nombre: "Quimica Organica",
          correlativas: [qgm2],
        });
        const fisi = new Materia({
          nombre: "Fisiologia",
          correlativas: [mcr1],
        });
        //quinto cuatrimestre
        const qf = new Materia({
          nombre: "Quimica Farmaceutica",
          correlativas: [qo],
        });
        const qf2 = new Materia({
          nombre: "Quimica Farmaceutica II",
          correlativas: [qf],
        });

        //agregamos todas las materias al plan segun el cuatrimestre correspondiente
        planXCuatrimestre.push(
          new Cuatrimestre([qmg1, biol1, quim1, bioq, farm, fis1, mcr1])
        );

        planXCuatrimestre.push(new Cuatrimestre([mat1, ddhh]));
        planXCuatrimestre.push(new Cuatrimestre([qgm2, biol2]));
        planXCuatrimestre.push(new Cuatrimestre([qo, fisi]));
        planXCuatrimestre.push(new Cuatrimestre([qf, qf2]));

        return planXCuatrimestre;
      })();

    super({
      nombre: "Tecnicatura Universitaria en Medicina Nuclear",
      descripcion:
        "Son profesionales de la salud competentes para realizar, bajo supervisión del médico, procedimientos diagnósticos y terapéuticos en pacientes mediante la utilización de radiofármacos",
      plan: plan,
    });
  }
}
