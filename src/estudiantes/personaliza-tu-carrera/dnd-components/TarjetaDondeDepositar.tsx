"use client";
import { Box } from "@mui/material";
import React, { ReactNode } from "react";
import { useDroppable } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

const TarjetaDondeDepositar = ({
  id,
  items,
  children,
}: {
  id: string;
  items: { id: number }[];
  children: ReactNode;
}) => {
  const { setNodeRef } = useDroppable({
    id,
  });

  return (
    <SortableContext
      id={id}
      items={items}
      strategy={verticalListSortingStrategy}
    >
      <Box ref={setNodeRef}>{children}</Box>
    </SortableContext>
  );
};

export default TarjetaDondeDepositar;
