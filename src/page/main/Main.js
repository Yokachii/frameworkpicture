import About from '../../components/About/About';
import Header from '../../components/Header/Header';
import Nav from '../../components/Nav/Nav'
import Projets from '../../components/Projects/Projects';
import styles from './styles.module.scss'
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import Footer from '../../components/Footer/Footer'
import Loader from '../../components/Loader/Main';




function Main() {
  
  const refAbout = useRef(null);
  const refProjet = useRef(null);

  const videoRef = useRef(null);

  const [isLoaderOpen,setIsLoaderOpen] = useState(true)

  useEffect(() => {
    const videoEle = videoRef.current
    videoEle.oncanplaythrough = () => {
      videoEle.play();
      setIsLoaderOpen(false)
    }
  },[])

  function MainLinks(){
    return (
        <ul className={styles.link}>
                        
            <li className={styles.select}>
                <Link to="/" onClick={() => {window.location.href = "/";}}>
                    Home
                </Link>
            </li>
            <li>
                <Link to="/projets" onClick={() => {window.location.href = "/projets";}}>
                    Projets
                </Link>
            </li>
            <li>
                <Link to="/contact" onClick={() => {window.location.href = "/contact";}}>
                    Contact
                </Link>
            </li>
  
        </ul>
    )
  }

  return (
    <div className={styles.main}>

      <Loader isOpen={isLoaderOpen}></Loader>

      <Nav Links={MainLinks} Logo={`LOGOWEB.webp`} styles_page={styles}/>

      <Header videoRef={videoRef}/>
      
      <About refs={refAbout}/>

      <Projets refs={refProjet}/>

      <Footer></Footer>

    </div>
  );
}

export default Main;