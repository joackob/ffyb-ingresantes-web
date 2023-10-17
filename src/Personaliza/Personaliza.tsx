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
  const handleClose = () => setOpen(false);

  const theme = useTheme();

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
            md: "'title title' 'subjects subjects'",
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
              <List
                key={index}
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  paddingBottom: "15px",
                  borderBottom: "solid 1px",
                  borderColor: theme.palette.primary.main,
                }}
              >
                {cuatrimestre.materias.map((materia) => (
                  <ListItem key={materia.id} sx={{ padding: "2px" }}>
                    <ListItemIcon sx={{ justifyContent: "center" }}>
                      {materia.cursada === Cursada.CURSANDO && (
                        <RadioButtonChecked sx={{ fontSize: "30px" }} />
                      )}
                      {materia.cursada === Cursada.DISPONIBLE && (
                        <RadioButtonChecked sx={{ fontSize: "30px" }} />
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
                        <RadioButtonUnchecked sx={{ fontSize: "30px" }} />
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
                    <Modal
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box sx={style}>
                        <Typography
                          id="modal-modal-title"
                          variant="h6"
                          component="h2"
                        >
                          {materiaSelecionada.nombre}
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                          {materiaSelecionada.nombre}
                        </Typography>
                      </Box>
                    </Modal>
                  </ListItem>
                ))}
              </List>
            ))}
          </Box>
          <Box gridArea={"footer"} height={"40px"} width={"100%"}></Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Personaliza;
