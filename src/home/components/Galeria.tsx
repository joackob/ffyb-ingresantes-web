import React from 'react';
import {
  Box,
  Container,
  Typography,
} from '@mui/material';
import TarjetaHomeB from './TarjetaHomeB';


const Galeria = () => {
  const titulo: string="Sobre las tutorias";  

  return(
  <Container>
   <Typography
   sx={{
    display: 'block',
    textAlign: 'left', 
    verticalAlign: 'middle', 
    paddingBottom: 16, 
  }}
   >
    {titulo}
    </Typography>   
  <TarjetaHomeB/>
  </Container>    
);
};

export default Galeria;     