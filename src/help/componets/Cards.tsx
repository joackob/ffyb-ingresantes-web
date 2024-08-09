import * as React from "react";
import { Box, useTheme, Card, CardMedia, Typography, Button } from "@mui/material";

const Cartas = ({ gridKeys }: { gridKeys: string[] }) => {
  return (
    <>
      {gridKeys.map((key, index) => (
        <Card
          key={index}
          sx={{
            display: "flex",
            flexDirection: "column",
            width: 300, 
            height: "auto", 
            alignItems: "flex-start",
          }}
        >
          <CardMedia
            component="img"
            sx={{
              height: 140,
              width: '100%', 
              objectFit: "cover", 
            }}
            image="https://www.geriatricarea.com/wp-content/uploads/2020/09/geriatricarea-farmaceutico.jpg"
            alt="Descripción de la imagen" 
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              p: 2,
              width: '100%', // Asegura que el contenido use todo el ancho de la tarjeta
              boxSizing: 'border-box', // Incluye el padding en el ancho total
            }}
          >
           
          </Box>
        </Card>
      ))}
    </>
  );
};

export default Cartas;