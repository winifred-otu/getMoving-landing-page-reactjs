import React from 'react';
import { createPortal } from 'react-dom';

const Register = ({ isOpen, onClose, children }) => {
   if (!isOpen) return null;
  
    return createPortal(
      <div className='fixed top-0 right-0 left-0 bottom-0 bg-black/50 
      z-100 flex-col justify-center flex '>
        <div className='w-[80%] md:w-[45%] lg:w-[30%] mx-auto flex flex-col gap-2'>
          <span onClick={onClose} className='inline-block justify-end 
          items-center py-1 self-end text-slate-100 cursor-pointer 
          w-7.5'>
            X</span>
          <div className='bg-slate-100 flex flex-col px-7 py-10
          gap-7 rounded-lg shadow-xl'>
            <header className='text-center p-1 text-2xl'>
              <h1 className='text-blue-800 font-bold'>User 
                <span className='text-gray-800'> Sign Up</span></h1>
            </header>
  
            {children}
  
          </div>
        </div>
  
      </div>,
      document.body
    )
}

export default Register
