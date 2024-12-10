import { Box, Stack, Typography } from "@mui/material";
import { ReactNode } from "react";

const CuatrimestreDroppable = ({
  cuatrimestre,
  children,
}: {
  cuatrimestre: string;
  children: ReactNode;
}) => {
  return (
    <Box
      style={{
        backgroundColor: "#fff4",
        borderRadius: "8px",
        minHeight: "inherit",
      }}
    >
      <Box padding={"8px"}>
        <Typography
          color={"white"}
          fontFamily={"Montserrat"}
          fontWeight={800}
          fontSize={"16px"}
          textTransform={"uppercase"}
          style={{ userSelect: "none" }}
        >{`${cuatrimestre}`}</Typography>
      </Box>
      <Stack
        spacing={"8px"}
        style={{
          width: "320px",
          padding: "8px",
          minHeight: "inherit",
        }}
      >
        {children}
      </Stack>
    </Box>
  );
};

export default CuatrimestreDroppable;
