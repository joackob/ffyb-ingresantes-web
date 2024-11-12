import path from "path";
import fs from "fs";
import { compileMDX } from "next-mdx-remote/rsc";
import { serialize } from "next-mdx-remote/serialize";

export const obtenerContenidoDeUnDeterminadoArticuloSobreTutorias = async (
  nombre: string,
) => {
  const carpeta = path.join(process.cwd(), "/src/home/articulos");
  const direccion = path.join(carpeta, `${nombre}.mdx`);
  const contenidoEnBruto = fs.readFileSync(direccion, "utf8");
  // const { content: contenido } = await compileMDX({
  //   source: contenidoEnBruto,
  //   options: { parseFrontmatter: true },
  // });
  const contenido = await serialize(contenidoEnBruto, {
    parseFrontmatter: true,
  });
  return contenido;
};
