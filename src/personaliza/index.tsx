"use client";

import CuatrimestreDroppable from "./components/CuatrimestreDroppable";
import ImagenDeFondo from "./components/ImagenDeFondo";
import MateriaDraggable from "./components/MateriaDraggable";
import PlanPersonalizable from "./components/PlanPersonalizable";
import TituloCarrera from "./components/TituloCarrera";
import { usePlanPersonalizable } from "./hooks";

const Personaliza = () => {
  const { brindarPlanActual, actualizarPlanDeEstudios } =
    usePlanPersonalizable();

  const cuatrimestres = brindarPlanActual();

  return (
    <ImagenDeFondo>
      <TituloCarrera carrera={"Farmacia"} />
      <PlanPersonalizable alCambiar={actualizarPlanDeEstudios}>
        {cuatrimestres.map(({ cuatrimestre, materias }) => (
          <CuatrimestreDroppable
            id={cuatrimestre.toString()}
            index={cuatrimestre}
            key={cuatrimestre}
          >
            {materias.map((materia, index) => (
              <MateriaDraggable
                materia={materia}
                index={index}
                key={materia.nombre}
              />
            ))}
          </CuatrimestreDroppable>
        ))}
      </PlanPersonalizable>
    </ImagenDeFondo>
  );
};

export default Personaliza;
