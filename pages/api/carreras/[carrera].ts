import { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import fs from "fs/promises";

const route = async (consulta: NextApiRequest, respuesta: NextApiResponse) => {
  const carrera = consulta.query.carrera;
  const informacionDeLasCarreras =
    await obtenerInformacionEnCrudoDeTodasLasCarreras();

  const carreras = informacionDeLasCarreras["carreras"];

  switch (carrera) {
    case "farmacia": {
      return respuesta.json(
        intentarObtenerInformacionDeUnaCarrera("Farmacia", carreras),
      );
    }
    case "bioquimica": {
      return respuesta.json(
        intentarObtenerInformacionDeUnaCarrera("Bioquimica", carreras),
      );
    }
    case "tecnico-universitario-en-medicina-nuclear": {
      return respuesta.json(
        intentarObtenerInformacionDeUnaCarrera(
          "Técnico Universitario en Medicina Nuclear",
          carreras,
        ),
      );
    }
    case "tecnico-universitario-en-optica-y-contactologia": {
      return respuesta.json(
        intentarObtenerInformacionDeUnaCarrera(
          "Técnico Universitario en Óptica y Contactología",
          carreras,
        ),
      );
    }
    case "licenciatura-en-ciencia-y-tecnologia-de-alimentos": {
      return respuesta.json(
        intentarObtenerInformacionDeUnaCarrera(
          "Licenciatura en Ciencia y Tecnología de Alimentos",
          carreras,
        ),
      );
    }
    case "tecnicatura-universitaria-en-gestion-integral-de-bioterio": {
      return respuesta.json(
        intentarObtenerInformacionDeUnaCarrera(
          "Tecnicatura Universitaria en Gestión Integral de Bioterio",
          carreras,
        ),
      );
    }
    default: {
      return respuesta.status(404).json({ message: `Carrera invalida` });
    }
  }
};

const obtenerInformacionEnCrudoDeTodasLasCarreras = async () => {
  const direccionDeLosDatosConInformacionSobreLasCarreras = path.join(
    process.cwd(),
    "src/api/carreras/data",
    "carreras.json",
  );
  const informacionEnCrudoDeLasCarreras = await fs.readFile(
    direccionDeLosDatosConInformacionSobreLasCarreras,
    { encoding: "utf-8" },
  );
  const informacionDeLasCarreras = JSON.parse(informacionEnCrudoDeLasCarreras);
  return informacionDeLasCarreras;
};

const encontrarCarrera = (carreraABuscar: string, carreras: any) => {
  return (carreras as Array<{ nombre: string }>).find(
    (carrera) => carrera.nombre === carreraABuscar,
  );
};

const formatearCarrera = (carreraEnCrudo: any) => {
  const nombre = carreraEnCrudo["nombre"];
  const cuatrimestres = [];
  for (const claveCuatrimestre in carreraEnCrudo["cuatrimestres"]) {
    const materias = carreraEnCrudo["cuatrimestres"][claveCuatrimestre];
    cuatrimestres.push({
      id: claveCuatrimestre,
      materias: materias,
    });
  }
  return {
    carrera: nombre,
    cuatrimestres: cuatrimestres,
  };
};

const intentarObtenerInformacionDeUnaCarrera = (
  carrera: string,
  carreras: any,
) => {
  const carreraEncontrada = encontrarCarrera(carrera, carreras);
  const carreraFormateada = formatearCarrera(carreraEncontrada);
  return carreraFormateada;
};

export type Carrera = ReturnType<typeof intentarObtenerInformacionDeUnaCarrera>;

export default route;
