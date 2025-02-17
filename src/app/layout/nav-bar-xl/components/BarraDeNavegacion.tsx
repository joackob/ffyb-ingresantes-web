import { Link, Stack, Button, Avatar, CircularProgress } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import useSesion from "@/src/app/layout/hooks";
import { ReactNode } from "react";

const NavBar = () => {
  const sesion = useSesion();
  return (
    <ContenedorParaLaBarraDeNavegacion>
      {sesion.enlaces().map((link) => (
        <Enlace key={link.url} url={link.url} label={link.label} />
      ))}
      {sesion.estaInactivo() && (
        <BotonParaSesion alPresionar={sesion.iniciar} label={"iniciar sesión"}>
          <AvatarParaSesionInactiva />
        </BotonParaSesion>
      )}
      {sesion.estaActivo() && (
        <BotonParaSesion alPresionar={sesion.cerrar} label={"cerrar sesión"}>
          <AvatarParaSesionActiva nombre={sesion.usuario().nombre} />
        </BotonParaSesion>
      )}

      {(sesion.estaIniciando() || sesion.estaCerrando()) && (
        <CircularProgress />
      )}
    </ContenedorParaLaBarraDeNavegacion>
  );
};

const ContenedorParaLaBarraDeNavegacion = ({
  children,
}: {
  children: ReactNode;
}) => (
  <Stack
    height={"100%"}
    alignItems={"center"}
    direction={"row"}
    spacing={"2rem"}
  >
    {children}
  </Stack>
);

const AvatarParaSesionActiva = ({ nombre }: { nombre: string }) => (
  <Avatar style={{ backgroundColor: "#8b8b8b" }}>
    {nombre.split(" ").map((palabra) => palabra[0].toUpperCase())}
  </Avatar>
);

const AvatarParaSesionInactiva = () => (
  <Avatar>
    <AccountCircleIcon />
  </Avatar>
);

const BotonParaSesion = ({
  children,
  alPresionar,
  label,
}: {
  children: ReactNode;
  alPresionar: () => void;
  label: string;
}) => {
  return (
    <Button
      variant="text"
      onClick={alPresionar}
      style={{
        fontFamily: "Montserrat",
        fontSize: ".75rem",
        backgroundColor: "transparent",
        width: "7rem",
        lineHeight: "1.3",
        padding: "0",
        textAlign: "left",
      }}
    >
      {label}
      {children}
    </Button>
  );
};

const Enlace = ({ url, label }: { url: string; label: string }) => {
  return (
    <Link
      fontSize={"0.75rem"}
      fontFamily={"Montserrat"}
      href={url}
      color={"#8b8b8b"}
      underline="none"
      fontWeight={"light"}
      textTransform={"uppercase"}
      dangerouslySetInnerHTML={{ __html: label }}
    />
  );
};
export default NavBar;
