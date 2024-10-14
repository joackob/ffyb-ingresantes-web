import Banner from "../components/Banner";
import GaleriaDeTarjetasParaCadaEspacio from "./components/GaleriaDeVideosParaCadaEspacio";
import TarjetaParaCadaEspacioDeLaFacultad from "./components/TarjetaParaUnEspacioDeLaFacultad";
import { videos } from "./fake";

const index = () => {
  return (
    <>
      <Banner titulo="Aulas y espacios de la facultad" />
      <GaleriaDeTarjetasParaCadaEspacio>
        {videos.map((video) => (
          <TarjetaParaCadaEspacioDeLaFacultad
            key={video.id}
            video={video.url}
            description={video.descripcion}
          />
        ))}
      </GaleriaDeTarjetasParaCadaEspacio>
    </>
  );
};
export default index;
