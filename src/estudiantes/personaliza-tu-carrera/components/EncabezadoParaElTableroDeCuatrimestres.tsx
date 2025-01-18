import { Stack } from "@mui/material";
import React, { ReactNode } from "react";

const EncabezadoParaElTableroDeCuatrimestres = ({
  children,
}: {
  children: ReactNode;
}) => {
  return (
    <Stack direction={"row"} alignItems={"center"}>
      {children}
    </Stack>
  );
};

export default EncabezadoParaElTableroDeCuatrimestres;
