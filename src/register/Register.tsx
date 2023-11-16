//https://mui.com/material-ui/ materiales pantillas etc etc
import * as React from "react";
import {
  Box,
  IconButton,
  Container,
  useMediaQuery,
  Typography,
  Button,
  FormControl,
  TextField,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import Input from "@mui/material/Input";
import { signIn } from "next-auth/react";

const Register = () => {
  const md = useMediaQuery("min-width(900px)");

  return (
    <Box
      id="contenedor-supremo"
      sx={{
        marginTop: "50px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Typography variant={"h2"} fontWeight="bold" sx={{ textAlign: "center" }}>
        Registrarse
      </Typography>
      <Container
        id="form"
        sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
      >
        <FormControl
          id="signUp"
          sx={{
            marginTop: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <TextField type="text" placeholder="Nombre completo" />
          <TextField type="email" placeholder="Email" />
          <TextField type="password" placeholder="Contraseña" />
          <TextField type="password" placeholder="Confirmar contraseña" />
          <TextField type="button" variant="standard" value="Registrarse" />
        </FormControl>
        <Container
          sx={{ display: "flex", justifyContent: "center", gap: "5px" }}
        >
          <GoogleIcon></GoogleIcon>
          <FacebookIcon></FacebookIcon>
        </Container>
        <Button href="/login">Inicia sesión si ya tienes cuenta</Button>
      </Container>
    </Box>
  );
};
export default Register;
