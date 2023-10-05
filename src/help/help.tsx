import AccordionList from "@/src/help/componets/Accordion";
import Cartas from "@/src/help/componets/Cards"
import { Box, Container, Typography } from "@mui/material";

const Help = () => {
  const title = "Quizá te podamos ayudar.\n ";
  const subtitle ="Acá hay algunas preguntas frecuentes de otros usuarios que te podrían servir. Si tenes algún otra pregunta no dudes en consultar a los foros correspondientes";
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
          columnGap={{ xs: 0, md: 2 }}
          rowGap={{xs:0,md:2}}
        >
          <Box
            gridArea={"title"}
            alignSelf={"end"}
            textAlign={{ xs: "center", md: "left" }}
            marginTop={"20px"}
          >
            <Typography variant={"h3"} fontWeight="bold" display={{md:"block",xs:"none"}}>
              {title}
            </Typography>
            <Typography variant={"h5"} fontWeight="bold" display={{md:"none",xs:"block"}}>
              {title}
            </Typography>
          </Box>
          <Box
            gridArea={"subtitle"}
            alignSelf={"center"}
            textAlign={{ xs: "center", md: "left" }}
            marginTop={"20px"}
          >
            <Typography variant={"h5"} display={{md:"block",xs:"none"}}>
              {subtitle}
            </Typography>
            <Typography variant={"subtitle1"} display={{md:"none",xs:"block"}}>
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
          <Cartas gridKeys={["carta1","carta2","carta3","carta4","carta5","carta6"]}></Cartas>
          <Box
            textAlign={"center"}
            gridArea={"list"}
            marginTop={"20px"}
            justifyContent={"center"}
            display={{md:"none",xs:"grid"}}
          >
            <AccordionList></AccordionList>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Help;