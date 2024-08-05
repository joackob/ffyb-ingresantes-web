import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <>
      <Box component={"footer"}></Box>
      <Stack
        direction={"column"}
        textAlign={"center"}
        sx={{ backgroundColor: "#011344" }}
      >
        <Box sx={{ color: "white" }} margin={"10px"}>
          <Typography variant="h5">
            Facultad de farmacia y bioquimica - UBA
          </Typography>
          <Typography variant="h5">
            Junin 954 Ciudad Autonoma de Buenos Aires, Argentina
          </Typography>
          <Typography variant="h5">TE:52875000</Typography>
          <Typography variant="h5" sx={{ color: "#FF8700" }}>
            Hecho con 💕 por ETEC-UBA
          </Typography>
        </Box>
      </Stack>
    </>
  );
};

export default Footer;
