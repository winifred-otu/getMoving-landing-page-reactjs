import React, { useContext, useState } from 'react'
import { FaPhone, FaEnvelope, FaMap } from 'react-icons/fa'
import { HERO } from '../assets/assets'
import { FaInstagram, FaPinterest, FaLinkedin, FaFacebook } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { FaCheckCircle } from 'react-icons/fa'
import { toast } from 'react-toastify'
import { RentalContext } from '../Context/RentalContext'

const Contact = () => {
  const {navigate} = useContext(RentalContext)
  const [contact, setContact] = useState({fullname: '', email:"",
    colour:'', number:'', message:''
  })

  const handleContactChange = (e) => {
    const {name, value} = e.target;
    setContact({...contact, [name]:value})
  }
  const handleContactSubmit = (e) => {
    e.preventDefault();
    if(contact.fullname === '' || contact.email === '' || 
      contact.colour === '' || contact.number === '' || 
      contact.message === '') {
        toast.error('All fields must filled')
      } else{
        toast.success('Thank you for your message!', {
          autoClose:2000,
          hideProgressBar:false,
          onClose: () => {
            navigate(0)
          }
        })
      }
  }
  return (
    <section className='flex flex-col gap-5 text-gray-800'>
      <div>
        <div className='relative text-slate-100'>
          <img src={HERO.subHero4.src} alt={HERO.subHero4.alt}
            className='h-70 md:h-105 w-full' />
          <p className='absolute left-5 top-5 text-2xl md:text-5xl 
          flex gap-5 items-center md:items-start'>
            Contact Us
            <FaPhone size={15} className='motion-safe:animate-bounce'/>
          </p>
        </div>
      </div>

      <div className='xxs:px-10 xs:px-10 md:px-15 lg:px-20 xl:px-30
      flex flex-col gap-10'>
        <div className='flex flex-col md:flex-row justify-between gap-5'>
          <div className='bg-slate-100 flex flex-col md:flex-row 
          items-center text-center md:items-start md:text-start gap-2 
          p-2 w-full md:w-[30%] ring ring-gray-300 shadow-md'>
            <p className='h-7 w-7 rounded-full bg-blue-800 flex justify-center items-center
          text-slate-50'>
              <FaMap />
            </p>
            <div className='flex flex-col gap-1 text-blue-800 text-sm '>
              <p className='font-bold'>Our Address</p>
              <p className=''>444 Olodu Street, Ikeja, Lagos</p>
            </div>
          </div>

          <div className='bg-slate-100 flex flex-col md:flex-row 
          items-center text-center md:items-start md:text-start gap-2 
          p-2 w-full md:w-[30%] ring ring-gray-300 shadow-md'>
            <p className='h-7 w-7 rounded-full bg-blue-800 flex justify-center items-center
          text-slate-50'>
              <FaPhone style={{ transform: 'rotate(90deg)' }} />
            </p>
            <div className='flex flex-col gap-1 text-blue-800 text-sm'>
              <p className='font-bold'>Phone Number</p>
              <p>(234)-806-786-4567</p>
            </div>
          </div>

          <div className='bg-slate-100 flex flex-col md:flex-row 
          items-center text-center md:items-start md:text-start gap-2 
          p-2 w-full md:w-[30%] ring ring-gray-300 shadow-md'>
            <p className='h-7 w-7 rounded-full bg-blue-800 flex justify-center items-center
          text-slate-50'>
              <FaEnvelope />
            </p>
            <div className='flex flex-col gap-1 text-blue-800 text-sm'>
              <p className='font-bold'>Email Us</p>
              <p>hello@getmoving.com</p>
            </div>
          </div>
        </div>

        <div className=' grid md:grid-cols-2 mt-10 gap-10'>
          <div className='flex flex-col gap-3 text-center md:text-start'>
            <div className='flex flex-col gap-2'>
              <p className='text-gray-800 font-bold text-2xl'>
                Get in Touch
              </p>
              <p className='text-blue-800 text-5xl'>
                Have Any Questions?
              </p>
            </div>
            <div className=' flex flex-col gap-7 items-center md:items-start'>
              <p>getMoving customer service team are readily available to
                assist you with any questions you have. We reply within 24hrs.
                Feel free to drop us an email or call us and subscribe to our
                newsletter for latest updates and information.
              </p>
              <div className='flex gap-5'>
                <p className='h-7 w-7 rounded-full bg-slate-200
                flex justify-center items-center'>
                  <FaPinterest /></p>
                <p className='h-7 w-7 rounded-full bg-slate-200
                flex justify-center items-center'>
                  <FaFacebook /></p>
                <p className='h-7 w-7 rounded-full bg-slate-200
                flex justify-center items-center'>
                  <FaInstagram /></p>
                <p className='h-7 w-7 rounded-full bg-slate-200
                flex justify-center items-center'>
                  <FaLinkedin /></p>
                <p className='h-7 w-7 rounded-full bg-slate-200
                flex justify-center items-center'>
                  <FaXTwitter /></p>
              </div>
            </div>

          </div>
          <form className='flex flex-col gap-4 w-full' onSubmit={handleContactSubmit}>
            <div className='flex flex-col lg:flex-row gap-3'>
              <input type="text" placeholder='Name' name='fullname'
              value={contact.fullname} onChange={handleContactChange}
              className='borderborder-gray-300 px-2 py-3 
              placeholder-shown:text-sm shadow-lg outline-0 w-full'/>
              <input type="email" placeholder='Email'  name='email'
              value={contact.email} onChange={handleContactChange}
              className='borderborder-gray-300 px-2 py-2 
              placeholder-shown:text-sm shadow-lg outline-0 w-full'/>
            </div>
            <div className='flex flex-col md:flex-row gap-3'>
              <input type="text" placeholder='Your Favourite Colour'
              name='colour' value={contact.colour}
              onChange={handleContactChange} 
              className='border border-gray-300 px-2 py-3 placeholder-shown:text-sm
              shadow-lg outline-0 w-full'/>
              <input type="text" placeholder='Your Lucky Number'
              name='number' value={contact.number}
              onChange={handleContactChange}
              className='border border-gray-300 px-2 py-3 placeholder-shown:text-sm
              shadow-lg outline-0 w-full'/>
            </div>
            <div>
              <textarea cols={40} rows={5} placeholder='Message'
              name='message' value={contact.message}
              onChange={handleContactChange} 
              className='border border-gray-300 px-2 py-3 w-full
              placeholder-shown:text-sm shadow-lg resize-none 
              outline-0' />
            </div>
            <button type='submit' className='bg-blue-800 text-slate-100
            py-3 px-2 flex items-center justify-center gap-1 w-[50%]
            lg:w-[30%] self-center md:self-start text-sm'>
              Submit Now <FaCheckCircle size={10} className='mt-1' />
            </button>
          </form>
        </div>


      </div>
    </section >
  )
}

export default Contact
