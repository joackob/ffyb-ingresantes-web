"use client";
import { Materia } from "@/src/api/carreras/types";
import { useState } from "react";

export type MateriaSeleccionada = {
  id: string;
};

export const useMateriaSeleccionable = (materias: Map<string, Materia>) => {
  const [materiaSeleccionada, setMateriaSeleccionada] = useState<{
    id: string;
    seleccionada: boolean;
  }>({
    id: "",
    seleccionada: false,
  });

  const seleccionarMateria = ({ id }: MateriaSeleccionada): void => {
    setMateriaSeleccionada({ id, seleccionada: true });
  };

  const brindarMateriaSeleccionada = (): Materia => {
    return materias.get(materiaSeleccionada.id)!;
  };

  const deseleccionarMateria = (): void => {
    setMateriaSeleccionada({ id: "", seleccionada: false });
  };

  const hayUnaMateriaSeleccionada = (): boolean =>
    materiaSeleccionada.seleccionada;

  return {
    seleccionar: seleccionarMateria,
    eleccion: brindarMateriaSeleccionada,
    deseleccionar: deseleccionarMateria,
    fueSeleccionada: hayUnaMateriaSeleccionada,
  } as const;
};
