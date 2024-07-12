import {
    Box,
    Container,
    Typography,
  } from "@mui/material";

  const MensajePrincipal = () => {
    const promo: string = "Bienvenidos al Sistema de Tutorías de Farmacia y bioquímica.\n ";
  return(
  <Box 
  width={"100%"}  
  textAlign={"center"}
  fontWeight="800"
  height={"448px"}
  display="flex" 
  flexDirection="column" 
  justifyContent="space-between" 
  alignItems="center"
  color={"#FFFFFF"}
  fontFamily={"Montserrat"}
  
  
  >
  <Container >
            <Typography
              variant={"h1"}
              fontSize={"48px"}
              display={{ md: "block", xs: "none" }}
              padding={"10px"}
            >
              {promo}
            </Typography>
            <Typography
              variant={"h3"}
              fontSize={"40px"}
              display={{ md: "none", xs: "block" }}
              padding={"10px"}
            >
              {promo}
            </Typography>
  </Container>
  </Box>
);
};

export default MensajePrincipal;      