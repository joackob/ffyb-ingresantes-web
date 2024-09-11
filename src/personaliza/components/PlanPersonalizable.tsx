"use client";
import React, { ReactNode } from "react";
import { DragDropContext } from "@hello-pangea/dnd";
import { ModificacionEnPlanDeEstudios } from "../hooks";
import { Container, Stack } from "@mui/material";

export type AccionAlCambiarPlanDeEstudios = (
  modificacion: ModificacionEnPlanDeEstudios,
) => void;

const PlanPersonalizable = ({
  children,
  alCambiar,
}: {
  children: ReactNode;
  alCambiar: AccionAlCambiarPlanDeEstudios;
}) => {
  return (
    <DragDropContext
      onDragEnd={(result) => {
        console.log(result);
        if (!result.destination) return;
        alCambiar({
          desde: {
            idCuatrimestre: Number(result.source.droppableId) - 1,
            posicion: result.source.index,
          },
          hacia: {
            idCuatrimestre: Number(result.destination.droppableId) - 1,
            posicion: result.destination.index,
          },
        });
      }}
    >
      <Container
        style={{
          minHeight: "inherit",
          overflowY: "hidden",
          overflowX: "scroll",
          // minHeight: "inherit",
          scrollbarWidth: "none",
          paddingBottom: "16px",
        }}
      >
        <Stack
          direction="row"
          spacing={"16px"}
          // style={{
          //   overflowY: "hidden",
          //   overflowX: "scroll",
          //   minHeight: "inherit",
          //   scrollbarWidth: "none",
          //   paddingBottom: "16px",
          // }}
        >
          {children}
        </Stack>
      </Container>
    </DragDropContext>
  );
};

export default PlanPersonalizable;
