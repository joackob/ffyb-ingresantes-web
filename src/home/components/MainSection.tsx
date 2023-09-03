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
  const md = useMediaQuery("min-width(900px)");

  return (
    <Box style={{backgroundColor:theme.palette.primary.light}}>
      <Container>
        <Box display={"grid"} gridTemplateColumns={{ xs: "1fr", md: "1fr 1fr", }} gridTemplateRows="auto" gridTemplateAreas={{ xs: "'img' 'img' 'img' 'img' 'img' 'img' 'title' 'subtitle' 'ls' 'btn' '.' ", md: "'title img' 'subtitle img' 'ls img' 'btn img''. .' ", }} columnGap={{ xs: 0, md: 2, }} height={{md:"92vh",xs:"93vh"}} >

          <Box gridArea={"title"} alignSelf={{ xs: "center", md: "end", }} textAlign={{ xs: "center", md: "left", }}>
            <Typography variant={md ? "h2" : "h3"} fontWeight="bold">{title}</Typography>
          </Box>

          <Box textAlign={{ xs: "center", md: "left", }} gridArea={"subtitle"} alignSelf={{ xs: "center", }}>
            <Typography variant="h5">{subtitle}</Typography>
          </Box>

          <Box textAlign={{xs:"center", md:"left"}} gridArea={"ls"}>
            <List sx={{display:"flex",flexDirection:"column",alignItems:"center"}}>
              <ListItem sx={{ paddingLeft: "0px",maxWidth:"85vw"}}>
                <ListItemIcon><CheckCircle sx={{ color: theme.palette.secondary.main }} /></ListItemIcon>
                <ListItemText sx={{ marginLeft: "-1rem",display:"contents" }}>Crea un camino de aprendizaje adaptado a tu estilo y ritmo</ListItemText>
              </ListItem>
              <ListItem sx={{ paddingLeft: "0px",maxWidth:"85vw" }}>
                <ListItemIcon><CheckCircle sx={{ color: theme.palette.secondary.main }} /></ListItemIcon>
                <ListItemText sx={{ marginLeft: "-1rem",display:"contents" }}>Colabora con nuestro equipo de tutores altamente calificados</ListItemText>
              </ListItem>
              <ListItem sx={{ paddingLeft: "0px",maxWidth:"85vw" }}>
                <ListItemIcon><CheckCircle sx={{ color: theme.palette.secondary.main }} /></ListItemIcon>
                <ListItemText sx={{ marginLeft: "-1rem",display:"contents" }}>Resuelve tus dudas y transita tu camino por los estudios universitarios</ListItemText>
              </ListItem>
            </List>
          </Box>

          <Box gridArea={"btn"} alignSelf={{ xs: "center", md: "start", }} textAlign={{ xs: "center", md: "left", }}>
            <Button variant="contained" sx={{ backgroundColor: theme.palette.primary.main, width: "10rem" }}>Continuar</Button>
          </Box>

          <Box gridArea={"img"} sx={{ backgroundImage: `url("https://images.vexels.com/media/users/3/242551/isolated/preview/3b3e399c4a66074557004b3faa2d9ba1-elementos-de-pegatinas-de-regreso-a-la-escuela-5.png")`, backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat: "no-repeat", minHeight:"200px" }} /></Box>
      </Container>
    </Box>
  );
};

export default MainSection;
