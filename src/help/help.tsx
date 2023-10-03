import AccordionList from "@/src/help/componets/Accordion";
import Cartas from "@/src/help/componets/Cards"
import { Box, Container, useMediaQuery, Typography } from "@mui/material";

const Help = () => {
  const title = "Quizá te podamos ayudar.\n ";
  const subtitle ="Acá hay algunas preguntas frecuentes de otros usuarios que te podrían servir. Si tenes algún otra pregunta no dudes en consultar a los foros correspondientes";
  const md = useMediaQuery("min-width(900px)");

  return (
    <Box>
      <Container>
        <Box
          display={"grid"}
          gridTemplateColumns={{ xs: "1fr", md: "1fr 1fr 1fr 1fr" }}
          gridTemplateRows="auto"
          gridTemplateAreas={{
            xs: "'img' 'title' 'subtitle' 'list' ",
            md: "'title title title img' 'subtitle subtitle subtitle img' 'carta1 carta2 carta3 carta4' 'carta5 carta6 carta7 carta8' ",
          }}
          height={{ md: "92vh", xs: "93vh" }}
          columnGap={{ xs: 0, md: 2 }}
          rowGap={{xs:0,md:2}}
        >
          <Box
            gridArea={"title"}
            alignSelf={{ xs: "center", md: "center" }}
            textAlign={{ xs: "center", md: "left" }}
            marginTop={"20px"}
          >
            <Typography variant={"h3"} fontWeight="bold">
              {title}
            </Typography>
          </Box>
          <Box
            gridArea={"subtitle"}
            alignSelf={{ xs: "center", md: "center" }}
            textAlign={{ xs: "center", md: "left" }}
            marginTop={"20px"}
          >
            <Typography variant={"h5"}>
              {subtitle}
            </Typography>
          </Box>
          <Box
            gridArea={"img"}
            sx={{
              backgroundImage: `url("https://media.istockphoto.com/id/1355324434/vector/young-woman-doubts-and-questioning-everything.jpg?s=612x612&w=0&k=20&c=uaHcMDfj3I07LFRMcWbdxgItl2ogAXW9T3AS1-Ijojg=")`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              minHeight:"200px",
            }}
            marginTop={"20px"}
          ></Box>
          <Cartas gridKeys={["carta1","carta2","carta3","carta4","carta5","carta6","carta7","carta8"]}></Cartas>
          <Box
            textAlign={{ xs: "center", md: "left" }}
            gridArea={"list"}
            alignSelf={{ xs: "center" }}
            marginTop={"20px"}
            display={{md:"none",xs:"block"}}
          >
            <AccordionList></AccordionList>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Help;