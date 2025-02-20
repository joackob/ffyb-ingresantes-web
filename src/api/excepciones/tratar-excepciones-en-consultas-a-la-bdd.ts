import {
  PrismaClientInitializationError,
  PrismaClientKnownRequestError,
  PrismaClientRustPanicError,
  PrismaClientUnknownRequestError,
  PrismaClientValidationError,
} from "@prisma/client/runtime/library";
import { Excepcion } from ".";

export const tratarExcepcionesEnConsultasALaBdd = (
  excepcion: unknown,
): Excepcion => {
  if (
    !(
      excepcion instanceof PrismaClientKnownRequestError ||
      excepcion instanceof PrismaClientUnknownRequestError ||
      excepcion instanceof PrismaClientRustPanicError ||
      excepcion instanceof PrismaClientInitializationError ||
      excepcion instanceof PrismaClientValidationError
    )
  ) {
    return new Excepcion({
      codigoHttp: 500,
      mensaje: "Algo inesperado ocurrio durante la consulta a la base de datos",
    });
  }
  console.error("Error al consultar la base de datos", excepcion.message);
  return new Excepcion({ codigoHttp: 500, mensaje: excepcion.message });
};
