import path from "path";
import fs from "fs/promises";

const obtenerInformacionEnCrudoDeTodasLasCarreras = async () => {
  try {
    const direccionDelArchivoConInformacionSobreLasCarreras = path.join(
      process.cwd(),
      "src/api/carreras/data",
      "carreras.json",
    );
    const informacionEnCrudoDeLasCarreras = await fs.readFile(
      direccionDelArchivoConInformacionSobreLasCarreras,
      { encoding: "utf-8" },
    );
    const informacionDeLasCarreras = JSON.parse(
      informacionEnCrudoDeLasCarreras,
    );
    return informacionDeLasCarreras;
  } catch (excepcion) {
    console.error(
      "Error al obtener la información en crudo de todas las carreras:",
      excepcion,
    );
    throw excepcion;
  }
};

export const informacionEnCrudoDeTodasLasCarreras =
  obtenerInformacionEnCrudoDeTodasLasCarreras();
