import { LineWeight } from "@mui/icons-material";
import { Box } from "@mui/material";
import React, { ReactNode } from "react";

const Header = ({ children }: { children: ReactNode }) => {
  return <Box 
  component={"header"}
  width = "824"
  borderColor={"#011344"}
  borderBottom="8"
>{children}
  
  
  
  </Box>
  ;
};

export default Header;
