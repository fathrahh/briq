import React from 'react'

const Feed = ({className = "", author, title, views, viewsCol= false, bgImage}) => {    
  return (
    <div 
        style={{
            backgroundImage : `url(${bgImage})`,
            backgroundPosition : 'center',
            backgroundSize : 'cover'
        }}
        className={`flex flex-col bg-secondary ${className} relative`}>
        <div className={`text-primary mt-auto flex flex-col bg-secondary p-2`}>
            {title && <h3 className='lg:text-2xl w-4/5 whitespace-nowrap overflow-hidden text-ellipsis font-semibold'>{title}</h3>}
            <div className={`${viewsCol ? "flex-col" : "flex-row justify-between items-end"} flex`}>
                <div className='w-3/5 mr-3 overflow-hidden text-ellipsis'>
                    <span className='capitalize font-semibold text-xs whitespace-nowrap overflow-hidden '>{author}</span>
                </div>
                <div className='w-2/5'>
                    <span className='float-right font-semibold text-xs'>{views} views</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Feed