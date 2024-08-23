import * as React from "react";
import { Box, Card, CardMedia } from "@mui/material";



const Cartas = ({ gridKeys }: { gridKeys: string[] }) => {
  return (
    <>
       <Box
          display={"grid"}
          gridTemplateColumns={{ xs: "1fr", md: "1fr 1fr" }}
          gridTemplateRows="auto">
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
              width: '100%',
              boxSizing: 'border-box',
            }}
          >
           
          </Box>
        </Card>
        
      ))}
      </Box>
    </>
  );
};

export default Cartas;