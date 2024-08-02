import { Cursada, Materia } from "@/src/database/interfaces";

import { RadioButtonChecked, RadioButtonUnchecked } from "@mui/icons-material";
import {
  Button,
  ListItem,
  ListItemIcon,
  ListItemText,
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
          <ListItem
            {...draggableProvided.draggableProps}
            {...draggableProvided.dragHandleProps}
            ref={draggableProvided.innerRef}
            sx={{
              padding: "2px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              margin: "5px",
            }}
          >
            <ListItemIcon sx={{ justifyContent: "center" }}>
              {materia.cursada === Cursada.CURSANDO && (
                <Typography
                  sx={{
                    fontSize: "30px",
                    backgroundColor: "#4FB7EF",
                    borderRadius: "10px",
                  }}
                >
                  {" "}
                  Cursando
                </Typography>
              )}
              {materia.cursada === Cursada.DISPONIBLE && (
                <RadioButtonChecked sx={{ fontSize: "30px" }} />
              )}
              {materia.cursada === Cursada.APROBADA && (
                <RadioButtonChecked
                  sx={{
                    color: "blue",
                    fontSize: "30px",
                  }}
                />
              )}
              {materia.cursada === Cursada.PENDIENTE && (
                <RadioButtonUnchecked sx={{ fontSize: "30px" }} />
              )}
            </ListItemIcon>
            <ListItemText>
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
                  paddingLeft: { xs: "0px", md: "10px" },
                  fontSize: { xs: "15px", md: "20px" },
                }}
              >
                {materia.nombre}
              </Button>
            </ListItemText>
          </ListItem>
        );
      }}
    </Draggable>
  );
};

export default TarjetaMateria;
