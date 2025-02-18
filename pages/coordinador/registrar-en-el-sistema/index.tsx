"use client";
import { useForm } from "react-hook-form";

import {
  Box,
  Typography,
  Button,
  TextField,
  Stack,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    try {
      if (data.contrasena !== data.confimar_contrasena) {
        return alert("Passwords do not match");
      }

      await fetch("http://localhost:3001/api/auth/registrar", {
        method: "POST",
        body: JSON.stringify({
          nombre: data.nombre,
          apellido: data.apellido,
          email: data.email,
          contrasena: data.contrasena,
          tipo: data.tipo,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.error(error);
    }
  });

  return (
    <Box
      component={"form"}
      onSubmit={onSubmit}
      sx={{
        padding: "200px",
        borderRadius: "8px",
        backgroundColor: "#fff7",
      }}
    >
      <Stack spacing={"20px"}>
        <Typography
          component={"h6"}
          color={"black"}
          fontWeight={"medium"}
          fontSize={"20px"}
          fontFamily={"Roboto"}
          textTransform={"uppercase"}
          marginBottom={"10px"}
        >
          REGISTRO
        </Typography>
        <Box style={{ backgroundColor: "#ededed", borderRadius: "4px" }}>
          <TextField
            fullWidth
            label="Nombre"
            id="nombre"
            {...register("nombre", { required: true })}
            required
            type={"text"}
            variant="filled"
          />
          {errors.Nombre && (
            <span className="text-red-500 text-xs">
              {errors.Nombre.message}
            </span>
          )}
        </Box>
        <Box style={{ backgroundColor: "#ededed", borderRadius: "4px" }}>
          <TextField
            fullWidth
            label="Apellido"
            id="apellido"
            {...register("apellido", { required: true })}
            required
            type={"text"}
            variant="filled"
          />
        </Box>

        <Box style={{ backgroundColor: "#ededed", borderRadius: "4px" }}>
          <TextField
            fullWidth
            label="Email"
            id="email"
            {...register("email", { required: true })}
            required
            type={"text"}
            variant="filled"
          />
        </Box>

        <Box style={{ backgroundColor: "#ededed", borderRadius: "4px" }}>
          <TextField
            fullWidth
            label="Contraseña"
            id="contrasena"
            {...register("contrasena", { required: true })}
            required
            type={"password"}
            variant="filled"
          />
        </Box>
        <Box style={{ backgroundColor: "#ededed", borderRadius: "4px" }}>
          <TextField
            fullWidth
            label="Confimar Contraseña"
            id="confimar_contrasena"
            {...register("confimar_contrasena", { required: true })}
            required
            type={"password"}
            variant="filled"
          />
        </Box>

        <Box style={{ backgroundColor: "#ededed", borderRadius: "4px" }}>
          <FormControl fullWidth>
            <InputLabel id="tipo">tipo</InputLabel>
            <Select id="tipo" label="tipo" {...register("tipo")}>
              <MenuItem value={"coordinador"}>Coordinador</MenuItem>
              <MenuItem value={"tutor"}>Tutor</MenuItem>
              <MenuItem value={"tutorando"}>Tutorando</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Button
          variant="contained"
          size="medium"
          sx={{
            color: "white",
            backgroundColor: "#3498DB",
          }}
          type="submit"
        >
          Continuar
        </Button>
      </Stack>
    </Box>
  );
};

export default Page;
