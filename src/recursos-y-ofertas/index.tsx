import BannerRecursosYOfertas from "./componets/BannerRecursosYOfertas";
import GaleriaDeTarjetasParaCadaRecurso from "./componets/DistribucionRecursos";
import TarjetaParaCadaRecursoUOfertaDisponible from "./componets/TarjetaRecurso";
import { recursos } from "./fake";

const Help = () => {
  return (
    <>
      <BannerRecursosYOfertas />
      <GaleriaDeTarjetasParaCadaRecurso>
        {recursos.map((recurso) => {
          return (
            <TarjetaParaCadaRecursoUOfertaDisponible
              key={recurso.titulo}
              recurso={recurso}
            />
          );
        })}
      </GaleriaDeTarjetasParaCadaRecurso>
    </>
  );
};

export default Help;
