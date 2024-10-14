import { Stack } from "@mui/material";
import React, { ReactNode } from "react";

const GaleriaDeTarjetasParaCadaEspacio = ({
  children,
}: {
  children: ReactNode;
}) => {
  return <Stack>{children}</Stack>;
};

export default GaleriaDeTarjetasParaCadaEspacio;
