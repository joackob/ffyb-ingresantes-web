import z from "zod";
import { informacionEnCrudoDeTodasLasCarreras } from "./informacion-en-crudo-de-todas-las-carreras";
import { EsquemaParaLasCarrerasAnexadasPorSuId } from "./types";

const indexarInformacionDeLasCarrerasConSuID = async () => {
  try {
    const carrerasSinEstructuraRespaldada = (
      await informacionEnCrudoDeTodasLasCarreras
    )["carreras"];

    const carrerasPseudoEstructuradas = (
      carrerasSinEstructuraRespaldada as Array<any>
    ).map((carreraSinEstructura) => {
      return {
        id: calcularIDDeUnaCarreraOMateriaPorSuNombre(
          carreraSinEstructura["nombre"],
        ),
        nombre: carreraSinEstructura["nombre"],
        cuatrimestres:
          estructurarCuatrimestresDeUnaCarrera(carreraSinEstructura),
      };
    });

    const carrerasEstructuradas = EsquemaParaLasCarrerasAnexadasPorSuId.parse({
      carreras: carrerasPseudoEstructuradas,
    });

    return new Map(
      carrerasEstructuradas.carreras.map((carrera) => [carrera.id, carrera]),
    );
  } catch (excepcion) {
    if (excepcion instanceof z.ZodError) {
      console.error(
        "Tal parece que el archivo con los datos de las carreras no esta siendo correctamente parseado",
      );
      console.table(excepcion.issues);
    }
    throw excepcion;
  }
};

const estructurarCuatrimestresDeUnaCarrera = (carreraEnCrudo: any) => {
  const cuatrimestres = [];
  for (const idCuatrimestre in carreraEnCrudo["cuatrimestres"]) {
    const materias = carreraEnCrudo["cuatrimestres"][idCuatrimestre];
    cuatrimestres.push({
      id: idCuatrimestre,
      materias: (materias as Array<any>).map((materia) => ({
        ...materia,
        id: calcularIDDeUnaCarreraOMateriaPorSuNombre(materia["nombre"]),
      })),
    });
  }
  return cuatrimestres;
};

const calcularIDDeUnaCarreraOMateriaPorSuNombre = (nombre: string) => {
  return nombre
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-");
};

export const informacionEstructuradaDeTodasLasCarreras =
  indexarInformacionDeLasCarrerasConSuID();
