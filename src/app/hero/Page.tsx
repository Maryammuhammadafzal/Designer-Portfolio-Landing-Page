import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import React from 'react'

const HeroPage = () => {
    return (
        <div className='w-full h-auto min-h-screen flex justify-center items-center lg:py-30 md:py-15 sm:py-10 py-5 max-sm:px-3'>
            <div className='lg:w-[85%] md:w-[95%] w-full h-full flex justify-center items-center'>
                <div className='flex flex-col md:gap-30 sm:gap-24 xs:gap-18 gap-12 w-full h-full justify-center items-center'>
                    <div className='flex gap-5 flex-col justify-center items-center md:max-w-lg max-w-sm'>
                        <Image src='/images/profile-image.png' alt='image' height={120} width={120} className='rounded-full' />
                        <h1 className='sm:text-5xl xs:text-4xl text-3xl font-extrabold text-center'>{`Hello, I’m Aria`}</h1>
                        <p className='capitalize md:text-4xl sm:text-3xl xs:text-2xl text-xl md:leading-12 sm:leading-10 leading-8 text-center text-primary/80'>a creative designer shaping visual stories.</p>
                    </div>
                    <div className='flex max-w-2xl gap-10 flex-wrap justify-center items-center'>
                        <Badge variant="default" className='text-primary/80 bg-[#FFB3004D]'>🎨 UI/UX</Badge>
                        <Badge variant="default" className='text-primary/80 bg-[#8DECFF54]'>✏️ Branding</Badge>
                        <Badge variant="default" className='text-primary/80 bg-[#F4E8D2]'>📸 Visual </Badge>
                        <Badge variant="default" className='text-primary/80 bg-[#C7D21659]'>😍 elegance</Badge>
                        <Badge variant="default" className='text-primary/80 bg-[#DE767B40]'>🙂 empathy</Badge>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroPage
