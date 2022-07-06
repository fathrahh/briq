import React from 'react'
import Feed from './Feed'
import Upload from './Upload'
import { BiUpArrowAlt } from 'react-icons/bi'
import BreadCrumbs from './BreadCrumbs'

const TemplateArticle = () => {
  return (
    <article>
    <div className='flex gap-6 mt-5'>
      <div className="flex flex-col h-[500px] flex-1">
        <header className='w-2/3 text-secondary py-3 flex items-end justify-between'>
          <h3 className='text-2xl'>Video</h3>
          <a href='/' className='text-sm'>View More</a>
        </header>
        <div className="grid grid-rows-3 grid-cols-3 gap-2 flex-1">
          <Feed 
            className='col-span-2 row-span-2'
            title="How to improve your skills" 
            author="Waseem Arshad"
            views={1999999}/>
          <Feed
            author="Michael knilph"
            views={15454}
          />
          <Feed
            author="Ahmed Yasin"
            views={1964}
          />
          <Feed
            author="John Stainior"
            views={2534}
          />
          <Feed
            author="John doe"
            views={2534}
          />
          <Upload Icon={BiUpArrowAlt}>
            <p>Upload</p>
            <p className='leading-3'>Your Own Video</p>
          </Upload>
        </div>
      </div>
      <div className='w-4/12 border-b-[1px] border-b-secondary'>
        <header className='text-secondary border-b-secondary py-3 border-b-2 flex items-end justify-between'>
          <h3 className='text-2xl'>Activity</h3>
          <BreadCrumbs links={['View timeline', 'Filter activities']}/>
        </header>
        <div className='py-3 flex flex-col gap-4'>
          <div className='flex'>
            <div className=''>

            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='flex gap-6 mt-5'>
      <div className='flex-1'>
        <div className="flex flex-col h-[500px]">
          <header className='w-2/3 text-secondary py-3 flex items-end justify-between'>
            <h3 className='text-2xl'>Video</h3>
            <a href='/' className='text-sm'>View More</a>
          </header>
          <div className="grid grid-rows-3 grid-cols-3 gap-2 flex-1">
            <Feed 
              className='col-span-2 row-span-2'
              title="How to improve your skills" 
              author="Waseem Arshad"
              views={1999999}/>
            <Feed
              author="Michael knilph"
              views={15454}
            />
            <Feed
              author="Ahmed Yasin"
              views={1964}
            />
            <Feed
              author="John Stainior"
              views={2534}
            />
            <Feed
              author="John doe"
              views={2534}
            />
            <Upload Icon={BiUpArrowAlt}>
              <p>Upload</p>
              <p className='leading-3'>Your Own Video</p>
            </Upload>
          </div>
        </div>
        <div className="flex flex-col h-[500px] flex-1">
          <header className='w-2/3 text-secondary py-3 flex items-end justify-between'>
            <h3 className='text-2xl'>Video</h3>
            <a href='/' className='text-sm'>View More</a>
          </header>
          <div className="grid grid-rows-3 grid-cols-3 gap-2 flex-1">
            <Feed 
              className='col-span-2 row-span-2'
              title="How to improve your skills" 
              author="Waseem Arshad"
              views={1999999}/>
            <Feed
              author="Michael knilph"
              views={15454}
            />
            <Feed
              author="Ahmed Yasin"
              views={1964}
            />
            <Feed
              author="John Stainior"
              views={2534}
            />
            <Feed
              author="John doe"
              views={2534}
            />
            <Upload Icon={BiUpArrowAlt}>
              <p>Upload</p>
              <p className='leading-3'>Your Own Video</p>
            </Upload>
          </div>
        </div>
      </div>
      <div className='w-4/12 border-b-[1px] border-b-secondary'>
        <header className='text-secondary border-b-secondary py-3 border-b-2 flex items-end justify-between'>
          <h3 className='text-2xl'>Activity</h3>
          <BreadCrumbs links={['View timeline', 'Filter activities']}/>
        </header>
        <div className='py-3 flex flex-col gap-4'>
          <div className='flex'>
            <div className=''>

            </div>
          </div>
        </div>
      </div>

    </div>
  </article>
  )
}

export default TemplateArticle