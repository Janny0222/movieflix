import React from 'react'
import Titles from '../Titles'
import { BsCollectionFill } from 'react-icons/bs'
import { MoviesData } from '../../Data/MovieData'
import Movie from '../Movie'

const PopularTvSeries = () => {
  const selectedMovie = MoviesData.filter(movie => movie.type === 'tv-series')
  return (
    <div className=''>
      <Titles title="Popular TV Series" Icon={BsCollectionFill} />
      <div className='grid mt-2 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 mb-6'>
        {
          selectedMovie.map((movie, index) => (
            <Movie key={index} movie={movie} />
          ))
        }
      </div>
    </div>
  )
}

export default PopularTvSeries