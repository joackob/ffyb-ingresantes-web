import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
} from '@mui/material';
import TarjetaHomeB from './TarjetaHomeB';


const Galeria = () => {
  const titulo: string="Sobre las tutorias";  

  return(
  <Container
  >
   <Typography
   sx={{
    display: 'block',
    textAlign: 'left', 
    verticalAlign: 'middle', 
    paddingBottom: 16, 
    fontFamily: 'Montserrat',
    color: '#2D1D54',
    fontWeight: '800',
    fontSize: '48px',
  }}
   >
    {titulo}
    </Typography>   
    <Grid container spacing={2.5} >
      <Grid item md={12}>
        <Grid container spacing={2}>
          <Grid item md={4}>
            <TarjetaHomeB/>
          </Grid>
          <Grid item md={4}>
            <TarjetaHomeB/>
          </Grid>
          <Grid item md={4}>
            <TarjetaHomeB/>
          </Grid>
        </Grid>
      </Grid>
      <Grid item md={12}>
        <Grid container spacing={2.5} justifyContent="center">
          <Grid item md={6} sx={{ height: '148' }}>
            <TarjetaHomeB/>
          </Grid>
          <Grid item md={6} sx={{ height: '148' }}>
            <TarjetaHomeB/>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </Container>    
);
};

export default Galeria;     