import { Box, Container, Typography, useTheme } from "@mui/material";

const MensajePrincipal = () => {
  const promo: string =
    `Bienvenidos al Sistema<br/>de Tutorías<br/>de Farmacia y bioquímica. `;
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
        <Box>
          <Typography
            variant={"h1"}
            fontSize={"48px"}
            display={{ md: "block", xs: "none" }}
            padding={"10px"}
            fontWeight={800}
            dangerouslySetInnerHTML={{ __html: promo }}
          />
          <Typography
            variant={"h3"}
            fontSize={"40px"}
            display={{ md: "none", xs: "block" }}
            padding={"10px"}
            fontWeight={800}
            dangerouslySetInnerHTML={{ __html: promo }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default MensajePrincipal;


