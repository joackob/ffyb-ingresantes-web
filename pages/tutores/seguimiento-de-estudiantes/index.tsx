import React, { useEffect, useState } from "react";
import { Avatar, Box, Container, Stack, Typography } from "@mui/material";
import Banner from "@/src/components/Banner";
import Link from "next/link";

// Definimos la interfaz para cada tutorando
interface Tutorando {
  nombre: string;
  correo: string;
}

const Index = () => {
  // Tipamos el estado para que contenga un arreglo de objetos de tipo Tutorando
  const [tutorandosFetch, setTutorandosFetch] = useState<Tutorando[]>([]);

  useEffect(() => {
    // Hacemos la solicitud a la API
    fetch("/api/tutor/tutorandos")
      .then((data) => data.json())
      .then((response) => setTutorandosFetch(response.personas)); // Suponiendo que la respuesta tiene "personas"
  }, []);

  return (
    <>
      <Banner titulo={"Tutorandos"} />
      {/* Lista de tutorandos en dos columnas */}
      <Container>
        <Box
          marginLeft={"16px"}
          display={"grid"}
          gridTemplateColumns={"repeat(auto-fit, minmax(min(100%, 350px), 1fr))"}
          gap={"32px"}
        >
          {/* Mapear los tutorandos obtenidos de la API */}
          {tutorandosFetch?.map((tutorando, index) => (
            <Stack
              padding={"16px"}
              direction={"row"}
              spacing={"32px"}
              key={index}
              sx={{
                borderTop: "8px solid #FFB700",
                position: "relative", // Mantiene la posición relativa
                top: "24px",
                marginBottom: "30px", // Espacio entre el Stack y el footer
              }}
            >
              <Avatar
                alt="Avatar"
                src="https://picsum.photos/200/200"
                sx={{ width: 88, height: 88 }}
              />
              <Stack spacing={"12px"}>
                <Box>
                  <Typography variant="h6" fontWeight={700}>
                    {tutorando.nombre}
                  </Typography>
                  <Typography variant="body2">{tutorando.correo}</Typography>
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
export default Index