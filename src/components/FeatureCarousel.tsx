"use client";
import dynamic from 'next/dynamic';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import { Button } from './ui/button';

const Slider = dynamic(() => import('react-slick'), { ssr: false });

const FeatureCarousel = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };
    return (
        <div className='w-full h-auto flex justify-center items-center'>
            <Slider {...settings} className='w-full'>
                {/* Card 1 */}
                <div className='w-[700px] h-[360px] bg-[#D2C7F266] flex gap-6'>

                    {/* Left side */}
                    <div className='w-[50%] h-full flex justify-center items-center'>
                        <div className='w-full h-full flex flex-col gap-4 justify-center'>
                            <div className='w-full flex flex-col'>
                                <h2 className='text-[40px] font-extrabold leading-12'>Bloom App</h2>
                                <p className='text-sm'>Wellness App UI/UX</p>
                            </div>
                            <p className='text-foreground/40 pt-3 sm:text-base text-sm capitalize'>A calm and intuitive mobile app that helps women track habits, mood, and self-care goals.
                            </p>
                            <div>
                                <Button className='bg-[#393939] rounded-4xl px-7 py-5 flex gap-3 text-white text-center'>
                                    Say live <Image src='/images/arrow-icon.png' alt='image' height={26} width={10} className='w-[26px]' />
                                </Button>
                            </div>
                        </div>
                    </div>
                    {/* Right side */}
                    <div className='w-[50%] h-full flex justify-center items-center'>

                        <Image src='/images/card-image1.png' alt='image' height={124} width={41} className='w-full h-full' />

                    </div>

                </div>
            </Slider>
        </div>
    )
}

export default FeatureCarousel
