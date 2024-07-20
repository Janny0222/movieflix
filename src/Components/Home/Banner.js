import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { MoviesData } from '../../Data/MovieData';
import { register } from 'swiper/element/bundle';
register();
const Banner = () => {
    
  return (
    <div className='relative w-full'>
        <Swiper
            direction='horizontal'
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            speed={1000}
            modules={'autoplay'}
            autoplay={{delay: 4000, disableOnInteraction: false}}
            className='w-full xl:h-[400px] bg-dry lg:h-72 h-56'
        >
        {
            MoviesData.slice(0, 11).map((movie, index) => (
                <SwiperSlide key={index} className='relative rounded overflow-hidden'>
                    <img 
                    src={`/images/movies/${movie.image}`} 
                    alt={movie.name} 
                    className='w-full h-full object-cover' />
                    <div className='absolute linear-bg xl:pl-52 sm:pl-32 pl-8 top-0 bottom-0 right-0 left-0 flex flex-col justify-center lg:gap-8 md:gap-5 gap-4'>
                        <h1 className='xl:text-4xl truncate capitalize font-sans sm:text-2xl text-xl font-bold'>{movie.name}</h1>
                    </div>
                </SwiperSlide>
            ))
        }
        </Swiper>
    </div>
  )
}

export default Banner