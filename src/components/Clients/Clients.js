import React from 'react';
import styles from './styles.module.scss'
import Carousel from './carousel/Carousel'

const Client = () => {

    return (
        <div className={styles.main}>
            <Carousel />
        </div>
    )
};

export default Client;