import { Typography } from "@mui/material";

const TituloCarrera = ({ carrera }: { carrera: string }) => {
  return (
    <Typography
      component="h1"
      fontSize={{ xs: "40px", md: "48px" }}
      fontFamily={"Roboto"}
      color={"white"}
      fontWeight="bold"
    >
      {carrera}
    </Typography>
  );
};

export default TituloCarrera;
