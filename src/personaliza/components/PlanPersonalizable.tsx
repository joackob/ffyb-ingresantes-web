import React, { ReactNode } from "react";
import { DragDropContext, resetServerContext } from "react-beautiful-dnd";

export type ModificacionEnPlanDeEstudios = {
  posicionOrigen: {
    idCuatrimestre: string;
    idMateria: string;
    posicion: number;
  };
  posicionDestino: {
    idCuatrimestre: string;
    idMateria: string;
    posicion: number;
  };
};

export type AccionAlCambiarPlanDeEstudios = (
  modificacion: ModificacionEnPlanDeEstudios
) => void;

const PlanPersonalizable = ({
  children,
  alCambiar,
}: {
  children: ReactNode;
  alCambiar: AccionAlCambiarPlanDeEstudios;
}) => {
  resetServerContext();

  return (
    <DragDropContext
      onDragEnd={(result) => {
        if (!result.destination) return;
        alCambiar({
          posicionOrigen: {
            idCuatrimestre: result.source.droppableId,
            idMateria: result.draggableId,
            posicion: result.source.index,
          },
          posicionDestino: {
            idCuatrimestre: result.destination.droppableId,
            idMateria: result.draggableId,
            posicion: result.destination.index,
          },
        });
      }}
    >
      {children}
    </DragDropContext>
  );
};

export default PlanPersonalizable;
