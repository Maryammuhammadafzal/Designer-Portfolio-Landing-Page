import Image from 'next/image'
import React from 'react'

const HelpPage = () => {
    return (
        <div className='w-full h-auto flex justify-center items-center lg:py-30 md:py-15 sm:py-10 py-5 max-sm:px-3'>
            <div className='xl:w-[60%] lg:w-[75%] md:w-[90%] w-full flex-col gap-30 h-full flex justify-center items-center'>
                <h2 className='text-3xl font-extrabold text-center'>How I Can Help</h2>

                <div className='w-full h-auto flex flex-col'>
                    {/* 1 */}
                    <div className='flex w-full h-auto border-b border-primary/20'>
                        <div className='w-[30%] border-r border-primary/20 flex flex-col gap-3 justify-start h-[124px] p-3'>
                            <p className='md:text-2xl text-xl w-full h-full flex items-end pb-3 text-primary/70'>
                                🖥️ <br /> UI/UX Design
                            </p>
                        </div>
                        <div className='w-[40%] flex flex-col gap-3 justify-center text-center items-center h-[124px] p-3'>
                            <p className='md:text-lg text-base text-primary/70 max-w-xs'>
                                Beautiful interfaces that feel effortless to use.
                            </p>
                        </div>
                        <div className='w-[30%] border-l border-primary/20 flex flex-col gap-3 justify-end items-center h-[124px] p-3'>
                            <p className='text-4xl text-primary/70 flex gap-3 justify-center items-center w-full h-full'>
                                <Image src='/images/figma-icon.png' alt='image' height={40} width={40} />
                                <Image src='/images/xd-icon.png' alt='image' height={40} width={40} />
                            </p>
                        </div>
                    </div>
                    {/* 2 */}
                    <div className='flex w-full h-auto'>
                        <div className='w-[30%] border-r border-primary/20 flex flex-col gap-3 justify-start items-center h-[124px] p-3'>
                            <p className='md:text-2xl text-xl w-full h-full flex items-end pb-3 text-primary/70'>
                                🎨 <br />
                                Brand Identity
                            </p>
                        </div>
                        <div className='w-[40%] flex flex-col gap-3 justify-center text-center items-center h-[124px] p-3'>
                            <p className='md:text-lg text-base text-primary/70 max-w-xs'>
                                From logos to brand guidelines — your story, uniquely told.
                            </p>
                        </div>
                        <div className='w-[30%] border-l border-primary/20 flex flex-col gap-3 justify-end items-center h-[124px] p-3'>
                            <p className='text-4xl text-primary/70 flex gap-3 justify-center items-center w-full h-full'>
                                <Image src='/images/adobe-icon.png' alt='image' height={40} width={40} />
                                <Image src='/images/photoshop-icon.png' alt='image' height={40} width={40} />
                            </p>
                        </div>
                    </div>
                    <div className='flex w-full h-auto border-t border-primary/20'>
                        <div className='w-[30%] border-r border-primary/20 flex flex-col gap-3 justify-start items-center h-[124px] p-3'>
                            <p className='md:text-2xl text-xl w-full h-full flex items-end pb-3 text-primary/70'>
                                📱 <br />
                                Mobile Design
                            </p>
                        </div>
                        <div className='w-[40%] flex flex-col gap-3 justify-center text-center items-center h-[124px] p-3'>
                            <p className='md:text-lg text-base text-primary/70 max-w-xs'>
                                Intuitive mobile-first experiences that engage and convert.
                            </p>
                        </div>
                        <div className='w-[30%] border-l border-primary/20 flex flex-col gap-3 justify-end items-center h-[124px] p-3'>
                            <p className='text-4xl text-primary/70 flex gap-3 justify-center items-center w-full h-full'>
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
