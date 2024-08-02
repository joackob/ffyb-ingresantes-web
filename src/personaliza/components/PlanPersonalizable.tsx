import React from "react";
import { Carrera, Cuatrimestre } from "@/src/database/interfaces";
import { DragDropContext, resetServerContext } from "react-beautiful-dnd";
import TarjetaCuatrimestre from "../components/TarjetaCuatrimestre";
import ProveedorModalMateria from "../contextos/InfoMateria";

const PlanPersonalizable = ({ plan }: { plan: Cuatrimestre[] }) => {
  const [cuatrimestres, setCuatrimestres] = React.useState(plan);
  resetServerContext();

  return (
    <DragDropContext
      onDragEnd={(result) => {
        if (!result.destination) return;

        const { source, destination } = result;

        const posicionOrigen = source.index;
        const cuatrimestreOrigen = Number(source.droppableId);
        const posicionDestino = destination.index;
        const cuatrimestreDestino = Number(destination.droppableId);

        const nuevoPlan = [...plan];

        const [materia] = nuevoPlan[cuatrimestreOrigen].materias.splice(
          posicionOrigen,
          1,
        );
        nuevoPlan[cuatrimestreDestino].materias.splice(
          posicionDestino,
          0,
          materia,
        );

        setCuatrimestres(nuevoPlan);
      }}
    >
      <ProveedorModalMateria>
        {plan.map((cuatrimestre, index) => (
          <TarjetaCuatrimestre
            cuatrimestre={cuatrimestre}
            key={index}
            index={index}
          />
        ))}
      </ProveedorModalMateria>
    </DragDropContext>
  );
};

export default PlanPersonalizable;
