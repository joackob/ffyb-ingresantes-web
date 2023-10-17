import {
  Bioquimica,
  Farmacia,
  LCTDeAlimentos,
  TUEnMedicinaNuclear,
} from "../carreras";
import { Carrera, Cursada } from "../interfaces";

const farmaciaMock = new Farmacia();
const bioquimicaMock = new Bioquimica();
const lctDeAlimentosMock = new LCTDeAlimentos();
const tuEnMedicinaNuclearMock = new TUEnMedicinaNuclear();

const mockPlan = (carrera: Carrera) => {
  const posiblesCursadas = [
    Cursada.APROBADA,
    Cursada.CURSANDO,
    Cursada.PENDIENTE,
  ];

  const mockCursada = () =>
    posiblesCursadas[Math.floor(Math.random() * posiblesCursadas.length)];

  carrera.plan.forEach((cuatrimestre) => {
    cuatrimestre.materias.forEach((materia) => {
      materia.cursada = mockCursada();
    });
  });
};

mockPlan(farmaciaMock);
mockPlan(bioquimicaMock);
mockPlan(lctDeAlimentosMock);
mockPlan(tuEnMedicinaNuclearMock);

export {
  farmaciaMock,
  bioquimicaMock,
  lctDeAlimentosMock,
  tuEnMedicinaNuclearMock,
};
