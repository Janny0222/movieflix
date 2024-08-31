import React from 'react'
import SideBar from './SideBar'
import { Input } from '../../Components/UsedInput'

const Password = () => {
  return (
    <SideBar>
        <div className='flex flex-col gap-6'>
                <h2 className='text-xl font-bold'>
                    Change Password
                </h2>
                <Input label="Previous Password" placeholder="********" type="password" bg={true} />
                <Input label="New Password" placeholder="********" type="password" bg={true} />
                <Input label="Confirm Password" placeholder="********" type="password" bg={true} />
                <div className='flex justify-end items-center'>
                    <button className='bg-subMain font-medium transitions hover:bg-main border border-subMain text-white py-3 px-6 rounded w-full sm:w-auto'>
                        Update Password
                    </button>
                </div>
            </div>
    </SideBar>
  )
}

export default Password