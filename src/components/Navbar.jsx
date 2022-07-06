import React from 'react'
import { HiSearch } from 'react-icons/hi'
import { BiUpArrowAlt } from 'react-icons/bi'
import { FaUser } from 'react-icons/fa'
import { GoSync } from 'react-icons/go'

const Navbar = () => {
  const [search, setSearch] = React.useState("")

  const handleSearch = () => {
    // Do Something here
  }

  return (
    <nav className='flex items-center justify-between py-5'>
      <h1 className='text-secondary text-3xl lg:text-4xl lg:scale-y-110'>
        Social
        <span className='text-cream'>Network</span>
      </h1>
      <div className='gap-6 hidden lg:flex'>
        <div className='flex lg:w-[428px] bg-secondary px-3 py-2'>
          <input 
            className='placeholder:text-primary font-semibold text-primary outline-none border-none bg-transparent flex-1'
            type="text" 
            value={search}
            onChange={(e => setSearch(e.target.value))}
            placeholder="Find..."
            />
            <button 
              className='pl-2 bg-transparen border-none outline-none'
              onClick={handleSearch}
              >
              <HiSearch size={18} className="text-primary" />
            </button>
        </div>
        <button className='bg-secondary px-8 py-2 flex items-center justify-center font-semibold text-primary'>
          <BiUpArrowAlt size={20}/>
          <span className='text-sm'>Upload</span>
        </button>
        <div className='flex self-stretch'>
          <button className='py-2 px-4 flex text-primary bg-secondary items-center justify-center'>
            <FaUser size={10}/>
          </button>
          <div className='text-secondary py-1 ml-1 relative'>
            <h3 className='text-lg leading-3'>Waseem</h3>
            <span className='text-sm'>Arshad</span>
            <div className='bg-secondary p-1   text-primary -top-2 -right-5 rotate-45 absolute rounded-full'>
              <GoSync size={12}/>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar