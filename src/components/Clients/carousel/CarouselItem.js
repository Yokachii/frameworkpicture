import React from 'react';
import styles from './styles.module.scss'

const CarouselItem = ({ imgUrl, imgTitle }) => {

    return (
        <div className={styles.carousel_card}>
            <img src={imgUrl} alt={imgTitle}></img>
        </div>
    )
};

export default CarouselItem;