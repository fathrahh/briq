import React, { useEffect, useState } from 'react'
import BreadCrumbs from './components/BreadCrumbs'
import { BiUpArrowAlt } from 'react-icons/bi'

import Feed from './components/Feed'
import Navbar from './components/Navbar'
import Upload from './components/Upload'
import TemplateArticle from './components/TemplateArticle'
import ActivityContent from './components/ActivityContent'
import Footer from './components/Footer'
import ChannelCard from './components/ChannelCard'

import { API_KEY, BASE_URL_JSON_PLACEHOLDERS, BASE_URL_NEWS_API, DOCUMENT_LIST_FEEDS_ITEMS, PEOPLE_LIST_FEEDS_ITEMS, TEMPLATE_CHANNELS_ITEMS_LABEL, TEMPORARY_BREAD_CRUMBS_LINKS } from './utils/const'

function App() {
  const [news, setNews] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(()=>{
    const fetcher = async () => {
      try{
        // const res = await fetch(BASE_URL_NEWS_API + "top-headlines?country=id&apiKey=" + API_KEY)
        // const { articles } = await res.json()
        const res = await fetch(BASE_URL_JSON_PLACEHOLDERS)
        const data = await res.json()
        setNews(data)
        console.log(data)
        setIsLoading(false)
      }catch(err){
        console.log(err)
        // console.log('Masukan API KEY')
        setIsLoading(true)
      }
    }
    fetcher()
  },[])

  return (
    <div className='bg-primary min-h-screen'>
      <div className="container mx-auto px-5">
        <Navbar/>
        <div className="my-4 py-3 w-full border-y-[1px] border-y-secondary">
          <BreadCrumbs className='my-4' links={TEMPORARY_BREAD_CRUMBS_LINKS}/>
        </div>
        <article className='pb-20 border-b-2 border-secondary'>
          {isLoading ? <TemplateArticle/> : (
            <>
              <div className='flex lg:flex-row flex-col gap-6 mt-5'>
                <div className="flex order-2 lg:order-1 flex-col h-[400px] lg:h-[600px] lg:flex-1">
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
                            bgImage={news[idx].url}
                            className='col-span-2 row-span-2'
                            title={news[idx].title}
                            author={PEOPLE_LIST_FEEDS_ITEMS[idx].author} 
                            views={20000}
                            />
                            )
                          }
                      return (
                        <Feed
                          key={news[idx].title} 
                          bgImage={news[idx].url}
                          author={PEOPLE_LIST_FEEDS_ITEMS[idx].author} 
                          views={20000}
                        />
                      )
                    })}
                    <Upload Icon={BiUpArrowAlt}>
                      <p className='text-sm lg:text-base'>Upload</p>
                      <p className='text-xs leading-3'>Your Own Video</p>
                    </Upload>
                  </div>
                </div>
                <div className='order-1 lg:order-2 lg:w-4/12 border-b-[1px] overflow-hidden '>
                  <header className='text-secondary border-b-secondary py-3 border-b-2 flex items-end justify-between'>
                    <h3 className='text-2xl'>Activity</h3>
                    <BreadCrumbs links={['View timeline', 'Filter activities']}/>
                  </header>
                  <div className='py-3 h-[530px] overflow-y-scroll flex flex-col gap-2 pr-1 border-b-secondary border-2 text-secondary'>
                    {new Array(10).fill(undefined).map((item,idx)=>(
                      <ActivityContent 
                        desc={news[idx].title}
                        bgImage={news[idx].url}
                      />
                      )
                    )}
                  </div>
                </div>
              </div>
              <div className='flex flex-col lg:flex-row gap-6 mt-5'>
                <div className='flex-1 order-2 lg:order-1'>
                  <div className="flex flex-col h-[400px] lg:h-[600px] lg:flex-1">
                    <header className='w-2/3 text-secondary py-3 flex items-end justify-between'>
                      <h3 className='text-2xl'>People</h3>
                      <a href='/' className='text-sm'>View All</a>
                    </header>
                    <div className="grid grid-rows-3 grid-cols-3 gap-2 flex-1">
                    {PEOPLE_LIST_FEEDS_ITEMS.map((item,idx)=>{
                      if(item.title){
                        return (
                          <Feed 
                            className='col-span-2 row-span-2'
                            title={item.title}
                            bgImage={news[idx].url}
                            author={item.author}
                            views={item.views}
                            />
                            )
                          }
                        return(
                          <Feed
                          author={item.author}
                          bgImage={news[idx].url}
                          />
                          )
                        })}
                      <Upload Icon={BiUpArrowAlt}>
                        <p className='text-sm lg:text-base'>Upload</p>
                        <p className='text-xs leading-3'>Your Own Video</p>
                      </Upload>
                    </div>
                  </div>
                  <div className="flex flex-col h-[400px] lg:h-[600px] lg:flex-1">
                    <header className='w-2/3 text-secondary py-3 flex items-end justify-between'>
                      <h3 className='text-2xl'>Documents</h3>
                      <a href='/' className='text-sm'>Browse all documents</a>
                    </header>
                    <div className="grid grid-rows-3 grid-cols-3 gap-2 flex-1">
                    {DOCUMENT_LIST_FEEDS_ITEMS.map((item,idx)=>{
                        if(item.title){
                          return (
                            <Feed 
                              className='col-span-2 row-span-2'
                              title={item.title} 
                              author={item.author}
                              views={item.views}
                              bgImage={news[idx].url}
                              />
                              )
                            }
                          return (
                          <Feed
                            bgImage={news[idx].url}
                            author={item.author}
                            views={item.views}
                            viewsCol={true}
                          />
                        )
                      })}
                      <Upload Icon={BiUpArrowAlt}>
                        <p className='text-sm lg:text-base'>Upload</p>
                        <p className='text-xs leading-3'>Your Own Video</p>
                      </Upload>
                    </div>
                  </div>
                </div>
                <div className='order-1 lg:order-2 w-full lg:w-4/12 border-b-secondary'>
                  <header className='text-secondary border-b-secondary py-3 border-b-2 flex items-end justify-between'>
                    <h3 className='text-2xl'>Channel</h3>
                    <BreadCrumbs links={['Browse All Channels ']}/>
                  </header>
                  <div className='py-3 grid grid-cols-2 gap-x-3 gap-y-4 border-b-2 border-b-secondary'>
                    {TEMPLATE_CHANNELS_ITEMS_LABEL.map((label, idx) =>(
                      <Feed className='h-32' key={idx} bgImage={news[idx].url} author={label}/>
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
