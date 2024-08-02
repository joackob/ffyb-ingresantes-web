import {
  Box,
  Typography,
  Link,
} from "@mui/material";
const TarjetaHomeB = () => {
  const titulo: string = "Un título para la tarjeta.";
  const resumen: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dapibus at nunc mollis tincidunt. Vivamus efficitur gravida libero non dapibus.";
  const enlace: string = "Ver más...";
  const imagenSrc: string = "https://ejemplo.com/imagen.png";

  return (
    <Box
      sx={{
        maxWidth: "606px",
        minWidth: "390px",
        pt: 12
      }} >
      <Box

        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "flex-start",
          flexGrow: 0,
          flexShrink: 0,
          flexBasis: "auto",


          fontFamily: "Montserrat",
          fontSize: "16px",
          borderTop: "4px solid #FF8700",
        }}
      >

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            flexGrow: 0, // No crecer verticalmente (hug)
            flexShrink: 0, // No encoger verticalmente (hug)
            flexBasis: "auto",
            width: "100%", // Llenar horizontalmente el contenedor

            "& > *": {
              marginBottom: "20px", // Espaciado entre elementos verticales
            },
          }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              flexGrow: 0, // No crecer verticalmente (hug)
              flexShrink: 0, // No encoger verticalmente (hug)
              flexBasis: "auto", // Tamaño base automático vertical
              width: "100%",
              

              "& > * + *": {
                marginTop: 16, // Espaciado vertical entre elementos
              },
            }}>
            <Typography
              style={{ color: "#011344", fontWeight: "800" }}>
              {titulo}
            </Typography>
            <Typography
              style={{ color: "#7C7C7C", fontWeight: "400" }}>
              {resumen}
            </Typography>
          </Box>
          <Link href="https://www.ejemplo.com" style={{ color: "5DAFD6", textDecoration: "none"}}>
            {enlace}
          </Link>
        </Box>
        <Box>
          <img src={imagenSrc} width="188" height="148" />
        </Box>
      </Box>
    </Box>
  );
};

export default TarjetaHomeB;
