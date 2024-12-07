import { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import fs from "fs/promises";

const route = async (consulta: NextApiRequest, respuesta: NextApiResponse) => {
  const carrera = consulta.query.carrera;
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

  const carreras = informacionDeLasCarreras["carreras"];

  const encontrarCarrera = (carreraABuscar: string) => {
    return (carreras as Array<{ nombre: string }>).find(
      (carrera) => carrera.nombre === carreraABuscar,
    );
  };

  switch (carrera) {
    case "farmacia": {
      return respuesta.json(encontrarCarrera("farmacia"));
    }
    case "bioquimica": {
      return respuesta.json(encontrarCarrera("Bioquimica"));
    }
    case "tecnico-universitario-en-medicina-nuclear": {
      return respuesta.json(
        encontrarCarrera("Técnico Universitario en Medicina Nuclear"),
      );
    }
    case "tecnico-universitario-en-optica-y-contactologia": {
      return respuesta.json(
        encontrarCarrera("Técnico Universitario en Óptica y Contactología"),
      );
    }
    case "licenciatura-en-ciencia-y-tecnologia-de-alimentos": {
      return respuesta.json(
        encontrarCarrera("Licenciatura en Ciencia y Tecnología de Alimentos"),
      );
    }
    case "tecnicatura-universitaria-en-gestion-integral-de-bioterio": {
      return respuesta.json(
        encontrarCarrera(
          "Tecnicatura Universitaria en Gestión Integral de Bioterio",
        ),
      );
    }
    default: {
      return respuesta.status(404).json({ message: `Carrera invalida` });
    }
  }
};

export default route;
