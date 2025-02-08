import styles from './styles.module.scss'

const Loader = ({isOpen}) => {

    return (
        <div className={`${styles.main} ${styles[`open_${isOpen}`]}`}>

            <div className={styles.bg}>

                {/* <h2>
                {`[ Photographe, Vidéaste, Graphiste ]`}
                </h2> */}
                  <div className={styles.loader}>
                     <span className={styles.loader_text}>loading</span>
                      <span className={styles.load}></span>
                  </div>

            </div>

        </div>
    )

};

export default Loader;