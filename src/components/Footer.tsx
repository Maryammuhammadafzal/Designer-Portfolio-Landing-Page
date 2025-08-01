import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div className='w-full flex justify-center items-center lg:py-30 md:py-15 sm:py-10 py-5 max-sm:px-3'>
            <div className='lg:w-[85%] md:w-[95%] w-full h-full flex flex-col justify-center items-center text-center'>
                <p className='text-foreground/40 pt-3 sm:text-base text-sm'>Designed with 💖 and clean pixels.</p>
                <h2 className='md:text-[40px] xs:text-4xl 2xs:text-3xl text-2xl py-2 font-extrabold text-center'>© 2025 Aria Bennett</h2>
                <div className='flex gap-1 h-auto w-auto text-foreground/40 xs:text-base text-sm'><Link href='/'>Instagram</Link> . <Link href='/'>Dribble</Link> . <Link href='/'>Behance</Link> . <Link href='/'>LinkedIn</Link> .</div>
            </div>
        </div>
    )
}

export default Footer
