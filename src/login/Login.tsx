//https://mui.com/material-ui/ materiales pantillas etc etc
import * as React from "react";
import "./Login.module.css";
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
      <Typography variant={"h4"} fontWeight="bold" sx={{ textAlign: "center" }}>
        Iniciar Sesión
      </Typography>
      <Container
        id="form"
        sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
      >
        <FormControl
          id="signUp"
          sx={{
            padding: "10px",
            marginTop: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <TextField type="email" placeholder="Email" required />
          <TextField type="password" placeholder="Contraseña" required />
          <Button variant="contained">Iniciar Sesion</Button>
        </FormControl>
        <Container
          sx={{ display: "flex", justifyContent: "center", gap: "5px" }}
        >
        </Container>
      </Container>
    </Box>
  );
};
export default Login;
