import { Box, Container } from "@mui/material";
import React, { ReactNode } from "react";
import { configuracion } from "@/src/configuracion";

const ImagenDeFondo = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      style={{
        backgroundImage: `url(${configuracion.imagen_de_fondo})`,
        backgroundSize: "cover",
        minHeight: "inherit",
      }}
    >
      <Box
        style={{
          backdropFilter: "blur(8px)",
          backgroundColor: "rgba(0,0,0,0.2)",
          minHeight: "inherit",
        }}
      >
        <Container>{children}</Container>
      </Box>
    </Box>
  );
};

export default ImagenDeFondo;
