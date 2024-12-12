import { MenuItem, Select, Box, SelectChangeEvent } from "@mui/material";
import React, { useState } from "react";
import { useRouter } from "next/router";

const SelectorDeCarreras = () => {
  const router = useRouter();
  const [carreraSeleccionada, setCarreraSeleccionada] = useState("");

  const carreras = [
    "Farmacia",
    "Bioquimica",
    "Técnico Universitario en Medicina Nuclear",
    "Técnico Universitario en Óptica y Contactología",
    "Licenciatura en Ciencia y Tecnología de Alimentos",
    "Tecnicatura Universitaria en Gestión Integral de Bioterio",
  ];

  const handleChange = (event: SelectChangeEvent<string>) => {
    const selectedCarrera = event.target.value;

    const carreraParaRuta = selectedCarrera
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, "-");
    setCarreraSeleccionada(selectedCarrera); // Actualiza el estado con la carrera seleccionada

    if (selectedCarrera) {
      router
        .push(`/estudiantes/personaliza-tu-carrera/${carreraParaRuta}`)
        .then(() => {
          router.reload();
        });
    }
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
      <Select
        value={carreraSeleccionada}
        onChange={handleChange} // Al cambiar, se ejecuta handleChange
        defaultValue=""
        style={{
          width: "450px",
          backgroundColor: "#fff4",
          borderRadius: "8px",
        }}
      >
        <MenuItem value="" disabled>
          Seleccionar una carrera
        </MenuItem>
        {carreras.map((carrera, index) => (
          <MenuItem key={index} value={carrera}>
            {carrera}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
};

export default SelectorDeCarreras;
