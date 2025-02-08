import React from 'react';
import styles from './styles.module.scss'

const Footer = () => {

    const scrollTop = async () => {
        window. scrollTo(0,0)
    }

    return (
        <div className={styles.main}>

            <div className={styles.info}>
                <div className={styles.left}>
                    <span><a href='https://www.instagram.com/frameworkpictures/' target={"_blank"}>Instagram</a></span>
                    <span><a href='https://www.linkedin.com/in/elliott-bouffioux-46414b236/' target={"_blank"}>Linkedin</a></span>
                </div>
                <div className={styles.logo} onClick={scrollTop}>
                <img src='/img/LOGOWEB.webp'></img>
                </div>
                <div className={styles.right}>
                    <span><a
                        href="mailto:Elliott.fwp@gmail.com">elliott.fwp@gmail.com</a></span>
                </div>
            </div>

        </div>
    )
};

export default Footer;