"use client";
import { useForm } from "react-hook-form";
import { Box, Typography, Button, TextField, Stack } from "@mui/material";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";

const FormularioLogin = () => {
  //
  const { register, handleSubmit } = useForm();
  const router = useRouter(); // AGREGAR quizas
  //const [error, setError] = useState(null); //AGRAGAR quizas

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
    try {
      await signIn("credentials", {
        email: data.email,
        contrasena: data.contrasena,
        redirect: false,
      });
      router.push("/");
      router.reload();
    } catch (error) {
      console.log(error);
    }
  });

  //
  return (
    <Box
      component={"form"}
      onSubmit={onSubmit}
      sx={{
        padding: "15px",
        borderRadius: "8px",
        backgroundColor: "#fff7",
      }}
    >
      <Stack spacing={"32px"}>
        <Typography
          component={"h6"}
          color={"white"}
          fontWeight={"medium"}
          fontSize={"20px"}
          fontFamily={"Roboto"}
          textTransform={"uppercase"}
        >
          iniciar sesión
        </Typography>
        <Box style={{ backgroundColor: "#ededed", borderRadius: "4px" }}>
          <TextField
            fullWidth
            label="Usuario"
            id="usuario"
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
        <Button
          variant="contained"
          size="medium"
          type="submit"
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
export default FormularioLogin;
