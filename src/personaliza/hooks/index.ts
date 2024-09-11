"use client";
import { useState } from "react";
import { Cuatrimestre, planDeEstudios } from "../fake";

export type ModificacionEnPlanDeEstudios = {
  desde: {
    idCuatrimestre: number;
    posicion: number;
  };
  hacia: {
    idCuatrimestre: number;
    posicion: number;
  };
};

export const usePlanPersonalizable = () => {
  const [cuatrimestres, setCuatrimestres] =
    useState<Cuatrimestre[]>(planDeEstudios);

  const brindarPlanActual = () => {
    return cuatrimestres;
  };

  const actualizarPlanDeEstudios = (
    modificacion: ModificacionEnPlanDeEstudios,
  ) => {
    console.log(modificacion);
    const { desde, hacia } = modificacion;
    const planActualizado = [...cuatrimestres];
    const [materia] = planActualizado[desde.idCuatrimestre].materias.splice(
      desde.posicion,
      1,
    );
    planActualizado[hacia.idCuatrimestre].materias.splice(
      hacia.posicion,
      0,
      materia,
    );

    setCuatrimestres(planActualizado);
  };

  return { brindarPlanActual, actualizarPlanDeEstudios } as const;
};
