import z from "zod";
import { obtenerMetadatosDeCadaArticulo } from "./obtener-metadatos-de-cada-articulo";

export const intentarObtenerMetadatosDeCadaArticuloSobreTutorias =
  async (): Promise<MetadatosDeUnArticuloDeTutorias[]> => {
    const carpeta = "/src/home/articulos";
    const metadatos = await obtenerMetadatosDeCadaArticulo(carpeta);
    return validarLosMetadatosDeCadaArticuloSobreTutorias(metadatos);
  };

const validarLosMetadatosDeCadaArticuloSobreTutorias = (
  metadatos: any[],
): MetadatosDeUnArticuloDeTutorias[] => {
  return metadatos.filter((metadato) => {
    const { success } =
      EsquemaParaLosMetadatosDeUnArticuloDeTutorias.safeParse(metadato);
    return success;
  });
};

const EsquemaParaLosMetadatosDeUnArticuloDeTutorias = z.object({
  titulo: z.string(),
  descripcion: z.string(),
  portada: z.string(),
  alt: z.string(),
  nombre: z.string(),
});

export type MetadatosDeUnArticuloDeTutorias = z.infer<
  typeof EsquemaParaLosMetadatosDeUnArticuloDeTutorias
>;
