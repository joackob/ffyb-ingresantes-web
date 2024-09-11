"use client";
import { Box, Stack, Typography } from "@mui/material";
import React, { ReactNode } from "react";
import { useDroppable } from "@dnd-kit/core";

const CuatrimestreDroppable = ({
  id,
  index,
  children,
}: {
  id: string;
  index: number;
  children: ReactNode;
}) => {
  const { setNodeRef } = useDroppable({
    id,
  });
  return (
    <Box
      ref={setNodeRef}
      style={{
        backgroundColor: "#fff4",
        borderRadius: "8px",
      }}
    >
      <Box padding={"8px"}>
        <Typography
          color={"white"}
          fontFamily={"Montserrat"}
          fontWeight={800}
          fontSize={"16px"}
          textTransform={"uppercase"}
        >{`${index}° cuatrimestre`}</Typography>
      </Box>
      <Stack
        component={"ol"}
        spacing={"8px"}
        style={{
          width: "320px",
          padding: "8px",
        }}
      >
        {children}
      </Stack>
    </Box>
  );
};

export default CuatrimestreDroppable;
