import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Container,
  Divider,
  Link,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { ReactNode, useState } from "react";
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
        <Toolbar sx={{ backgroundColor: "var(--color-primario)" }}>
          <Link href="/" flexGrow={1} underline="none" color="inherit">
            <NavLogo />
          </Link>
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            sx={{ color: "white" }}
            onClick={handleClick}
          >
            <MenuIcon color="inherit" />
          </IconButton>
        </Toolbar>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {links.map((link, index) => (
            <MenuItem
              key={index}
              onClick={handleClose}
              component={Link}
              href={link.url}
              underline="none"
            >
              <Typography variant="inherit" sx={{ ml: 1 }}>
                {link.label}
              </Typography>
            </MenuItem>
          ))}
        </Menu>
      </AppBar>
    </Box>
  );
};

export default NavMobile;
