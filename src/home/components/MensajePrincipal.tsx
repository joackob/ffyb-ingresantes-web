import { Box, Container, Typography, useTheme } from "@mui/material";

const MensajePrincipal = () => {
  const promo: string =
    "Bienvenidos al Sistema de Tutorías de Farmacia y bioquímica.\n ";
  const theme = useTheme();
  return (
    <Box
      width={"100%"}
      textAlign={"center"}
      height={"448px"}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      color={"#FFFFFF"}
      fontFamily={"Montserrat"}
    >
      <Container>
        <Typography
          variant={"h1"}
          fontSize={"48px"}
          display={{ md: "block", xs: "none" }}
          padding={"10px"}
          fontWeight={800}
        >
          {promo}
        </Typography>
        <Typography
          variant={"h3"}
          fontSize={"40px"}
          display={{ md: "none", xs: "block" }}
          padding={"10px"}
          fontWeight={800}
        >
          {promo}
        </Typography>
      </Container>
    </Box>
  );
};

export default MensajePrincipal;

