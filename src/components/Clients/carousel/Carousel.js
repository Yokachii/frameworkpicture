import React from 'react';
import styles from './styles.module.scss'
import CarouselItem from './CarouselItem'

const Carousel = () => {

    const url = [
        {
            url:"/img/CROSSFIT.png",
            title:"1",
        },
        {
            url:"/img/DIPLO.png",
            title:"2",
        },
        {
            url:"/img/dvv.png",
            title:"3",
        },
        {
            url:"/img/JUST.png",
            title:"4",
        },
        {
            url:"/img/Q8.png",
            title:"5",
        },
        {
            url:"/img/SHIFTECH.png",
            title:"6",
        },
        {
            url:"/img/TOYOTA.png",
            title:"7",
        },
    ]

    return (
        <div className={styles.carousel_container}>

            <div className={styles.carousel_track}>
                {url.map((todo,i) => (
                    <CarouselItem imgUrl={todo.url} imgTitle={todo.title} key={i}></CarouselItem>
                ))}
            </div>

            <div className={styles.carousel_track}>
                {url.map((todo,i) => (
                    <CarouselItem imgUrl={todo.url} imgTitle={todo.title} key={i}></CarouselItem>
                ))}
            </div>

        </div>
    )
};

export default Carousel;