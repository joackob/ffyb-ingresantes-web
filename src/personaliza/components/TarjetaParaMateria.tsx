"use client";
import { Box, Typography } from "@mui/material";
import { ReactNode } from "react";

const TarjetaParaMateria = ({
  nombre,
  children,
}: {
  nombre: string;
  children: ReactNode;
}) => (
  <Box
    style={{
      borderRadius: "4px",
      backgroundColor: "white",
    }}
  >
    {children}
    <Box style={{ padding: "4px 8px" }}>
      <Typography
        fontFamily="Montserrat"
        color={"#818a91"}
        fontWeight="bold"
        fontSize="14px"
        style={{ userSelect: "none" }}
      >
        {nombre}
      </Typography>
    </Box>
  </Box>
);

export default TarjetaParaMateria;
