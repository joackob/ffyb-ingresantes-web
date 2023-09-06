import React from 'react';
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

let id = 0;
function ingresarDatos(pregunta:string,respuesta:string) {
  id += 1;
  return {id,pregunta,respuesta}
}
const dataBase =[
  ingresarDatos("¿Tenes problemas economicos?","Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit."),
  ingresarDatos("¿Tenes problemas para gestionar tus horarios?","Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit."),
  ingresarDatos("¿Sufris de violencia domestica?","Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit."),
  ingresarDatos("Contactos Administrativos","Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.")
]

const AccordionList = () =>{
  return (
    <>
        {dataBase.map(data=>(
          <Accordion TransitionProps={{ unmountOnExit: true }}>
            <AccordionSummary key ={data.id} expandIcon={<ExpandMoreIcon />}aria-controls="panel1a-content"id="panel1a-header">
              <Typography fontWeight={"bold"}>{data.pregunta}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{data.respuesta}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
    </>
  );
}
export default AccordionList