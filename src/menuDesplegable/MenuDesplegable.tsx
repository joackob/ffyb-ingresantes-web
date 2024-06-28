import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link, useTheme } from '@mui/material';

export default function MenuDesplegable() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const theme = useTheme();
  return (
    <div>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        variant='text'
        size='large'
        style={{textTransform: "none", color: "#676667", fontWeight: "bold"}}
        sx={{
         "&:hover": {
            color: theme.palette.primary.main,
          }

       }}
      >
        Plan de estudios - IPlan
      </Button>

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleClose}
        style={{textTransform: "none", color: "#676667", fontWeight: "bold"}}
        >Farmacia</MenuItem>
        <MenuItem onClick={handleClose}
        style={{textTransform: "none", color: "#676667", fontWeight: "bold"}}
        >Bioquímica</MenuItem>
        <MenuItem onClick={handleClose}
        style={{textTransform: "none", color: "#676667", fontWeight: "bold"}}
        >Licenciatura en Ciencia y Tecnología de Alimentos</MenuItem>
        <MenuItem onClick={handleClose}
        style={{textTransform: "none", color: "#676667", fontWeight: "bold"}}
        >Tecnicatura Universitaria en Medicina Nuclear</MenuItem>
      </Menu>
    </div>
  );
}
