import React from 'react'
import MainModal from './MainModal'
import { IoClose } from 'react-icons/io5'
import { FaFacebook, FaPinterest, FaTelegram, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import { EmailShareButton, FacebookShareButton, PinterestShareButton, TelegramShareButton, TwitterShareButton, WhatsappShareButton    } from 'react-share'
import { MdEmail } from 'react-icons/md'

const ShareMovieModal = ({modalOpen, setModalOpen, movie}) => {
  const shareData = [
    {
        icon: FaFacebook,
        shareButton: FacebookShareButton
    },
    {
        icon: FaTwitter,
        shareButton: TwitterShareButton
    },
    {
        icon: FaTelegram,
        shareButton: TelegramShareButton
    },
    {
        icon: FaWhatsapp,
        shareButton: WhatsappShareButton
    },
    {
        icon: FaPinterest,
        shareButton: PinterestShareButton
    },
    {
        icon: MdEmail,
        shareButton: EmailShareButton
    },
  ]

  const url = `${window.location.protocol}//${window.location.host}/movie/${movie?.name}`
 
  return (
    <MainModal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <div className='inline-block transitions inset-0 sm:w-4/5 border border-border shadow-xl rounded-2xl md:w-3/5 lg:w-2/5 w-full align-middle p-10 transform  h-full bg-main text-white'>
            <h2 className='text-3xl font-bold'>Share <span className='text-2xl font-bold'>"{movie?.name}"</span> </h2>
            <form className='flex-rows flex-wrap gap-6 mt-6'>
            {
                shareData.map((data, index) => (
                    <data.shareButton key={index} url={url} quote="MovieFlix | Free Watch Movies and Tv Series">
                        <div className='w-12 transitions hover:bg-subMain flex-colo text-lg h-12 bg-white rounded bg-opacity-30'>
                            <data.icon />
                        </div>
                    </data.shareButton>
                ))

            }
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

export default ShareMovieModal