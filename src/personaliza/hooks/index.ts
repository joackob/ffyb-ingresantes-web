import { Carrera, Cuatrimestre } from "@/src/database/interfaces";
import { useState } from "react";
import { ModificacionEnPlanDeEstudios } from "../components/PlanPersonalizable";

export const usePlanPersonalizable = (carrera: Carrera) => {
  const [cuatrimestres, setCuatrimestres] = useState<Cuatrimestre[]>(
    carrera.plan
  );

  const brindarPlanActual = () => {
    return cuatrimestres;
  };

  const actualizarPlanDeEstudios = (
    modificacion: ModificacionEnPlanDeEstudios
  ) => {
    {
      const { posicionOrigen, posicionDestino } = modificacion;
      const cuatrimestreOrigen = cuatrimestres.findIndex(
        (cuatrimestre) => cuatrimestre.id === posicionOrigen.idCuatrimestre
      );
      const cuatrimestreDestino = cuatrimestres.findIndex(
        (cuatrimestre) => cuatrimestre.id === posicionDestino.idCuatrimestre
      );
      const nuevoPlan = [...cuatrimestres];
      const [materia] = nuevoPlan[cuatrimestreOrigen].materias.splice(
        posicionOrigen.posicion,
        1
      );
      nuevoPlan[cuatrimestreDestino].materias.splice(
        posicionDestino.posicion,
        0,
        materia
      );

      setCuatrimestres(nuevoPlan);
    }
  };

  return { brindarPlanActual, actualizarPlanDeEstudios } as const;
};
