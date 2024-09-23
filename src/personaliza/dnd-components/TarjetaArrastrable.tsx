"use client";
import { Box, Typography } from "@mui/material";
import { useDraggable } from "@dnd-kit/core";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import React, { ReactNode } from "react";
import { Materia } from "../fake";

const ElementoArrastrable = ({
  id,
  children,
}: {
  id: string;
  children: ReactNode;
}) => {
  const { setNodeRef, attributes, listeners, transform, transition } =
    useSortable({
      id,
    });

  return (
    <Box
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={{
        transform: CSS.Transform.toString(transform),
        transition,
      }}
    >
      {children}
    </Box>
  );
};

export default ElementoArrastrable;
