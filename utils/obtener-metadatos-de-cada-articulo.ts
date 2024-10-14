import matter from "gray-matter";
import path from "path";
import fs from "fs";

export const obtenerMetadatosDeCadaArticulo = (carpeta: string): any[] => {
  const directorioConArticulos = path.join(process.cwd(), carpeta);
  const nombresDeArticulos = fs.readdirSync(directorioConArticulos);
  return nombresDeArticulos.map((articulo) => {
    const direccionCompleta = path.join(directorioConArticulos, articulo);
    const contenido = fs.readFileSync(direccionCompleta, "utf8");
    const { data } = matter(contenido);
    return { ...data, slug: articulo.replace(/\.mdx$/, "") };
  });
};
