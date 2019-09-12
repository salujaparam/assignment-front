import React from 'react'
import styles from '../css/banner.module.css'

const Banner = ({title, info, children}) => {
    return (
        <div className={styles.banner}>
            <h3>{title}</h3>
            <p>{info}</p>
            {children}
        </div>
    )
}

export default Banner
