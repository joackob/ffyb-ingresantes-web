import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Container, Link, Menu, MenuItem, Typography } from "@mui/material";
import { useState } from "react";
import { MouseEvent } from "react";
import NavLogo from "./NavLogo";
import links from "../links";

const NavMobile = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      display={{
        xs: "block",
        sm: "block",
        md: "none",
        lg: "none",
        xl: "none",
      }}
    >
      <Container sx={{ height: "7vh" }} />
      <AppBar position="fixed">
        <Toolbar sx={{ backgroundColor: "white" }}>
          <Link href="/" flexGrow={1} underline="none" color="inherit">
            <NavLogo />
          </Link>
          <IconButton onClick={handleClick}>
            <MoreVertIcon fontSize={"large"} sx={{ color: "black" }} />
          </IconButton>
        </Toolbar>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          {links.map((link, index) => (
            <MenuItem
              key={index}
              onClick={handleClose}
              component={Link}
              fontSize="Montserrat"
              href={link.url}
              underline="none"
            >
              {link.label}
            </MenuItem>
          ))}
        </Menu>
      </AppBar>
    </Box>
  );
};

export default NavMobile;
