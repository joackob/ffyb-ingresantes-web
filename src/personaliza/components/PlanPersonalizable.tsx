"use client";
import { ReactNode } from "react";
import { closestCenter, DndContext } from "@dnd-kit/core";
import { ModificacionEnPlanDeEstudios } from "../hooks";
import { Container, Stack } from "@mui/material";

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
  return (
    <DndContext id="plan-personalizable" collisionDetection={closestCenter}>
      <Container
        style={{
          minHeight: "inherit",
          paddingBottom: "16px",
          overflowY: "hidden",
          overflowX: "scroll",
          scrollbarWidth: "none",
        }}
      >
        <Stack
          component={"ol"}
          direction="row"
          spacing={"16px"}
          minHeight={"inherit"}
        >
          {children}
        </Stack>
      </Container>
    </DndContext>
  );
};

export default PlanPersonalizable;
