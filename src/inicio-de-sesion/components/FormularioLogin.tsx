import {
  Box,
  Typography,
  Button,
  TextField,
  Stack,
  Alert,
} from "@mui/material";
import { useFormularioParaIniciarSesion } from "../hooks";

const FormularioLogin = () => {
  const formulario = useFormularioParaIniciarSesion();
  return (
    <Box
      component={"form"}
      onSubmit={formulario.iniciarSesion}
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
            label="Email"
            id="email"
            {...formulario.configurarCampoParaElEmail()}
            required
            type={"email"}
            variant="filled"
          />
        </Box>

        <Box style={{ backgroundColor: "#ededed", borderRadius: "4px" }}>
          <TextField
            fullWidth
            label="Contraseña"
            id="contrasena"
            {...formulario.configurarCampoParaLaContrasena()}
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
          disabled={formulario.cargandoSesion()}
        >
          Continuar
        </Button>
        {formulario.huboUnProblema() && (
          <Alert severity="error">Hubo un problema</Alert>
        )}
      </Stack>
    </Box>
  );
};
export default FormularioLogin;
