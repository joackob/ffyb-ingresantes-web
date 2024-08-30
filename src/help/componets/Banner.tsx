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
          color: '#FFFFFF',     
          maxWidth: 900,        
          textAlign: 'center',  
          fontSize: { xs: 24, md: 40 },
          fontFamily: "Montserrat",
          fontWeight: "bold"
        }}
      >
        Recursos y Ofertas
      </Typography>
    </Box>
  );
};

export default Banner;