import React from 'react'

const SocmedButton = ({Icon}) => {
  return (
    <a className='flex justify-center items-center h-10 w-10 text-primary bg-secondary' href="#">
        {Icon}
    </a>
  )
}

export default SocmedButton