import { Box, CardMedia, Stack, Typography } from "@mui/material";

// Definir el tipo de los datos del recurso
type Recurso = {
  titulo: string;
  imagen: string; // Imagen como URL
  descripcion: string;
  contacto: string[];
};

// Componente que muestra cada tarjeta
const TarjetaParaCadaRecursoUOfertaDisponible = ({
  recurso,
}: {
  recurso: Recurso; // Recibe un recurso con todas sus propiedades
}) => {
  const { titulo, descripcion, contacto, imagen } = recurso; // Extraemos los datos

  return (
    <Stack spacing={"8px"}>
      {/* Aquí usamos la imagen dinámica */}
      <CardMedia
        component="img"
        sx={{
          height: 140,
          width: "100%",
          objectFit: "cover",
        }}
        image={imagen} // Usamos la URL de imagen del recurso
        alt={`Imagen de ${titulo}`} // Descripción accesible de la imagen
      />
      <Typography
        style={{
          color: "#011344",
          fontFamily: "Montserrat",
          fontSize: "16px",
          fontWeight: "600",
        }}
      >
        {titulo}
      </Typography>
      <Typography
        style={{
          color: "#7C7C7C",
          fontFamily: "Montserrat",
          fontSize: "16px",
          fontWeight: "400",
        }}
      >
        {descripcion}
      </Typography>
      <Box>
        {contacto.map((dato, index) => (
          <Typography
            key={index} // Usamos el índice como key
            style={{
              color: "#5DAFD6",
              fontFamily: "Montserrat",
              fontSize: "12px",
              fontWeight: "400",
              textTransform: "capitalize",
            }}
          >
            {dato}
          </Typography>
        ))}
      </Box>
    </Stack>
  );
};

export default TarjetaParaCadaRecursoUOfertaDisponible;
