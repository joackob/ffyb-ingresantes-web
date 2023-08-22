import { CheckCircle} from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const MainSection = () => {
  const theme = useTheme();
  const title = "Bienvenidos a las tutorías.\n ";
  const subtitle = "Estamos aquí para brindarte el apoyo y la orientación personalizada que necesitas para alcanzar tus metas educativas con confianza.";
  const sm = useMediaQuery("min-width(600px)");

  return (
    <Box width={"100vw"} height={{sm:"92vh",xs:"93vh"}} marginLeft={{sm:"-24px",xs:"-16px"}} style={{backgroundColor:theme.palette.primary.light}}>
      <Container sx={{ background: "none", }}>
        <Box display={"grid"} gridTemplateColumns={{ xs: "1fr", sm: "1fr 1fr", }} gridTemplateRows="auto" gridTemplateAreas={{ xs: "'.' 'logo' 'title' 'subtitle' 'btn'", sm: "'. .' 'title img' 'subtitle img' 'ls img' 'btn img'", }} columnGap={{ xs: 0, sm: 2, }} height={{ xs: "92vh", }}>
          <Box gridArea={"logo"} sx={{ backgroundImage: `url("https://www.uba.ar/50nbl/img/logo-uba.png")`, backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}></Box>

          <Box gridArea={"title"} alignSelf={{ xs: "center", sm: "end", }} textAlign={{ xs: "center", sm: "left", }}>
            <Typography variant={sm ? "h2" : "h3"} fontWeight="bold">{title}</Typography>
          </Box>

          <Box textAlign={{ xs: "center", sm: "left", }} gridArea={"subtitle"} alignSelf={{ xs: "center", }}>
            <Typography variant="h5">{subtitle}</Typography>
          </Box>

          <Box display={{ xs: "none", sm: "block" }} textAlign={"left"} gridArea={"ls"} height={"8rem"}>
            <List>
              <ListItem sx={{ paddingLeft: "0px" }}>
                <ListItemIcon><CheckCircle sx={{ color: theme.palette.secondary.main }} /></ListItemIcon>
                <ListItemText sx={{ marginLeft: "-1rem" }}>Crea un camino de aprendizaje adaptado a tu estilo y ritmo</ListItemText>
              </ListItem>
              <ListItem sx={{ paddingLeft: "0px" }}>
                <ListItemIcon><CheckCircle sx={{ color: theme.palette.secondary.main }} /></ListItemIcon>
                <ListItemText sx={{ marginLeft: "-1rem" }}>Colabora con nuestro equipo de tutores altamente calificados</ListItemText>
              </ListItem>
              <ListItem sx={{ paddingLeft: "0px" }}>
                <ListItemIcon><CheckCircle sx={{ color: theme.palette.secondary.main }} /></ListItemIcon>
                <ListItemText sx={{ marginLeft: "-1rem" }}>Resuelve tus dudas y transita tu camino por los estudios universitarios</ListItemText>
              </ListItem>
            </List>
          </Box>

          <Box gridArea={"btn"} alignSelf={{ xs: "center", sm: "start", }} textAlign={{ xs: "center", sm: "left", }}>
            <Button variant="contained" sx={{ backgroundColor: theme.palette.primary.main, width: "10rem" }}>Continuar</Button>
          </Box>

          <Box gridArea={"img"} sx={{ backgroundImage: `url("https://images.vexels.com/media/users/3/242551/isolated/preview/3b3e399c4a66074557004b3faa2d9ba1-elementos-de-pegatinas-de-regreso-a-la-escuela-5.png")`, backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat: "no-repeat" }} /></Box>
      </Container>
    </Box>
  );
};

export default MainSection;
