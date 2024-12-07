"use client";
import { Box } from "@mui/material";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import React, { ReactNode } from "react";

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
