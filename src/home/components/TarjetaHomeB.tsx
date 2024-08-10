import {
  Box,
  Typography,
  Link,
} from "@mui/material";

interface MyComponentProps {
  height: number;
  widthImg: number;
  width?:number;
}

const TarjetaHomeB: React.FC<MyComponentProps> = ({height, widthImg, width}) => {
  const titulo: string = "Un título para la tarjeta.";
  const resumen: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dapibus at nunc mollis tincidunt. Vivamus efficitur gravida libero non dapibus.";
  const enlace: string = "Ver más...";
  const imagenSrc: string = "https://ejemplo.com/imagen.png";

  return (
    <Box
      sx={{
        maxWidth: "606px",
        minWidth: "390px",
        width: {width}
        
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


          }}>
          
            <Typography
              style={{ color: "#011344", fontWeight: "800", paddingTop: "10px" }}>
              {titulo}
            </Typography>
            <Typography
              style={{ color: "#7C7C7C", fontWeight: "400" }}>
              {resumen}
            </Typography>
          
          <Link href="https://www.ejemplo.com" style={{ color: "5DAFD6", textDecoration: "none"}}>
            {enlace}
          </Link>
        </Box>
        <Box>
          <img src={imagenSrc} width={widthImg} height={height} />
        </Box>
      </Box>
    </Box>
  );
};

export default TarjetaHomeB;
