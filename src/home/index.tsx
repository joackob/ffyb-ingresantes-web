import MensajePrincipal from "./components/MensajePrincipal";
import ContenedorParaLasTarjetas from "./components/ContenedorParaLasTarjetas";
import TarjetaParaElResumenDeCadaArticulo from "./tarjeta";
import { articulos } from "./fake";

const index = () => {
  return (
    <>
      <MensajePrincipal />
      <ContenedorParaLasTarjetas>
        {articulos.map((articulo) => (
          <TarjetaParaElResumenDeCadaArticulo
            key={articulo.titulo}
            titulo={articulo.titulo}
            resumen={articulo.descripcion}
            enlace={articulo.enlace}
            imagen={{
              fuente: articulo.imagen.fuente,
              descripcion: articulo.imagen.fuente,
            }}
          />
        ))}
      </ContenedorParaLasTarjetas>
    </>
  );
};

export default index;
