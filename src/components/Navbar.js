import Link from 'next/link'
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { FaPaintbrush } from 'react-icons/fa6'

const CustomLink = ({ href, title, className = "" }) => {

    const router = useRouter();

    return (
        <Link href={href} className={`${className} text-alt relative group text-xl`}>
            {title}
            <span className={`h-[2px] inline-block bg-light absolute
            left-0 -bottom-1 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? 'w-full' : 'w-0'}`}
            >&nbsp;</span>
        </Link>
    )
}

const MobileLink = ({ href, title, className = "", toggle }) => {

    const router = useRouter();

    const handleClick = () => {
        toggle()
        router.push(href)
    }

    return (
        <button href={href} className={`${className} relative group text-light dark:text-dark`} onClick={handleClick}>
            {title}
            <span className={`h-[2px] inline-block bg-primary dark:bg-secondaryDark absolute
            left-0 -bottom-1 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? 'w-full' : 'w-0'}`}
            >&nbsp;</span>
        </button>
    )
}

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    return (
        <header className='w-full bg-dark px-16 py-16 font-medium flex items-center justify-between relative z-10 lg:px-16 md:px-12 sm:px-8'>

            <Link href="/" className=''>
                <h2 className='text-3xl text-light'>Rajvi Padia</h2>
                <h2 className='text-3xl text-primary'>Multidisciplinary Projects</h2>
            </Link>

            <div className='flex flex-row'>
                {
                    isOpen ?
                        <nav className={` py-4 transition-all duration-300 ease-in-out block`}>
                            <CustomLink href="/" title="Home" className='mx-4' />
                            <CustomLink href="/about" title="About" className='mx-4' />
                            <CustomLink href="/projects" title="Projects" className='mx-4' />
                            <CustomLink href="/contact" title="Contact" className='ml-4 mr-20' />
                        </nav>
                        : null
                }
                <button className='flex-col items-center justify-center lg:flex' onClick={handleClick}>
                    <span className={` transition-all duration-300 ease-out block ${isOpen ? 'rotate-90' : ''}`} ><FaPaintbrush color='#C183C8' size='3rem' /></span>
                </button>
            </div>

        </header>
    )
}

export default Navbar