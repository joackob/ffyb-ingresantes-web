import * as React from 'react';
import { Box, Typography } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const Cartas = ({gridKeys}:{gridKeys:string[]}) => {
    return (
        <>
            <Box gridArea={gridKeys[0]} display={{xs:"none",md:"grid"}} margin={"5px"} justifyContent={"center"}>
                <Card sx={{maxWidth: 300 ,border:"2px solid black",borderRadius:"20px"}}>
                    <CardContent>
                        <Typography variant="h5" sx={{padding:"10px"}}>
                            ¿Tenés problemas económicos?
                        </Typography>
                        <Typography variant="subtitle1" sx={{textAlign:"center"}}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
            <Box gridArea={gridKeys[1]} display={{xs:"none",md:"grid"}} margin={"5px"} justifyContent={"center"}>
                <Card sx={{maxWidth: 300 ,border:"2px solid black",borderRadius:"20px"}}>
                    <CardContent>
                        <Typography variant="h5" sx={{padding:"10px"}}>
                            ¿Tenés problemas con tus horarios?
                        </Typography>
                        <Typography variant="subtitle1" sx={{textAlign:"center"}}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
            <Box gridArea={gridKeys[2]} display={{xs:"none",md:"grid"}} margin={"5px"} justifyContent={"center"}>
                <Card sx={{maxWidth: 300 ,border:"2px solid black",borderRadius:"20px"}}>
                    <CardContent>
                        <Typography variant="h5" sx={{padding:"10px"}}>
                            ¿Sufrís de violencia doméstica?
                        </Typography>
                        <Typography variant="subtitle1" sx={{textAlign:"center"}}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
            <Box gridArea={gridKeys[3]} display={{xs:"none",md:"grid"}} margin={"5px"} justifyContent={"center"}>
                <Card sx={{maxWidth: 300 ,border:"2px solid black",borderRadius:"20px"}}>
                    <CardContent>
                        <Typography variant="h5" sx={{padding:"10px"}}>
                            Contactos Administrativos
                        </Typography>
                        <Typography variant="subtitle1" sx={{textAlign:"center"}}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
            <Box gridArea={gridKeys[4]} display={{xs:"none",md:"grid"}} margin={"5px"} justifyContent={"center"}>
                <Card sx={{maxWidth: 300 ,border:"2px solid black",borderRadius:"20px"}}>
                    <CardContent>
                        <Typography variant="h5" sx={{padding:"10px"}}>
                            ¿Tenés problemas de concetividad?
                        </Typography>
                        <Typography variant="subtitle1" sx={{textAlign:"center"}}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
            <Box gridArea={gridKeys[5]} display={{xs:"none",md:"grid"}} margin={"5px"} justifyContent={"center"}>
                <Card sx={{maxWidth: 300 ,border:"2px solid black",borderRadius:"20px"}}>
                    <CardContent>
                        <Typography variant="h5" sx={{padding:"10px"}}>
                            ¿Tenés problemas con el transporte?
                        </Typography>
                        <Typography variant="subtitle1" sx={{textAlign:"center"}}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
        </>
    );
}
export default Cartas;