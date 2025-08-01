"use client";
import dynamic from 'next/dynamic';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import { Button } from './ui/button';

const Slider = dynamic(() => import('react-slick'), { ssr: false });

const FeatureCarousel = () => {

   const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1279,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

    const carousel_data = [
        {
            title: 'Bloom App',
            subTitle: 'Wellness App UI/UX',
            description: 'A calm and intuitive mobile app that helps women track habits, mood, and self-care goals.',
            bgColour: '#D2C7F266',
            colour: '#1301BD',
        },
        {
            title: 'Bloom App',
            subTitle: 'Wellness App UI/UX',
            description: 'A calm and intuitive mobile app that helps women track habits, mood, and self-care goals.',
            bgColour: '#D2C7F266',
            colour: '#1301BD',
        },
        {
            title: 'Bloom App',
            subTitle: 'Wellness App UI/UX',
            description: 'A calm and intuitive mobile app that helps women track habits, mood, and self-care goals.',
            bgColour: '#D2C7F266',
            colour: '#1301BD',
        },
        {
            title: 'Bloom App',
            subTitle: 'Wellness App UI/UX',
            description: 'A calm and intuitive mobile app that helps women track habits, mood, and self-care goals.',
            bgColour: '#D2C7F266',
            colour: '#1301BD',
        },
        {
            title: 'Bloom App',
            subTitle: 'Wellness App UI/UX',
            description: 'A calm and intuitive mobile app that helps women track habits, mood, and self-care goals.',
            bgColour: '#D2C7F266',
            colour: '#1301BD',
        },
        {
            title: 'Bloom App',
            subTitle: 'Wellness App UI/UX',
            description: 'A calm and intuitive mobile app that helps women track habits, mood, and self-care goals.',
            bgColour: '#D2C7F266',
            colour: '#1301BD',
        },
    ]
    return (
        <div className='w-full h-auto flex justify-center items-center'>
            <Slider {...settings} className='w-full max-h-[450px] flex'>
                {
                    carousel_data.map((data, index) => (
                        <div key={index} className={`w-[700px] ml-5 h-[360px] bg-[${data.bgColour}] flex-row flex rounded-[20px]`}>

                            <div className='w-full h-full flex flex-row'>
                                {/* Left side */}
                                <div className='w-[45%] h-full flex justify-center items-center'>
                                    <div className='w-full h-full flex flex-col gap-4 justify-center'>
                                        <div className='w-full flex flex-col'>
                                            <h2 className={`text-[40px] font-extrabold leading-12 text-[${data.colour}] `}>{data.title}</h2>
                                            <p className='text-sm'>{data.subTitle}</p>
                                        </div>
                                        <p className='text-foreground/40 pt-3 sm:text-base text-sm capitalize'>
                                            {data.description}
                                        </p>
                                        <div>
                                            <Button className={`bg-[${data.colour}] mt-6 rounded-4xl px-7 py-5 flex gap-3 text-white text-center`}>
                                                Say live <Image src='/images/arrow-icon.png' alt='image' height={26} width={10} className='w-[26px]' />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                                {/* Right side */}
                                <div className='w-[50%] h-full flex justify-center items-center'>

                                    <Image src='/images/card-image1.jpg' alt='image' height={124} width={41} className='w-full h-full' />

                                </div>
                            </div>

                        </div>
                    ))
                }
            </Slider>
        </div>
    )
}

export default FeatureCarousel
