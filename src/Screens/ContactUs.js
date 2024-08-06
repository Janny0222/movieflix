import React from 'react'
import Layout from '../Layout/Layout'
import { Head } from '../Components/Head'
import { FiMail, FiMapPin, FiPhoneCall } from 'react-icons/fi'

const ContactUs = () => {
    const ContactData = [
        {
            id: 1,
            title: 'Email Us',
            info: 'Send us an email and we will get back to you',
            icon: FiMail,
            contact: 'movieflix@gmail.com'
        },
        {
            id: 2,
            title: 'Call Us',
            info: 'Call us for any questions or support',
            icon: FiPhoneCall,
            contact: '+63 912 345 6789'
        },
        {
            id: 3,
            title: 'Location',
            info: 'You may find our location here',
            icon: FiMapPin,
            contact: 'Valenzuela, Philippines'
        }
    ]
  return (
    <Layout >
      <div className='min-height-screen container mx-auto px-2 py-6'>
        <Head title="Contact Us" />
        <div className='grid md:grid-cols-2 gap-6 lg:my-20 mt-10 lg:grid-cols-3 xl:gap-8'>
          {
            ContactData.map((contact) => (
                <div key={contact.id} className='border border-border flex-colo p-10 bg-dry rounded-lg text-center'>
                    <span className='flex-colo w-20 h-20 mb-4 rounded-full bg-main text-subMain text-2xl'>
                        <contact.icon />
                    </span>
                    <h5 className='text-xl font-semibold mb-2'>
                        {contact.title}
                    </h5>
                    <p className='mb-0 text-text font-semibold leading-7 text-sm'>
                      <a href={`mailto:{contact.contact}`} className='text-blue-600'>
                        {contact.contact}
                      </a>
                    </p>
                    <p className='mb-0 text-text leading-7 text-sm'>
                        {contact.info}
                    </p>
                </div>
            ))
          }
        </div>
      </div>
    </Layout>
  )
}

export default ContactUs