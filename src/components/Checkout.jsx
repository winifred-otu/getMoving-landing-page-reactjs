import React, { useContext, useState } from 'react'
import { FaCcMastercard } from 'react-icons/fa'
import { FaCcVisa } from 'react-icons/fa'
import { FaCreditCard } from 'react-icons/fa'
import { RentalContext } from '../Context/RentalContext'
import { toast } from 'react-toastify'


const Checkout = () => {
    const { currency, totalBookings, navigate } = useContext(RentalContext)
    const [pay, setPay] = useState({
        email: '', cardNo: "", cardDate: "",
        cardCvc: '', cardFullname: "", country: "", saveInfo: false

    })
    const handlePaymentChange = (e) => {
        const { name, checked, type } = e.target;
        setPay(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : e.target.value }))
    }
    const validateLogin = (info) => {
        // let errorMsg = {};
        if (info) {
            if (!info.email) {
                return toast.error('Email is required')
            } else if (!/^[A-Za-z0-9_\-\.]*[@][A-Za-z]*[\.][A-Za-z]{2,4}$/.test(info.email)) {
                return toast.error('Invalid email address')
            }
            if (!info.cardNo) {
                return toast.error('Card Number is required')
            }
            else if (!/^(?=(.*[0-9])).{16}$/.test(info.cardNo)) {
                return toast.error('Invalid card number');
            }
            if (!info.cardDate) {
                return toast.error('card expiry month and year is required')
            }
            else if (!/^(?=(.*[0-9]){2})(?=(.*[/]){1})(?=(.*[0-9]){2}).{5}$/.test(info.cardDate)) {
                return toast.error('Invalid card expiry date')
            }
            if (!info.cardCvc) {
                return toast.error('Card CVC is required')
            }
            else if (!/^(?=(.*[0-9])).{3}$/.test(info.cardCvc)) {
                return toast.error('Invalid CVC');
            }
            if (!info.cardFullname) {
                return toast.error('Full Name is required')
            }
            else if (!/^[A-Za-z]*\s[A-Za-z]+$/.test(info.cardFullname)) {
                return toast.error('Full Name is invalid')
            }
            if (!info.country) {
                return toast.error('Select a country')
            }
            if (!info.saveInfo) {
                return toast.error('Accept terms of use')
            }
        }
        return toast.success('Payment Successful!', {
            autoClose: 2000,
            hideProgressBar: false,
            onClose: () => {
                navigate('/confirmation')
            }

        })

    }
    const handlePaymentSubmit = (e) => {
        e.preventDefault()
        validateLogin(pay)
    }
    return (
        <section className='mt-20 flex flex-col gap-10
        xxs:px-10 xs:px-10 md:px-15 lg:px-20 xl:px-30 md:min-h-[80vh]'>

            <div className=' flex flex-col md:grid md:grid-cols-[0.7fr_1.2fr] 
            lg:grid-cols-[0.8fr_1fr] gap-10 lg:gap-15
            text-gray-800 '>
                <div className='flex flex-col gap-1'>
                    <h2 className='text-2xl lg:3xl'>Your Booking Total</h2>
                    <p className='text-4xl md:text-5xl font-medium'>{currency}{totalBookings}</p>
                </div>
                {/* rightside */}
                <div className='p-5 md:p-10 ring ring-gray-300
                shadow-lg min-[768px]:max-[854px]:h-fit!'>
                    <div className='flex flex-col gap-5 '>
                        <p className='font-bold text-3xl'>Pay with card</p>
                        {/* payment form */}
                        <form action="" onSubmit={handlePaymentSubmit}
                            className='flex flex-col gap-5'>
                            <label htmlFor="email" className='flex flex-col gap-1'>
                                <span className='block text-sm font-medium'>Email</span>
                                <input type="email" id='email' name='email' value={pay.email}
                                    placeholder='you@example.com' onChange={handlePaymentChange}
                                    className='border border-gray-500 px-2 py-1 
                            placeholder-shown:text-sm w-full outline-0'/>
                            </label>
                            <div className='flex flex-col gap-3'>
                                <p className='font-bold text-lg'>Payment method</p>
                                <div className='flex flex-col gap-5'>
                                    <div>
                                        <p className='text-sm font-medium mb-1'>
                                            Card information
                                        </p>
                                        <div className='w-full flex items-center
                                    border border-gray-500 px-2'>
                                            <input type="text" name='cardNo' value={pay.cardNo}
                                                placeholder='1234 1234 1234 1234' onChange={handlePaymentChange}
                                                className='placeholder-shown:text-sm 
                                        py-1 flex-1 outline-0' min={16} max={16} />
                                            <div className=' flex gap-0.5'>
                                                <FaCcMastercard size={20} />
                                                <FaCcVisa size={20} />
                                                <FaCreditCard size={20} className='xxs:hidden xs:flex' />
                                            </div>
                                        </div>
                                        <div className='grid grid-cols-2'>
                                            <input type="text" name='cardDate' value={pay.cardDate}
                                                placeholder='MM/YY' onChange={handlePaymentChange}
                                                className='border border-t-0 border-gray-500 
                                            px-2 py-1 placeholder-shown:text-sm w-full
                                        outline-0'/>
                                            <div className='flex border border-gray-500 border-t-0
                                            border-l-0 items-center px-2'>
                                                <input type="text" name='cardCvc' value={pay.cardCvc}
                                                    placeholder='CVC' onChange={handlePaymentChange}
                                                    className='  py-1 flex-1 outline-0 w-full
                                            placeholder-shown:text-sm 
                                            ' />
                                                <FaCreditCard />
                                            </div>
                                        </div>
                                    </div>

                                    <label htmlFor="name" className='flex flex-col gap-1'>
                                        <span className='text-sm font-medium'>Cardholder name</span>
                                        <input type="text" id='name' name='cardFullname' value={pay.cardFullname}
                                            placeholder='Full name on card' onChange={handlePaymentChange}
                                            className='border border-gray-500 px-2 py-1
                                     placeholder-shown:text-sm w-full outline-0
                                    '/>
                                    </label>

                                    <label htmlFor='country' className='flex flex-col gap-1'>
                                        <span className='text-sm font-medium'>Country or region</span>
                                        <select id="country" name='country' value={pay.country}
                                            onChange={handlePaymentChange}
                                            className='border border-gray-500  w-full
                                        px-2 py-1 placeholder-shown:text-sm outline-0
                                        text-sm '>
                                            <option value=''>
                                                Select your country of residence
                                            </option>
                                            <option value='Nigeria' >Nigeria</option>
                                            <option value='Ghana'>Ghana</option>
                                            <option value='Burkina Faso'>Burkina-Faso</option>
                                            <option value='Mali'>Mali</option>
                                            <option value='Niger'>Niger</option>
                                        </select>
                                    </label>
                                    <div className='border border-gray-500 
                                    px-2 py-1 placeholder-shown:text-sm w-full
                                    flex items-start gap-2'>
                                        <input type="checkbox" name='saveInfo'
                                            onChange={handlePaymentChange} checked={pay.saveInfo}
                                            className='mt-1 outline-0' />
                                        <div>
                                            <p className='font-bold text-sm'>Save my information for faster checkout</p>
                                            <p className='text-sm'>Pay securely at THE UNKNOWN and everywhere Link
                                                is accepted.
                                            </p>
                                        </div>
                                    </div>
                                    <button type='submit' className='bg-blue-800 py-2.5 px-2
                                text-slate-100 outline-0'>
                                        Pay
                                    </button>
                                    <div className='flex xxs:gap-2 xs:gap-4 text-xs items-center justify-center'>
                                        <p className='flex gap-1'>
                                            Powered by <span className='font-bold'>WeKnow</span>
                                        </p>
                                        |
                                        <p className='flex xxs:gap-2 xs:gap-4'>
                                            <span>Terms</span>  <span>Privacy</span>
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Checkout
