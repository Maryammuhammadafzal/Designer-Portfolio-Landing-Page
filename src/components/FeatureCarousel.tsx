"use client"
import Image from 'next/image';
import { Button } from './ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const FeatureCarousel = () => {

    const carousel_data = [
        {
            image: '/images/card-image-1.jpg',
            title: 'Bloom App',
            subTitle: 'Wellness App UI/UX',
            description: 'A calm and intuitive mobile app that helps women track habits, mood, and self-care goals.',
            bgColour: '#D7BDB180',
            colour: '#A96443',
        },
        {
            image: '/images/card-image-2.jpg',
            title: 'Bloom App',
            subTitle: 'Wellness App UI/UX',
            description: 'A calm and intuitive mobile app that helps women track habits, mood, and self-care goals.',
            bgColour: '#D2C7F266',
            colour: '#1301BD',
        },
        {
            image: '/images/card-image-3.jpg',
            title: 'Bloom App',
            subTitle: 'Wellness App UI/UX',
            description: 'A calm and intuitive mobile app that helps women track habits, mood, and self-care goals.',
            bgColour: '#F7C5C680',
            colour: '#FF8183',
        },

    ]
    return (
        <Carousel
            // plugins={[
            //     Autoplay({
            //         delay: 2000,
            //         stopOnInteraction: false,
            //     }),
            // ]} 
            className='w-full max-h-[450px] flex'>
            <CarouselContent className="w-full">
                {
                    carousel_data.map((data, index) => (
                        <CarouselItem key={index} className={`max-w-[700px] max-h-[360px] min-w-[700px] ml-4 min-h-[360px] bg-[${data.bgColour}] flex-row flex rounded-[20px]`}>

                            <div className='w-full h-full flex justify-between flex-row'>
                                {/* Left side */}
                                <div className='w-[45%] h-full flex justify-center items-center'>
                                    <div className='w-full h-full flex flex-col gap-4 justify-center'>
                                        <div className='w-full flex flex-col'>
                                            <h2 className={`text-[40px] font-extrabold leading-12 text-[${data.colour}]`}>{data.title}</h2>
                                            <p className='text-sm'>Wellness App UI/UX</p>
                                        </div>
                                        <p className='text-foreground/40 pt-3 sm:text-base text-sm capitalize'>A calm and intuitive mobile app that helps women track habits, mood, and self-care goals.
                                        </p>
                                        <div>
                                            <Button className={`bg-[${data.colour}] mt-6 rounded-4xl px-7 py-5 flex gap-3 text-white text-center`}>
                                                Say live <Image src='/images/arrow-icon.png' alt='image' height={26} width={10} className='w-[26px]' />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                                {/* Right side */}
                                <div className='w-[54%] h-full flex justify-center items-center'>

                                    <Image src={data.image} alt='image' height={124} width={41} className='w-full h-full rounded-[20px] object-cover' />

                                </div>
                            </div>

                        </CarouselItem>

                    ))
                }
                <CarouselNext />
                <CarouselPrevious />
            </CarouselContent>
        </Carousel>
    )
}

export default FeatureCarousel