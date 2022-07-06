import React from 'react'

const ActivityContent = (
    {
        author = "John Stalvior",
        times = "2 Second Ago",
        Icon,
        desc = "Lorem Ipsum Dolorem Allet sit Amet consectetur",
        bgImage,
    }
    ) => {
  return (
    <div className='flex gap-2'>
        <div
            style={{
                backgroundImage : `url(${bgImage})`,
                backgroundPosition : 'center',
                backgroundSize : 'cover'
            }} 
            className='w-32 h-16 bg-secondary'></div>
        <div className='w-2/3 whitespace-nowrap overflow-hidden '>
        <span className='font-semibold'>{author ? author : "John Doe"}</span>
            <p className='leading-5 w-full text-sm overflow-hidden text-ellipsis'>{desc}</p>
            <p className='text-xs'>
                {times}
            </p>
        </div>
    </div>
  )
}

export default ActivityContent