import React from 'react'
import { Card, CardHeader, CardMedia } from "@mui/material"

const Slide = ({ image, title, body }) => {
    return (
        <Card sx={{ width: 350, height: 600, bgcolor: '#C183C8', borderRadius: 4 }}>
            <CardMedia
                sx={{ height: "100%", backgroundSize: 'cover', }}
                image={image}
                title={title}
            />
            <CardHeader>{body}</CardHeader>
        </Card>
    )
}

export default Slide