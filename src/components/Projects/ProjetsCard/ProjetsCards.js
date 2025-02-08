import styles from './styles.module.scss'
import ProjetsItem from './Item/ProjetsCard';
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
            desc:"Création de contenu pour le site web.",
            image:"/img/projet/HARSKEN.jpg",
            link:"https://google.com"
        },
        {
            title:"Kreemo",
            desc:"Shooting photo corporate.",
            image:"/img/projet/4.webp",
        },
        {
            title:"Festival The legends",
            desc:"Création d'un After Lovie.",
            image:"/img/projet/5.webp",
        },
        {
            title:"Necko",
            desc:"Shooting photo corporate.",
            image:"/img/projet/6.webp",
            link:"https://necko.tech/homepage"
        },
    ]
    
    return (
        <div className={styles.main} ref={refs}>
            
            {ProjectsArray.map((item,i) => (
                <ProjetsItem title={item.title} desc={item.desc} image={item.image} link={item.link} key={i}/>
            ))}

        </div>
    )
};

export default Projets;