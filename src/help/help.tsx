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
          gridTemplateColumns={{ xs: "1fr", md: "1fr 1fr 1fr" }}
          gridTemplateRows="auto"
          gridTemplateAreas={{
            xs: "'img' 'title' 'subtitle' 'list' ",
            md: "'title title img' 'subtitle subtitle img' 'carta1 carta2 carta3' 'carta4 carta5 carta6' ",
          }}
          height={{ md: "92vh", xs: "93vh" }}
        >
          <Box
            gridArea={"title"}
            alignSelf={{ xs: "center", md: "center" }}
            textAlign={{ xs: "center", md: "left" }}
            marginTop={{xs:"20px",md:"0px"}}
          >
            <Typography variant={md ? "h3" : "h5"} fontWeight="bold">
              {title}
            </Typography>
          </Box>
          <Box
            gridArea={"subtitle"}
            alignSelf={{ xs: "center", md: "center" }}
            textAlign={{ xs: "center", md: "left" }}
            marginTop={{xs:"20px",md:"0px"}}
          >
            <Typography variant={md ? "h4" : "h6"}>
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
            marginTop={{xs:"20px",md:"0px"}}
          ></Box>
          <Cartas gridKeys={["carta1","carta2","carta3","carta4","carta5","carta6"]}></Cartas>
          <Box
            textAlign={{ xs: "center", md: "left" }}
            gridArea={"list"}
            alignSelf={{ xs: "center" }}
            marginTop={{xs:"20px",md:"0px"}}
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