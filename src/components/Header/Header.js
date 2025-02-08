import React, { useState } from 'react';
import styles from './styles.module.scss'
import Modal from 'react-modal';


const customStyles = {
    content: {
      top: '50%',
      left: '50%',
    //   right: 'auto',
    //   bottom: 'auto',
    //   marginRight: '-50%',
        margin:'auto',
      transform: 'translate(-50%, -50%)',
    },
};

// Modal.setAppElement('#app');

const Header = ({videoRef}) => {

    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }
    
    function closeModal() {
      setIsOpen(false);
    }

    return (
        <div className={styles.main}>

            <video loop autoPlay muted className={styles.vid} ref={videoRef}>
                <source src={"/img/BOUCLEV3.mp4"}></source>
            </video>

            <Modal
                isOpen={modalIsOpen}
                // onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >

                {/* <button onClick={closeModal}>close</button> */}
                <iframe width="420" height="315"
                    src="https://www.youtube.com/embed/tgbNymZ7vqY">
                </iframe>

            </Modal>


            
            
            <div className={styles.info}>
                <h1>FrameWork Pictures</h1>
                <p>Framework Pictures est une agence créative basée en Belgique spécialisée<br></br>dans la capture et la création de contenu visuellement époustouflant.<br></br>Notre expertise comprend la photographie et la production vidéo.<br></br><br></br>Mais aussi la création graphique, où nous donnons<br></br>vie à des concepts percutants et innovants.</p>
                <button style={styles.btn} onClick={openModal}>Showreel</button>
            </div>


        </div>
    )
};

export default Header;