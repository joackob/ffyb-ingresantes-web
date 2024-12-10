import { MenuItem, Select } from "@mui/material";
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
    <Select>
      {carreras.map((carrera, index) => (
        <MenuItem key={index} value={carrera}>
          {carrera}
        </MenuItem>
      ))}
    </Select>
  );
};

export default SelectorDeCarreras;
