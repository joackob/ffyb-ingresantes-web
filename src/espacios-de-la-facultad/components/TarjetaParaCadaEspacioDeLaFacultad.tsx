import { Box } from "@mui/system";
import {
  ContenedorParaLaTarjeta,
  VideoComplementario,
  CuerpoDeLaTarjeta,
  TituloDelVideo,
} from "./ComponentesParaLasTarjetasDeCadaEspacio";
import { ReactNode } from "react";

type PropiedadesDeCadaEspacioDeLaFacultad = {
  video: string;
  description: string;
  titulo: string;
};

const ContenidoDeLaTargeta = ({ children }: { children: ReactNode }) => {
  return <Box maxWidth={"330px"}>{children}</Box>;
};

const TarjetaParaCadaEspacioDeLaFacultad = ({
  video,
  description,
  titulo,
}: PropiedadesDeCadaEspacioDeLaFacultad) => {
  return (
    <ContenedorParaLaTarjeta>
      <VideoComplementario url={video} />
      <ContenidoDeLaTargeta>
        <TituloDelVideo titulo={titulo} />
        <CuerpoDeLaTarjeta contenido={description} />
      </ContenidoDeLaTargeta>
    </ContenedorParaLaTarjeta>
  );
};

export default TarjetaParaCadaEspacioDeLaFacultad;
