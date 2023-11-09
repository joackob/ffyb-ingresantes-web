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
import { useRef } from "react";
import Modal from "@mui/material/Modal";

const Espacio = () => {
  const md = useMediaQuery("min-width(900px)");

  //Modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

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
    <Box id="contenedor-supremo" sx={{ marginTop: "30px" }}>
      <Box id="contenedor-general">
        <Box
          id="paneles-superiores"
          display={"flex"}
          justifyContent={"center"}
          flexDirection={"row"}
        >
          <Container id="elegir-video" sx={{ marginBottom: "20px" }}>
            <FormControl fullWidth>
              <InputLabel
                id="demo-simple-select-label"
                sx={{ color: "#3728b7" }}
              >
                {" "}
                Select Video
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                defaultValue={"video-general"}
                sx={{ color: "#3728b7" }}
              >
                <MenuItem value="video-general">Video General</MenuItem>
                <MenuItem value="primer-piso">Primer Piso</MenuItem>
                <MenuItem value="segundo-piso">Segundo Piso</MenuItem>
              </Select>
            </FormControl>
          </Container>

          <Container id="planos" sx={{ marginBottom: "20px" }}>
            <Button
              onClick={handleOpen}
              variant="outlined"
              size="large"
              fullWidth
              sx={{
                height: "100%",
                color: "#3728b7",
                borderColor: "#3728b7",
              }}
            >
              Ver Plano
            </Button>
            <Modal
              id="modal"
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <img src="https://i.pinimg.com/236x/9b/53/c7/9b53c7056b72da324df08aed0d7be51f.jpg" />
              </Box>
            </Modal>
          </Container>
        </Box>

        <Container id="videos" sx={{ position: "relative" }}>
          <video
            id="video-space"
            src="https://sharedby.blomp.com/kzv6mK"
            ref={refVideo}
            width="100%"
          />
        </Container>
        <Container
          sx={{
            position: "absolute",
            top: "75%",
            display: "flex",
            justifyContent: "center",
            zIndex: 1,
          }}
        >
          {!reproduciendo && (
            <IconButton onClick={handlePressPlay}>
              <PlayCircleIcon
                sx={{ fontSize: "8rem", color: "#3728b7", opacity: "80%" }}
              />
            </IconButton>
          )}

          {reproduciendo && (
            <IconButton onClick={handlePressPause}>
              <PauseCircleIcon
                sx={{ fontSize: "8rem", color: "#3728b7", opacity: "80%" }}
              />
            </IconButton>
          )}
        </Container>
      </Box>
    </Box>
  );
};
export default Espacio;
