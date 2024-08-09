import { Cursada } from '@/src/database/interfaces'
import { RadioButtonChecked, RadioButtonUnchecked } from '@mui/icons-material'
import { Box, ListItemIcon, Typography } from '@mui/material'
import React from 'react'

export const EstadoCursada = ({ cursada }: { cursada: Cursada }) => {
    return (
        <>

            {cursada === Cursada.CURSANDO && (
                <Box sx={{
                    marginBottom: "4px", width: "100%", borderRadius: "32px",
                }}>
                    <Typography
                        sx={{
                            fontSize: "12px",
                            backgroundColor: "#ffa420",
                            color: "white",


                        }}
                    >
                        {" "}
                        Cursando
                    </Typography>
                </Box>

            )}
            {cursada === Cursada.DISPONIBLE && (
                 <Box sx={{
                    marginBottom: "4px", width: "100%", borderRadius: "32px",
                }}>
                <Typography

                    sx={{

                        fontSize: "12px",
                        backgroundColor: "#80BFFF",

                        color: "white"
                    }}>

                    {" "}
                    disponible
                </Typography>
                </Box>
            )}
            {cursada === Cursada.APROBADA && (
                <Box sx={{
                    marginBottom: "4px", width: "100%", borderRadius: "32px", 
                }}>
                <Typography

                    sx={{

                        fontSize: "12px",
                        backgroundColor: "#1630F5",
                        color: "white"
                    }}>

                    {" "}
                    aprobado
                </Typography>
                </Box>
            )}
            {cursada === Cursada.PENDIENTE && (
                <Box sx={{
                    marginBottom: "4px", width: "100%", borderRadius: "32px", 
                }}>
                <Typography

                    sx={{

                        fontSize: "12px",
                        backgroundColor: "#4A4848",

                        color: "white"
                    }}>

                    {" "}
                    no disponible
                </Typography>
                </Box>
            )}

        </>

    )
}
