import React from 'react'
import MainModal from './MainModal'
import { Input } from '../UsedInput'
import { HiPlusCircle } from 'react-icons/hi'
import { IoClose } from 'react-icons/io5'
import Uploader from '../Uploader'

const CastsModal = ({modalOpen, setModalOpen, cast}) => {
  
 
  return (
    <MainModal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <div className='inline-block transitions inset-0 sm:w-4/5 border border-border shadow-xl rounded-2xl md:w-3/5 lg:w-2/5 w-full align-middle p-10 transform  h-full bg-main text-white'>
            <h2 className='text-3xl font-bold'>{cast ? "Update Cast" : "Create Cast"}</h2>
            <form className='flex flex-col gap-6 text-left mt-6'>
            <Input label="Cast Name" placeholder={cast ? cast.fullName : "Cast Name"} type="text" bg={false} />
            <div className='flex flex-col gap-2'>
                <p className='text-border font-semibold text-sm'>
                    Cast Image
                </p>
                <Uploader />
                <div className='w-32 h-32 bg-main border border-border rounded'>
                    <img src={`/images/users/${cast ? cast.image : "user.png"}`} alt={cast?.fullName} className='w-full h-full object-cover rounded' />
                </div>
            </div>
            <button onClick={() => setModalOpen(false)} className='w-full flex-rows gap-3 py-3 text-lg transitions border-2 border-subMain hover:bg-dry rounded bg-subMain text-white'> 
              <HiPlusCircle /> {cast ? "Update Cast" : "Add Cast"}
            </button>
            <div className='absolute right-4 top-4'>
                    <button onClick={() => setModalOpen(false)} type='button' className='items-center w-9 h-9 flex-colo text-xl transitions  font-extrabold text-white bg-subMain border border-border rounded-full hover:bg-dry'>
                        <IoClose />
                    </button>
            </div>
            </form>
        </div>
    </MainModal>
  )
}

export default CastsModal