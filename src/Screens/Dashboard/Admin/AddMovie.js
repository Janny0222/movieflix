import React, { useEffect, useState } from 'react'
import SideBar from '../SideBar'
import { Input, Message, Select } from '../../../Components/UsedInput'
import Uploader from '../../../Components/Uploader'
import { CategoriesData } from '../../../Data/CategoriesData'
import { UserData } from '../../../Data/MovieData'
import { MdDelete } from 'react-icons/md'
import { FaEdit } from 'react-icons/fa'
import { ImUpload } from 'react-icons/im'
import CastsModal from '../../../Components/Modals/CastsModal'

const AddMovie = () => {
    const[modalOpen, setModalOpen] = useState(false)
    const[casts, setCasts] = useState(null)

    const OnEditFunction = (user) => {
        setCasts(user);
        setModalOpen(!modalOpen);
    }

    useEffect (() => {
        
        if(!modalOpen) {
            setCasts()
        }
    }, [modalOpen])
  return (
    <SideBar>
        <CastsModal modalOpen={modalOpen} setModalOpen={setModalOpen} cast={casts} />
        <div className='flex flex-col gap-6'>
                <h2 className='text-xl font-bold'>
                    CREATE MOVIE
                </h2>
                {/* Movie Details */}
                <div className='w-full grid md:grid-cols-2 gap-6'>  
                    <Input label="Movie Title" placeholder="Game of Thrones" type="text" bg={true} />
                    <Input label="Hours" placeholder="1hr" type="text" bg={true} />
                </div>
                <div className='w-full grid md:grid-cols-2 gap-6'>  
                    <Input label="Language Used" placeholder="English" type="text" bg={true} />
                    <Input label="Year of Release" placeholder="2018" type="number" bg={true} />
                </div>
                <div className='w-full grid md:grid-cols-2 gap-6'>
                    {/* Without image */}
                    <div className='flex flex-col gap-2'>
                        <p className='text-border font-semibold text-sm'>
                            Image without Title
                        </p>
                        <Uploader />
                        <div className='w-32 h-32 bg-main border border-border rounded'>
                            <img src="/images/movies/99.jpg" alt="" className='w-full h-full object-cover rounded' />
                        </div>
                    </div>
                    {/* With image */}
                    <div className='flex flex-col gap-2'>
                        <p className='text-border font-semibold text-sm'>
                            Image with Title
                        </p>
                        <Uploader />
                        <div className='w-32 h-32 bg-main border border-border rounded'>
                            <img src="/images/movies/88.jpg" alt="" className='w-full h-full object-cover rounded' />
                        </div>
                    </div>
                </div>
                {/* Description */}
                <Message label="Movie Description" placeholder="Make it short and sweet" />
                {/* Category */}
                <div className='text-sm w-full'>
                    <Select label="Movie Category" options={CategoriesData} />
                </div>
                {/* Movie */}
                <div className='flex flex-col gap-2 w-full'>
                        <label className='text-border font-semibold text-sm'> Movie Video</label>
                        <Uploader />
                </div>
                {/* Add Cast */}
                <div className='w-ful grid lg:grid-cols-2 gap-6 items-start'>
                    <button onClick={() => setModalOpen(!modalOpen)} className='w-full py-4 bg-main border border-subMain border-dashed text-white rounded'>
                        Add Cast
                    </button>
                    <div className='grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-4 grid-cols-2 gap-4'>
                        {
                            UserData.map((user, index) => (
                                <div className='p-2 italic text-xs text-text flex-colo bg-main border border-border rounded' key={index}>
                                    <img src={`/images/users/${user.image ? user.image : "user.png"}`} alt={user.fullName} className='w-full h-24 object-cover rounded mb-2' />
                                    <p>{user.fullName}</p>
                                    <div className='flex-rows mt-2 w-full gap-2'>
                                        <button className='w-6 h-6 flex-colo bg-dry border border-border text-subMain rounded'>
                                            <MdDelete />
                                        </button>
                                        <button onClick={() => OnEditFunction(user)} className='w-6 h-6 flex-colo bg-dry border border-border text-green-600 rounded'>
                                            <FaEdit />
                                        </button>
                                    </div>
                                </div>
                            ))
                        }    
                    </div> 
                </div>
                    <button className='bg-subMain w-full flex-rows gap-6 font-medium text-white py-4 px-6 rounded'>
                        <ImUpload /> Publish Movie
                    </button>
            </div>
    </SideBar>
  )
}

export default AddMovie