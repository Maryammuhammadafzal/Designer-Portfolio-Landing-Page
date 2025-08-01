import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {

    const nav_data = [
        {
            link: '/',
            icon: '/images/home-icon.png'
        },
        {
            link: '/about',
            icon: '/images/about-icon.png'
        },
        {
            link: '/help',
            icon: '/images/help-icon.png'
        },
        {
            link: '/contact',
            icon: '/images/contact-icon.png'
        },
    ]

    return (
        <div className='w-full h-[150px] flex justify-center items-center fixed bottom-0 left-0 z-50'>
            <div className='w-fit h-auto flex justify-center items-center gap-3 bg-[#F5F5F5] px-6 py-3 rounded-[20px]'>
                <ul className='w-full h-full flex justify-center items-center gap-4'>
                    {
                        nav_data.map((nav, index) => (
                            <li key={index} className='w-auto h-auto flex-col gap-1 flex justify-center items-center group'>
                                <Link href={nav.link} className='flex justify-center items-center rounded-[10px] bg-[#0000000F] group-hover:bg-[#92D8E7] focus:bg-[#92D8E7] w-[74px] h-[63px]'>
                                    <Image src={nav.icon} alt='home-icon' width={42} height={42} />
                                </Link>
                                <div className='w-5 h-2 group-hover:bg-[#92D8E7] bg-[#F5F5F5] rounded-[10px]'></div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Header
