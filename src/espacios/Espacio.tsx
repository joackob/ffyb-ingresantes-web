import "./Espacio.module.css";
import { Box, Container, useMediaQuery, Typography } from "@mui/material";
const Espacio = () => {
  const md = useMediaQuery("min-width(900px)");

  return (
    <Box>
      <div id="contenedor-general">
        <div id="paneles-superiores">
          <div id="elegir-videos">
            <form action="">
              <select name="menu-video" id="menu-video">
                <option value="video-general">Video General</option>
                <option value="primer-piso">Primer Piso</option>
                <option value="segundo-piso">Segundo Piso</option>
              </select>
            </form>
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
