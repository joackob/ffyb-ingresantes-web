import { NextApiRequest, NextApiResponse } from "next";

const route = async (consulta: NextApiRequest, respuesta: NextApiResponse) => {
  const carrera = consulta.query.carrera;
  switch (carrera) {
    case "farmacia": {
      return respuesta.json("Farmacia");
      break;
    }
    case "bioquimica": {
      return respuesta.json("Bioquimica");
      break;
    }
    case "tecnico-universitario-en-medicina-nuclear": {
      return respuesta.json("Técnico Universitario en Medicina Nuclear");
      break;
    }
    case "tecnico-universitario-en-optica-y-contactologia": {
      return respuesta.json("Técnico Universitario en Óptica y Contactología");
      break;
    }
    case "licenciatura-en-ciencia-y-tecnologia-de-alimentos": {
      return respuesta.json(
        "Licenciatura en Ciencia y Tecnología de Alimentos"
      );
      break;
    }
    case "tecnicatura-universitaria-en-gestion-integral-de-bioterio": {
      return respuesta.json(
        "Tecnicatura Universitaria en Gestión Integral de Bioterio"
      );
      break;
    }
    default: {
      return respuesta.status(404).json({ message: `carrera invalida` });
      break;
    }
  }

  return respuesta.status(200);
};

export default route;
