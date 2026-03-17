import React from 'react'

const Title = ({heading, subheading}) => {
  return (
    <div className='flex flex-col gap-1 text-gray-800'>
        <h3 className='text-lg font-extrabold text-center'>{subheading}</h3>
        <h1 className='text-3xl font-extrabold text-center'>{heading}</h1>
    </div>
  )
}

export default Title
