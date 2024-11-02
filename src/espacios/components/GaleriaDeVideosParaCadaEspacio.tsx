import { Stack } from "@mui/material";
import React, { ReactNode } from "react";

const GaleriaParaLasTarjetasDeCadaEspacio = ({
  children,
}: {
  children: ReactNode;
}) => {
  return <Stack>{children}</Stack>;
};

export default GaleriaParaLasTarjetasDeCadaEspacio;
