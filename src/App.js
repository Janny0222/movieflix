import React from 'react'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomeScreen from './Screens/HomeScreen'
import AboutUs from './Screens/AboutUs'
import ContactUs from './Screens/ContactUs'
import NotFound from './Screens/NotFound'
import Movies from './Screens/Movies'
import SingleMovie from './Screens/SingleMovie'
import MovieProvider from './Components/Context/MovieContext'


const App = () => {

  return (
      <MovieProvider>
        <Routes>
          <Route path='/' element={<HomeScreen />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/contact-us' element={<ContactUs />} />

          <Route path='/movies' element={<Movies />} />
          
          <Route path='/movie/:id' element={<SingleMovie />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </MovieProvider>
  
  )
}

export default App