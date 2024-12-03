import { NextApiRequest, NextApiResponse } from "next";

const route = async (req: NextApiRequest, res: NextApiResponse) => {
  const carrera = req.query.carrera;
  switch (carrera) {
    case "farmacia": {
      console.log("Farmacia");
      break;
    }
    case "bioquimica": {
      console.log("Bioquimica");
      break;
    }
    case "tecnico-universitario-en-medicina-nuclear": {
      console.log("Técnico Universitario en Medicina Nuclear");
      break;
    }
    case "tecnico-universitario-en-optica-y-contactologia": {
      console.log("Técnico Universitario en Óptica y Contactología");
      break;
    }
    case "licenciatura-en-ciencia-y-tecnologia-de-alimentos": {
      console.log("Licenciatura en Ciencia y Tecnología de Alimentos");
      break;
    }
    case "tecnicatura-universitaria-en-gestion-integral-de-bioterio": {
      console.log("Tecnicatura Universitaria en Gestión Integral de Bioterio");
      break;
    }
    default: {
      console.log("Carrera invalida");
      break;
    }
  }

  return res
    .status(404)
    .json({ message: `Hello from /api/carreras/${carrera}` });
};

export default route;
