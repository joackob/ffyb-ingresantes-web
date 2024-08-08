import { Cuatrimestre } from "@/src/database/interfaces";
import TarjetaCuatrimestre from "./TarjetaCuatrimestre";

const TableroCuatrimestres = ({
  cuatrimestres,
}: {
  cuatrimestres: Cuatrimestre[];
}) => {
  return (
    <div>
      {cuatrimestres.map((cuatrimestre, index) => (
        <TarjetaCuatrimestre
          cuatrimestre={cuatrimestre}
          key={cuatrimestre.id}
          index={index}
        />
      ))}
    </div>
  );
};

export default TableroCuatrimestres;
