import { Box, Button, Container, List, ListItem, ListItemIcon, ListItemText, Modal, Typography, useTheme } from "@mui/material";
import React from "react";
import { Carrera, Cursada, Materia } from "../database/interfaces";
import { DragDropContext, Draggable, Droppable, resetServerContext } from "react-beautiful-dnd";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import { RadioButtonChecked, RadioButtonUnchecked } from "@mui/icons-material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  p: 4,
};

const Personaliza = ({ carrera }: { carrera: Carrera }) => {
  const [open, setOpen] = React.useState(false);
  const [materiaSelecionada, setMateriaSeleccionada] = React.useState<Materia>(
    carrera.plan[0].materias[0],
  );
  const setHandleOpen = (materia: Materia) => {
    const handleOpen = () => {
      setMateriaSeleccionada(materia);
      setOpen(true);
    };
    return handleOpen;
  };

  const [plan, setPlan] = React.useState(carrera.plan);
  const handleClose = () => setOpen(false);
  const theme = useTheme();
  resetServerContext();

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

  return (
    <Box>
      <Container>
        <Box
          display={"grid"}
          gridTemplateColumns={{ xs: "1fr", md: "1fr 1fr" }}
          gridTemplateRows={{ xs: "80px", md: "130px" }}
          gridTemplateAreas={{
            xs: "'title' 'subjects' 'footer' ",
            md: "'title title' 'subjects subjects' 'footer footer'",
          }}
          height={{ md: "92vh", xs: "93vh" }}
        >
          <Box
            height={"75px"}
            paddingTop={{ xs: "10px", md: "30px" }}
            gridArea={"title"}
            alignSelf={"start"}
            textAlign={"start"}
          >
            <Typography fontSize={{ xs: "40px", md: "55px" }} fontWeight="bold">
              {carrera.nombre}
            </Typography>
          </Box>

          <Box
            gridArea={"subjects"}
            display={"grid"}
            columnGap={{ md: "100px" }}
            rowGap={{ xs: "5px", md: "30px" }}
            justifyItems={"start"}
            alignContent={{ xs: "end", md: "center" }}
            gridTemplateColumns={{ md: "1fr 1fr 1fr", xs: "1fr" }}
            gridTemplateRows="auto"
            gridAutoColumns={"1fr"}
            gridAutoRows={"auto"}
            marginTop={"50px"}
          >
            <DragDropContext
              onDragEnd={(result) => {
                if (!result.destination) return;

                const { source, destination } = result;

                const posicionOrigen = source.index;
                const cuatrimestreOrigen = Number(source.droppableId);
                const posicionDestino = destination.index;
                const cuatrimestreDestino = Number(destination.droppableId);

                const nuevoPlan = [...plan];

                const [materia] = nuevoPlan[cuatrimestreOrigen].materias.splice(
                  posicionOrigen,
                  1,
                );
                nuevoPlan[cuatrimestreDestino].materias.splice(
                  posicionDestino,
                  0,
                  materia,
                );

                setPlan(nuevoPlan);
              }}
            >
              {plan.map((cuatrimestre, index) => (
                <Droppable droppableId={`${index}`} key={index}>
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
                          
                          backgroundColor: getListBackgroundColor(
                            cuatrimestre.materias
                          ),
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
                                  sx={{ padding: "2px", display:"flex", flexDirection: "column", alignItems: "flex-start",margin:"5px"}}
                                >
                                  <ListItemIcon
                                    sx={{ justifyContent: "center" }}
                                  >
                                    {materia.cursada === Cursada.CURSANDO && (
                                      <Typography
                                        sx={{ fontSize: "30px", backgroundColor:"#4FB7EF",borderRadius:"10px" }}
                                      > Cursando
                                      </Typography>
                                    )}
                                    {materia.cursada === Cursada.DISPONIBLE && (
                                      <RadioButtonChecked
                                        sx={{ fontSize: "30px" }}
                                      />
                                    )}
                                    {materia.cursada === Cursada.APROBADA && (
                                      <RadioButtonChecked
                                        sx={{
                                          color: theme.palette.primary.main,
                                          fontSize: "30px",
                                        }}
                                      />
                                    )}
                                    {materia.cursada === Cursada.PENDIENTE && (
                                      <RadioButtonUnchecked
                                        sx={{ fontSize: "30px" }}
                                      />
                                    )}
                                  </ListItemIcon>
                                  <ListItemText>
                                    <Button
                                      onClick={setHandleOpen(materia)}
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
              ))}
            </DragDropContext>
          </Box>
          <Modal open={open} onClose={handleClose}>
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                {materiaSelecionada.nombre}
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {materiaSelecionada.nombre}
              </Typography>
            </Box>
          </Modal>
          <Box gridArea={"footer"} height={"40px"} width={"100%"}></Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Personaliza;
