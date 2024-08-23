import * as React from "react";
import { Box, Typography } from "@mui/material";

const Banner = () => {
  return (
    <Box
      sx={{
        width: '100%',         
        height: 112,           
        backgroundColor: '#1976d2',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography 
        sx={{
          color: '#FFFFFF',       // Color del texto
          maxWidth: 900,          // Ancho máximo del texto
          textAlign: 'center', // Centrado del texto
          fontSize: 40,  
          fontFamily: "Montserrant",
          fontWeight: "bold"
        }}
      >
        Recursos y Ofertas
      </Typography>
    </Box>
  );
};

export default Banner;