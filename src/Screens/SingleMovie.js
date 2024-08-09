import React from 'react'
import Layout from '../Layout/Layout'
import { useParams } from 'react-router-dom'
import { MoviesData } from '../Data/MovieData'
import MovieInfo from '../Components/Single/MovieInfo'
import MovieCasts from '../Components/Single/MovieCasts'
import MovieRates from '../Components/Single/MovieRates'

const SingleMovie = () => {
    const {id} = useParams()
    const movie = MoviesData.find((movie) => movie.name === id)
  return (
    <Layout>
        <MovieInfo movie={movie} />
        <div className='container mx-auto min-h-screen px-2 my-6'>
          < MovieCasts />
          < MovieRates movie={movie} />
        </div>
    </Layout>
  )
}

export default SingleMovie