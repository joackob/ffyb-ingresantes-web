import AccordionList from "@/src/help/componets/Accordion";
import Cartas from "@/src/help/componets/Cards"
import { Box, Container, Typography } from "@mui/material";
import Banner from "./componets/Banner";
const Help = () => {
  
  return (
    <Box>
      <Container>
        <Banner></Banner>
        <Cartas gridKeys={["cartas1","cartas2","cartas3","cartas4"]}></Cartas>
      </Container>
    </Box>
  );
};

export default Help;