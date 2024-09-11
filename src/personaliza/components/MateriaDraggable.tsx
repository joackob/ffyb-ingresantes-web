"use client";
import { Box, Typography } from "@mui/material";
import React from "react";
import { Draggable } from "@hello-pangea/dnd";
import { Materia } from "../fake";
import { ChipEstadoCursada } from "./ChipEstadoCursada";

const MateriaDraggable = ({
  materia,
  index,
}: {
  materia: Materia;
  index: number;
}) => {
  return (
    <Draggable draggableId={materia.nombre} index={index}>
      {(draggableProvided) => {
        return (
          <Box
            {...draggableProvided.draggableProps}
            // {...draggableProvided.dragHandleProps}
            ref={draggableProvided.innerRef}
            style={{
              borderRadius: "4px",
              backgroundColor: "white",
            }}
          >
            <Box {...draggableProvided.dragHandleProps}>
              <ChipEstadoCursada cursada={materia.estado} />
            </Box>
            <Box style={{ padding: "4px 8px" }}>
              <Typography
                fontFamily="Montserrat"
                color={"#818a91"}
                // color={"#000"}
                fontWeight="bold"
                fontSize="14px"
              >
                {materia.nombre}
              </Typography>
            </Box>
          </Box>
        );
      }}
    </Draggable>
  );
};

export default MateriaDraggable;
