import z from "zod";
import { Excepcion, SolicitudMalPlanteada } from ".";
export const tratarExcepcionesEnLaValidacionDeSolicitudes = (
  excepcion: unknown,
): Excepcion => {
  if (!(excepcion instanceof z.ZodError)) {
    return new Excepcion({
      codigoHttp: 500,
      mensaje: "Algo inesperado ocurrio durante la validacion de la consulta",
    });
  }
  const errores = (excepcion as z.ZodError).issues.map((problema) => {
    return `El campo ${problema.path[0]} no se encuentra en el formato correcto: ${problema.message}`;
  });
  console.error("Error al validar la solicitud de una carrera");
  console.table(errores);
  return new SolicitudMalPlanteada(errores.join(", "));
};
