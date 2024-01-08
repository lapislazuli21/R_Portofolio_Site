import React from 'react'
import { Card, CardMedia } from "@mui/material"

const Slide = ({ image }) => {
    return (
        <Card sx={{ width: 100, height: 100, borderRadius: 4 }}>
            <CardMedia
                sx={{ width: "100%", height: "100%", backgroundSize: 'cover', alignItems: 'center', }}
                image={image}
            />
        </Card>
    )
}

export default Slide