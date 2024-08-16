import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import TarjetaHomeB from "./TarjetaHomeB";

const Galeria = () => {
  const titulo: string = "SOBRE LAS TUTORÍAS";

  return (
    <Container >
      <Box
      py="10px">  
      <Typography
        sx={{
          display: "block",
          textAlign: "left",
          verticalAlign: "middle",
          paddingBottom: "16px",
          fontFamily: "Montserrat, Arial, sans-serif",
          color: "#2D1D54",
          fontWeight: "800",
          fontSize: "48px",
        }}
      >
        {titulo}
      </Typography>
      <Grid container spacing={2.5}>
        <Grid item md={12}>
          <Grid container spacing={5}>
            <Grid item md={4}>
              <TarjetaHomeB height={148} widthImg={345} width={345}/>
            </Grid>
            <Grid item md={4}>
              <TarjetaHomeB height={148} widthImg={345} width={345}/>
            </Grid>
            <Grid item md={4}>
              <TarjetaHomeB height={148} widthImg={345} width={345} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={12}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item md={6} sx={{ height: "148" }}>
              <TarjetaHomeB height={148} widthImg={188} width={560}/>
            </Grid>
            <Grid item md={6} sx={{ height: "148" }}> 
              <TarjetaHomeB height={148} widthImg={188} width={560}/>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      </Box>
    </Container>
  );
};

export default Galeria;

