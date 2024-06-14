import * as React from "react";
import { Box, useTheme } from "@mui/material";

const Cartas = ({ gridKeys }: { gridKeys: string[] }) => {
  const theme = useTheme();
  return (
    <>
      {gridKeys.map((key) => (
        <Box
          key={key}
          gridArea={key}
          display={{ xs: "none", md: "grid" }}
          margin={"5px"}
          justifyContent={"center"}
        >
          <div
            className="card"
            style={{
              borderStyle: "solid",
              borderWidth: "2px",
              borderColor: theme.palette.primary.main,
            }}
          >
            <div className="card-content">
              <div className="card-top">
                <span className="card-title">
                  <h2>¿Necesitas ayuda?</h2>
                </span>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi ullam beatae repellat. Harum et perferendis eum in
                  vel saepe quasi minus, eveniet velit distinctio tenetur
                  quisquam hic. Esse, consequatur minus.
                </p>
              </div>
            </div>
          </div>
        </Box>
      ))}
    </>
  );
};
export default Cartas;
