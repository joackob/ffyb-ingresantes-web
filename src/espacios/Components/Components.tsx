import * as React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

const videoResponsive = () => {
  if (useMediaQuery("(min-width:900px)")) {
    return <video src="https://sharedby.blomp.com/kzv6mK" />;
  } else {
    return <video src="https://www.youtube.com/watch?v=Jq57zqfqF6s" />;
  }
};

export default videoResponsive;
