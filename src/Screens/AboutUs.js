import React from 'react'
import Layout from '../Layout/Layout'
import { Head } from '../Components/Head'

const AboutUs = () => {
  return (
    <Layout >
      <div className='min-height-screen container mx-auto px-2 py-6'>
        <Head title="About Us" />
        <div className='xl:py-20 py-10 px-4'>
          <div className='grid grid-flow-row xl:grid-cols-2 gap-4 xl:gap-16 items-center'>
            <div >
              <h3 className='text-xl lg:text-3xl mb-4 font-semibold'>
                Welcome to MovieFlix
              </h3>
              <div className='mt-3 text-sm leading-8 text-text'>
                <p>
                At MovieFlix, we believe in bringing the magic of cinema to your fingertips. Our platform offers a wide range of movies, all available for free and in high-quality resolution. Whether you're a fan of action-packed blockbusters, heartwarming dramas, thrilling mysteries, or light-hearted comedies, we have something for everyone.
                Our mission is to provide an exceptional viewing experience without any cost. We understand the joy of watching movies in crystal-clear quality, which is why we ensure that all our content is available in high resolution. You can enjoy your favorite films just the way they were meant to be seen.
                Join our community of movie enthusiasts and dive into the world of cinema with MovieFlix. We're constantly updating our library to include the latest releases and timeless classics, so there's always something new to discover.
                Thank you for choosing MovieFlix, where quality entertainment is just a click away!
                </p>
              </div>
              <div className='grid md:grid-cols-2 gap-6 mt-8'>
                <div className='p-8 bg-dry rounded-lg'>
                  <span className='text-3xl block font-extrabold mt-4'>
                    10K
                  </span>
                  <h4 className='text-lg font-semibold my-2'>
                    Listed Movies
                  </h4>
                  <p className='mb-0 text-text leading-7 text-sm'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
                <div className='p-8 bg-dry rounded-lg'>
                  <span className='text-3xl block font-extrabold mt-4'>
                    8K
                  </span>
                  <h4 className='text-lg font-semibold my-2'>
                    Current Users
                  </h4>
                  <p className='mb-0 text-text leading-7 text-sm'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
            <div className='mt-10 lg:mt-0'>
              <img src="/images/about-us2.jpg" alt='about-us' className='w-full xl:block hidden h-header rounded-lg object-cover' />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AboutUs