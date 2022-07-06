import React from 'react'
import Feed from './Feed'
import Upload from './Upload'
import { BiUpArrowAlt } from 'react-icons/bi'
import BreadCrumbs from './BreadCrumbs'
import ActivityContent from './ActivityContent'

const TemplateArticle = () => {
  return (
      <>
        <div className='flex flex-col lg:flex-row gap-6 mt-5'>
          <div className="flex order-2 lg:order-1 flex-col h-[400px] lg:h-[600px] lg:flex-1">
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
                <p className='text-sm lg:text-base'>Upload</p>
                <p className='text-xs leading-3'>Your Own Video</p>
              </Upload>
            </div>
          </div>
          <div className='w-full lg:w-4/12 order-1 lg:order-2  '>
            <header className='text-secondary border-b-secondary py-3 border-b-2 flex items-end justify-between'>
              <h3 className='text-2xl'>Activity</h3>
              <BreadCrumbs links={['View timeline', 'Filter activities']}/>
            </header>
            <div className='py-3 flex flex-col gap-4'>
              <div className='flex'>
                <div className='py-3 h-[530px] overflow-y-scroll flex flex-col border-b-2 border-b-secondary gap-4 text-secondary'>
                  <ActivityContent/>
                  <ActivityContent/>
                  <ActivityContent/>
                  <ActivityContent/>
                  <ActivityContent/>
                  <ActivityContent/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col lg:flex-row gap-6 mt-5'>
          <div className='flex-1 order-2 lg:order-1'>
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
                  <p className='text-sm lg:text-base'>Upload</p>
                  <p className='text-xs leading-3'>Your Own Video</p>
                </Upload>
              </div>
            </div>
            <div className="flex flex-col h-[400px] lg:h-[600px] lg:flex-1">
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
                  <p className='text-sm lg:text-base'>Upload</p>
                  <p className='text-xs leading-3'>Your Own Video</p>
                </Upload>
              </div>
            </div>
          </div>
          <div className='order-1 lg:order-2 w-full lg:w-4/12'>
            <header className='text-secondary border-b-secondary py-3 border-b-2 flex items-end justify-between'>
              <h3 className='text-2xl'>Channel</h3>
              <BreadCrumbs links={['View timeline', 'Filter activities']}/>
            </header>
            <div className='py-3 grid grid-cols-2 gap-x-3 gap-y-4 border-b-2 border-b-secondary'>
              {Array(10).fill(undefined).map((_, idx) =>(
                <div key={idx} className='bg-secondary h-32'>
                  {idx + 1}
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
  )
}

export default TemplateArticle