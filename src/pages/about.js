import React from 'react'
import { Card, CardMedia } from "@mui/material"
import Layout from '@/components/Layout'
import TransitionEffect from '@/components/TransitionEffect'

const about = () => {
    return (
        <>
            <TransitionEffect />
            <Layout className='!bg-dark w-full min-h-screen'>
                <div className='flex flex-row items-center justify-center bg-dark'>
                    <Card sx={{ width: 350, height: 600, bgcolor: '#F5F5F5', border: 10, borderColor: '#DC934B' }}>
                        <CardMedia
                            sx={{ height: "100%", backgroundSize: 'cover', }}
                            image="/images/profile/rajvi.jpg"
                        >
                        </CardMedia>
                    </Card>
                    <div className='px-8 flex flex-col h-[590px]'>
                        <h2 className='text-3xl text-secondary'>rajvi padia (b. 1999)</h2>
                        <h5 className='text-2xl font-semibold text-light '>Art is the concrete representation of our most subtle feelings</h5>
                        <h4 className='text-2xl text-alt text-end '>- Agnes Martin</h4>
                        <p></p>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default about