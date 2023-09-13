import { carreras } from "../database/database";
import {
  Box,
  Container,
  Link,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const Plan = () => {
  const theme = useTheme();
  const title = "Personaliza tu plan de estudios a tu medida.\n";
  const md = useMediaQuery("min-width(900px)");

  return (
      <Container>
        <Box display={"grid"} gridTemplateColumns={{ xs: "1fr", md: "1fr 1fr" }} gridTemplateRows="auto" gridTemplateAreas={{ xs: "'title'", md: "'title title'", }} columnGap={{ xs: 0, md: 10, }} rowGap={{xs:5,md:5}} height={{md:"92vh",xs:"93vh"}} >
            <Box marginTop={{xs:"20px",md:"20px"}} gridArea={"title"} alignSelf={{ xs: "center", md: "center", }} textAlign={{ xs: "center", md: "left", }}>
                <Typography textAlign={"center"} variant={md ? "h2" : "h3"} fontWeight="bold">{title}</Typography>
            </Box>
        {carreras.map((item) => (
          <Box height={"100%"} alignSelf={{ xs: "center", md: "start"}}>
            <Link gap={"5px"} height={"100%"} display={"flex"} flexDirection={"column"} justifyContent={"start"} alignItems={"center"} href={item.href} underline="none" color="inherit" fontWeight="bold">  
                <img style={{maxHeight:"150px", maxWidth:"150px"}} src={item.icono}/>
                <Typography variant="h4" textAlign={"center"}>{item.nombre}</Typography>
                <Typography variant="subtitle1" textAlign={"center"}>{item.descripcion}</Typography>
            </Link>
          </Box>
        ))}

        </Box>  
      </Container>
  );
};

export default Plan;



