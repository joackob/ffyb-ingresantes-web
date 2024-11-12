import { obtenerContenidoDeUnDeterminadoArticuloSobreTutorias } from "@/src/home/utils/obtener-contenido-de-un-determinado-articulo-sobre-tutorias";
import { intentarObtenerMetadatosDeCadaArticuloSobreTutorias } from "@/src/home/utils/obtener-metadatos-de-cada-articulo-sobre-tutorias";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { MDXRemote } from "next-mdx-remote";

const ArticuloSobreTutorias = ({ contenido }: ContenidoDeCadaArticulo) => {
  return <MDXRemote {...contenido} />;
};

export const getStaticPaths = (async () => {
  const nombresDeLosArticulos = (
    await intentarObtenerMetadatosDeCadaArticuloSobreTutorias()
  ).map((metadatos) => metadatos.nombre);
  const paths = nombresDeLosArticulos.map((nombre) => ({
    params: {
      articulo: nombre,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}) satisfies GetStaticPaths;

export const getStaticProps = (async (contexto) => {
  return {
    props: {
      contenido: await obtenerContenidoDeUnDeterminadoArticuloSobreTutorias(
        contexto.params?.articulo as string,
      ),
    },
  };
}) satisfies GetStaticProps<{
  contenido: Awaited<
    ReturnType<typeof obtenerContenidoDeUnDeterminadoArticuloSobreTutorias>
  >;
}>;

type ContenidoDeCadaArticulo = InferGetStaticPropsType<typeof getStaticProps>;

export default ArticuloSobreTutorias;
