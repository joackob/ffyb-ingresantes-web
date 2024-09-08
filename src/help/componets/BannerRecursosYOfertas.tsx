import * as React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";

const BannerRecursosYOfertas = () => {
  return (
    <Box
      style={{
        height: "112px",
        backgroundImage: "url(https://picsum.photos/1200/800)",
        backgroundSize: "cover",
      }}
    >
      <Container style={{ height: "100%" }}>
        <Stack direction={"row"} alignItems={"center"} height={"100%"}>
          <Typography
            fontSize={{ xs: 24, md: 40 }}
            component="h1"
            style={{
              color: "#FFFFFF",
              fontFamily: "Montserrat",
              fontWeight: "bold",
            }}
          >
            Recursos y Ofertas
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default BannerRecursosYOfertas;
