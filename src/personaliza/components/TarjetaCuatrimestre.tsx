import { Cursada, Materia } from "@/src/database/interfaces";
import { List } from "@mui/material";
import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { Cuatrimestre } from "@/src/database/interfaces";
import TarjetaMateria from "./TarjetaMateria";

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
      return "rgba(129, 138, 145, 0.85)";
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
    <Droppable droppableId={cuatrimestre.id}>
      {(droppableProvided) => {
        return (
          <List
            sx={{
              width: "272px",
              display: "flex",
              flexDirection: "column",
              marginBottom:"100px",
              padding: "15px",
              border: "solid 1px",
              borderRadius: "5%",
              borderColor: "#c2c2c2",
              backgroundColor: getListBackgroundColor(cuatrimestre.materias),
            }}
            ref={droppableProvided.innerRef}
            {...droppableProvided.droppableProps}
          >
            {cuatrimestre.materias.map((materia, index) => (
              
              <TarjetaMateria materia={materia} key={index} index={index} />
            ))}
            {droppableProvided.placeholder}
          </List>
        );
      }}
    </Droppable>
  );
};

export default TarjetaCuatrimestre;
