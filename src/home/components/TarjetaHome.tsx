import {
  Box,
  Container,
  Typography,
  Link,
} from "@mui/material";
const TarjetaHome = () => {
  const titulo ="Un titulo para la tarjeta.\n";
  const resumen ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dapibus at nunc mollis tincidunt. Vivamus efficitur gravida libero non dapibus.\n";
  const enlace ="Ver más...\n";

  return (
    <Box
    fontFamily={"Montserrat"}>
    fontSize={"16px"}  
      <Container>
        <Typography
        style={{ color: "#011344", fontWeight: "800" }}>
        {titulo}
        </Typography>
        <Typography
        style={{ color: "#7C7C7C", fontWeight: "400" }}>
        {resumen}
        </Typography>
        <Link href="https://www.ejemplo.com" style={{color: "5DAFD6"}}>
        {enlace}
        </Link>

      </Container>
    </Box>
  );
};

export default TarjetaHome;
