import React from 'react'
import styles from '../styles/BreadCrumbs.module.css'

const BreadCrumbs = ({links, className = ""}) => {
  return (
    <ul className={`${styles['bread-crumbs']} flex`}>
        {links.map((link)=> (
            <li key={link} className={`${styles['bread-crumbs-item']} text-secondary`}>{link}</li>
            )
        )}
    </ul>
  )
}

export default BreadCrumbs