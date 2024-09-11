"use client";
import { Box, Typography } from "@mui/material";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import React from "react";
import { Materia } from "../fake";
import { ChipEstadoCursada } from "./ChipEstadoCursada";

const MateriaDraggable = ({
  materia,
  index,
}: {
  materia: Materia;
  index: number;
}) => {
  const { setNodeRef, attributes, listeners, transform } = useDraggable({
    id: materia.nombre,
  });

  return (
    <Box
      ref={setNodeRef}
      component={"li"}
      style={{
        borderRadius: "4px",
        backgroundColor: "white",
        transform: CSS.Transform.toString(transform),
      }}
    >
      <Box style={{ userSelect: "none" }} {...attributes} {...listeners}>
        <ChipEstadoCursada cursada={materia.estado} />
      </Box>
      <Box style={{ padding: "4px 8px" }}>
        <Typography
          fontFamily="Montserrat"
          color={"#818a91"}
          fontWeight="bold"
          fontSize="14px"
          style={{ userSelect: "none" }}
        >
          {materia.nombre}
        </Typography>
      </Box>
    </Box>
  );
};

export default MateriaDraggable;
