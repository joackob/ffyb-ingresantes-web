import ContenedorParaLaTarjeta from "./components/ContenedorParaLaTarjeta";
import CuerpoPrincipalDeLaTarjeta from "./components/CuerpoPrincipalDeLaTarjeta";
import ImagenComplementaria from "./components/ImagenComplementaria";

type ParametrosTarjeta = {
  titulo: string;
  resumen: string;
  enlace: string;
  imagen: {
    fuente: string;
    descripcion: string;
  };
};

const index = (props: ParametrosTarjeta) => {
  return (
    <ContenedorParaLaTarjeta>
      <CuerpoPrincipalDeLaTarjeta
        titulo={props.titulo}
        resumen={props.resumen}
        enlace={props.enlace}
      />
      <ImagenComplementaria
        fuente={props.imagen.fuente}
        descripcion={props.imagen.descripcion}
      />
    </ContenedorParaLaTarjeta>
  );
};

export default index;
