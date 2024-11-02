import z from "zod";
import { obtenerMetadatosDeCadaArticulo } from "./obtener-metadatos-de-cada-articulo";

export const intentarObtenerMetadatosDeCadaArticuloSobreTutorias = () => {
  const metadatos = obtenerMetadatosDeCadaArticulo("sobre-tutorias");
  return validarLosMetadatosDeCadaArticuloSobreTutorias(metadatos);
};

const validarLosMetadatosDeCadaArticuloSobreTutorias = (
  metadatos: any[]
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
  slug: z.string(),
});

type MetadatosDeUnArticuloDeTutorias = z.infer<
  typeof EsquemaParaLosMetadatosDeUnArticuloDeTutorias
>;
