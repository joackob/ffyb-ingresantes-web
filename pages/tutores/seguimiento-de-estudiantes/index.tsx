import React from "react";
import { Box, Typography } from "@mui/material";

const Index = () => {
  const tutorandos = [
    { nombre: "Carolina Vera", email: "cvera@gmail.com" },
    { nombre: "Carolina Vera", email: "cvera@gmail.com" },
    { nombre: "Carolina Vera", email: "cvera@gmail.com" },
  ];

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {/* Título con imagen de fondo */}
      <Box
        sx={{
          backgroundImage: "url('https://via.placeholder.com/1500x500')", // Imagen de titulo
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          padding: "40px 0", // Asegura que el texto no esté pegado al borde
          textAlign: "center",
          marginBottom: "20px", // Ajuste de espacio
        }}
      >
        <Typography variant="h3" sx={{ color: "white", fontWeight: "bold" }}>
          Tutorandos
        </Typography>
      </Box>

      {/* Lista de tutorandos */}
      {tutorandos.map((tutorando, index) => (
        <Box
          key={index}
          sx={{
            backgroundColor: "#f4f4f4",
            padding: "10px",
            marginBottom: "10px",
            width: "300px",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src="https://via.placeholder.com/50"
            alt="Perfil"
            style={{
              borderRadius: "50%",
              width: "50px",
              height: "50px",
              marginRight: "20px",
            }}
          />
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6">{tutorando.nombre}</Typography>
            <Typography variant="body2">{tutorando.email}</Typography>
          </Box>

          {/* Enlaces */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <Typography
              sx={{
                color: "blue",
                cursor: "pointer",
                textDecoration: "underline",
              }}
            >
              Estadísticas
            </Typography>
            <Typography
              sx={{
                color: "blue",
                cursor: "pointer",
                textDecoration: "underline",
              }}
            >
              Plan de Carrera
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Index;
