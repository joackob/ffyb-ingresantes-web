import { NextApiRequest, NextApiResponse } from "next";
import { intentarBrindarInformacionPorDefectoDeLasCarreras } from "@/src/api/carreras/intentar-brindar-informacion-por-defecto-de-las-carreras";

const route = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  switch (req.method) {
    case "GET":
      await intentarBrindarInformacionPorDefectoDeLasCarreras(res);
      break;
    default:
      res.status(405).end();
      break;
  }
};

export default route;
