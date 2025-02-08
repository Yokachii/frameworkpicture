import Nav from '../../components/Nav/Nav'
import styles from './styles.module.scss'
import { Link } from 'react-router-dom';
import ProjetsCards from '../../components/Projects/ProjetsCard/ProjetsCards';
import Footer from '../../components/Footer/Footer';

function MainLinks(){
  return (
      <ul className={styles.link}>
                      
          <li>
              <Link to="/" onClick={() => {window.location.href = "/";}}>
                  Home
              </Link>
          </li>
          <li className={styles.select}>
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

function Projets() {

  return (
    <div className={styles.main}>
      <Nav Links={MainLinks} Logo={`LOGOWEB.webp`} styles_page={styles}/>
      
      {/* <p>a</p> */}

      <div className={styles.card_container}>

        <ProjetsCards />

      </div>

      <Footer />
    </div>
  );
}

export default Projets;