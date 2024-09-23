"use client";
import { DragOverlay } from "@dnd-kit/core";
import { Box } from "@mui/material";
import { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";

const TarjetaParaCubrirArrastre = ({
  esArrastrada,
  children,
}: {
  esArrastrada: boolean;
  children: ReactNode;
}) => {
  const [inClient, setInClient] = useState(false);
  useEffect(() => {
    setInClient(true);
  }, []);

  if (!inClient) return null;
  if (!esArrastrada) return null;

  return createPortal(
    <DragOverlay>
      <Box sx={{ filter: "opacity(50%)" }}>{children}</Box>
    </DragOverlay>,
    document.body
  );
};

export default TarjetaParaCubrirArrastre;
