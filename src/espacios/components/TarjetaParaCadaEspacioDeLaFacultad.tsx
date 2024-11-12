import {
  ContenedorParaLaTarjeta,
  VideoComplementario,
  CuerpoDeLaTarjeta,
  TituloDelVideo,
} from "./ComponentesParaLasTarjetasDeCadaEspacio";

type PropiedadesDeCadaEspacioDeLaFacultad = {
  video: string;
  description: string;
  titulo: string;
};

const TarjetaParaCadaEspacioDeLaFacultad = ({
  video,
  description,
  titulo,
}: PropiedadesDeCadaEspacioDeLaFacultad) => {
  return (
    <ContenedorParaLaTarjeta>
      <TituloDelVideo titulo={titulo} />
      <VideoComplementario url={video} />
      <CuerpoDeLaTarjeta contenido={description} />
    </ContenedorParaLaTarjeta>
  );
};

export default TarjetaParaCadaEspacioDeLaFacultad;
