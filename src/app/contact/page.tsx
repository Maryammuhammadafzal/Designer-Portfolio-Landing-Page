import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const ContactPage = () => {
    return (
        <div className='w-full h-auto flex justify-center items-center lg:py-30 md:py-15 sm:py-10 py-5'>
            <div className='lg:w-[85%] md:w-[95%] w-full h-full flex justify-center items-center'>
                <div className='xl:w-[856px] lg:w-[800px] md:w-[750px] h-[362px] flex justify-center items-center p-6 rounded-[20px] bg-[#F5F5F5]'>
                    <div className='w-full h-full flex gap-6'>
                        {/* Left side */}
                        <div className='w-[40%] h-full flex justify-center items-center'>4
                            <div className='w-full h-full flex flex-col gap-3 justify-center items-center'>
                                {/* Bussiness Card */}
                                <div className='w-full h-[200px] flex gap-3 justify-start relative items-center p-3'>
                                    <div className='w-[124px] h-[41px] absolute flex justify-center items-center'>
                                        <Image src='/images/badge.png' alt='image' height={124} width={41} className='w-full h-full' />
                                    </div>
                                    <div className='w-[196px] h-[196px]'>
                                        <Image src='/images/profile-image.png' alt='image' height={196} width={196} className='w-full h-full' />
                                    </div>
                                </div>

                                {/* highlights */}
                                <div className='flex gap-3 w-full h-auto'>
                                    <div className='w-full h-full bg-[#D9F9FF] rounded-[20px] p-2'>
                                        <p className='text-[#3CDFFF] font-bold text-lg leading-10'>
                                            📧 aria.bennett@designmail.com
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Right side */}
                        <div className='w-[60%] h-full flex justify-center items-center'>
                            <div className='w-full h-full'>
                                <h2 className='text-[40px] font-extrabold text-center'>Let’s Create Something Beautiful Together</h2>
                                <p className='text-foreground/40 pt-3 sm:text-base text-sm capitalize'>Have a project in mind, or just want to say hi? I’d love to hear from you.
                                </p>
                                <Button className='bg-[#393939] px-7 py-4 flex gap-3 text-white text-center'>
                                    Say Hello <Image src='/images/arrow-icon.png' alt='image' height={26} width={10} className='' />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactPage
