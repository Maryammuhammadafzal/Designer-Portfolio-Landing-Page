import Image from 'next/image'
import React from 'react'

const HeroPage = () => {
    return (
        <div className='w-full h-auto min-h-screen flex justify-center items-center'>
            <div className='lg:w-[85%] md:w-[95%] w-full h-full flex justify-center items-center'>
                <div className='flex flex-col gap-10 w-full h-full justify-center items-center'>
                    <div className='flex gap-5 flex-col justify-center items-center max-w-lg'>
                        <Image src='/images/profile-image.png' alt='image' height={120} width={120} className='rounded-full' />
                        <h1 className='text-5xl font-extrabold text-center'>{`Hello, I’m Aria`}</h1>
                        <p className='capitalize text-4xl leading-16'>a creative designer shaping visual stories.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroPage
