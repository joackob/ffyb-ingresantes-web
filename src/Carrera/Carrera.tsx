import {BorderColor, RadioButtonChecked, RadioButtonUnchecked} from "@mui/icons-material";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  LinearProgress,
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
import { count } from "console";

import React from "react";
import Theme from "../theme/Theme";


const Carrera = ({title,subjects}:{title:string;subjects:(string | boolean) [][][];}) => {

  const [page, setPage] = React.useState(1);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  }

  const subtitle = "Cambia el plan, mas no el objetivo."
  const theme = useTheme();
  const md = useMediaQuery("min-width(900px)");

  return (
    <Box>
      <Container>
        <Box display={"grid"} gridTemplateColumns={{ xs: "1fr", md: "1fr 1fr", }} gridTemplateRows="auto" gridTemplateAreas={{ xs: "'title' 'subtitle' 'percentageMobile' 'subjects'", md: "'title percentage' 'subtitle percentage' 'subjects percentage''paragraph percentage'", }} columnGap={{ xs: 0, md: 0, }} height={{md:"92vh",xs:"93vh"}} >

          <Box margin={{md:"0px",xs:"15px"}} gridArea={"title"} alignSelf={{ xs: "center", md: "end", }} textAlign={{ xs: "center", md: "left", }}>
            <Typography variant={md ? "h2" : "h3"} fontWeight="bold">{title}</Typography>
          </Box>

          <Box gridArea={"subtitle"} textAlign={{ xs: "center", md: "left", }} alignSelf={{ xs: "center",md: "center" }}>
            <Typography variant="h5">{subtitle}</Typography>
          </Box>


          <Stack margin={{md:"0px",xs:"20px"}} display={"flex"} alignItems={{md:"start",xs:"center"}} gridArea={"subjects"} spacing={2}>
            <Box>
              <List sx={{display:"flex",flexDirection:"column",alignItems:"center"}}>
              {subjects[page-1].map((item) => (
                <ListItem sx={{paddingLeft: "0px"}}>
                  <ListItemIcon><RadioButtonChecked sx={{fontSize:"30px"}} /> <RadioButtonUnchecked sx={{fontSize:"30px"}}/></ListItemIcon>
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
              <CircularProgress style={{width:"450px", height:"450px"}} thickness={3.6} variant="determinate" value={100}/>
              <Typography fontSize={"100px"} position={"absolute"} variant="caption" component="div" color="text.secondary">{`100%`}</Typography>
          </Box>

          <Box marginTop={"20px"} gridArea={"percentageMobile"} display={{md:"none",xs:"flex"}} sx={{justifyContent:"center",alignItems:"center"}}>
              <CircularProgress style={{width:"300px", height:"300px"}} thickness={3.6} variant="determinate" value={100}/>
              <Typography fontSize={"50px"} position={"absolute"} variant="caption" component="div" color="text.secondary">{`100%`}</Typography>
          </Box>

        </Box>
      </Container>
    </Box>
  );
};

export default Carrera;
