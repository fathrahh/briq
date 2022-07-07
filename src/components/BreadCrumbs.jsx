import React from 'react'
import styles from '../styles/BreadCrumbs.module.css'

const BreadCrumbs = ({links, className = "", href="#"}) => {
  return (
    <ul className={`${styles['bread-crumbs']} flex flex-wrap `}>
        {links.map((link)=> (
            <li key={link} className={`${styles['bread-crumbs-item']} text-xs lg:text-base text-secondary after:mx-1.5 lg:after:mx-3`}>
             <a href={href}>{link}</a>
            </li>
            )
        )}
    </ul>
  )
}

export default BreadCrumbs