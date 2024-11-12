import { Typography } from "@mui/material";
import type { MDXComponents } from "mdx/types";

export const customComponents: MDXComponents = {
  h2: ({ children }) => (
    <Typography
      component={"h1"}
      sx={{
        color: "#011344",
        fontFamily: "Montserrat",
        fontWeight: "ExtraBold",
        fontSize: "16px",
      }}
    >
      {children}
    </Typography>
  ),
  p: ({ children }) => (
    <Typography
      component={"p"}
      sx={{
        color: "#7C7C7C",
        fontFamily: "Montserrat",
        fontWeight: "Regular",
        fontSize: "16px",
      }}
    >
      {children}
    </Typography>
  ),
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
  };
}
