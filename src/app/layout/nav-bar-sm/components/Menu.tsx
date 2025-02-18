import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Link, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import { MouseEvent } from "react";
import links from "@/src/app/layout/links";
import { signOut, useSession } from "next-auth/react";
import { Usuarios } from "@prisma/client";

const NavMenu = () => {
  const sesion = useSession();
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
        {links.map((link, index) => (
          <MenuItem key={index}>
            <Link
              fontSize={"12px"}
              fontFamily={"Montserrat"}
              href={link.url}
              color={"#8b8b8b"}
              underline="none"
              fontWeight={"light"}
              textTransform={"uppercase"}
              dangerouslySetInnerHTML={{ __html: link.label }}
            />
          </MenuItem>
        ))}

        {sesion.status === "unauthenticated" && (
          <MenuItem>
            <Link
              fontSize={"12px"}
              fontFamily={"Montserrat"}
              href={"/inicio-de-sesion"}
              color={"#8b8b8b"}
              underline="none"
              fontWeight={"light"}
              textTransform={"uppercase"}
              dangerouslySetInnerHTML={{ __html: "Iniciar <br/> sesión" }}
            />
          </MenuItem>
        )}
        {sesion.status === "authenticated" && (
          <MenuItem>
            <Link
              fontSize={"12px"}
              fontFamily={"Montserrat"}
              onClick={async () => await signOut({ callbackUrl: "/" })}
              color={"#8b8b8b"}
              underline="none"
              fontWeight={"light"}
              textTransform={"uppercase"}
              dangerouslySetInnerHTML={{ __html: "cerrar <br/> sesión" }}
              sx={{ cursor: "pointer" }}
            />
          </MenuItem>
        )}

        {sesion.status === "authenticated" &&
          (sesion.data.user as Usuarios).tipo === "tutorando" && (
            <MenuItem>
              <Link
                fontSize={"12px"}
                fontFamily={"Montserrat"}
                color={"#8b8b8b"}
                underline="none"
                fontWeight={"light"}
                textTransform={"uppercase"}
                href={"/estudiantes/estadisticas-de-tu-carrera"}
                dangerouslySetInnerHTML={{ __html: "tu <br/> progreso" }}
              />
            </MenuItem>
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

export default NavMenu;
