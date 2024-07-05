import { Box } from "@mui/material";
import React, { ReactNode } from "react";

const Footer = ({ children }: { children: ReactNode }) => {
  return <Box component={"footer"}>{children}</Box>;
};

export default Footer;
