import { Container } from "@mui/material";
import React, { ReactNode } from "react";

const ImagenDeFondo = ({ children }: { children: ReactNode }) => {
  return (
    <Container
      maxWidth={false}
      sx={{
        backgroundImage:
          'url("https://www.ffyb.uba.ar/wp-content/uploads/2024/01/estudiar-en-FFyB.png")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {children}
    </Container>
  );
};

export default ImagenDeFondo;
