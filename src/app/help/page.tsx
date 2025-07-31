import Image from 'next/image'
import React from 'react'

const HelpPage = () => {
    return (
        <div className='w-full h-auto flex justify-center items-center lg:py-30 md:py-15 sm:py-10 py-5'>
            <div className='xl:w-[60%] lg:w-[75%] md:w-[90%] w-full flex-col gap-10 h-full flex justify-center items-center'>
                <h2 className='text-3xl font-extrabold text-center'>How I Can Help</h2>

                <div className='w-full h-auto flex flex-col'>
                    {/* 1 */}
                    <div className='flex w-full h-auto border-b border-primary/20'>
                        <div className='w-[30%] flex flex-col gap-3 justify-start items-center h-[124px] p-3'>
                            <p className='text-4xl text-primary/40'>
                                🖥️ <br /> UI/UX Design
                            </p>
                        </div>
                        <div className='w-[40%] flex flex-col gap-3 justify-center text-center items-center h-[124px] p-3'>
                            <p className='text-lg text-primary/40'>
                                Beautiful interfaces that feel effortless to use.
                            </p>
                        </div>
                        <div className='w-[30%] flex flex-col gap-3 justify-end items-center h-[124px] p-3'>
                            <p className='text-4xl text-primary/40'>
                                <Image src='/images/figma-icon.png' alt='image' height={40} width={40} />
                                <Image src='/images/xd-icon.png' alt='image' height={40} width={40} />
                            </p>
                        </div>
                    </div>
                    {/* 2 */}
                    <div className='flex w-full h-auto'>
                        <div className='w-[30%] flex flex-col gap-3 justify-start items-center h-[124px] p-3'>
                            <p className='text-4xl text-primary/40'>
                                🎨
                                Brand Identity
                            </p>
                        </div>
                        <div className='w-[40%] flex flex-col gap-3 justify-center text-center items-center h-[124px] p-3'>
                            <p className='text-lg text-primary/40'>
                                From logos to brand guidelines — your story, uniquely told.
                            </p>
                        </div>
                        <div className='w-[30%] flex flex-col gap-3 justify-end items-center h-[124px] p-3'>
                            <p className='text-4xl text-primary/40'>
                                <Image src='/images/adobe-icon.png' alt='image' height={40} width={40} />
                                <Image src='/images/photoshop-icon.png' alt='image' height={40} width={40} />
                            </p>
                        </div>
                    </div>
                    <div className='flex w-full h-auto border-t border-primary/20'>
                        <div className='w-[30%] flex flex-col gap-3 justify-start items-center h-[124px] p-3'>
                            <p className='text-4xl text-primary/40'>
                                📱 <br />
                                Mobile Design
                            </p>
                        </div>
                        <div className='w-[40%] flex flex-col gap-3 justify-center text-center items-center h-[124px] p-3'>
                            <p className='text-lg text-primary/40'>
                                Intuitive mobile-first experiences that engage and convert.
                            </p>
                        </div>
                        <div className='w-[30%] flex flex-col gap-3 justify-end items-center h-[124px] p-3'>
                            <p className='text-4xl text-primary/40'>
                                <Image src='/images/figma-icon.png' alt='image' height={40} width={40} />
                                <Image src='/images/xd-icon.png' alt='image' height={40} width={40} />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HelpPage
