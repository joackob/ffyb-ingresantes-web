import { Box, Stack } from "@mui/material";
import { ReactNode } from "react";

const ContenedorParaLaTarjeta = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      style={{
        borderTop: "4px solid #FF8700",
        paddingTop: "20px",
      }}
    >
      <Stack direction="row" flexWrap={"wrap"}>
        {children}
      </Stack>
    </Box>
  );
};

export default ContenedorParaLaTarjeta;
