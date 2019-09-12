import React, {useState} from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import styles from '../css/navbar.module.css'
import {FaBars, FaRegCommentAlt} from 'react-icons/fa'
import links from '../constants/links'

const Navbar = () => {
    const [isOpen, setNav] = (useState(false))
    const toggleNav = () => {
        setNav(isOpen => !isOpen) 
    }
    return (
        <nav className={styles.navbar}>
        <div className={styles.navCenter}>
            <div className={styles.navHeader}>
                <AniLink fade to="/" className={styles.open}>
                <div className={styles.log}>
                    <h2>Company</h2>{" "}
                    <h2 className={styles.logoo}>Logo</h2>    
                </div>
                </AniLink>
                <button type="button" className={styles.logoBtn} onClick={toggleNav}>
                    <FaBars className={styles.logoIcon}/>
                </button>
            </div>
            <div className={styles.xxxx}>
            <AniLink fade to="/" className={styles.close}>
                <div className={styles.log}>
                    <h2>Company</h2>{" "}
                    <h2 className={styles.logoo}>Logo</h2>    
                </div>
            </AniLink>
            </div>
            <div className={styles.linkss}>
            <ul className={isOpen?`${styles.navLinks} ${styles.showNav}`: `${styles.navLinks}`}>
                {links.map((item, index) => {
                    return (
                        <li key={index}>
                            <AniLink fade to={item.path}>
                                {item.text}
                            </AniLink>
                        </li>
                    )
                })}
            </ul>
            <AniLink fade to="/contact"><button type="button" className={styles.touch}><FaRegCommentAlt className={styles.comment}/> Get In Touch</button></AniLink>
            </div>
            <AniLink fade to="/contact" className={styles.clos}>
                <FaRegCommentAlt className={styles.comment}/>
            </AniLink>
        </div>
    </nav>
    )
}

export default Navbar
