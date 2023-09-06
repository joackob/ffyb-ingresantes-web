import { CheckCircle } from "@mui/icons-material";
import {
  Box,
  Card,
  Container,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const Help = () => {
  const theme = useTheme();
  const title = "Bienvenidos a las tutorías.\n ";
  const subtitle =
    "Estamos aquí para brindarte el apoyo y la orientación personalizada que necesitas para alcanzar tus metas educativas con confianza.";
  const md = useMediaQuery("min-width(900px)");

  return (
    <Box>
      <Container>
        <Box
          display={"grid"}
          gridTemplateColumns={{ xs: "1fr", md: "1fr 1fr" }}
          gridTemplateRows="auto"
          gridTemplateAreas={{
            xs: "'img' 'img' 'img' 'img' 'img' 'img' 'title' 'subtitle' 'ls' 'btn' '.' ",
            md: "'title img' 'subtitle img' 'ls img' 'btn img''. .' ",
          }}
          columnGap={{ xs: 0, md: 2 }}
          height={{ md: "92vh", xs: "93vh" }}
        >
          <Box>
              <Card>Intento de card</Card>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Help;
