"use client";
import { useForm } from "react-hook-form";
import { Box, Typography, Button, TextField, Stack } from "@mui/material";

const FormularioLogin = () => {
  //
  const { register, handleSubmit } = useForm();
  //const router = useRouter(); // AGREGAR quizas
  //const [error, setError] = useState(null); //AGRAGAR quizas

  const onSubmit = handleSubmit(
    async (data) => {
      // try {
      //   if (data.contrasena !== data.confimar_contrasena) {
      //     return alert("Passwords do not match");
      //   }
      //
      //
      // NO SE SI LA RUTA DE [...nexauth] ESTA BIEN, PREGUNTAR
      await fetch("http://localhost:3001/api/auth/[...nextauth]", {
        method: "POST",
        body: JSON.stringify({
          //nombre: data.nombre,
          //apellido: data.apellido,
          email: data.email,
          contrasena: data.contrasena,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      // catch (error) {
      // console.error(error);
    },
    //  }
  );

  // PREGUNTAR SI HAY QUE AGRGAR ESTO, O NO ES NECESARIO.
  /*
const onSubmit = handleSubmit(async (data) => {
  console.log(data);

  const res = await signIn("credentials", {
    email: data.email,
    password: data.password,
    redirect: false,
  });

  console.log(res)
  if (res.error) {
    setError(res.error)
  } else {
    router.push('/dashboard')
    router.refresh()
  }
});

*/

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
            {...register("usuario", { required: true })}
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
