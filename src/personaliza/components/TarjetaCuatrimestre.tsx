import { Cursada, Materia } from "@/src/database/interfaces";
import index from "@/src/layout";
import theme from "@/src/theme";
import { RadioButtonChecked, RadioButtonUnchecked } from "@mui/icons-material";
import {
  List,
  ListItem,
  ListItemIcon,
  Typography,
  ListItemText,
  Button,
} from "@mui/material";
import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { Cuatrimestre } from "@/src/database/interfaces";
// Función para obtener el estado predominante del cuatrimestre
const getPredominantState = (cuatrimestre: Materia[]) => {
  const states = cuatrimestre.map((materia) => materia.cursada);
  if (states.includes(Cursada.CURSANDO)) {
    return Cursada.CURSANDO;
  } else if (states.includes(Cursada.APROBADA)) {
    return Cursada.APROBADA;
  } else if (states.includes(Cursada.PENDIENTE)) {
    return Cursada.PENDIENTE;
  } else {
    return Cursada.DISPONIBLE;
  }
};

const getListBackgroundColor = (cuatrimestre: Materia[]) => {
  const predominantState = getPredominantState(cuatrimestre);
  switch (predominantState) {
    case Cursada.CURSANDO:
      return "#9FA2A7";
    default:
      return "white";
  }
};
const TarjetaCuatrimestre = ({
  cuatrimestre,
  index,
}: {
  cuatrimestre: Cuatrimestre;
  index: number;
}) => {
  return (
    <Droppable droppableId={`${index}`}>
      {(droppableProvided) => {
        return (
          <List
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              padding: "15px",
              border: "solid 1px",
              borderRadius: "10%",
              borderColor: "#c2c2c2",
              backgroundColor: getListBackgroundColor(cuatrimestre.materias),
            }}
            ref={droppableProvided.innerRef}
            {...droppableProvided.droppableProps}
          >
            {cuatrimestre.materias.map((materia, index) => (
              <Draggable
                draggableId={`m-${materia.id}`}
                index={index}
                key={index}
              >
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
            ))}
            {droppableProvided.placeholder}
          </List>
        );
      }}
    </Droppable>
  );
};

export default TarjetaCuatrimestre;
