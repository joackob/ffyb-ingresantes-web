import React from "react";
import { Avatar, Box, Container, Stack, Typography } from "@mui/material";
import Banner from "@/src/components/Banner";
import Link from "next/link";

const Index = () => {
  const tutorandos = [
    { nombre: "Carolina Vera", email: "cvera@gmail.com" },
    { nombre: "Carolina Vera", email: "cvera@gmail.com" },
    { nombre: "Carolina Vera", email: "cvera@gmail.com" },
    { nombre: "Carolina Vera", email: "cvera@gmail.com" },
    { nombre: "Carolina Vera", email: "cvera@gmail.com" },
    { nombre: "Carolina Vera", email: "cvera@gmail.com" },
    { nombre: "Carolina Vera", email: "cvera@gmail.com" },
  ];

  return (
    <>
      <Banner titulo={"Tutorandos"} />
      {/* Lista de tutorandos en dos columnas */}
      <Container>
        <Box
          marginLeft={"16px"}
          display={"grid"}
          gridTemplateColumns={
            "repeat(auto-fit, minmax(min(100%, 390px), 1fr))"
          }
          gap={"32px"}
        >
          {tutorandos.map((tutorando, index) => (
            <Stack
              padding={"16px"}
              direction={"row"}
              spacing={"32px"}
              key={index}
              sx={{
                borderTop: "8px solid #FFB700",
                position: "relative", // Mantiene la posición relativa
                top: "24px",
                marginBottom: "30px", // Espacio entre el Stack y el footer // Mueve solo el borde hacia abajo
              }}
            >
              <Avatar
                alt="Avata."
                src="https://picsum.photos/200/200"
                sx={{ width: 88, height: 88 }}
              />
              <Stack spacing={"12px"}>
                <Box>
                  <Typography variant="h6" fontWeight={700}>
                    {tutorando.nombre}
                  </Typography>
                  <Typography variant="body2">{tutorando.email}</Typography>
                </Box>

                {/* Enlaces */}
                <Stack direction={"row"} spacing={"12px"}>
                  <a>Estadísticas</a>
                  <a>Plan de Carrera</a>
                </Stack>
              </Stack>
            </Stack>
          ))}
        </Box>
      </Container>
    </>
  );
};

export default Index;
