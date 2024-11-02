import Banner from "../components/Banner";
import GaleriaParaLasTarjetasDeCadaEspacio from "./components/GaleriaDeVideosParaCadaEspacio";
import TarjetaParaCadaEspacioDeLaFacultad from "./components/TarjetaParaCadaEspacioDeLaFacultad";
import { videos } from "./videos";

const index = () => {
  return (
    <>
      <Banner titulo="Aulas y Espacios de la Facultad" />
      <GaleriaParaLasTarjetasDeCadaEspacio>
        {videos.map((video) => (
          <TarjetaParaCadaEspacioDeLaFacultad
            key={video.id}
            video={video.url}
            description={video.descripcion}
          />
        ))}
      </GaleriaParaLasTarjetasDeCadaEspacio>
    </>
  );
};
export default index;
