import React, { useContext } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { register } from 'swiper/element/bundle';
import FlexMovieItem from '../FlexMovieItem';
import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import { MovieContext } from '../Context/MovieContext';
register();
const Banner = () => {
    const [isHovered, setIsHovered] = React.useState(false);
    const { MoviesData } = useContext(MovieContext);
  return (
    <div className='relative w-full pt-1 mb-6'>
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
            MoviesData.slice(0, 13).map((movie, index) => (
                <SwiperSlide 
                    key={index} 
                    className='relative rounded overflow-hidden'
                    >
                    <img 
                        src={`/images/movies/${movie.image}`} 
                        alt={movie.name} 
                        className='w-full h-full object-cover' 
                    />
                    <div className='absolute linear-bg xl:pl-52 sm:pl-32 pl-8 top-0 bottom-0 right-0 left-0 flex opacity-75 flex-col justify-center lg:gap-4 md:gap-5 gap-4'>
                        <h1 className='xl:text-4xl truncate capitalize font-sans sm:text-2xl text-xl font-bold'>
                            {movie.name}
                        </h1>
                        <div className='flex gap-4 items-center text-dryGray'>
                            <FlexMovieItem movie={movie} />
                        </div>
                        <div className='flex gap-2 items-center'>
                            <Link to={`/movie/${movie.name}`} className='bg-subMain hover:text-main transitions text-white px-8 py-3 rounded font-medium sm:text-sm text-xs'>
                            Watch Now
                            </Link>
                            <button className={`hover:text-subMain transitions bg-dryGray/20 py-2.5 px-5 rounded text-md bg-opacity-30 relative`}
                            onMouseEnter = {() => setIsHovered(true)} 
                            onMouseLeave = {() => setIsHovered(false)}
                            >
                                <FaHeart className='z-50 w-6 h-6'/>
                            </button>
                            <span className= {`${isHovered ? ' bg-none text-dryGray text-xs ' : 'hidden'}   `} >
                                Add to favorites
                            </span>
                        </div>
                    </div>
                </SwiperSlide>
            )
        )
        }
        </Swiper>
    </div>
  )
}

export default Banner