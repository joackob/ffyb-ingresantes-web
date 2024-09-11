"use client";
import { Box, Stack, Typography } from "@mui/material";
import React, { ReactNode } from "react";
import { Droppable } from "@hello-pangea/dnd";

const CuatrimestreDroppable = ({
  id,
  index,
  children,
}: {
  id: string;
  index: number;
  children: ReactNode;
}) => {
  return (
    <Droppable droppableId={id}>
      {(droppableProvided, snapshot) => {
        console.log(snapshot);
        return (
          <Box
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
              spacing={"8px"}
              style={{
                width: "320px",
                padding: "8px",
              }}
              ref={droppableProvided.innerRef}
              {...droppableProvided.droppableProps}
            >
              {children}
              {droppableProvided.placeholder}
            </Stack>
          </Box>
        );
      }}
    </Droppable>
  );
};

export default CuatrimestreDroppable;
