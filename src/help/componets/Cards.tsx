import * as React from "react";
import { Box, Card, CardMedia, Stack, Typography } from "@mui/material";

const contactos = [
  "avenida corrienten 1234",
  "de lunes a viernes de 9am a 6pm",
  "+541112345678",
  "info@recursos.com.ar",
  "www.recursos.com.ar",
];

const Cartas = ({ gridKeys }: { gridKeys: string[] }) => {
  return (
    <Box
      display="grid"
      gridTemplateColumns={{ xs: "1fr", md: "repeat(2, 1fr)" }}
      gap={2}
      paddingTop={4}
      paddingBottom={4}
    >
      {gridKeys.map((key, index) => (
        <Stack
          spacing={"8px"}
          key={index}
          sx={{
            width: "320px",
          }}
        >
          <CardMedia
            component="img"
            sx={{
              height: 140,
              width: "100%",
              objectFit: "cover",
            }}
            image="https://www.geriatricarea.com/wp-content/uploads/2020/09/geriatricarea-farmaceutico.jpg"
            alt="Descripción de la imagen"
          />
          <Typography
            style={{
              color: "#011344",
              fontFamily: "Montserrat",
              fontSize: "16px",
              fontWeight: "600",
            }}
          >
            Un titulo
          </Typography>
          <Typography
            style={{
              color: "#7C7C7C",
              fontFamily: "Montserrat",
              fontSize: "16px",
              fontWeight: "400",
            }}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
            voluptatum repudiandae aliquid unde veniam. Commodi est ipsam
            reprehenderit excepturi illo distinctio qui officiis nobis
            cupiditate, quia sunt quod aperiam nisi.
          </Typography>
          <Box>
            {contactos.map((contacto, index) => (
              <Typography
                style={{
                  color: "#5DAFD6",
                  fontFamily: "Montserrat",
                  fontSize: "12px",
                  fontWeight: "400",
                  textTransform: "capitalize",
                }}
              >
                {contacto}
              </Typography>
            ))}
          </Box>
        </Stack>
      ))}
    </Box>
  );
};

export default Cartas;
