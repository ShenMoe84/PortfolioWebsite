import { useState } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import styles from "./ImageCarousel.module.css"


const ImageCarousel = ({ data }) => {
  const [image, setImage] = useState(0);

  return (
    <div className={styles.carousel}>
      <SlArrowLeft className={styles.arrowLeft} />
      {
        Object.values(data).map((image, idx) => {
          return (
            <img className={({ image }) => image === idx ? styles.image : styles.imageHidden}
              src={image} alt="Project images" key={idx} />
          );
        })
      }
      <SlArrowRight className={styles.arrowRight} />
      <span className={styles.indicators}>
        {
          Object.values(data).map((idx) => {
            return <button key={idx} onClick={null} className={styles.indicator}></button>
          })
        }
      </span>
    </div>
  )
};

export default ImageCarousel;