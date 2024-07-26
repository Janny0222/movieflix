import React from 'react'
import Layout from '../Layout/Layout'
import Banner from '../Components/Home/Banner'
import PopularMovies from '../Components/Home/PopularMovies'
import TopRated from '../Components/Home/TopRated'
import Promos from '../Components/Home/Promos'
// import PopularTvSeries from '../Components/Home/PopularTvSeries'

const HomeScreen = () => {
  return (
    <Layout>
      <div className='container mx-auto min-h-screen px-2 mb-4'>
        <Banner />
        <PopularMovies />
        {/* <PopularTvSeries /> */}
        <Promos />
        <TopRated />
      </div>
    </Layout>
  )
}

export default HomeScreen