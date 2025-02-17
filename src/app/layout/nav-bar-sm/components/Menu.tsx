import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Link, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import { MouseEvent } from "react";
import useSesion from "../../hooks";

const NavMenu = () => {
  const sesion = useSesion();
  const menu = useMenuClickeable();

  return (
    <>
      <IconButton onClick={menu.anclarAEsteElemento}>
        <MoreVertIcon fontSize={"large"} sx={{ color: "black" }} />
      </IconButton>

      <Menu
        id="basic-menu"
        anchorEl={menu.elementoAlCualEstaAnclado()}
        open={menu.estaAbierto()}
        onClose={menu.desanclarDeCualquierElemento}
      >
        {sesion.enlaces().map((link) => (
          <ItemParaElMenu key={link.label} url={link.url} label={link.label} />
        ))}

        {sesion.estaActivo() && (
          <BotonParaSesion
            label={"cerrar <br/> sesión"}
            alPresionar={sesion.cerrar}
          />
        )}
        {sesion.estaIniciando() && (
          <BotonParaSesion
            label={"iniciar <br/>sesion"}
            alPresionar={sesion.iniciar}
          />
        )}
      </Menu>
    </>
  );
};

const useMenuClickeable = () => {
  const [elementoDeAnclajeParaElMenu, establecerElementoDeAnclajeParaElMenu] =
    useState<null | HTMLElement>(null);

  const anclarElMenuAEsteElemento = (event: MouseEvent<HTMLButtonElement>) => {
    establecerElementoDeAnclajeParaElMenu(event.currentTarget);
  };
  const desanclarElMenu = () => {
    establecerElementoDeAnclajeParaElMenu(null);
  };

  return {
    estaAbierto: () => elementoDeAnclajeParaElMenu !== null,
    anclarAEsteElemento: anclarElMenuAEsteElemento,
    desanclarDeCualquierElemento: desanclarElMenu,
    elementoAlCualEstaAnclado: () => elementoDeAnclajeParaElMenu,
  } as const;
};

const ItemParaElMenu = ({ url, label }: { url: string; label: string }) => (
  <MenuItem>
    <Link
      fontSize={"12px"}
      fontFamily={"Montserrat"}
      href={url}
      color={"#8b8b8b"}
      underline="none"
      fontWeight={"light"}
      textTransform={"uppercase"}
      dangerouslySetInnerHTML={{ __html: label }}
    />
  </MenuItem>
);

const BotonParaSesion = ({
  label,
  alPresionar,
}: {
  label: string;
  alPresionar: () => void;
}) => (
  <MenuItem>
    <Link
      fontSize={"12px"}
      fontFamily={"Montserrat"}
      onClick={alPresionar}
      color={"#8b8b8b"}
      underline="none"
      fontWeight={"light"}
      textTransform={"uppercase"}
      dangerouslySetInnerHTML={{ __html: label }}
      sx={{ cursor: "pointer" }}
    />
  </MenuItem>
);

export default NavMenu;
