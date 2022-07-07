import React from 'react'

const ChannelCard = ({label}) => {
  return (
    <div className='bg-secondary flex p-2 h-32'>
        <div className='mt-auto text-primary font-semibold'>
             {label}
        </div>
    </div>
  )
}

export default ChannelCard