import { Typography } from "@mui/material";

const TituloCarrera = ({ carrera }: { carrera: string }) => {
  return (
    <Typography fontSize={{ xs: "40px", md: "55px" }} fontWeight="bold">
      {carrera}
    </Typography>
  );
};

export default TituloCarrera;
