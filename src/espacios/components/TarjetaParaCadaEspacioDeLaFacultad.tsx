import {
  ContenedorParaLaTarjeta,
  VideoComplementario,
  CuerpoDeLaTarjeta,
} from "./ComponentesParaLasTarjetasDeCadaEspacio";

type PropiedadesDeCadaEspacioDeLaFacultad = {
  video: string;
  description: string;
};

const TarjetaParaCadaEspacioDeLaFacultad = ({
  video,
  description,
}: PropiedadesDeCadaEspacioDeLaFacultad) => {
  return (
    <ContenedorParaLaTarjeta>
      <VideoComplementario url={video} />
      <CuerpoDeLaTarjeta contenido={description} />
    </ContenedorParaLaTarjeta>
  );
};

export default TarjetaParaCadaEspacioDeLaFacultad;
