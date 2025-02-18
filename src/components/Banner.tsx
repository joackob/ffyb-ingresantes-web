import { Box, Container, Stack, Typography } from "@mui/material";
import { configuracion } from "@/src/configuracion";

interface BannerProps {
  titulo: string;
  imagen?: string;
}

const Banner = ({
  titulo,
  imagen = configuracion.imagen_de_fondo,
}: BannerProps) => {
  return (
    <Box
      style={{
        height: "112px",
        backgroundImage: `url(${imagen})`,
        backgroundSize: "cover",
      }}
    >
      <Box
        height={"100%"}
        style={{
          backdropFilter: "blur(8px)",
          backgroundColor: "rgba(0,0,0,0.2)",
          minHeight: "inherit",
        }}
      >
        <Container style={{ height: "100%" }}>
          <Stack direction={"row"} alignItems={"center"} height={"100%"}>
            <Typography
              fontSize={{ xs: "40px", md: "48px" }}
              component="h1"
              style={{
                color: "#FFFFFF",
                fontFamily: "Montserrat",
                fontWeight: 900,
              }}
            >
              {titulo}
            </Typography>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default Banner;
