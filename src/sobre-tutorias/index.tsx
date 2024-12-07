import MensajePrincipal from "./components/MensajePrincipal";
import ContenedorParaLasTarjetas from "./components/ContenedorParaLasTarjetas";
import TarjetaParaElResumenDeCadaArticulo from "./tarjeta";
import { MetadatosDeUnArticuloDeTutorias } from "./utils/obtener-metadatos-de-cada-articulo-sobre-tutorias";

const index = ({
  metadatos,
}: {
  metadatos: MetadatosDeUnArticuloDeTutorias[];
}) => {
  return (
    <>
      <MensajePrincipal />
      <ContenedorParaLasTarjetas>
        {metadatos.map((metadatosDeUnArticulo) => (
          <TarjetaParaElResumenDeCadaArticulo
            key={metadatosDeUnArticulo.titulo}
            titulo={metadatosDeUnArticulo.titulo}
            resumen={metadatosDeUnArticulo.descripcion}
            enlace={`/sobre-tutorias/${metadatosDeUnArticulo.nombre}`}
            imagen={{
              fuente: metadatosDeUnArticulo.portada,
              descripcion: metadatosDeUnArticulo.alt,
            }}
          />
        ))}
      </ContenedorParaLasTarjetas>
    </>
  );
};

export default index;
