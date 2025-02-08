import styles from './main.module.scss'

export default function Hamburger({ isOpen,styles_page }){
    return(
        <>
            <div className={`${styles.hamburger} ${styles_page.hamburger}`}>
                <div className={`${styles.burger} ${styles_page.burger} ${styles.burger1}`} style={{transform:`${ isOpen ? 'rotate(45deg)' : 'rotate(0)'}`}}/>
                <div className={`${styles.burger} ${styles_page.burger} ${styles.burger2}`} style={{transform:`${ isOpen ? 'translateX(10%)' : 'translateX(0)'}`,opacity:`${ isOpen ? 0 : 1}`}}/>
                <div className={`${styles.burger} ${styles_page.burger} ${styles.burger3}`} style={{transform:`${ isOpen ? 'rotate(-45deg)' : 'rotate(0)'}`}}/>
            </div>
        </>
    )
}