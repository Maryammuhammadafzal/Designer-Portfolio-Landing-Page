import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const ContactPage = () => {
    return (
        <div className='w-full h-auto flex justify-center items-center lg:py-30 md:py-15 sm:py-10 py-5 max-sm:px-3'>
            <div className='lg:w-[85%] md:w-[95%] w-full h-full flex justify-center items-center'>
                <div className='xl:w-[856px] lg:w-[800px] md:w-[750px] sm:h-[362px] sm:w-full 2xs:w-[350px] w-full flex justify-center items-center md:p-6 p-4 rounded-[20px] bg-[#F5F5F5]'>
                    <div className='w-full h-full sm:flex-row flex-col flex gap-6'>
                        {/* Left side */}
                        <div className='md:w-[40%] sm:w-[45%] w-full h-full flex justify-center items-center'>
                            <div className='w-full h-full flex flex-col gap-3 justify-center items-center'>
                                {/* Bussiness Card */}
                                <div className='w-full h-[200px] flex gap-3 bg-white rounded-[20px] justify-start relative items-center md:p-3'>
                                    <div className='w-[164px] h-[71px] absolute top-24 md:left-40 left-30 flex justify-center items-center'>
                                        <Image src='/images/badge.png' alt='image' height={124} width={41} className='w-full h-full' />
                                    </div>
                                    <div className='w-[196px] h-[196px]'>
                                        <Image src='/images/profile-image.png' alt='image' height={196} width={196} className='w-full h-full' />
                                    </div>
                                </div>

                                {/* highlights */}
                                <div className='flex gap-3 w-full h-auto'>
                                    <div className='w-full h-full bg-[#D9F9FF] flex rounded-[20px] p-2'>
                                        <p className='text-[#3CDFFF] font-bold text-lg flex leading-10'>
                                            📧 
                                        </p>
                                        <p className='text-[#3CDFFF] font-bold md:text-base sm:text-sm text-xs flex leading-10'>
                                            aria.bennett@designmail.com
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Right side */}
                        <div className='sm:w-[60%] w-full h-full flex justify-center items-center'>
                            <div className='w-full h-full flex flex-col gap-2 justify-center'>
                                <h2 className='lg:text-[40px] md:text-4xl sm:text-3xl text-2xl font-extrabold lg:leading-12 md:leading-10 sm:leading-9 leading-7'>Let’s Create Something Beautiful Together</h2>
                                <p className='text-foreground/40 pt-3 sm:text-base text-sm capitalize'>Have a project in mind, or just want to say hi? I’d love to hear from you.
                                </p>
                               <div>
                                 <Button className='bg-[#393939] rounded-4xl sm:my-0 mt-5 px-7 py-5 flex gap-3 text-white text-center'>
                                    Say Hello <Image src='/images/arrow-icon.png' alt='image' height={26} width={10} className='w-[26px]' />
                                </Button>
                               </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactPage
