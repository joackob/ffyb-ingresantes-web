import { Box, Container, Stack } from "@mui/material";
import { ReactNode } from "react";
import { configuracion } from "@/src/configuracion";

const FondoConImagen = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      style={{
        backgroundImage: `url(${configuracion.imagen_de_fondo})`,
        backgroundSize: "cover",
        height: "100%",
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
        <Container maxWidth={"xs"} style={{ minHeight: "inherit" }}>
          <Stack justifyContent={"center"} style={{ minHeight: "inherit" }}>
            {children}
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};
export default FondoConImagen;
