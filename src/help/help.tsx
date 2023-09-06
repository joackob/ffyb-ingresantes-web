import AccordionList from "@/src/help/componets/Accordion";
import {
  Box,
  Card,
  Container,
  useMediaQuery,
  Typography,
  useTheme,
} from "@mui/material";

const Help = () => {
  const theme = useTheme();
  const title = "Quizá te podamos ayudar.\n ";
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
          <Box gridArea={"title"} alignSelf={{ xs: "center", md: "end", }} textAlign={{ xs: "center", md: "left", }}>
            <Typography variant={md ? "h2" : "h3"} fontWeight="bold">{title}</Typography>
          </Box>
          <Box textAlign={{ xs: "center", md: "left", }} gridArea={"subtitle"} alignSelf={{ xs: "center", }}>
            <AccordionList></AccordionList>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Help;