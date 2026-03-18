import React, { useContext, useEffect, useState } from 'react'
import { ICONS } from "../assets/assets"
import { NavLink } from 'react-router-dom'
import { IoIosArrowUp } from 'react-icons/io'
import { IoIosArrowDown } from 'react-icons/io'
import { RentalContext } from '../Context/RentalContext'
import Login from './Login'
import Register from './Register'
import { toast } from 'react-toastify'


const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [login, setLogin] = useState({ email: '', password: '' });
  const [register, setRegister] = useState({ name: '', email: '', password: '' });
  const { testimonialsRef, isOpenLogin, setIsOpenLogin, navigate,
    isOpenRegister, setIsOpenRegister, hasNewBooking, myBookings, setHasNewBooking
   } = useContext(RentalContext);

  const testimonials = () => {
    testimonialsRef.current.scrollIntoView({
      behavior: 'smooth',
    });
  }
  const sideBarTestimonials = () => {
    testimonialsRef.current.scrollIntoView({
      behavior: 'smooth',
    });
    setIsVisible(!isVisible)
  }

  //Login
  const handleLoginChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value })
  }
  const handleLoginSubmit = (e) => {
    e.preventDefault()
    if (login.email === '' || login.password === '') {
      console.log('Showing error toast')
      toast.error('Invalid input')

    } else {
      toast.success('Login success!', {
        autoClose: 2000,
        hideProgressBar: false,
        onClose: () => {
          setIsOpenLogin(!isOpenLogin) // you can remove this setter function if you want
          navigate(0) //reloads the current route
        },
        // or setLogin(email:'', password:'') navigate('/') setIsOpen(!isOpen)
      })

    }
  }

  //Register
  const handleRegisterChange = (e) => {
    setRegister({ ...register, [e.target.name]: e.target.value })
  }

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (register.name === '' || register.email === '' || register.password === '') {
      toast.error('Invalid input')
    } else {
      toast.success("You've successfully registerd", {
        autoClose: 2000,
        hideProgressBar: false,
        onClose: () => {
          setIsOpenRegister(!isOpenRegister),
            navigate(0)
        }
      })
    }

  }
  useEffect(()=> {
    const allBookings = JSON.parse(localStorage.getItem('carBookings')) || []
    if(allBookings.length === 0){
      setHasNewBooking(false)   //myBookings.length === 0
    }
  }, [myBookings])
 

  return (
    <header className='flex items-center justify-between py-2 text-gray-800
    xxs:px-10 md:px-15 lg:px-20 xl:px-30 '>
      <div className='flex items-center gap-1'>
        <img src={ICONS.logo.src} alt={ICONS.logo.alt} className='w-18 lg:w-20 ' />
        <div className=''>
          <h1 className='text-xl font-bold text-gray-800 leading-5
          '>
            get<span className='font-extrabold'>Moving</span>
          </h1>
        </div>

      </div>

      <ul className='hidden md:flex gap-6 font-bold 
      min-[768px]:max-[820px]:grid! min-[768px]:max-[820px]:items-center
      min-[768px]:max-[820px]:grid-cols-[0.3fr_0.7fr_1fr]'>
        <NavLink to={"/"} >
          <p>Home</p>
          <hr className='hidden min-h-0.5 mt-1 bg-blue-600
          min-[768px]:max-[820px]:min-h-0 min-[768px]:max-[820px]:mt-0
          min-[768px]:max-[820px]:opacity-0'/>
        </NavLink>

        <NavLink to={'/cars'} className={'min-[768px]:max-[820px]:hidden!'}>
          <p>Cars</p>
          <hr className='hidden min-h-0.5 mt-1 bg-blue-600' />
        </NavLink>

        {/* md screen 768px to 819px */}
        {/* cars */}
        <div className='group relative hidden mb-1.5 min-[768px]:max-[820px]:grid!
         min-[768px]:max-[820px]:items-center! min-[768px]:max-[820px]:mb-0!'>
          <div className='flex items-center gap-2'>
            <p>Cars</p>
            <IoIosArrowDown className='group-hover:hidden' />
            <IoIosArrowUp className='hidden group-hover:flex' />
          </div>
          {/* cars dropdown */}
          <div className='absolute top-full right-0 w-full pt-2 z-50'>
            <div className={` p-2 border-2 gap-5 w-full hidden bg-slate-100
              group-hover:block ${isVisible ? 'block' : ''}`}>
              <div className='relative  hover:text-blue-800 block border-b-2 border-gray-700'>
                <NavLink to={'/my-bookings'} >
                  <p>My Bookings</p>
                </NavLink>
                <p className={` ${hasNewBooking ? 'absolute h-2 w-2 rounded-full bg-blue-700 top-1 right-9 animate-pulse':''}`}></p>
              </div>

              <NavLink to={'/cars'} className={" hover:text-blue-800 block border-b-2 border-gray-700"}>
                <p>Cars</p>
              </NavLink>
            </div>
          </div>
        </div>

        <div  className='relative min-[768px]:max-[820px]:hidden!'>
          <NavLink to={'/my-bookings'} >
            <p>My Bookings</p>
            <hr className='hidden min-h-0.5 mt-1 bg-blue-600' />
          </NavLink>

          <p className={` ${hasNewBooking ? 'absolute h-2 w-2 rounded-full bg-blue-700 top-1 -right-2.5 animate-pulse':''}`}></p>
        </div>


        <div className='hidden xl:flex cursor-pointer ' onClick={testimonials}>
          <div>
            <p>Testimonials</p>
            <hr className='hidden min-h-0.5 mt-1 bg-blue-600' />
          </div>
        </div>
        {/* The company */}
        <div className='group relative mb-1.5 min-[768px]:max-[820px]:grid!
        min-[768px]:max-[820px]:items-center! min-[768px]:max-[820px]:mb-0!'>
          <div className='flex items-center gap-2'>
            <p>The Company</p>
            <IoIosArrowDown className='group-hover:hidden' />
            <IoIosArrowUp className='hidden group-hover:flex' />
          </div>
          {/* The company dropdown */}
          <div className='absolute top-full right-0 w-full pt-2 z-50'>
            <div className={` p-2 border-2 gap-5 w-full hidden bg-slate-100
              group-hover:block ${isVisible ? 'block' : ''}`}>
              <NavLink to={'/about'} className={" hover:text-blue-800 block border-b-2 border-gray-700"}>
                <p>About</p>
              </NavLink>
              <NavLink to={'/contact'} className={" hover:text-blue-800 block border-b-2 border-gray-700"}>
                <p>Contact</p>
              </NavLink>
              <div className="xl:hidden hover:text-blue-800 block 
              border-b-2 border-gray-700" onClick={testimonials}>
                <p>Testimonials</p>
              </div>
            </div>
          </div>
        </div>
      </ul>

      {/* medium /large screen */}
      <ul className='hidden md:flex lg:gap-6 font-bold items-center
      text-md  '>
        <div className='flex mb-2 cursor-pointer 
           md:bg-blue-800 md:text-slate-100 
         md:active:opacity-80  lg:active:text-blue-800 
         lg:bg-transparent lg:text-gray-700 lg:active:opacity-100
         '>
          <p onClick={() => setIsOpenLogin(!isOpenLogin)} className='
          md:py-2 md:px-4 lg:py-0.5 lg:px-0'>
            Login
          </p>
          <Login isOpen={isOpenLogin} onClose={() => setIsOpenLogin(!isOpenLogin)}>
            <form action="" onSubmit={handleLoginSubmit}
              className='flex flex-col gap-5 text-gray-800'>
              <label htmlFor="email" className='flex flex-col gap-1'>
                <span className='font-bold'>Email</span>
                <input type="email" id='email' placeholder='Enter your email'
                  className='border border-gray-500 block px-2 py-2.5
                  md:py-2 w-full
                placeholder-shown:text-sm outline-0'
                  name='email' value={login.email} onChange={handleLoginChange} />
              </label>
              <label htmlFor="pwd" className='flex flex-col gap-1'>
                <span className='font-bold'>Password</span>
                <input type="password" id='pwd' placeholder='Enter your password'
                  className='border border-gray-500 block px-2 py-2.5 
                  md:py-2 w-full
                placeholder-shown:text-sm outline-0'
                  name='password' value={login.password} onChange={handleLoginChange} />
              </label>
              <p className='text-sm font-medium'>Create an account?
                <span className='text-blue-800 cursor-pointer'
                  onClick={() => (setIsOpenLogin(false), setIsOpenRegister(!isOpenRegister))}>
                  click here</span>
              </p>
              <button type='submit' className='bg-blue-800 py-2.5 md:py-2
              font-bold text-slate-100 active:opacity-90'>
                Login
              </button>
            </form>

          </Login>
        </div>

        <div className='hidden lg:flex'>
          <p className='mb-2 py-2 px-4 bg-blue-800 text-slate-100 cursor-pointer
        active:opacity-80' onClick={() => setIsOpenRegister(!isOpenRegister)}>
            Register
          </p>
          <Register isOpen={isOpenRegister}
            onClose={() => setIsOpenRegister(!isOpenRegister)}>
            <form action="" onSubmit={handleRegisterSubmit}
              className='flex flex-col gap-5 text-gray-800'>
              <label htmlFor="text" className='flex flex-col gap-1'>
                <span className='font-bold'>Name</span>
                <input type="text" id='name' placeholder='Enter your fullname'
                  className='border border-gray-500 block px-2 py-2.5 
                  md:py-2 w-full
                placeholder-shown:text-sm outline-0'
                  name='name' value={register.name} onChange={handleRegisterChange} />
              </label>
              <label htmlFor="email" className='flex flex-col gap-1'>
                <span className='font-bold'>Email</span>
                <input type="email" id='email1' placeholder='Enter your email'
                  className='border border-gray-500 block px-2 py-2.5
                  md:py-2 w-full
                placeholder-shown:text-sm outline-0'
                  name='email' value={register.email} onChange={handleRegisterChange} />
              </label>
              <label htmlFor="pwd" className='flex flex-col gap-1'>
                <span className='font-bold'>Password</span>
                <input type="password" id='pwd1' placeholder='Enter your password'
                  className='border border-gray-500 block px-2 py-2.5 
                  md:py-2 w-full
                placeholder-shown:text-sm outline-0'
                  name='password' value={register.password} onChange={handleRegisterChange} />
              </label>
              <p className='text-sm font-medium'>Already have an account?
                <span className='text-blue-800 cursor-pointer'
                  onClick={() => (setIsOpenRegister(false), setIsOpenLogin(!isOpenLogin))}>
                  click here</span>
              </p>
              <button type='submit' className='bg-blue-800 py-2.5 md:py-2
              font-bold text-slate-100 active:opacity-90'>
                Create Account
              </button>
            </form>
          </Register>
        </div>
      </ul>

      {/* sidebar for small screen */}
      <div className='md:hidden'>
        <img onClick={() => setIsVisible(true)} src={ICONS.menu.src} alt={ICONS.menu.alt} className='w-5' />
      </div>
      {isVisible && (
        <div className='md:hidden fixed top-11 right-0 left-0  z-50
        bg-slate-100 text-gray-800 pt-2 px-2 font-bold'>
          <div className='flex gap-2 
            items-center mb-4 px-3 py-2 cursor-pointer border 
            border-transparent hover:border-slate-100 w-20 active:opacity-70'
            onClick={() => setIsVisible(!isVisible)}>
            <p>X</p>
          </div>
          <div className='p-5 text-center'>
            <p className=' mb-3 p-2 w-full hover:bg-slate-200 
            hover:text-blue-800 cursor-pointer' onClick={() => setIsVisible(false)}>
              <NavLink to={'/'} className={'py-2'}>Home
              </NavLink>
            </p>
            <p className=' mb-3 p-2 w-full hover:bg-slate-200 
            hover:text-blue-800 cursor-pointer' onClick={() => setIsVisible(false)}>
              <NavLink to={'/cars'} className={'py-2'}>Cars
              </NavLink>
            </p>
            <div className=' mb-3 p-2 w-ful hover:bg-slate-200 
            hover:text-blue-800 cursor-pointer' onClick={() => setIsVisible(false)}>
              <div className='relative'>
                <NavLink to={'/my-bookings'} className={'py-2'}>
                  <p>My Bookings</p>
                </NavLink>
                <p className={`
                   ${hasNewBooking ? 
                   'absolute h-2 w-2 rounded-full bg-blue-700 top-1 right-43 animate-pulse min-[400px]:max-[450px]:right-28 min-[343px]:max-[370px]:right-19 min-[374px]:max-[391px]:right-23':''}`}>
                   </p>
              </div>
            </div>
            <p className=' mb-3 p-2 w-full hover:bg-slate-200 
            hover:text-blue-800 cursor-pointer' onClick={() => setIsVisible(false)}>
              <NavLink to={'/contact'} className={'py-2'}>
                Contact
              </NavLink>
            </p>
            <p className=' mb-3 p-2 w-full hover:bg-slate-200 
            hover:text-blue-800 cursor-pointer' onClick={() => setIsVisible(false)}>
              <NavLink to={'/about'} className={'py-2'}>
                About
              </NavLink>
            </p>
            <div onClick={sideBarTestimonials} className='lg:hidden'>
              <p className=' mb-3 p-2 w-full hover:bg-slate-200 
              hover:text-blue-800 cursor-pointer '>
                Testimonials
              </p>
            </div>
            <ul className=''>
              <div>
                <p onClick={() => (setIsVisible(false), setIsOpenLogin(true))} className='mb-3 
                p-2 w-full hover:bg-slate-200 hover:text-blue-700
                cursor-pointer'>
                  Login
                </p>
              </div>


              <div>
                <p onClick={() => (setIsVisible(false), setIsOpenRegister(!isOpenRegister))} className='mb-3 
                p-2 w-full hover:bg-slate-200 hover:text-blue-700
                cursor-pointer'>
                  Register
                </p>
              </div>

            </ul>
          </div>
        </div >
      )}

    </header >
  )
}

export default Navbar
