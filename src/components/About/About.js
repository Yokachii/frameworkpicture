import React from 'react';
import styles from './styles.module.scss'
import Client from '../Clients/Clients'

const About = ({refs}) => {

    return (
        <div className={styles.main} ref={refs}>
            
            <div className={styles.info}>
                <h1>About</h1>
                <p>Vidéaste photographe autodidacte passionné, animé par une passion dévorante de la création de contenus qui racontent des histoires uniques. Mon parcours, forgé par l’exploration personnelle et une curiosité sans fin m’a permis d’évoluer dans mon domaine. Depuis maintenant 6mois que FrameWork Pictures existent, j’ai pu réaliser et participer à de nombreux projets passionnants.</p>
            </div>

            <div className={styles.image_bg}>

                <div className={styles.image}>
                    <div className={styles.image_container}>
                        <img className={styles.img} src='/img/EVENT.webp' alt='ilustration'></img>

                        <div className={styles.text}><h2>Event</h2><p>Film after movie </p></div>
                    </div>
                    <div className={styles.image_container}>
                        <img className={styles.img} src='/img/REPORTAGE.webp' alt='ilustration'></img>

                        <div className={styles.text}><h2>Reportage</h2><p>Documentaire, pub</p></div>
                    </div>
                    <div className={styles.image_container}>
                        <img className={styles.img} src='/img/SOCIAL-MEDIA.webp' alt='ilustration'></img>

                        <div className={styles.text}><h2>Social Media</h2><p>Création de contenu,..</p></div>
                    </div>
                    <div className={styles.image_container}>
                        <img className={styles.img} src='/img/FILM-CORPORATE.webp' alt='ilustration'></img>

                        <div className={styles.text}><h2>Film Coroprate</h2><p>interview, shooting photo,..</p></div>
                    </div>
                </div>

                <div className={styles.client}>

                    <Client />

                </div>

            </div>

        </div>
    )
};

export default About;