import { CheckCircle} from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

 export const carreras = [
    {
      icono:"https://images.vexels.com/media/users/3/136559/isolated/preview/624dd0a951a1e8a118215b1b24a0da59-logotipo-de-farmacia.png",
      nombre: "Farmacia",
      href: "/plandeestudio/0",
      descripcion: "Profesionales de la salud expertos en medicamentos destinados a la curación, alivio, prevención y diagnóstico de enfermedades.",
      materias:[["Quimica general e inorgánica","Matemática","Anatomía e Histologia","Farmacognosia", "Nutrición"],["materia de segundo","materia de segundo"]]
    },
    {
        icono:"https://cdn-icons-png.flaticon.com/512/6166/6166904.png",
        nombre: "Bioquímica",
        href: "/plandeestudio/1",
        descripcion: "Son profesionales de la salud expertos en el diseño, realización e interpretación de análisis clínicos",
        materias:[["Fisica","Química Orgánica I","Biología Celular y Molecular"],["materia de segundo","materia de segundo"]]
      },
      {
        icono:"https://www.gba.gob.ar/sites/default/files/desarrolloagrario/newsletter/images/irradiar_alimentos.png",
        nombre: "Licenciatura en Ciencias y Tecnología de Alimentos",
        href: "/plandeestudio/2",
        descripcion: "Son profesionales competentes para realizar actividades relacionadas con la investigación de todo tipo de alimentos",
        materias:[["yanosequeinventarme","Matemática","Anatomía e Histologia"],["materia de segundo","materia de segundo"]]
      },
      {
        icono:"https://www.intecnus.org.ar/wp-content/uploads/2018/10/Medicina-Nuclear.png",
        nombre: "Tecnicatura Universitaria en Medicina Nuclear",
        href: "/plandeestudio/3",
        descripcion: "Son profesionales de la salud competentes para realizar, bajo supervisión del médico, procedimientos diagnósticos y terapéuticos en pacientes mediante la utilización de radiofármacos",
        materias:[["sigosinsaberqueinventarme","Matemática","Anatomía e Histologia"],["materia de segundo","materia de segundo"]]
      },
  ];


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



