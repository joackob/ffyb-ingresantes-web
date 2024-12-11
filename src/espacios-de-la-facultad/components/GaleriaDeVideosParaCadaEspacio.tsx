import { Container, Stack } from "@mui/material";
import React, { ReactNode } from "react";

const GaleriaParaLasTarjetasDeCadaEspacio = ({
  children,
}: {
  children: ReactNode;
}) => {
  return (
    <Container
    maxWidth={"md"}
    style={{marginTop:"2rem"}}> 
    <Stack spacing={"2rem"}>{children}</Stack> 
    </Container>);
};

export default GaleriaParaLasTarjetasDeCadaEspacio;


