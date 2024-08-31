import React from 'react'
import { FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='flex-colo w-full gap-6 min-h-screen text-white bg-main lg:py-20 py-10 px-6'>
      <img className='w-full h-96 object-contain' src='/images/404.gif' alt='Not found' />
      <h1 className='lg:text-4xl font-bold relative'> Page Not Found</h1>
      <p className='font-medium text-border italic leading-6'>
        The page your are looking for doesn't exist. You may mistype the URL.
      </p>
      <Link to='/' className='bg-subMain transitions text-white flex-rows gap-2 font-medium py-3 hover:text-main px-4 rounded-md'>
        <FaHome/> Back Home
      </Link>
    </div>
  )
}

export default NotFound