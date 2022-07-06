import React, { useEffect, useState } from 'react'
import BreadCrumbs from './components/BreadCrumbs'
import { BiUpArrowAlt } from 'react-icons/bi'

import Feed from './components/Feed'
import Navbar from './components/Navbar'
import Upload from './components/Upload'
import TemplateArticle from './components/TemplateArticle'
import ActivityContent from './components/ActivityContent'
import Footer from './components/Footer'

import { API_KEY, BASE_URL_NEWS_API, TEMPORARY_BREAD_CRUMBS_LINKS } from './utils/const'

function App() {
  const [news, setNews] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(()=>{
    const fetcher = async () => {
      const res = await fetch(BASE_URL_NEWS_API + "top-headlines?country=id&apiKey=" + API_KEY)
      const { articles } = await res.json()
      setNews(articles)
      setIsLoading(false)
    }
    fetcher()
  },[])

  return (
    <div className='bg-primary min-h-screen'>
      <div className="container mx-auto">
        <Navbar/>
        <div className="my-4 py-3 w-full border-y-[1px] border-y-secondary">
          <BreadCrumbs className='my-4' links={TEMPORARY_BREAD_CRUMBS_LINKS}/>
        </div>
        <article className='pb-20 border-b-2 border-secondary'>
          {isLoading ? <TemplateArticle/> : (
            <>
              <div className='flex gap-6 mt-5'>
                <div className="flex flex-col h-[500px] flex-1">
                  <header className='w-2/3 text-secondary py-3 flex items-end justify-between'>
                    <h3 className='text-2xl'>Video</h3>
                    <a href='/' className='text-sm'>Browse All Videos</a>
                  </header>
                  <div className="grid grid-rows-3 grid-cols-3 gap-2 flex-1">
                    {new Array(5).fill(undefined).map((_,idx)=>{
                      if(idx === 0){
                        return (
                          <Feed 
                            key={news[idx].title}
                            bgImage={news[idx].urlToImage ? news[idx].urlToImage : undefined}
                            className='col-span-2 row-span-2'
                            title={news[idx].title}
                            author={news[idx].author ? news[idx].author : "John Doe"} 
                            views={20000}
                            />
                            )
                          }
                      return (
                        <Feed
                          key={news[idx].title} 
                          bgImage={news[idx].urlToImage ? news[idx].urlToImage : undefined}
                          author={news[idx].author ? news[idx].author : "John Doe"} 
                          views={20000}
                        />
                      )
                    })}
                    <Upload Icon={BiUpArrowAlt}>
                      <p>Upload</p>
                      <p className='leading-3'>Your Own Video</p>
                    </Upload>
                  </div>
                </div>
                <div className='w-4/12 border-b-[1px] overflow-hidden border-b-secondary'>
                  <header className='text-secondary border-b-secondary py-3 border-b-2 flex items-end justify-between'>
                    <h3 className='text-2xl'>Activity</h3>
                    <BreadCrumbs links={['View timeline', 'Filter activities']}/>
                  </header>
                  <div className='py-3  h-[440px] overflow-y-scroll flex flex-col gap-4 text-secondary'>
                    {isLoading ? 
                      (
                        <>
                          <ActivityContent/>
                          <ActivityContent/>
                          <ActivityContent/>
                          <ActivityContent/>
                          <ActivityContent/>
                        </>
                      ) 
                      : 
                      news.map((item,idx)=>(
                        <ActivityContent 
                          author={item.author}
                          desc={item.description}
                          bgImage={item.urlToImage}/>
                      ))}
                    <ActivityContent/>
                  </div>
                </div>
              </div>
              <div className='flex gap-6 mt-5'>
                <div className='flex-1'>
                  <div className="flex flex-col h-[500px]">
                    <header className='w-2/3 text-secondary py-3 flex items-end justify-between'>
                      <h3 className='text-2xl'>People</h3>
                      <a href='/' className='text-sm'>View All</a>
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
                      <h3 className='text-2xl'>People</h3>
                      <a href='/' className='text-sm'>View All</a>
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
                <div className='w-4/12 border-b-secondary'>
                  <header className='text-secondary border-b-secondary py-3 border-b-2 flex items-end justify-between'>
                    <h3 className='text-2xl'>Channel</h3>
                    <BreadCrumbs links={['Browse All Channels ']}/>
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
          )}
        </article>
        <Footer/>
      </div>
    </div>
  )
}

export default App
