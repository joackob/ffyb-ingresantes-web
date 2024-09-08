//https://mui.com/material-ui/ materiales pantillas etc etc
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import * as React from "react";
import "./Login.module.css";
import {
  Box,
  Typography,
  Button,
  FormControl,
  TextField,
  Stack,
} from "@mui/material";

const Login = () => {
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      height={"100vh"}
      spacing={2}
      sx={{
        backgroundImage:
          "url('https://www.ffyb.uba.ar/wp-content/uploads/2023/05/66-aniversario-ffyb-alumnos-990x500.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Box
        sx={{
          display: "inline-block",
          padding: "15px",
          borderRadius: "5px",
          boxShadow: 4,
          backgroundColor: "#fff9",
        }}
      >
        <Typography
          variant={"h6"}
          fontStyle="Roboto"
          marginLeft={"10px"}
          color={"white"}
        >
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
            width: 345,
            maxWidth: 345,
          }}
        >
          <TextField fullWidth label="Usuario" id="signUp" required />
          <TextField fullWidth label="Contraseña" id="signUp" required />
          <Button
            variant="contained"
            size="medium"
            sx={{
              color: "white",
              backgroundColor: "#3498DB",
              paddingLeft: "122px",
              paddingRight: "122px",
            }}
          >
            Continuar
          </Button>
        </FormControl>
      </Box>
    </Stack>
  );
};
export default Login;
