import Image from 'next/image'
import React from 'react'

const AboutPage = () => {
    return (
        <div className='w-full h-auto flex justify-center items-center lg:py-30 md:py-15 sm:py-10 py-5'>
            <div className='lg:w-[85%] md:w-[95%] w-full h-full flex justify-center items-center'>
                <div className='xl:w-[856px] lg:w-[800px] md:w-[750px] h-[362px] flex justify-center items-center p-6 rounded-[20px] bg-[#F5F5F5]'>
                    <div className='w-full h-full flex gap-6'>
                        {/* Left side */}
                        <div className='w-[40%] h-full flex justify-center items-center'>4
                            <div className='w-full h-full flex flex-col gap-3 justify-center items-center'>
                                {/* Bussiness Card */}
                                <div className='w-full h-[130px] relative flex justify-end items-end p-3'>
                                    <h2 className='text-3xl font-extrabold text-center'>{`Aria Bennett`}</h2>
                                    <div className='w-[150px] h-[150px] absolute left-2 -top-10'>
                                        <Image src='/images/profile-image.png' alt='image' height={150} width={150} className='w-full h-full' />
                                    </div>
                                </div>

                                {/* highlights */}
                                <div className='flex gap-3 w-full h-[130px]'>
                                    <div className='w-[50%] h-full bg-[#EBEFAD] rounded-[20px] p-2'>
                                        <p className='text-[#9EA715] font-bold text-lg leading-10'>
                                            🧐👀 <br />
                                            Let’s bring your next vision to life.
                                        </p>
                                    </div>
                                    <div className='w-[50%] h-full bg-[#D9F9FF] rounded-[20px] p-2'>
                                        <p className='text-[#3CDFFF] font-bold text-lg leading-10'>
                                            🤩💀 <br />
                                            Crafting digital experiences
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Right side */}
                        <div className='w-[60%] h-full flex justify-center items-center'>
                            <div className='w-full h-full'>
                                <h2 className='text-[40px] font-extrabold text-center'>More Than Just a Designer</h2>
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
