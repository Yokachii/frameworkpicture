import styles from './styles.module.scss'

const ProjetsItem = ({title,desc,image,link}) => {
    
    return (
        <div className={styles.item_main}>
            <div className={styles.item__bg} style={{backgroundImage:`url(${image})`}}></div>

            <div className={styles.item__content}>

                <h2>{title}</h2>
                <p>{desc}</p>
                {link?(<button><a href={link}>Voir leur site</a></button>):''}

            </div>
        </div>
    )
};

export default ProjetsItem;