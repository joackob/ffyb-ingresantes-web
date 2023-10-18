//https://mui.com/material-ui/ materiales pantillas etc etc
import "./Espacio.module.css";
import {
  Box,
  Container,
  useMediaQuery,
  Typography,
  Select,
  FormControl,
  MenuItem,
  InputLabel,
} from "@mui/material";
const Espacio = () => {
  const md = useMediaQuery("min-width(900px)");

  return (
    <Box id="contenedor-supremo" sx={{ marginTop: "20px" }}>
      <Box id="contenedor-general">
        <Box
          id="paneles-superiores"
          display={"flex"}
          justifyContent={"center"}
          flexDirection={"row"}
        >
          <Container id="elegir-video" sx={{ marginBottom: "20px" }}>
            <FormControl fullWidth /*sx={{ width: "50%" }}*/>
              <InputLabel id="demo-simple-select-label">
                {" "}
                Select Video
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Video General"
              >
                <MenuItem value="video-general">Video General</MenuItem>
                <MenuItem value="primer-piso">Primer Piso</MenuItem>
                <MenuItem value="segundo-piso">Segundo Piso</MenuItem>
              </Select>
            </FormControl>
          </Container>
          <Container id="planos" sx={{ marginBottom: "20px" }}>
            <FormControl fullWidth /*sx={{ width: "50%" }}*/>
              <InputLabel id="demo-simple-select-label">
                {" "}
                Abrir Plano
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Video General"
              >
                <MenuItem value="video-general">Video General</MenuItem>
                <MenuItem value="primer-piso">Primer Piso</MenuItem>
                <MenuItem value="segundo-piso">Segundo Piso</MenuItem>
              </Select>
            </FormControl>
          </Container>
        </Box>
        <Container id="videos">
          <video
            width="100%"
            id="video-space"
            src="https://sharedby.blomp.com/kzv6mK"
            controls
          ></video>
        </Container>
      </Box>
    </Box>
  );
};

export default Espacio;
