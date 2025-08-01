import Image from 'next/image'
import React from 'react'

const AboutPage = () => {
    return (
        <div className='w-full h-auto flex justify-center items-center lg:py-30 md:py-15 sm:py-10 py-5 max-sm:px-3'>
            <div className='lg:w-[85%] md:w-[95%] w-full h-full flex justify-center items-center'>
                <div className='xl:w-[856px] lg:w-[800px] md:w-[750px] sm:w-full w-[350px] sm:h-[362px] flex justify-center items-center md:p-6 p-4 rounded-[20px] bg-[#F5F5F5]'>
                    <div className='w-full h-full sm:flex-row flex-col flex gap-6'>
                        {/* Left side */}
                        <div className='md:w-[40%] w-full h-full flex justify-center items-center'>
                            <div className='w-full h-full flex flex-col gap-3 justify-center items-center'>
                                {/* Bussiness Card */}
                                <div className='w-full h-[130px] relative flex justify-end items-end p-3 rounded-[20px] bg-white'>
                                    <h2 className='lg:text-3xl md:text-2xl text-xl font-extrabold lg:max-w-[130px] md:max-w-[110px] max-w-[90px]'>Aria Bennett</h2>
                                    <div className='md:w-[150px] md:h-[150px] w-[120px] h-[120px] absolute md:left-2 left-0 md:-top-10 top-0'>
                                        <Image src='/images/profile-image.png' alt='image' height={150} width={150} className='w-full h-full' />
                                    </div>
                                </div>

                                {/* highlights */}
                                <div className='flex gap-3 w-full h-[130px]'>
                                    <div className='w-[50%] h-full bg-[#EBEFAD] rounded-[20px] p-2'>
                                        <p className='text-[#9EA715] font-bold md:text-lg text-base'>
                                            🧐👀 <br />
                                            Let’s bring your next vision to life.
                                        </p>
                                    </div>
                                    <div className='w-[50%] h-full bg-[#D9F9FF] rounded-[20px] p-2'>
                                        <p className='text-[#3CDFFF] font-bold md:text-lg text-base'>
                                            🤩💀 <br />
                                            Crafting digital experiences
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Right side */}
                        <div className='md:w-[60%] w-full h-full flex justify-center items-center'>
                            <div className='w-full h-full'>
                                <h2 className='lg:text-[40px] md:text-4xl text-3xl font-extrabold '>More Than Just a <br /> Designer</h2>
                                <p className='text-foreground/40 pt-3 sm:text-base text-sm'>Hi, I’m <span className='font-bold'>Aria Bennett</span> — a designer based in Austin, TX with a passion for meaningful visuals and clean interfaces. I blend strategy with storytelling to build elegant, intuitive, and inclusive designs.
                                    When I’m not designing, you’ll find me with a matcha latte sketching ideas in my journal, capturing moments on my film camera, or curating playlists on Spotify.
                                    </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage
