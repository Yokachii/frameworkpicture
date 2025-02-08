import styles from './styles.module.scss'

const ContactImage = ({Links,Logo,BurgerColor}) => {

    const Images = [
        "img/contact/img1.webp",
        "img/contact/img2.webp",
        "img/contact/img3.webp",
        "img/contact/img4.webp",
        "img/contact/img5.webp",
        "img/contact/img6.webp",
        "img/contact/img7.webp",
        "img/contact/img8.webp",
        "img/contact/img9.webp",
        "img/contact/img10.webp",
        "img/contact/img11.webp",
        "img/contact/img12.webp",
        "img/contact/img13.webp",
        "img/contact/img14.webp",
        "img/contact/img15.webp",
        "img/contact/img16.webp",
        "img/contact/img17.webp",
        "img/contact/img18.webp",
        "img/contact/img19.webp",
        "img/contact/img20.webp",
    ]
    
    return (
        <div className={styles.main}>

            {Images.map((item,i) => (
                <div key={i} className={styles.img_container}>
                    <img src={`${item}`} className={styles.img}></img>
                </div>
            ))}

        </div>
    )
};

export default ContactImage;