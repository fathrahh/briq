import React from 'react'

const Upload = ({Icon, children}) => {
  return (
    <label className='relative border-2 cursor-pointer border-secondary text-secondary flex justify-center items-center'>
        <input 
            className="absolute -z-1 w-0 h-0" 
            type="file" />
        <div className='flex items-center gap-2 '>
            <div className='w-8 h-8 flex justify-center items-center rounded-full border-2 border-secondary'>
                <Icon className="w-3 h-3 lg:w-3 lg:h-3"/>
            </div>
            <div className='py-4 -mt-1'>
                {children}
            </div>
        </div>
    </label>
  )
}

export default Upload