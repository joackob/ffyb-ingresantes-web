import { Cursada, Materia } from "@/src/database/interfaces";
import { EstadoCursada } from "./EstadoCursada";
import { RadioButtonChecked, RadioButtonUnchecked } from "@mui/icons-material";
import {
  Box,
  Button,
  Typography,
} from "@mui/material";
import React from "react";
import { Draggable } from "react-beautiful-dnd";

const TarjetaMateria = ({
  materia,
  index,
}: {
  materia: Materia;
  index: number;
}) => {
  return (
    <Draggable draggableId={`m-${materia.id}`} index={index} key={index}>
      {(draggableProvided) => {
        return (
          <Box
            {...draggableProvided.draggableProps}
            {...draggableProvided.dragHandleProps}
            ref={draggableProvided.innerRef}
            sx={{
              width:"208px",             
              borderRadius:"10px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              margin: "8px",
              backgroundColor:"white",
              direction:"vertical"
              
              
            }}
          >
            <EstadoCursada cursada={materia.cursada}/>
            <Box>
              <Button
                sx={{
                  padding: { xs: "1px", md: "4px" },
                  display: "block",
                  textAlign: "start",
                  minWidth: "0px",
                  lineHeight: "normal",
                  textTransform: "none",
                  color: "black",
                  textDecoration: "none",
                  direction:"vertical",
                  fontSize: { xs: "15px", md: "12px" },
                  backgroundColor:"white",
                  
                }}
              >
                {materia.nombre}
              </Button>
            </Box>
          </Box>
        );
      }}
    </Draggable>
  );
};

export default TarjetaMateria;
