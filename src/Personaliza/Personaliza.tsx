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

const Personaliza = ({ subjects }: { subjects: (string | boolean)[][][] }) => {
  const [open, setOpen] = React.useState(false);
  const [idMateria, setIdMateria] = React.useState(0);
  const setHandleOpen = (id: number) => {
    const handleOpen = () => {
      setIdMateria(id);
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
            {subjects.map((elem) => (
              <List
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  paddingBottom: "15px",
                  borderBottom: "solid 1px",
                  borderColor: theme.palette.primary.main,
                }}
              >
                {elem.map((item, index) => (
                  <ListItem key={index} sx={{ padding: "2px" }}>
                    <ListItemIcon sx={{ justifyContent: "center" }}>
                      {item[1] == true ? (
                        <RadioButtonChecked
                          sx={{ fontSize: { md: "30px", xs: "20px" } }}
                        />
                      ) : (
                        ""
                      )}
                      {item[2] == true ? (
                        <RadioButtonChecked
                          sx={{
                            color: theme.palette.primary.main,
                            fontSize: { md: "30px", xs: "20px" },
                          }}
                        />
                      ) : (
                        ""
                      )}
                      {item[1] == false && item[2] == false ? (
                        <RadioButtonUnchecked
                          sx={{ fontSize: { md: "30px", xs: "20px" } }}
                        />
                      ) : (
                        ""
                      )}
                    </ListItemIcon>
                    <ListItemText>
                      <Button
                        onClick={setHandleOpen(index)}
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
                        {item[0]}
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
                          {elem[idMateria]}
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                          {elem[idMateria]}
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
