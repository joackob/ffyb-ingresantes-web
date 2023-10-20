//https://mui.com/material-ui/ materiales pantillas etc etc
import * as React from "react";
import "./Espacio.module.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import {
  Box,
  IconButton,
  Container,
  useMediaQuery,
  Typography,
  Button,
  Skeleton,
} from "@mui/material";
import { useState } from "react";
import { useRef, refVideo } from "react";

const Espacio = () => {
  const md = useMediaQuery("min-width(900px)");

  const [reproduciendo, setReproduciendo] = useState(false);
  const refVideo = useRef<HTMLVideoElement>(null);

  const handlePressPlay = () => {
    refVideo?.current?.play();
    setReproduciendo(true);
  };
  const handlePressPause = () => {
    refVideo?.current?.pause();
    setReproduciendo(false);
  };

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
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                {" "}
                Select Video
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                defaultValue={"video-general"}
              >
                <MenuItem value="video-general">Video General</MenuItem>
                <MenuItem value="primer-piso">Primer Piso</MenuItem>
                <MenuItem value="segundo-piso">Segundo Piso</MenuItem>
              </Select>
            </FormControl>
          </Container>
          <Container id="planos" sx={{ marginBottom: "20px" }}>
            <Button
              variant="outlined"
              size="large"
              fullWidth
              sx={{ height: "100%" }}
            >
              Ver Plano
            </Button>
          </Container>
        </Box>

        <Container id="videos">
          <video
            width="100%"
            id="video-space"
            src="https://sharedby.blomp.com/kzv6mK"
            ref={refVideo}
          />
          {!reproduciendo && (
            <IconButton onClick={handlePressPlay}>
              <PlayCircleIcon />
            </IconButton>
          )}

          {reproduciendo && (
            <IconButton onClick={handlePressPause}>
              <PauseCircleIcon />
            </IconButton>
          )}
        </Container>
      </Box>
    </Box>
  );
};
export default Espacio;
