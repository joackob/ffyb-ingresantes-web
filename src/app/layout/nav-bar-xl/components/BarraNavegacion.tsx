import { Link, Stack, Box, Button } from "@mui/material";
import links from "@/src/app/layout/links";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import { Usuarios } from "@prisma/client";

const NavBar = () => {
  const sesion = useSession();
  return (
    <Stack
      height={"100%"}
      alignItems={"center"}
      direction={"row"}
      spacing={"32px"}
    >
      {links.map((link, index) => (
        <Link
          fontSize={"12px"}
          fontFamily={"Montserrat"}
          href={link.url}
          color={"#8b8b8b"}
          underline="none"
          fontWeight={"light"}
          textTransform={"uppercase"}
          dangerouslySetInnerHTML={{ __html: link.label }}
          key={index}
        />
      ))}
      {sesion.status === "unauthenticated" && (
        <Link
          fontSize={"12px"}
          fontFamily={"Montserrat"}
          href={"/inicio-de-sesion"}
          color={"#8b8b8b"}
          underline="none"
          fontWeight={"light"}
          textTransform={"uppercase"}
          dangerouslySetInnerHTML={{ __html: "iniciar <br/> sesión" }}
        />
      )}
      {sesion.status === "loading" && (
        <Link
          fontSize={"12px"}
          fontFamily={"Montserrat"}
          href={"#"}
          color={"#8b8b8b"}
          underline="none"
          fontWeight={"light"}
          textTransform={"uppercase"}
          dangerouslySetInnerHTML={{ __html: "cargando <br/> sesión" }}
        />
      )}

      {sesion.status === "authenticated" &&
        (sesion.data.user as Usuarios).tipo === "tutorando" && (
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
        )}

      {sesion.status === "authenticated" && (
        <Button
          variant="text"
          onClick={async () => await signOut({ callbackUrl: "/" })}
          style={{
            fontFamily: "Montserrat",
            fontSize: "12px",
            backgroundColor: "transparent",
            width: "70px",
            lineHeight: "1.3",
            padding: "0",
            textAlign: "left",
          }}
        >
          cerrar sesión
        </Button>
      )}
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        style={{
          backgroundColor: "#8b8b8b",
          borderRadius: "50%",
          width: "48px",
          height: "48px",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          style={{ width: "24px", height: "24px" }}
        >
          <path
            d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"
            fill="white"
          />
        </svg>
      </Box>
    </Stack>
  );
};
export default NavBar;
