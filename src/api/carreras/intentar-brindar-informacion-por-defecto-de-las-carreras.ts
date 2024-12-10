import path from "path";
import fs from "node:fs/promises";
import { NextApiResponse } from "next";
import { tratarExcepciones } from "../excepciones";

export const intentarBrindarInformacionPorDefectoDeLasCarreras = async (
  respuesta: NextApiResponse
): Promise<void> => {
  try {
    brindarInformacionPorDefectoDeLasCarreras(respuesta);
  } catch (excepcion) {
    tratarExcepcionesAlBrindarInformacionPorDefectoDeLasCarreras({
      respuesta,
      excepcion,
    });
  }
};

export const brindarInformacionPorDefectoDeLasCarreras = async (
  respuesta: NextApiResponse
): Promise<void> => {
  const direccionDeLosDatosConInformacionSobreLasCarreras = path.join(
    process.cwd(),
    "src/api/carreras/data",
    "carreras.json"
  );
  const informacionEnCrudoDeLasCarreras = await fs.readFile(
    direccionDeLosDatosConInformacionSobreLasCarreras,
    { encoding: "utf-8" }
  );
  respuesta.status(200).json(JSON.parse(informacionEnCrudoDeLasCarreras));
};

const tratarExcepcionesAlBrindarInformacionPorDefectoDeLasCarreras = ({
  excepcion,
  respuesta,
}: {
  excepcion: unknown;
  respuesta: NextApiResponse;
}): void => {
  tratarExcepciones({ excepcion, respuesta });
};
