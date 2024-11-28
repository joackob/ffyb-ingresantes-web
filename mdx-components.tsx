import { Typography } from "@mui/material";
import type { MDXComponents } from "mdx/types";

export const customComponents: MDXComponents = {
  h2: ({ children }) => (
    <Typography
      component={"h2"}
      sx={{
        color: "#011344",
        fontFamily: "Montserrat",
        fontWeight: "ExtraBold",
        fontSize: "16px",
        marginTop: "50px", // Agrega margen superior
        marginBottom: "20px", // Agrega margen inferior
        paddingLeft: "20px", // Agrega relleno en el lado izquierdo
        //paddingRight: "15px", // Agrega relleno en el lado derecho
        //backgroundColor: "#e7f5ec", // Cambia el color de fondo
        
      }}
    >
      {children}
    </Typography>
  ),
  h3: ({ children }) => (
    <Typography
      component={"h3"}
      sx={{
        color: "#7C7C7C",
        fontFamily: "Montserrat",
        fontWeight: "ExtraBold",
        fontSize: "16px",
        marginTop: "50px", // Agrega margen superior
        marginBottom: "20px", // Agrega margen inferior
        paddingLeft: "20px", // Agrega relleno en el lado izquierdo
        //paddingRight: "15px", // Agrega relleno en el lado derecho
        
      }}
    >
      {children}
    </Typography>
  ),

  h4: ({ children }) => (
    <Typography
      component={"h5"}
      sx={{
        color: "#7C7C7C",
        fontFamily: "Montserrat",
        fontWeight: "ExtraBold",
        fontSize: "16px",
        marginTop: "50px", // Agrega margen superior
        marginBottom: "20px", // Agrega margen inferior
        paddingLeft: "20px", // Agrega relleno en el lado izquierdo
        //paddingRight: "15px", // Agrega relleno en el lado derecho
        
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
        marginTop: "20px", // Agrega margen superior
        paddingLeft: "50px", // Agrega relleno en el lado izquierdo
        paddingRight: "50px", // Agrega relleno en el lado derecho
        //textAlign: "center", // Centra el texto
        marginBottom: "20px", //MODIFICAR ESTA PARTE PARA LA PARTE DE ABAJO.

      }}
    >
      {children}
    </Typography>
  ),

  h5: ({ children }) => (
    <Typography
      component={"h6"}
      sx={{
        color: "#7C7C7C",
        fontFamily: "Montserrat",
        fontWeight: "Regular",
        fontSize: "16px",
        marginTop: "20px", // Agrega margen superior
        paddingLeft: "50px", // Agrega relleno en el lado izquierdo
        paddingRight: "50px", // Agrega relleno en el lado derecho
        //textAlign: "center", // Centra el texto
        marginBottom: "50px", //MODIFICAR ESTA PARTE PARA LA PARTE DE ABAJO.

      }}
    >
      {children}
    </Typography>
  ),
  
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    ...customComponents,
  };
}
