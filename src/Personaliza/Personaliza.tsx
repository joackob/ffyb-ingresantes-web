import { RadioButtonChecked, RadioButtonUnchecked } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Modal,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import { Carrera, Cursada, Materia } from "../database/interfaces";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import DragHandleIcon from "@mui/icons-material/DragHandle";

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
    carrera.plan[0].materias[0]
  );
  const setHandleOpen = (materia: Materia) => {
    const handleOpen = () => {
      setMateriaSeleccionada(materia);
      setOpen(true);
    };
    return handleOpen;
  };
  const handleClose = () => setOpen(false);
  const theme = useTheme();
  const [indice, setIndice] = React.useState(carrera.plan);
  const reorder = ({
    list,
    startIndex,
    endIndex,
  }: {
    list: [];
    startIndex: number;
    endIndex: number;
  }) => {
    const result = [...list];
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  return (
    <Box>
      <Container>
        <Box
          justifyItems={"center"}
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
            textAlign={"center"}
          >
            <Typography fontSize={{ xs: "40px", md: "55px" }} fontWeight="bold">
              Personaliza
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
          >
            {carrera.plan.map((cuatrimestre, index) => (
              <DragDropContext
                onDragEnd={(result) => {
                  const { source, destination } = result;
                  if (!destination) {
                    return;
                  }
                  if (
                    source.index === destination.index &&
                    source.droppableId === destination.droppableId
                  ) {
                    return;
                  }
                }}
              >
                <Droppable droppableId={`${index}`}>
                  {(droppableProvided) => (
                    <List
                      sx={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        paddingBottom: "15px",
                        borderBottom: "solid 1px",
                        borderColor: theme.palette.primary.main,
                      }}
                      {...droppableProvided.droppableProps}
                      ref={droppableProvided.innerRef}
                    >
                      {cuatrimestre.materias.map((materia, index) => (
                        <Draggable draggableId={`${materia.id}`} index={index}>
                          {(draggableProvided) => (
                            <ListItem
                              sx={{ padding: "2px" }}
                              {...draggableProvided.draggableProps}
                              ref={draggableProvided.innerRef}
                              {...draggableProvided.dragHandleProps}
                            >
                              <ListItemIcon sx={{ justifyContent: "center" }}>
                                {materia.cursada === Cursada.CURSANDO && (
                                  <RadioButtonChecked
                                    sx={{ fontSize: "30px" }}
                                  />
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
                              <ListItemIcon>
                                <DragHandleIcon
                                  sx={{ fontSize: "30px" }}
                                ></DragHandleIcon>
                              </ListItemIcon>
                            </ListItem>
                          )}
                        </Draggable>
                      ))}
                      {droppableProvided.placeholder}
                    </List>
                  )}
                </Droppable>
              </DragDropContext>
            ))}
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
