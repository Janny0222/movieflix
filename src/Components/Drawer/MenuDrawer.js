import React from 'react'
import MainDrawer from './MainDrawer'
import { Link, NavLink } from 'react-router-dom'
import { IoClose } from 'react-icons/io5'
import { BsCollectionPlay } from 'react-icons/bs'
import { HiOutlineUserGroup } from 'react-icons/hi'
import { BiPhoneCall } from 'react-icons/bi'
import { FaFacebook, FaGithub, FaTwitter, FaYoutube } from 'react-icons/fa'

const MenuDrawer = ({drawerOpen, toggleDrawer}) => {
    const active = "bg-dryGray text-subMain"
    const hover = "hover:bg-dry"
    const inActive = "rounded sm:gap-10 font-medium text-sm transitions flex gap-3 items-center sm:px-8 px-4 py-4 items-center"
    const Hover = ({ isActive}) => 
        isActive ? `${active} ${inActive}` : `${inActive} ${hover}`
    const Links = [
        {
            name: "Movies",
            link: "/movies",
            icon: BsCollectionPlay
        },
        {
            name: "About us",
            link: "/about-us",
            icon: HiOutlineUserGroup
        },
        {
            name: "Contact us",
            link: "/contact-us",
            icon: BiPhoneCall
        },
    ]
    
    const LinkDatas = [
        {
            icon: FaFacebook,
            link: "https://www.facebook.com/"
        },
        {
            icon: FaTwitter,
            link: "https://www.twitter.com/"
        },
        {
            icon: FaYoutube,
            link: "https://www.youtube.com/"
        },
        {
            icon: FaGithub,
            link: "https://www.github.com/Janny0222"
        },
    ]
    


  return (
    <MainDrawer drawerOpen={drawerOpen} closeDrawer={toggleDrawer}>
        <div className='flex flex-col w-full h-full justify-between items-center bg-main text-white rounded'>
            <div className='w-full flex-btn h-16 px-6 py-4 bg-dry'>
                <h2 className='font-semibold text-lg m-0 flex items-center' >
                    <Link onClick={toggleDrawer} to="/" >
                        <img src='/images/logo3.png' alt='logo' className='w-28 h-28 object-contain' />
                    </Link>
                    
                </h2>
                <button onClick={toggleDrawer} type='button' className='items-center w-9 h-9 flex-colo text-xl transitions  font-extrabold text-white bg-subMain border border-border rounded-full hover:bg-dry'>
                        <IoClose />
                    </button>
            </div>
            {/* Links */}
            <div className='w-full overflow-y-scroll flex-grow max-h-full'>
                <div className='pb-12 pt-4'>
                {
                    Links.map((link, i) => (
                        <NavLink to={link.link} key={i} onClick={toggleDrawer} className={Hover}>
                            <link.icon className='text-lg mr-5' /> {link.name}
                        </NavLink>
                    ))
                }
                </div>
                <div className='flex-rows gap-6 w-full'>
                {
                    LinkDatas.map((link, i) => (
                    <a href={link.link} key={i} target='_blank' rel='noreferrer' className='flex-colo w-12 h-12 transitions hover:bg-subMain text-lg bg-dryGray rounded bg-opacity-30 '> 
                    <link.icon className='text-white' />
                    </a>    
                    ))    
                }
            </div>
            </div>
           
        </div>
    </MainDrawer>
  )
}

export default MenuDrawer