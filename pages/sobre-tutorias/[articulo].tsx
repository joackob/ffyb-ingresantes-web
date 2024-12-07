import { obtenerContenidoDeUnDeterminadoArticuloSobreTutorias } from "@/src/sobre-tutorias/utils/obtener-contenido-de-un-determinado-articulo-sobre-tutorias";
import { intentarObtenerMetadatosDeCadaArticuloSobreTutorias } from "@/src/sobre-tutorias/utils/obtener-metadatos-de-cada-articulo-sobre-tutorias";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { MDXRemote } from "next-mdx-remote";
import { customComponents } from "@/mdx-components";
import { Container } from "@mui/material";

const Page = ({ contenido }: ContenidoDeCadaArticulo) => {
  return (
    <Container
      maxWidth={"md"}
      style={{ marginTop: "2rem", marginBottom: "2rem" }}
    >
      <MDXRemote {...contenido} components={customComponents} />
    </Container>
  );
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

export default Page;
