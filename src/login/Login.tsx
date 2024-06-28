//https://mui.com/material-ui/ materiales pantillas etc etc
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
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
  colors,
  Stack,
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
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        height={"100vh"}
        spacing={2}
        sx={{backgroundImage: "https://noticias.utpl.edu.ec/sites/default/files/imagenes_editor/_dsc4080-min_2.jpg"}}
      >
        <Box sx={{
          backgroundColor: "red",
          display: "inline-block",
        }}>
          <Typography variant={"h5"} fontStyle="Roboto">
            INICIAR SESION
          </Typography>
          <FormControl
            id="signUp"
            sx={{
              padding: "10px",
              marginTop: "5px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "32px",
              width: 300,
              maxWidth: '100%'
            }}
          >
            <TextField fullWidth label="Usuario" id="signUp" required />
            <TextField fullWidth label="Contraseña" id="signUp" required />
            <Button variant="contained">Iniciar Sesion</Button>
          </FormControl>
        </Box>
      </Stack>
  );
};
export default Login;
