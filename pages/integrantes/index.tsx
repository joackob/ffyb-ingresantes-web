import { Box, Typography, Stack } from "@mui/material";

const integrantes = [
  { nombre: "felipe", email: "fe@gmail.com" },
  { nombre: "felipe", email: "as@gmail.com" },
  { nombre: "felipe", email: "as@gmail.com" },
  { nombre: "felipe", email: "as@gmail.com" },
];

const Integrantes = () => {
  return (
    <Box p={4} textAlign="center">
      <Typography variant="h4" fontWeight="bold" gutterBottom color="#FF8710">
        Integrantes
      </Typography>
      <Stack spacing={2}>
        {integrantes.map((integrante, index) => (
          <Typography key={index} variant="h7">
            {integrante.nombre} - {integrante.email}
          </Typography>
        ))}
      </Stack>
    </Box>
  );
};

export default Integrantes;
