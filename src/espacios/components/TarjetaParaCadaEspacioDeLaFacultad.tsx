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
      <VideoComplementario
        url={video}
        // titulo={"UBA | Facultad de Farmacia y Bioquimica"}
      />
      <CuerpoDeLaTarjeta contenido={description} />
    </ContenedorParaLaTarjeta>
  );
};

export default TarjetaParaCadaEspacioDeLaFacultad;
