import { informacionEstructuradaDeTodasLasCarreras } from "./informacion-estructurada-de-todas-las-carreras";

export const obtenerCarreraPorSuID = async (id: string) => {
  return (await informacionEstructuradaDeTodasLasCarreras).get(id)!;
};
