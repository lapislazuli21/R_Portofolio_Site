import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full flex flex-row border-t-2 border-solid border-dark font-medium text-lg sm:text-base'>
      <Layout className='!p-12 flex flex-col items-center bg-primary justify-center'>
        <span className='text-light'>{new Date().getFullYear()} &copy; All Rights Reserved &nbsp;</span>
      </Layout>
    </footer>
  )
}

export default Footer