import Nav from '../../components/Nav/Nav'
import styles from './styles.module.scss'
import Images from '../../components/Contact/Image/Main'
import { Link } from 'react-router-dom'
import { ReactComponent as SVGLinkedin } from '../../assets/svg/linkedin.svg';
import { ReactComponent as SVGInsta } from '../../assets/svg/insta.svg';
import { ReactComponent as SVGBehance } from '../../assets/svg/behance.svg';


function MainLinks(){
  return (
      <ul className={styles.link}>
                      
          <li>
              <Link to="/" onClick={() => {window.location.href = "/";}}>
                  Home
              </Link>
          </li>
          <li>
              <Link to="/projets" onClick={() => {window.location.href = "/projets";}}>
                  Projets
              </Link>
          </li>
          <li className={styles.select}>
              <Link to="/contact" onClick={() => {window.location.href = "/contact";}}>
                  Contact
              </Link>
          </li>

      </ul>
  )
}

function Main() {
  return (
    <div className={styles.main}>
      <Nav Links={MainLinks} Logo={`LOGOWEB.webp`} styles_page={styles}/>
      
      <div className={styles.contact}>

        <div className={styles.left}>
          <div className={styles.bg_img}></div>
        </div>

        <div className={styles.right}>
          <h1>Prêt à travailler ensemble ?</h1>
          <p>
            <span>Que vous soyez prêt à planifier vote prochain projet ou que vous ayez simplement des questions,</span>
            <span>N’hésitez pas à me contacter. Je suis impatient de pouvoir faire partie de votre histoire.</span>
            <span>Attirer l'attention est une chose, la maintenir en est une autre.</span>
            <span>Ça tombe bien, nous savons faire les deux.</span>
          </p>
          <div className={styles.infoText}>
            <span className={styles.bold}><a
                href="mailto:Elliott.fwp@gmail.com">elliott.fwp@gmail.com</a></span>
            <span className={styles.text}>(+32) 471 37 07 31 </span>
            <span className={styles.text}>TVA : BE0803.136.343 </span>
          </div>

          <div className={styles.social}>
            <a href="https://www.linkedin.com/in/elliott-bouffioux-46414b236/"
               target="_blank" rel="noopener noreferrer">
              <SVGLinkedin className={styles.svg}/>
            </a>
            <a href="https://www.instagram.com/frameworkpictures/"
               target="_blank" rel="noopener noreferrer">
              <SVGInsta className={styles.svg}/>
            </a>
            <a href="https://www.behance.net/elliottbfx"
               target="_blank" rel="noopener noreferrer">
              <SVGBehance className={styles.svg}/>
            </a>
          </div>

        </div>

      </div>

      <div className={styles.images}>
        <Images></Images>
      </div>

    </div>
  );
}

export default Main;