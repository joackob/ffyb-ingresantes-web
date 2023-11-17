import { Container, IconButton } from "@mui/material";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import { useEffect, useRef, useState } from "react";

const videoSources = {
  // desktop: "https://sharedby.blomp.com/qTphr8",
  // mobile: "https://sharedby.blomp.com/kzv6mK",
  desktop: "/desk.mp4",
  mobile: "/mob.mp4",
};

const VideoEspacios = () => {
  const [reproduciendo, setReproduciendo] = useState(false);
  const [sourceVideo, setSourceVideo] = useState(videoSources.mobile);
  const refVideo = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (window.innerWidth > 640) {
      setSourceVideo(videoSources.desktop);
    } else {
      setSourceVideo(videoSources.mobile);
    }
  }, []);

  const handlePressPlay = () => {
    refVideo?.current?.play();
    setReproduciendo(true);
  };

  const handlePressPause = () => {
    refVideo?.current?.pause();
    setReproduciendo(false);
  };

  return (
    <Container id="videos" sx={{ position: "relative" }}>
      <video src={sourceVideo} ref={refVideo} width="100%"></video>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
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
    </Container>
  );
};

export default VideoEspacios;
