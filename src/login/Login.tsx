//https://mui.com/material-ui/ materiales pantillas etc etc
import * as React from "react";
import {
  Box,
  IconButton,
  Container,
  useMediaQuery,
  Typography,
  Button,
} from "@mui/material";

import { signIn } from "next-auth/react";

const Login = () => {
  const md = useMediaQuery("min-width(900px)");

  return (
    <Box id="contenedor-supremo" sx={{ marginTop: "20px" }}>
      <Box display="flex" justifyContent="center">
        <button onClick={() => signIn()}>Iniciar Sesión</button>
      </Box>
    </Box>
  );
};
export default Login;
