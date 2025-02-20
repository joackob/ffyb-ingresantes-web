import { Box, Typography, Stack } from "@mui/material";

const integrantes = [
  { nombre: "Nicolas Ferreiros", email: "nferreiros@etec.uba.ar" },
  { nombre: "Agostina Acuña", email: "aacunamarichal@etec.uba.ar" },
  { nombre: "Facundo Caballi", email: "facundocaballi@gmail.com" },
  { nombre: "Tiago Nuñez", email: "tnunez17@gmail.com" },
];

const lideres = [
  { nombre: "Joaquin Blanco", email: "jblanco@etec.uba.ar" },
  { nombre: "Federico Villace", email: "fvillace@etec.uba.ar" },
];

const Integrantes = () => {
  return (
    <Box p={4} textAlign="center">
      {/* Sección de Integrantes */}
      <Typography variant="h4" fontWeight="bold" gutterBottom color="#FF8700">
        Integrantes
      </Typography>
      <Stack spacing={2}>
        {integrantes.map((integrante, index) => (
          <Typography key={index} variant="h10">
            {integrante.nombre} - {integrante.email}
          </Typography>
        ))}
      </Stack>

      {/* Sección de Líderes de Equipo */}
      <Typography variant="h4" fontWeight="bold" gutterBottom mt={4} color="#FF8700">
        Líderes de Equipo
      </Typography>
      <Stack spacing={2}>
        {lideres.map((lider, index) => (
          <Typography key={index} variant="h10">
            {lider.nombre} - {lider.email}
          </Typography>
        ))}
      </Stack>
    </Box>
  );
};

export default Integrantes;
