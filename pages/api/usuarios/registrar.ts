import { NextApiRequest, NextApiResponse } from "next";
import intentarRegistrarUnUsuario from "@/src/api/usuarios/registrar";

const route = async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  return await intentarRegistrarUnUsuario(req, res);
};

export default route;
