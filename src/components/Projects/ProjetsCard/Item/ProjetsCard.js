import styles from './styles.module.scss'

const ProjetsItem = ({title,desc,image,link}) => {
    
    return (
        <div className={styles.item_main}>
            <a href={link}>
            <div className={styles.item__bg} style={{backgroundImage:`url(${image})`}}></div>

            <div className={styles.item__content}>

                <h2>{title}</h2>
                <span>{desc}</span>

            </div>
            </a>
        </div>
    )
};

export default ProjetsItem;