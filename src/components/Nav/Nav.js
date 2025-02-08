import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss'
import { Link } from 'react-router-dom';

import Hamburger from './Burger/main'

const Nav = ({Links,Logo,styles_page}) => {
    
    const [navScrollState, setNavScrollState] = useState("top"); // default - invisible
    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () =>{
        setHamburgerOpen(!hamburgerOpen)
    }

    const handleScroll = () => {
        let scroll = window.scrollY

        if(scroll===0){
            return setNavScrollState('top')
        }else{
            return setNavScrollState('scroll')
        }

    };


    useEffect(() => {
        window.addEventListener("scroll", handleScroll); 
        return () => window.removeEventListener("scroll", handleScroll);
    });

    return (
        <div className={`${styles.container}`}>
            <div className={`${styles.main} ${styles[`navBurgerisopen-${hamburgerOpen}`]} ${styles_page[`nav-${navScrollState}`]} ${styles_page.main_nav}`}>
                <div className={styles.left}>
                    <Link to="/" onClick={() => {window.location.href = "/";}}>
                        <img src={`./img/${Logo}`} alt='logo'></img>
                    </Link>
                </div>

                <div className={styles.right}>

                    <Links/>

                    
                </div>
            </div>

            <div className={styles.hamburger} onClick={toggleHamburger}>
                <Hamburger isOpen={hamburgerOpen} styles_page={styles_page}/>
            </div>
        </div>
    )
};

export default Nav;