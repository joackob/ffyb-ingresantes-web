import { MenuItem, Select, Box } from "@mui/material";
import React from "react";

const SelectorDeCarreras = () => {
  const carreras = [
    "Farmacia",
    "Bioquimica",
    "Técnico Universitario en Medicina Nuclear",
    "Técnico Universitario en Óptica y Contactología",
    "Licenciatura en Ciencia y Tecnología de Alimentos",
    "Tecnicatura Universitaria en Gestión Integral de Bioterio",
  ];
  return (
    <Box sx={{ display: 'flex'}}>
    <Select
    defaultValue=""
  style={{
    width: '450px',
    color: 'black',
    backgroundColor: 'white',
    transform: 'translateX(100px)',
  }}>
      {carreras.map((carrera, index) => (
        <MenuItem key={index} value={carrera}>
          {carrera}
        </MenuItem>
      ))}
    </Select></Box>
  );
};

export default SelectorDeCarreras;
