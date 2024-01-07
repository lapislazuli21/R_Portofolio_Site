import React from 'react'
import Link from 'next/link'
import TransitionEffect from '@/components/TransitionEffect'
import Layout from '@/components/Layout'

const contact = () => {
    return (
        <>
            <TransitionEffect />
            <Layout className='!bg-dark w-full min-h-screen'>
                <div className='flex flex-row w-full h-full bg-secondary rounded-2xl p-16'>
                    <div className='flex flex-col w-full items-center justify-around'>
                        <div className='flex flex-col items-center justify-evenly flex-grow'>
                            <h2 className='text-4xl'>Contact Me</h2>
                            <Link href='/' className='text-3xl font-bold text-light !stroke-alt'>Rajvi Padia</Link>
                        </div>
                        <div className='flex flex-col items-center justify-evenly flex-grow'>
                            <p className='text-3xl'>Email</p>
                            <Link href='mailto:rajvipadia@gmail.com' target='_blank' className='text-2xl text-light font-semibold'>rajvipadia@gmail.com</Link>
                            <p className='text-3xl'>Phone</p>
                            <p className='text-2xl font-semibold text-light'>+44 7436340884</p>
                            <p className='text-3xl'>Instagram</p>
                            <Link href='https://www.instagram.com/art_is_glory?igsh=eWxweXVmZ2xtZWww&utm_source=qr' target='_blank' className='text-2xl font-semibold text-light'>@art_is_glory</Link>
                            <p className='text-3xl'>Behance</p>
                            <Link href='https://www.behance.net/rajvipadia' target='_blank' className='text-2xl font-semibold text-light'>@rajvipadia</Link>
                        </div>
                    </div>
                    <div className='w-full h-[720px]'>
                        <img src='/images/profile/contact.jpg' className='rounded-xl w-3/4 h-full mx-auto' />
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default contact