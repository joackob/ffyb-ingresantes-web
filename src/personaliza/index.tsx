import { Carrera } from "../database/interfaces";
import {
  TableroCuatrimestres,
  ImagenDeFondo,
  PlanPersonalizable,
  TituloCarrera,
} from "./components";
import { usePlanPersonalizable } from "./hooks";

const Personaliza = ({ carrera }: { carrera: Carrera }) => {
  const { brindarPlanActual, actualizarPlanDeEstudios } =
    usePlanPersonalizable(carrera);

  return (
    <ImagenDeFondo>
      <TituloCarrera carrera={carrera.nombre} />
      <PlanPersonalizable alCambiar={actualizarPlanDeEstudios}>
        <TableroCuatrimestres cuatrimestres={brindarPlanActual()} />
      </PlanPersonalizable>
    </ImagenDeFondo>
  );
};

export default Personaliza;
