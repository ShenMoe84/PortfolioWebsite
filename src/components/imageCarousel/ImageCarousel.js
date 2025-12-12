import { useState } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import styles from "./ImageCarousel.module.css"


const ImageCarousel = ({ data }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextSlide = () => {
    setCurrentImage(currentImage === data.length - 1 ? 0 : currentImage + 1)
  }

  const prevSlide = () => {
    setCurrentImage(currentImage === 0 ? data.length - 1 : currentImage - 1)
  }

  return (
    <div className={styles.carousel}>
      <SlArrowLeft className={styles.arrowLeft} onClick={prevSlide} />
      {
        Object.values(data).map((image, idx) => {
          return (
            <img className={currentImage === idx ? styles.image : styles.imageHidden}
              src={image} alt="Project images" key={idx} />
          );
        })
      }
      <SlArrowRight className={styles.arrowRight} onClick={nextSlide}/>
      <span className={styles.indicators}>
        {
          Object.values(data).map((_, idx) => {
            return <button key={idx} onClick={() => setCurrentImage(idx)}
              className={`${styles.indicator} ${currentImage === idx ? `${styles.indicator}` : `${styles.indicatorInactive}`}`}/>
          })
        }
      </span>
    </div>
  )
};

export default ImageCarousel;