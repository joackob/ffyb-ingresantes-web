import React, { useEffect, useState } from "react";
import { Avatar, Box, Container, Stack, Typography } from "@mui/material";
import Banner from "@/src/components/Banner";
import { Usuarios } from "@prisma/client";
import { useRouter } from "next/router";
import axios from "axios";

const Index = () => {
  // Tipamos el estado para que contenga un arreglo de objetos de tipo Tutorando
  const [tutorandosFetch, setTutorandosFetch] = useState<Usuarios[]>([]);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    axios
      .get<Usuarios[]>(`/api/tutores/${id}/tutorandos`)
      .then((response) => setTutorandosFetch(response.data))
      .catch((error) => console.error(error));
  }, [id]);

  return (
    <>
      <Banner titulo={"Tus Tutorandos"} />
      {/* Lista de tutorandos en dos columnas */}
      <Container>
        <Box
          marginLeft={"16px"}
          display={"grid"}
          gridTemplateColumns={
            "repeat(auto-fit, minmax(min(100%, 350px), 1fr))"
          }
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
                    {`${tutorando.nombre} ${tutorando.apellido}`}
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
