import React, { useState } from "react";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import styles from './imageSlider.module.css'

const ImageSlider = ({ imageUrls }) => {
  const [imageIndex, setImageIndex] = useState(0);

  const showNextImage = () => {
    setImageIndex(index => {
      if (index === imageUrls.length - 1) return 0;
      return index + 1;
    })
  }

  const showPreviousImage = () => {
    setImageIndex(index => {
      if (index === 0) return imageUrls.length-1;
      return index - 1;
    })
  }

  return (
    <div className={styles.imgContainer}>
      <img
        className={styles.imgSliderImg}
        src={imageUrls[imageIndex]}
        alt="City Skylines" />
      <button className={styles.imgSliderButton}
        onClick={showNextImage}
        style={{ left: 0 }}>
        <ArrowBigLeft />
      </button>
      <button
        className={styles.imgSliderButton}
        onClick={showPreviousImage}
        style={{ right: 0 }}>
        <ArrowBigRight />
      </button>

    </div>

  );
};

export default ImageSlider;