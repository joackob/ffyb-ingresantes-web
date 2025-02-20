import db from "@/db";
import { SolicitudParaRegistrarUnNuevoUsuario } from "./validar-solicitud";
import { tratarExcepcionesEnConsultasALaBdd } from "../../excepciones/tratar-excepciones-en-consultas-a-la-bdd";

export const registrarUsuario = async (
  usuario: SolicitudParaRegistrarUnNuevoUsuario
): Promise<void> => {
  try {
    await db.usuarios.create({ data: { ...usuario } });
  } catch (excepcion) {
    throw tratarExcepcionesEnConsultasALaBdd(excepcion);
  }
};
