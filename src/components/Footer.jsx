import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { TEMPORARY_BREAD_CRUMBS_FOOTER } from '../utils/const'
import BreadCrumbs from './BreadCrumbs'
import Copyright from './Copyright'
import SocmedButton from './SocmedButton'

const Footer = () => {
  return (
    <footer className='py-6'>
      <div className='flex gap-3'>
        <SocmedButton Icon={<FaTwitter/>}/>
        <SocmedButton Icon={<FaLinkedinIn/>}/>
        <SocmedButton Icon={<FaFacebookF/>}/>
      </div>
      <div className='my-8'>
        <BreadCrumbs links={TEMPORARY_BREAD_CRUMBS_FOOTER}/>
      </div>
      <div className='text-secondary'>
        <Copyright/>
        <BreadCrumbs links={['Privacy', 'Terms']}/>
      </div>
    </footer>
  )
}

export default Footer