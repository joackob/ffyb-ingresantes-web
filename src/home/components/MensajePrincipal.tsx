import {
    Box,
    Container,
    Typography,
    useTheme,
  } from "@mui/material";

  const MensajePrincipal = () => {
    const theme = useTheme();
    const title = "Bienvenidos al Sistema de Tutorías de Farmacia y bioquímica.\n ";
  return(
  <Box 
  width={{md: "1024px", xs: "430px"}}  
  textAlign={"center"}
  fontWeight="bold"
  height={"448px"}
  display="flex" 
  flexDirection="column" 
  justifyContent="space-between" 
  alignItems="center"
  color={"#FFFFFF"}
  padding={"10px"}
  >
  <Container >
            <Typography
              variant={"h1"}
              
              display={{ md: "block", xs: "none" }}
            >
              {title}
            </Typography>
            <Typography
              variant={"h3"}
              display={{ md: "none", xs: "block" }}
            >
              {title}
            </Typography>
  </Container>
  </Box>
);
};

export default MensajePrincipal;      