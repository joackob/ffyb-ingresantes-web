import { NextApiResponse } from "next";

export const tratarExcepciones = ({
  excepcion,
  respuesta,
}: {
  excepcion: unknown;
  respuesta: NextApiResponse;
}): void => {
  try {
    console.error("Error a descubrir", excepcion);
    (excepcion as Excepcion).brindarUnaRespuestaAdecuada(respuesta);
  } catch (error) {
    console.error("Error desconocido", error);
    const excepcionDesconocida = new Excepcion({
      codigoHttp: 500,
      mensaje: "Algo inesperado ocurrio con el servicio",
    });
    return excepcionDesconocida.brindarUnaRespuestaAdecuada(respuesta);
  }
};

type PropiedadesDeUnaExcepcion = {
  codigoHttp: number;
  mensaje: string;
};

export class Excepcion {
  constructor(protected propiedades: PropiedadesDeUnaExcepcion) {}

  brindarUnaRespuestaAdecuada(respuesta: NextApiResponse): void {
    respuesta
      .status(this.propiedades.codigoHttp)
      .json({ mensaje: this.propiedades.mensaje });
  }
}

export class SolicitudMalPlanteada extends Excepcion {
  constructor(mensaje: string) {
    super({
      codigoHttp: 400,
      mensaje: mensaje,
    });
  }
}

export class SolicitudSinCredencialesCorrespondientes extends Excepcion {
  constructor(mensaje: string) {
    super({
      codigoHttp: 401,
      mensaje: mensaje,
    });
  }
}

export class EspacioOcupado extends Excepcion {
  constructor(mensaje: string) {
    super({
      codigoHttp: 423,
      mensaje: mensaje,
    });
  }
}

export class RegistroNoEncontradoOInexistente extends Excepcion {
  constructor(mensaje: string) {
    super({
      codigoHttp: 404,
      mensaje: mensaje,
    });
  }
}

export class ErrorDesconocidoDelServidor extends Excepcion {
  constructor(mensaje: string) {
    super({
      codigoHttp: 500,
      mensaje: mensaje,
    });
  }
}

export class ServicioInhabilitado extends Excepcion {
  constructor(mensaje: string) {
    super({
      codigoHttp: 503,
      mensaje: mensaje,
    });
  }
}

export class BaseDeDatosNoCumplioConLaTareaSolicitada extends Excepcion {
  constructor(mensaje: string) {
    super({
      codigoHttp: 503,
      mensaje: mensaje,
    });
  }
}
