import React from 'react'
import { Card, CardMedia } from "@mui/material"
import Layout from '@/components/Layout'
import TransitionEffect from '@/components/TransitionEffect'

const about = () => {
    return (
        <>
            <TransitionEffect />
            <Layout className='!bg-dark w-full min-h-screen pb-0'>
                <div className='flex flex-row items-center justify-center bg-dark pb-0 mb-0'>
                    <Card sx={{ width: 350, height: 600, bgcolor: '#F5F5F5', border: 10, borderColor: '#DC934B' }}>
                        <CardMedia
                            sx={{ height: "100%", backgroundSize: 'cover', }}
                            image="/images/profile/rajvi.jpg"
                        >
                        </CardMedia>
                    </Card>
                    <div className='px-8 flex flex-col h-[590px] w-[590px]'>
                        <h2 className='text-3xl text-secondary'>Rajvi Padia</h2>
                        <h5 className='text-2xl font-semibold text-light '>Art is the concrete representation of our most subtle feelings</h5>
                        <h4 className='text-2xl text-alt text-end '>- Agnes Martin</h4>
                        <p className='text-wrap flex-grow text-light text-xl pt-5 leading-relaxed'>Hello! I'm Rajvi Padia, an artist deeply rooted in applied arts with a master's in art and design. I thrive in deadline-driven settings, viewing each project as an opportunity to showcase my dedication and deliver exceptional work within timelines. As a passionate creative, I aim to expand my design knowledge through practical experience, demonstrating the ability to create visually appealing and effective designs across various media.
                            My heart lies in the intricate world of miniature and model making, where each piece tells a unique story and conveys emotions through delicate details. What sets me apart is not just my artistic journey but also my enthusiasm to collaborate and connect with fellow artists and designers. Let's create something amazing together!</p>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default about