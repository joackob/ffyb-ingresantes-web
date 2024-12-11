import { Container, Stack, Typography } from "@mui/material";
import { MDXComponents } from "mdx/types";
import { ReactNode } from "react";

export const ContenedorParaLaTarjeta = ({
  children,
}: {
  children: ReactNode;
}) => (
  <Container>
    <Stack spacing={"16px"} direction={"row"}>
      {children}
    </Stack>
  </Container>
);

export const CuerpoDeLaTarjeta = ({ contenido }: { contenido: string }) => {
  const resumen = contenido.split(" ").join(" ").concat("");
  return <div>{resumen}</div>;
};

export const VideoComplementario = ({ url }: { url: string }) => {
  return (
    <iframe
      width="360"
      height="640"
      src={url}
      title="UBA | Facultad de Farmacia y Bioquimica"
      // frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  );
};

export const TituloDelVideo = ({ titulo }: { titulo: string }) => {
  return <Typography 
  component={"h2"}
  sx={{
    color: "black",
    fontFamily: "Montserrat",
    fontWeight: 800,
    fontSize: "16px",
    marginTop: "1rem", 
    marginBottom: "1rem",
  }} >{titulo}</Typography>;
};
