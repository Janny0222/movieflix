import React from 'react'
import Titles from '../Titles'
import { FaUserFriends } from 'react-icons/fa'
import { Swiper, SwiperSlide} from 'swiper/react';
import { MoviesData, UserData } from '../../Data/MovieData';
import { useParams } from 'react-router-dom';
const MovieCasts = () => {
  const {id} = useParams()
    const movie = MoviesData.find((movie) => movie.name === id)
    console.log(movie)
  return (
    <div className='my-12'>
      <Titles title='Casts' Icon={FaUserFriends} />
      <div className='mt-10'>
        <Swiper autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }} 
        loop={true} 
        speed={1000} 
        modules={'autoplay'} 
        breakpoints={{
          0:{
            slidesPerView: 2,
            spaceBetween: 10
          },
          400: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          1024: {
            slidesPerView: 4,
          },
          1280: {
            slidesPerView: 5,
            spaceBetween: 30
          }
        }}>
          {
            UserData.map((user, i) => (
              <SwiperSlide key={i} >
                <div className='w-full p-3 italic text-text rounded flex-colo bg-dry border border-gray-800'>
                  <img src={`/images/movies/${movie.name}/${user.image}`} alt={user.fullName} className='w-full h-64 object-cover mb-2' />
                  <p>{user.fullName}</p>
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </div>
  )
}

export default MovieCasts