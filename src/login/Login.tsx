//https://mui.com/material-ui/ materiales pantillas etc etc
import * as React from "react";
import "./Login.module.css";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
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
import Input from "@mui/material/Input";
import { signIn } from "next-auth/react";
import { redirect } from "next/navigation";
import Link from "next/link";

const Login = () => {
  const md = useMediaQuery("min-width(900px)");

  const redirigirLogin = () => {
    redirect("./register/Register.tsx");
  };

  return (
    <Box
      id="contenedor-supremo"
      sx={{
        //paddingTop:"700px",
        marginTop: "50px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Typography variant={"h2"} fontWeight="bold" sx={{ textAlign: "center" }}>
        Iniciar Sesión
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
          <TextField type="email" placeholder="Email" required />
          <TextField type="password" placeholder="Contraseña" required />
          <TextField type="button" variant="standard" value="Iniciar Sesión" />
        </FormControl>
        <Container
          sx={{ display: "flex", justifyContent: "center", gap: "5px" }}
        >
          <GoogleIcon></GoogleIcon>
          <FacebookIcon></FacebookIcon>
        </Container>
        <Button href="/register">Registrate si no tienes cuenta</Button>
      </Container>
    </Box>
  );
};
export default Login;
