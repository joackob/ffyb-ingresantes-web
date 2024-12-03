//modificar
"use client"
import { useForm } from "react-hook-form";

import {
  Box,
  Typography,
  Button,
  FormControl,
  TextField,
  Stack,
} from "@mui/material";



const registro = () => {
  const { register, handleSubmit, formState: {errors} } = useForm();

  const onSubmit = handleSubmit(data => {
    //hacer aca para mandar los datods
    fetch('/api/auth') 
      method
    //console.log(data)
   })

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
            id="Nombre"
            {...register("nombre", { required: true, })}
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
            id="Apellido"
            {...register("apellido", { required: true, })}
            required
            type={"text"}
            variant="filled"
          />
        </Box>

        <Box style={{ backgroundColor: "#ededed", borderRadius: "4px" }}>
          <TextField
            fullWidth
            label="Email"
            id="Email"
            {...register("Email", { required: true, })}
            required
            type={"text"}
            variant="filled"
          />
        </Box>

        <Box style={{ backgroundColor: "#ededed", borderRadius: "4px" }}>
          <TextField
            fullWidth
            label="Contraseña"
            id="contraseña"
            {...register("contraseña", { required: true, })}
            required
            type={"password"}
            variant="filled"
          />
        </Box>
        <Box style={{ backgroundColor: "#ededed", borderRadius: "4px" }}>
          <TextField
            fullWidth
            label="Confimar Contraseña"
            id="Confimar Contraseña"
            {...register("confirmar contrase", { required: true, })}
            required
            type={"password"}
            variant="filled"
          />
        </Box>
        <Button
          variant="contained"
          size="medium"
          sx={{
            color: "white",
            backgroundColor: "#3498DB",
          }}
        >
          Continuar
        </Button>
      </Stack>
    </Box>
  );
};

export default registro;
