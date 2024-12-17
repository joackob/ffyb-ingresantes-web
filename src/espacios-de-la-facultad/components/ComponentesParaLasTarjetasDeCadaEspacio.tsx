import { Container, Stack, Typography } from "@mui/material";
import { ReactNode } from "react";

export const ContenedorParaLaTarjeta = ({
  children,
}: {
  children: ReactNode;
}) => (
  <Container style={{ marginTop: "30px", marginBottom: "50px" }}>
    <Stack spacing={"16px"} direction={"row"} flexWrap={"wrap"}>
      {children}
    </Stack>
  </Container>
);

export const CuerpoDeLaTarjeta = ({ contenido }: { contenido: string }) => {
  const resumen = contenido.split(" ").join(" ").concat("");
  return (
    <Typography
      component={"p"}
      sx={{
        font: "Montserrat",
        weight: "Regular",
        fontSize: "16px",
        LetterSpacing: "0%",
      }}
    >
      {resumen}
    </Typography>
  );
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
  return (
    <Typography
      component={"h2"}
      sx={{
        color: "black",
        fontFamily: "Montserrat",
        fontWeight: 800,
        fontSize: "16px",
        marginTop: "1rem",
        marginBottom: "1rem",
      }}
    >
      {titulo}
    </Typography>
  );
};
