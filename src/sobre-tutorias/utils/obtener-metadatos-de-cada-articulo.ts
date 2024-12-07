import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import fs from "fs";

export const obtenerMetadatosDeCadaArticulo = async (
  carpeta: string,
): Promise<any[]> => {
  const directorioConArticulos = path.join(process.cwd(), carpeta);
  const nombresDeArticulos = fs.readdirSync(directorioConArticulos);
  const metadatosDeLosArticulos = nombresDeArticulos.map(async (articulo) => {
    const direccionCompleta = path.join(directorioConArticulos, articulo);
    const contenido = fs.readFileSync(direccionCompleta, "utf8");
    const { frontmatter: metadatos } = await compileMDX({
      source: contenido,
      options: { parseFrontmatter: true },
    });
    return { ...metadatos, nombre: articulo.replace(/\.mdx$/, "") };
  });
  return Promise.all(metadatosDeLosArticulos);
};
