import { configuracion } from "@/src/configuracion";
import axios from "axios";
import { useState, useEffect } from "react";
import { Carrera, Cuatrimestre, Materia } from "@/src/api/carreras/types";
import { useRouter } from "next/router";

export const useCarreraSeleccionable = () => {
  const enrutador = useRouter();
  const carreraSeleccionada = enrutador.query.carrera?.toString();
  const [carrera, fijarCarrera] = useState<Carrera>({
    id: "farmacia",
    nombre: "Farmacia",
    cuatrimestres: [],
  });
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
    nombre: () => carrera.nombre,
    descargando: () => estado === "en-proceso",
    descargada: () => estado === "descarga-completa",
    fallida: () => estado === "con-problemas",
    materias: () => indexarMateriasASuId(carrera.cuatrimestres),
    cuatrimestres: () =>
      indexarMateriasAlIdDelCuatrimestreQueLosContiene(carrera.cuatrimestres),
  } as const;
};

const obtenerLosCuatrimestresDeLaCarreraSeleccionada = async (
  carrera: string,
): Promise<Carrera> => {
  const { data: carreraDescargada } = await axios.get<Carrera>(
    `${configuracion.api_url}/carreras/${carrera}`,
  );
  return carreraDescargada;
};

const indexarMateriasASuId = (
  cuatremestres: Cuatrimestre[],
): Map<string, Materia> => {
  return new Map<string, Materia>(
    cuatremestres
      .flatMap(({ materias }) => materias)
      .map((materia) => [materia.id, materia]),
  );
};

const indexarMateriasAlIdDelCuatrimestreQueLosContiene = (
  cuatrimestres: Cuatrimestre[],
): Map<string, Materia[]> => {
  return new Map<string, Materia[]>(
    cuatrimestres.map((cuatri) => [cuatri.id, cuatri.materias]),
  );
};
