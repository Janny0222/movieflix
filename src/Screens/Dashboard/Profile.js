import React from 'react'
import SideBar from './SideBar'
import Uploader from '../../Components/Uploader'
import { Input } from '../../Components/UsedInput'

const Profile = () => {
  return (
    
        <SideBar>
            <div className='flex flex-col gap-6'>
                <h2 className='text-xl font-bold'>
                    Profile
                </h2>
                <Uploader />
                <Input label="Full Name" placeholder="Enter your Full Name" type="text" bg={true} />
                <Input label="Email" placeholder="movieflix@movie.com" type="email" bg={true} />
                <div className='flex gap-2 flex-wrap fex-col-reverse sm:flex-row justify-between items-center'>
                    <button className='bg-subMain font-medium transitions hover:bg-main border border-subMain text-white py-3 px-6 rounded w-full sm:w-auto'>
                        Delete Account
                    </button>
                    <button className='bg-subMain font-medium transitions hover:bg-main border border-subMain text-white py-3 px-6 rounded w-full sm:w-auto'>
                        
                        Update Profile
                    </button>
                </div>
            </div>
        </SideBar>
    
  )
}

export default Profile