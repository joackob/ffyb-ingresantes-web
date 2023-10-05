import * as React from "react";
import { Box, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const Cartas = ({ gridKeys }: { gridKeys: string[] }) => {
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
          <Card
            sx={{
              maxWidth: 300,
              border: "2px solid black",
              borderRadius: "20px",
            }}
          >
            <CardContent>
              <Typography variant="h5" sx={{ padding: "10px" }}>
                ¿Tenés problemas económicos?
              </Typography>
              <Typography variant="subtitle1" sx={{ textAlign: "center" }}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem,
                ipsum dolor sit amet consectetur adipisicing elit.
              </Typography>
            </CardContent>
          </Card>
        </Box>
      ))}
    </>
  );
};
export default Cartas;
