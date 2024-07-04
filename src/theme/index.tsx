import { createTheme, ThemeOptions, ThemeProvider } from "@mui/material";
import { ReactNode } from "react";
const options: ThemeOptions = {
  palette: {
    primary: {
      light: "#f6f7f9",
      main: "#3728b7",
      dark: "#1A0030",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#15d448",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
};

const theme = createTheme(options);
const Theme = ({ children }: { children: ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
