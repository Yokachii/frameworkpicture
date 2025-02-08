import styles from './styles.module.scss'
import ProjetsItem from './ProjetsItem/ProjetsItem';

import { Link } from 'react-router-dom';

const Projets = ({refs}) => {

    const ProjectsArray = [
        {
            title:"Bois de loë",
            desc:"Reportage photo, création de contenu vidéo.",
            image:"/img/projet/1.webp",
            link:"https://www.boisdeloe.be/"
        },
        {
            title:"Crossfit Hawksnest",
            desc:"Création de contenu pour les réseaux sociaux",
            image:"/img/projet/2.webp",
            link:"https://www.crossfithawksnest.com/"
        },
        {
            title:"Harksen",
            desc:"Création de contenu pour le site web",
            image:"/img/projet/HARSKEN.jpg",
        },
    ]
    
    return (
        <div className={styles.main} ref={refs}>
            
            {ProjectsArray.slice(0,3).map((item,i) => (
                    <ProjetsItem title={item.title} desc={item.desc} image={item.image} link={item.link} key={i}/>
            ))}

            <div className={styles.more}>
                    <Link to="/projets" className={styles.link} onClick={() => {window.location.href = "/projets";}}>
                        <button>
                            Voir nos projets
                        </button>
                    </Link>
            </div>

            
        </div>
    )
};

export default Projets;