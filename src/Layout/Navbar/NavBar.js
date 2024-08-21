import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaHeart, FaSearch } from 'react-icons/fa'
import { CgUser} from 'react-icons/cg'
const NavBar = () => {
    const hover = "hover:text-subMain transition text-white"
    const Hover = ({isActive}) => (isActive ? 'text-subMain' : hover )
  return (
    <>
    <div className='bg-dry shadow-md sticky top-0 z-50 w-full'>
        <div className='container mx-auto py-6 px-2 lg:grid gap-4 grid-cols-7 justify-between items-center'>
            <div className='col-span-1 lg:block hidden'>
                <Link to="/">
                    <img src="/images/logo3.png" alt='logo' className='w-full h-10 object-contain' />
                </Link>
            </div>
            {/* Search form movie */}
            <div className='col-span-3'>
                <form className='w-full text-sm bg-dryGray rounded flex-btn gap-2'>
                    <button type='submit' className='bg-subMain w-12 flex-colo h-12 text-white py-2 rounded'>
                        <FaSearch />
                    </button>
                    <input type='text' placeholder='Search Movie name from here'
                    className='font-medium placeholder:text-border w-11/12 text-sm h-12 bg-transparent border-none text-black' />
                </form>
            </div>
            {/* menu */}
            <div className='col-span-3 font-medium text-sm hidden xl:gap-10 lg:flex lg:justify-end items-end'>
                <NavLink to="/movies" className={Hover}>
                    Movies
                </NavLink>
                <NavLink to="/about-us" className={Hover}>
                    About Us
                </NavLink>
                <NavLink to="/contact-us" className={Hover}>
                    Contact Us
                </NavLink>
                <NavLink to="/login" className={Hover}>
                    <CgUser className='w-7 h-7' />
                </NavLink>
                <NavLink to="/favorite" className={`${Hover} relative`}>
                    <FaHeart className='w-5 h-5'/>  
                    <div className='w-5 h-5 flex-colo rounded-full text-xs bg-subMain text-white absolute -top-5 -right-1'>
                        3
                    </div>
                </NavLink>
            </div>
        </div>
    </div>
    </>
  )
}

export default NavBar