import Home from "@/src/home";
import {
  intentarObtenerMetadatosDeCadaArticuloSobreTutorias,
  MetadatosDeUnArticuloDeTutorias,
} from "@/src/home/utils/obtener-metadatos-de-cada-articulo-sobre-tutorias";
import { GetStaticProps, InferGetStaticPropsType } from "next";

const index = ({ metadatos }: MetadatosAColocarEnCadaResumen) => {
  return <Home metadatos={metadatos} />;
};

export const getStaticProps = (async () => {
  const metadatos = await intentarObtenerMetadatosDeCadaArticuloSobreTutorias();
  return {
    props: {
      metadatos,
    },
  };
}) satisfies GetStaticProps<{ metadatos: MetadatosDeUnArticuloDeTutorias[] }>;

type MetadatosAColocarEnCadaResumen = InferGetStaticPropsType<
  typeof getStaticProps
>;

export default index;
