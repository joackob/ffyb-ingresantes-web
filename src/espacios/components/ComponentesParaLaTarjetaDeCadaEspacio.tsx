import { Container, Stack } from "@mui/material";
import { ReactNode } from "react";

export const ContenedorParaLaTarjeta = ({
  children,
}: {
  children: ReactNode;
}) => (
  <Container>
    <Stack direction={"row"}>{children}</Stack>
  </Container>
);

export const CuerpoDeLaTarjeta = ({ contenido }: { contenido: string }) => {
  return <div>{contenido}</div>;
};

export const VideoComplementario = ({ url }: { url: string }) => {
  return (
    <iframe
      width="360"
      height="640"
      src={url}
      title="Estudia Laboratorio Clínico y Anatomía Patológica💜"
      // frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  );
};
