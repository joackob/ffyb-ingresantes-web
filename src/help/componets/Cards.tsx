import * as React from 'react';
import { Box, Typography } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const Cartas = ({gridKeys}:{gridKeys:string[]}) => {
    return (
        <>
            <Box gridArea={gridKeys[0]} display={{xs:"none",md:"block"}} margin={"10px"}>
                <Card sx={{ minWidth: 275 ,border:"1px solid black",backgroundColor:"#3728b7"}}>
                    <CardContent>
                        <Typography variant="h5" component="div" color="white" sx={{padding:"15px"}}>
                            ¿Tenés problemas económicos?
                        </Typography>
                        <Typography variant="subtitle1" color="white" sx={{textAlign:"center"}}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
        </>
    );
}
export default Cartas;