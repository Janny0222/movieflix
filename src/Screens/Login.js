import React from 'react'
import Layout from '../Layout/Layout'
import { Input } from '../Components/UsedInput'
import { Link } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'
const Login = () => {
  return (
    <Layout>
        <div className='container mx-auto px-2 my-24 flex-colo'>
            <div className='w-full 2xl:w-2/5 gap-8 flex-colo p-14 md:w-3/5 bg-dry rounded-lg border border-border'>
                <img src='/images/logo3.png' alt='logo' className='w-full h-12 object-contain' />

                <Input label="Email" placeholder="movieflix@movie.com" type="email" bg={true} />

                <Input label="Password" placeholder="******" type="password" bg={true} />

                <Link to='/dashboard' className='bg-subMain transitions hover:bg-main flex-rows gap-4 text-white p-4 rounded-lg w-full'>
                    <FiLogIn /> Sign In
                </Link>
            </div>
        </div>
    </Layout>
  )
}

export default Login