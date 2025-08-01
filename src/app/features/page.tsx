'use client'
import FeatureCarousel from '@/components/FeatureCarousel'
import React from 'react'

const FeaturesPage = () => {
   
    return (
        <div className='w-full h-auto flex justify-center items-center lg:py-30 md:py-15 sm:py-10 py-5'>
            <div className='w-full flex-col gap-10 h-full flex justify-center items-center'>
                <div className='head '>
                    <h2 className='text-3xl font-extrabold text-center'>Featured Work</h2>
                    <p className='capitalize text-3xl text-primary/80 text-center leading-12 max-w-sm py-3'>Here are some projects I’ve loved crafting:</p>
                </div>

                <div className='w-auto h-auto min-h-[300px] flex'>
                   <FeatureCarousel/>
                </div>
            </div>
        </div>
    )
}

export default FeaturesPage
