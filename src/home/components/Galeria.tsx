import { Box, Container, Typography } from "@mui/material";
import TarjetaHomeB from "./TarjetaHomeB";
import { articulos } from "../fake";

const Galeria = () => {
  return (
    <Container>
      <Box my="32px">
        <Typography
          variant="h1"
          fontSize={{ md: "44px", xs: "36px" }}
          style={{
            marginBottom: "16px",
            fontFamily: "Montserrat",
            color: "#2D1D54",
            fontWeight: "800",
            textTransform: "uppercase",
          }}
        >
          sobre las tutorías
        </Typography>
        <Box
          display={"grid"}
          gridTemplateColumns={
            "repeat(auto-fit, minmax(min(100%, 390px), 1fr))"
          }
          gap={"32px"}
        >
          {articulos.map((articulo) => (
            <TarjetaHomeB
              titulo={articulo.titulo}
              resumen={articulo.descripcion}
              enlace={articulo.enlace}
              imagen={articulo.imagen}
            />
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default Galeria;
