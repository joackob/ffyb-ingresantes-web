import { IconButton, Link, Menu, MenuItem } from "@mui/material";
import { useState, MouseEvent } from "react";
import { ExpandMore } from "@mui/icons-material";

const SelectorDeCarreras = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const carreras = [
    "Farmacia",
    "Bioquimica",
    "Técnico Universitario en Medicina Nuclear",
    "Técnico Universitario en Óptica y Contactología",
    "Licenciatura en Ciencia y Tecnología de Alimentos",
    "Tecnicatura Universitaria en Gestión Integral de Bioterio",
  ];

  const calcularCodigoDadaUnaCarrera = (carrera: string) => {
    return carrera
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, "-");
  };

  return (
    <>
      <IconButton onClick={handleClick}>
        <ExpandMore fontSize={"large"} sx={{ color: "white" }} />
      </IconButton>

      <Menu
        id="menu-selector-de-carreras"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {carreras.map((carrera) => (
          <MenuItem key={carrera}>
            <Link
              fontSize={"12px"}
              fontFamily={"Montserrat"}
              href={`/estudiantes/personaliza-tu-carrera/${calcularCodigoDadaUnaCarrera(carrera)}`}
              color={"#8b8b8b"}
              underline="none"
              fontWeight={"light"}
              textTransform={"uppercase"}
              // dangerouslySetInnerHTML={{ __html: carrera }}
            >
              {carrera}
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default SelectorDeCarreras;
