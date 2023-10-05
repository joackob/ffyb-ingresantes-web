import React from 'react';
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function ingresarDatos(pregunta:string,respuesta:string,panel:string) {
  return {pregunta,respuesta,panel}
}
const dataBase =[
  ingresarDatos("¿Tenés problemas económicos?","Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.","panel1"),
  ingresarDatos("¿Tenés problemas para gestionar tus horarios?","Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.","panel2"),
  ingresarDatos("¿Sufrís de violencia doméstica?","Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.","panel3"),
  ingresarDatos("Contactos Administrativos","Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.","panel4"),
  ingresarDatos("¿Tenés problemas de concetividad?","Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.","panel5"),
  ingresarDatos("¿Tenés problemas con el transporte?","Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.","panel6")
]

const AccordionList = () =>{
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  return (
    <>
        {dataBase.map(data=>(
          <Accordion sx={{border:"1px solid black", margin:"1px",width:"250px"}} TransitionProps={{ unmountOnExit: true }} expanded={expanded === `${data.panel}`} onChange={handleChange(`${data.panel}`)}>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
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