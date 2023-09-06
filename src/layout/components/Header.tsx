import {
  Adb,
  FormatListBulleted,
  HelpOutline,
  LocationOn,
  Login,
} from "@mui/icons-material";
import { Box } from "@mui/material";
import React, { Fragment } from "react";
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";

const linksLeft = [
  {
    label: "¿Necesitas ayuda?",
    href: "/help",
    icon: <HelpOutline />,
  },
  {
    label: "Espacios de la facultad",
    href: "/planes",
    icon: <LocationOn />,
  },
  {
    label: "Plan de estudios - IPlan",
    href: "/planmaterias",
    icon: <FormatListBulleted />,
  },
  {
    label: "Comunidad Discord",
    href: "/planes",
    icon: <Adb />,
  },
];

const linksRight = [
  {
    label: "Iniciar sesión",
    href: "/login",
    icon: <Login />,
  },
];

const Header = () => (
  <Box component={"header"}>
    <Box>
      <Box
        display={{
          xs: "none",
          lg: "block",
        }}
      >
        <NavDesktop linksLeft={linksLeft} linksRight={linksRight} />
      </Box>

      <Box
        display={{
          xs: "block",
          lg: "none",
        }}
      >
        <NavMobile linksLeft={linksLeft} linksRight={linksRight} />
      </Box>
    </Box>
  </Box>
);

export default Header;
