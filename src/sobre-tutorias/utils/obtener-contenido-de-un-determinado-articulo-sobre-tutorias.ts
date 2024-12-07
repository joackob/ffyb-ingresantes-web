import path from "path";
import fs from "fs";
import { serialize } from "next-mdx-remote/serialize";

export const obtenerContenidoDeUnDeterminadoArticuloSobreTutorias = async (
  nombre: string,
) => {
  const carpeta = path.join(process.cwd(), "/src/sobre-tutorias/articulos");
  const direccion = path.join(carpeta, `${nombre}.mdx`);
  const contenidoEnBruto = fs.readFileSync(direccion, "utf8");
  const contenido = await serialize(contenidoEnBruto, {
    parseFrontmatter: true,
  });
  return contenido;
};
