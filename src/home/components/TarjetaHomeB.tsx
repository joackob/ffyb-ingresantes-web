import { Box, Typography, Link, Stack } from "@mui/material";
import Image from "next/image";

type ResumenArticulo = {
  titulo: string;
  resumen: string;
  enlace: string;
  imagen: string;
};

const TarjetaHomeB = (props: ResumenArticulo) => {
  return (
    <Box
      style={{
        borderTop: "4px solid #FF8700",
        paddingTop: "20px",
      }}
    >
      <Stack direction="row" flexWrap={"wrap"}>
        <Stack
          spacing={"20px"}
          flexBasis={"390px"}
          flexGrow={1}
          marginBottom={"20px"}
        >
          <Stack spacing={"16px"}>
            <Typography
              style={{
                color: "#011344",
                fontWeight: "800",
                fontFamily: "Montserrat",
              }}
            >
              {props.titulo}
            </Typography>
            <Typography
              style={{
                color: "#7C7C7C",
                fontWeight: "400",
                fontFamily: "Montserrat",
                marginRight: "8px",
              }}
            >
              {props.resumen}
            </Typography>
          </Stack>
          <Link
            href={props.enlace}
            style={{
              color: "#5DAFD6",
              textDecoration: "none",
              fontFamily: "Montserrat",
            }}
          >
            Ver más
          </Link>
        </Stack>
        <Box
          height={"148px"}
          position={"relative"}
          flexBasis={"33%"}
          flexGrow={999}
        >
          <Image
            src={props.imagen}
            alt={props.titulo}
            fill
            objectFit={"cover"}
          />
        </Box>
      </Stack>
    </Box>
  );
};

export default TarjetaHomeB;
