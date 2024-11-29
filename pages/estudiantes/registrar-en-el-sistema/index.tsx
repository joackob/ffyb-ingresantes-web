//modificar

import {
    Box,
    Typography,
    Button,
    FormControl,
    TextField,
    Stack,
  } from "@mui/material";
  
  const registro = () => {
    return (
      <Box
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
            marginBottom= {"10px"}
          >
            REGISTRO
          </Typography>
          <Box style={{ backgroundColor: "#ededed", borderRadius: "4px" }}>
            <TextField
              fullWidth
              label="Nombre"
              id="Nombre"
              required
              type={"text"}
              variant="filled"
            />
          </Box>
          <Box style={{ backgroundColor: "#ededed", borderRadius: "4px" }}>
            <TextField
              fullWidth
              label="Apellido"
              id="Apellido"
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
  