import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import TarjetaHomeB from "./TarjetaHomeB";

const Galeria = () => {
  const titulo: string = "Sobre las tutorias";

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
          fontFamily: "Montserrat",
          color: "#2D1D54",
          fontWeight: "800",
          fontSize: "48px",
        }}
      >
        {titulo}
      </Typography>
      <Grid container spacing={2.5}>
        <Grid item md={12}>
          <Grid container spacing={10}>
            <Grid item md={4}>
              <TarjetaHomeB height={148} widthImg={390} width={390}/>
            </Grid>
            <Grid item md={4}>
              <TarjetaHomeB height={148} widthImg={390} width={390}/>
            </Grid>
            <Grid item md={4}>
              <TarjetaHomeB height={148} widthImg={390} width={390} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={12}>
          <Grid container spacing={5} justifyContent="center">
            <Grid item md={6} sx={{ height: "148" }}>
              <TarjetaHomeB height={148} widthImg={188} width={606}/>
            </Grid>
            <Grid item md={6} sx={{ height: "148" }}> 
              <TarjetaHomeB height={148} widthImg={188} width={606}/>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      </Box>
    </Container>
  );
};

export default Galeria;

