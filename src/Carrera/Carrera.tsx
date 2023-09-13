import { RadioButtonChecked, RadioButtonUnchecked} from "@mui/icons-material";
import {
  Box,
  CircularProgress,
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Pagination,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import Theme from "../theme/Theme";




const Carrera = ({title,subjects}:{title:string;subjects:(string | boolean) [][][];}) => {

  let aprobadas = 0;
  let totales = 0;
  let porcentaje = 0;
  subjects.forEach(anio => {
    anio.forEach(materia =>{
      if (materia[2] == true) {
        aprobadas = aprobadas + 1
      }
      totales = totales +1
    });
  });
  porcentaje = (aprobadas * 100) / totales;
  porcentaje = Math.round(porcentaje)


  const [page, setPage] = React.useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  }

  const subtitle = "Cambia el plan, mas no el objetivo."
  const theme = useTheme();
  const md = useMediaQuery("min-width(900px)");

  return (
    <Box marginTop={{xs:"40px",md:"0px"}}>
      <Container>
        <Box display={"grid"} gridTemplateColumns={{ xs: "1fr", md: "1fr 1fr", }} gridTemplateRows="auto" gridTemplateAreas={{ xs: "'title' 'subtitle' 'percentageMobile' 'subjects'", md: "'title percentage' 'subtitle percentage' 'subjects percentage''paragraph percentage'", }} columnGap={{ xs: 0, md: 0, }} height={{md:"92vh",xs:"93vh"}} >

          <Box marginBottom={{md:"0px",xs:"20px"}} gridArea={"title"} alignSelf={{ xs: "center", md: "end", }} textAlign={{ xs: "center", md: "left", }}>
            <Typography variant={md ? "h2" : "h3"} fontWeight="bold">{title}</Typography>
          </Box>

          <Box marginBottom={{md:"0px",xs:"50px"}} gridArea={"subtitle"} textAlign={{ xs: "center", md: "left", }} alignSelf={{ xs: "center",md: "center" }}>
            <Typography variant="h5">{subtitle}</Typography>
          </Box>


          <Stack paddingBottom={{md:"0px",xs:"40px"}} display={"flex"} alignItems={{md:"start",xs:"center"}} gridArea={"subjects"} spacing={2}>
            <Box>
              <List sx={{display:"flex",flexDirection:"column",alignItems:"center"}}>
              {subjects[page-1].map((item) => (
                <ListItem sx={{paddingLeft: "0px"}}>
                  <ListItemIcon>
                    {item[1] == true ? <RadioButtonChecked sx={{fontSize:"30px"}}/>: ""}
                    {item[2] == true ? <RadioButtonChecked sx={{ color:theme.palette.secondary.main,fontSize:"30px"}}/>: ""}
                    {item[1] == false && item[2] == false ? <RadioButtonUnchecked sx={{fontSize:"30px"}}/>:""}
                  </ListItemIcon>
                  <ListItemText>
                      <Typography paddingLeft={"10px"} fontSize={"20px"}>{item[0]}</Typography>
                  </ListItemText>
                </ListItem>
              ))}
              </List>
            </Box>
            <Pagination size="large" count={subjects.length} page={page} onChange={handleChange}/>
          </Stack>

          <Box display={{xs:"none",md:"block"}} gridArea={"paragraph"} textAlign={"left"}>
              <Typography variant="h5">{"Si necesitas ayuda, no dudes en consultarnos"}</Typography>
          </Box>
      
                

          <Box paddingRight={"100px"} paddingBottom={"100px"} gridArea={"percentage"} display={{md:"flex",xs:"none"}} sx={{justifyContent:"center",alignItems:"center"}}>
              <CircularProgress style={{width:"450px", height:"450px"}} thickness={3.6} variant="determinate" value={porcentaje}/>
              <Typography fontSize={"100px"} position={"absolute"} variant="caption" component="div" color="text.secondary">{`${porcentaje}%`}</Typography>
          </Box>

          <Box marginBottom={"20px"} gridArea={"percentageMobile"} display={{md:"none",xs:"flex"}} sx={{justifyContent:"center",alignItems:"center"}}>
              <CircularProgress style={{width:"300px", height:"300px"}} thickness={3.6} variant="determinate" value={porcentaje}/>
              <Typography fontSize={"50px"} position={"absolute"} variant="caption" component="div" color="text.secondary">{`${porcentaje}%`}</Typography>
          </Box>

        </Box>
      </Container>
    </Box>
  );
};

export default Carrera;