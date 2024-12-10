import { configuracion } from "@/src/configuracion";
import axios from "axios";
import { useState, useEffect } from "react";
import {
  mapearMateriasConSuCuatrimestre,
  mapearMateriasConSuID,
  Materia,
} from "../types";
import { Carrera } from "@/pages/api/carreras/[carrera]";

export const useCarreraSeleccionable = (carreraSeleccionada?: string) => {
  const [carrera, fijarCarrera] = useState<Carrera>();
  const [estado, cambiarEstado] = useState<
    "en-proceso" | "descarga-completa" | "con-problemas"
  >("en-proceso");

  useEffect(() => {
    if (!carreraSeleccionada) return;
    obtenerLosCuatrimestresDeLaCarreraSeleccionada(carreraSeleccionada)
      .then((carreraObtenida) => {
        fijarCarrera(carreraObtenida);
        cambiarEstado("descarga-completa");
      })
      .catch(() => {
        cambiarEstado("con-problemas");
      });
  }, [carreraSeleccionada]);

  return {
    nombre: () => carrera?.carrera,
    descargando: () => estado === "en-proceso",
    descargada: () => estado === "descarga-completa",
    fallida: () => estado === "con-problemas",
    materias: () =>
      carrera
        ? mapearMateriasConSuID(carrera.cuatrimestres)
        : new Map<string, Materia>(),
    cuatrimestres: () =>
      carrera
        ? mapearMateriasConSuCuatrimestre(carrera.cuatrimestres)
        : new Map<string, Materia[]>(),
  } as const;
};

const obtenerLosCuatrimestresDeLaCarreraSeleccionada = async (
  carrera: string
): Promise<Carrera> => {
  const respuesta = await axios.get<Carrera>(
    `${configuracion.api_url}/carreras/${carrera}`
  );
  return respuesta.data;
};
