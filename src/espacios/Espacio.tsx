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
    <Box>
      <div id="contenedor-general">
        <div id="paneles-superiores">
          <div>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Video General
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
          </div>
        </div>
        <div id="videos">
          <video
            width="100%"
            id="video-space"
            src="https://sharedby.blomp.com/kzv6mK"
            controls
          ></video>
        </div>
      </div>
    </Box>
  );
};

export default Espacio;
