import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeScreen from './Screens/HomeScreen'
import AboutUs from './Screens/AboutUs'
import ContactUs from './Screens/ContactUs'
import NotFound from './Screens/NotFound'
import Movies from './Screens/Movies'
import SingleMovie from './Screens/SingleMovie'
import MovieProvider from './Components/Context/MovieContext'
import WatchPage from './Screens/WatchPage'
import Login from './Screens/Login'
import Register from './Screens/Register'
import Profile from './Screens/Dashboard/Profile'
import Aos from 'aos'
import Password from './Screens/Dashboard/Password'
import FavoriteMovie from './Screens/Dashboard/FavoriteMovie'
import MovieList from './Screens/Dashboard/Admin/MovieList'
import Dashboard from './Screens/Dashboard/Admin/Dashboard'
import Categories from './Screens/Dashboard/Admin/Categories'
import Users from './Screens/Dashboard/Admin/Users'
import AddMovie from './Screens/Dashboard/Admin/AddMovie'
import ScrollOnTop from './ScrollOnTop'
import  DrawerContext  from './Context/DrawerContext'
import 'rc-drawer/assets/index.css';

const App = () => {
  Aos.init()
  return (
    <DrawerContext>
      <MovieProvider>
        <ScrollOnTop>
        <Routes>
          {/* NavBar */}
          <Route path='/' element={<HomeScreen />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/contact-us' element={<ContactUs />} />
          {/* Movies */}
          <Route path='/movies' element={<Movies />} />
          <Route path='/movie/:id' element={<SingleMovie />} />
          <Route path='/watch/:id' element={<WatchPage />} />
          {/* User Form */}
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          {/* Pages */}
          <Route path='/profile' element={<Profile />} />
          <Route path='/changepassword' element={<Password />} />
          <Route path='/favorites' element={<FavoriteMovie />} />
          <Route path='/movielist' element={<MovieList />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/categories' element={<Categories />} />
          <Route path='/users' element={<Users />} />
          <Route path='/addmovie' element={<AddMovie />} />

          <Route path='*' element={<NotFound />} />
        </Routes>
        </ScrollOnTop>
      </MovieProvider>
    </DrawerContext>
  )
}

export default App