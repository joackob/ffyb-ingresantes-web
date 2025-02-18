"use client";
import { useState } from "react";
import { arrayMove } from "@dnd-kit/sortable";
import { Cuatrimestre, Materia } from "@/src/api/carreras/types";

export const usePlanPersonalizable = (
  planDeEstudios: Map<string, Materia[]>,
) => {
  const [cuatrimestres, cambiarPlanDeEstudios] =
    useState<Map<string, Materia[]>>(planDeEstudios);

  const ubicacionCuatrimestralDeCadaMateria =
    indexarCadaMateriaAlIdDelCuatrimestreQueLosContiene(cuatrimestres);

  const cambiarMateriaDeCuatriODePosicion = ({
    idOrigen,
    idDestino,
  }: {
    idOrigen: string;
    idDestino: string;
  }) => {
    cambiarPlanDeEstudios((cuatrimestres) => {
      const idCuatriOrigen =
        ubicacionCuatrimestralDeCadaMateria.get(idOrigen) ?? "";
      const idCuatriDestino =
        ubicacionCuatrimestralDeCadaMateria.get(idDestino) ?? idDestino;
      const idMateriaOrigen = idOrigen;
      const idMateriaDestino = idDestino;

      const nuevoPlan = cambiarMateriaDeCuatrimestre({
        idMateria: idMateriaOrigen,
        idCuatriOrigen: idCuatriOrigen,
        idCuatriDestino: idCuatriDestino,
        cuatrimestres: cuatrimestres,
      });
      return cambiarMateriaDePosicion({
        idCuatri: idCuatriDestino,
        idMateriaOrigen: idMateriaOrigen,
        idMateriaDestino: idMateriaDestino,
        cuatrimestres: nuevoPlan,
      });
    });
  };

  const ordenarPlanDeEstudios = ({
    idOrigen,
    idDestino,
  }: {
    idOrigen: string;
    idDestino: string;
  }) => {
    cambiarPlanDeEstudios((cuatrimestres) =>
      cambiarMateriaDePosicion({
        idCuatri: ubicacionCuatrimestralDeCadaMateria.get(idDestino) ?? "",
        idMateriaOrigen: idOrigen,
        idMateriaDestino: idDestino,
        cuatrimestres,
      }),
    );
  };

  // pre: los ids de cuatriOrigen y cuatriDestino son validos
  // es decir, existe una serie de materias asociadas
  // pre: los ids de cuatriOrigen y cuatriDestino son distintos
  const cambiarMateriaDeCuatrimestre = ({
    idMateria,
    idCuatriOrigen,
    idCuatriDestino,
    cuatrimestres,
  }: {
    idMateria: string;
    idCuatriOrigen: string;
    idCuatriDestino: string;
    cuatrimestres: Map<string, Materia[]>;
  }): Map<string, Materia[]> => {
    if (idCuatriOrigen === idCuatriDestino) return cuatrimestres;
    const materiasOrigen = cuatrimestres.get(idCuatriOrigen);
    const materiasDestino = cuatrimestres.get(idCuatriDestino);
    if (!materiasOrigen || !materiasDestino) return cuatrimestres;

    const materia = materiasOrigen.find((materia) => materia.id === idMateria);
    if (!materia) return cuatrimestres;

    const planActualizado = new Map(cuatrimestres);
    planActualizado.set(
      idCuatriOrigen,
      materiasOrigen.filter((materia) => materia.id !== idMateria),
    );
    planActualizado.set(idCuatriDestino, [...materiasDestino, materia]);
    return planActualizado;
  };

  // pre: los ids de idOrigen y idDestino son validos.
  // es decir, existen en el conjunto de materias asociados a idCuatri
  // pre: idCuatri es valido
  // es decir, existe una serie de materias asociadas
  const cambiarMateriaDePosicion = ({
    idCuatri,
    idMateriaOrigen,
    idMateriaDestino,
    cuatrimestres,
  }: {
    idCuatri: string;
    idMateriaOrigen: string;
    idMateriaDestino: string;
    cuatrimestres: Map<string, Materia[]>;
  }): Map<string, Materia[]> => {
    const materias = cuatrimestres.get(idCuatri);
    if (!materias) return cuatrimestres;
    const posicionOrigen = materias.findIndex(
      (materia) => materia.id === idMateriaOrigen,
    );
    const posicionDestino = materias.findIndex(
      (materias) => materias.id === idMateriaDestino,
    );
    if (posicionOrigen === -1 || posicionDestino === -1) return cuatrimestres;
    const planOrdenado = new Map(cuatrimestres);
    planOrdenado.set(
      idCuatri,
      arrayMove(materias, posicionOrigen, posicionDestino),
    );
    return planOrdenado;
  };

  return {
    actual: () =>
      ordenarCuatrimestresDeAcurdoASuPosicionTemporal(cuatrimestres),
    actualizar: cambiarMateriaDeCuatriODePosicion,
    ordenar: ordenarPlanDeEstudios,
  } as const;
};

const indexarCadaMateriaAlIdDelCuatrimestreQueLosContiene = (
  cuatrimestres: Map<string, Materia[]>,
): Map<string, string> => {
  return new Map<string, string>(
    Array.from(cuatrimestres.entries()).flatMap(([cuatri, materias]) => {
      return materias.map((materia) => [materia.id, cuatri]);
    }),
  );
};

const ordenarCuatrimestresDeAcurdoASuPosicionTemporal = (
  cuatrimestres: Map<string, Materia[]>,
): Cuatrimestre[] => {
  return Array.from(cuatrimestres.entries())
    .map(([cuatri, materias]) => ({ id: cuatri, materias }))
    .sort((a, b) => {
      const posicionA = parseInt(a.id.match(/\d+/)?.[0] || "0");
      const posicionB = parseInt(b.id.match(/\d+/)?.[0] || "0");
      return posicionA - posicionB;
    });
};
