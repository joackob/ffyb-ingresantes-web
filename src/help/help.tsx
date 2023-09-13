import AccordionList from "@/src/help/componets/Accordion";
import { Box, Container, useMediaQuery, Typography } from "@mui/material";

const Help = () => {
  const title = "Quizá te podamos ayudar.\n ";
  const subtitle ="Aca hay algunas preguntas frecuentes de otros usuarios que te podrian sevir. Si tenes algun otra pregunta no dudes en consultar a los foros correspndientes";
  const md = useMediaQuery("min-width(900px)");

  return (
    <Box>
      <Container>
        <Box
          display={"grid"}
          gridTemplateColumns={{ xs: "1fr", md: "1fr 1fr 1fr" }}
          gridTemplateRows="auto"
          gridTemplateAreas={{
            xs: "'img' 'img' 'img' 'img' 'img' 'img' 'title' 'subtitle' 'ls' 'btn' '.' ",
            md: "'title title .' 'subtitle subtitle .' 'list list img' '. . .' ",
          }}
          columnGap={{ xs: 0, md: 20}}
          height={{ md: "92vh", xs: "93vh" }}
        >
          <Box
            gridArea={"title"}
            alignSelf={{ xs: "center", md: "center" }}
            textAlign={{ xs: "center", md: "left" }}
          >
            <Typography variant={md ? "h2" : "h3"} fontWeight="bold">
              {title}
            </Typography>
          </Box>
          <Box
            gridArea={"subtitle"}
            alignSelf={{ xs: "center", md: "center" }}
            textAlign={{ xs: "center", md: "left" }}
          >
            <Typography variant={md ? "h4" : "h5"}>
              {subtitle}
            </Typography>
          </Box>
          <Box
            gridArea={"img"}
            sx={{
              backgroundImage: `url("data:image/jpeg;base64,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")`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              maxWidth:"300px",
            }}
          ></Box>
          <Box
            textAlign={{ xs: "center", md: "left" }}
            gridArea={"list"}
            alignSelf={{ xs: "center" }}
          >
            <AccordionList></AccordionList>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Help;
