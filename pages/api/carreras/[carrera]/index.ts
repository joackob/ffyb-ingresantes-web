import { NextApiRequest, NextApiResponse } from "next";
import { brindarInformacionPorDefectoDeLasCarreras } from "@/src/api/carreras/intentar-brindar-informacion-por-defecto-de-las-carreras";
import path from "path";
import fs from "fs/promises";

const route = async (consulta: NextApiRequest, respuesta: NextApiResponse) => {
  const carrera = consulta.query.carrera;
  const direccionDeLosDatosConInformacionSobreLasCarreras = path.join(
    process.cwd(),
    "src/api/carreras/data",
    "carreras.json"
  );
  const informacionEnCrudoDeLasCarreras = await fs.readFile(
    direccionDeLosDatosConInformacionSobreLasCarreras,
    { encoding: "utf-8" }
  );
  const informacionDeLasCarreras = JSON.parse(informacionEnCrudoDeLasCarreras);

  const carreras = informacionDeLasCarreras["carreras"];

  const encontrarCarrera = (carreraABuscar: string) => {
    return (carreras as Array<{ nombre: string }>).find(
      (carrera) => carrera.nombre === carreraABuscar
    );
  };

  console.log(carreras);
  switch (carrera) {
    case "farmacia": {
      return respuesta.json(encontrarCarrera("farmacia"));
      break;
    }
    case "bioquimica": {
      return respuesta.json(encontrarCarrera("Bioquimica"));
      break;
    }
    case "tecnico-universitario-en-medicina-nuclear": {
      return respuesta.json(
        encontrarCarrera("Técnico Universitario en Medicina Nuclear")
      );
      break;
    }
    case "tecnico-universitario-en-optica-y-contactologia": {
      return respuesta.json(
        encontrarCarrera("Técnico Universitario en Óptica y Contactología")
      );
      break;
    }
    case "licenciatura-en-ciencia-y-tecnologia-de-alimentos": {
      return respuesta.json(
        encontrarCarrera("Licenciatura en Ciencia y Tecnología de Alimentos")
      );
      break;
    }
    case "tecnicatura-universitaria-en-gestion-integral-de-bioterio": {
      return respuesta.json(
        encontrarCarrera(
          "Tecnicatura Universitaria en Gestión Integral de Bioterio"
        )
      );
      break;
    }
    default: {
      return respuesta.status(404).json({ message: `Carrera invalida` });
      break;
    }
  }

  return respuesta.status(200);
};

export default route;
