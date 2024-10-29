
import MensajePrincipal from "./components/MensajePrincipal";
import ContenedorParaLasTarjetas from "./components/ContenedorParaLasTarjetas";
import TarjetaParaElResumenDeCadaArticulo from "./tarjeta";
import { articulos } from "./fake";
// import { obtenerMetadatosDeCadaArticulo } from "utils/obtener-metadatos-de-cada-articulo";
// import { intentarObtenerMetadatosDeCadaArticuloSobreTutorias } from "utils/obtener-metadatos-de-cada-articulo-sobre-tutorias";

const index = () => {
  // const articulos = obtenerMetadatosDeCadaArticulo("sobre-tutorias")
  // const articulos = intentarObtenerMetadatosDeCadaArticuloSobreTutorias()
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
