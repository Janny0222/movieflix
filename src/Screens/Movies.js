import React, { useContext, useState } from 'react'
import Layout from '../Layout/Layout'
import Filters from '../Components/Filters'
// import { MoviesData } from '../Data/MovieData'
import Movie from '../Components/Movie'
import { CgSpinner } from 'react-icons/cg'
import { MovieContext } from '../Components/Context/MovieContext'

const MoviesPage = () => {
    const {MoviesData, page, handleNavPage} = useContext(MovieContext)
   
  return (
    <Layout>
        
        <div className='min-height-screen container mx-auto px-2 my-6'>
            <Filters />
            <p className='text-lg font-medium my-6'>
                Total <span className='font-bold text-subMain'>{MoviesData.length} </span> {' '} item/s found 
            </p>
            <div className='grid sm:mt-10 mt-6 xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 gap-6'>
                {
                    MoviesData.slice(0, page)?.map((movie, index) => (
                        <Movie key={index} movie={movie} />
                    ))
                }
                
            </div>
                <div className='w-full flex-colo md:my-20 my-10'>
                    <button onClick={handleNavPage} className='flex-rows gap-3 text-white py-3 px-8 rounded font-semibold border-2 border-subMain'>
                        Load More <CgSpinner className='animate-spin' />
                    </button>
                </div>
        </div>
    </Layout>
  )
}

export default MoviesPage