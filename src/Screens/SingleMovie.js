import React, { useState } from 'react'
import Layout from '../Layout/Layout'
import { useParams } from 'react-router-dom'
import { MoviesData } from '../Data/MovieData'
import MovieInfo from '../Components/Single/MovieInfo'
import MovieCasts from '../Components/Single/MovieCasts'
import MovieRates from '../Components/Single/MovieRates'
import Titles from '../Components/Titles'
import { BsCollectionFill } from 'react-icons/bs'
import Movie from '../Components/Movie'
import ShareMovieModal from '../Components/Modals/ShareModal'

const SingleMovie = () => {
    const[modalOpen, setModalOpen] = useState(false)
    const {id} = useParams()
    const movie = MoviesData.find((movie) => movie.name === id)
    const RelatedMovies = MoviesData.filter((rm) => rm.category === movie.category)
  return (
    <Layout>
        <ShareMovieModal modalOpen={modalOpen} setModalOpen={setModalOpen} movie={movie} />
        <MovieInfo movie={movie} setModalOpen={setModalOpen} />
        <div className='container mx-auto min-h-screen px-2 my-6'>
          < MovieCasts />
          < MovieRates movie={movie} />
          <div className='my-16'>
            <Titles title="Related Movies" Icon={BsCollectionFill} />
            <div className='grid sm:mt-10 mt-6 xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 gap-6'>
                {
                    RelatedMovies.map((movie, index) => (
                        <Movie key={index} movie={movie} />
                    ))
                }
            </div>
          </div>
        </div>
    </Layout>
  )
}

export default SingleMovie