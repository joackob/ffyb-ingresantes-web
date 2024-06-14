import { Player } from "video-react";
import { useEffect, useState } from "react";

const videoSources = {
  desktop: "https://sharedby.blomp.com/qTphr8",
  mobile: "https://sharedby.blomp.com/kzv6mK",
};

const VideoEspacios = () => {
  const [sourceVideo, setSourceVideo] = useState(videoSources.mobile);

  const handleResize = () => {
    if (window.innerWidth > 640) {
      setSourceVideo(videoSources.desktop);
    } else {
      setSourceVideo(videoSources.mobile);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Player>
      <source src={sourceVideo} />
    </Player>
  );
};

export default VideoEspacios;
