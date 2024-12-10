"use client";
import { useState } from "react";
import { Cuatrimestre, Materia } from "../types";
import { arrayMove } from "@dnd-kit/sortable";

export const usePlanPersonalizable = (
  planDeEstudios: Map<string, Materia[]>
) => {
  const [cuatrimestres, setCuatrimestres] =
    useState<Map<string, Materia[]>>(planDeEstudios);

  const cuatriPorMateria = new Map<string, string>();
  cuatrimestres.forEach((materias, cuatri) => {
    materias.forEach((materia) => {
      cuatriPorMateria.set(materia.nombre, cuatri);
    });
  });

  const brindarPlanActual = () => {
    const planActual: Cuatrimestre[] = [];
    cuatrimestres.forEach((materias, cuatri) => {
      planActual.push({ id: cuatri, materias });
    });
    planActual.sort((a, b) => {
      const posicionA = parseInt(a.id.match(/\d+/)?.[0] || "0");
      const posicionB = parseInt(b.id.match(/\d+/)?.[0] || "0");
      return posicionA - posicionB;
    });
    return planActual;
  };

  const cambiarMateriaDeCuatriODePosicion = ({
    idOrigen,
    idDestino,
  }: {
    idOrigen: string;
    idDestino: string;
  }) => {
    setCuatrimestres((cuatrimestres) => {
      const idCuatriOrigen = cuatriPorMateria.get(idOrigen) ?? "";
      const idCuatriDestino = cuatriPorMateria.get(idDestino) ?? idDestino;
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
    setCuatrimestres((cuatrimestres) =>
      cambiarMateriaDePosicion({
        idCuatri: cuatriPorMateria.get(idDestino) ?? "",
        idMateriaOrigen: idOrigen,
        idMateriaDestino: idDestino,
        cuatrimestres,
      })
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

    const materia = materiasOrigen.find(
      (materia) => materia.nombre === idMateria
    );
    if (!materia) return cuatrimestres;

    const planActualizado = new Map(cuatrimestres);
    planActualizado.set(
      idCuatriOrigen,
      materiasOrigen.filter((materia) => materia.nombre !== idMateria)
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
      (materia) => materia.nombre === idMateriaOrigen
    );
    const posicionDestino = materias.findIndex(
      (materias) => materias.nombre === idMateriaDestino
    );
    if (posicionOrigen === -1 || posicionDestino === -1) return cuatrimestres;
    const planOrdenado = new Map(cuatrimestres);
    planOrdenado.set(
      idCuatri,
      arrayMove(materias, posicionOrigen, posicionDestino)
    );
    return planOrdenado;
  };

  return {
    actual: brindarPlanActual,
    actualizar: cambiarMateriaDeCuatriODePosicion,
    ordenar: ordenarPlanDeEstudios,
  } as const;
};
