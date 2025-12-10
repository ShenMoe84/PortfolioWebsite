import React, { useState, useEffect, useRef } from "react";
import styles from './imageSlider.module.css'

const ImageSlider = ({ images, delay }) => {
  const [imageIndex, setImageIndex] = useState(0);
  const timoutRef = useRef(null);

  const resetTimeout = () => {
    if (timoutRef.current) {
      clearTimeout(timoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timoutRef.current = setTimeout(
      () =>
        setImageIndex((prevImageIndex) =>
          prevImageIndex === images.length - 1 ? 0 : prevImageIndex + 1
        ), delay
    );
    return () => { };
  }, [imageIndex, images.length, delay])

  const handleDotClick = (index) => {
    setImageIndex(index);
  };

  return (
    <div>
      <div className={styles.imgSliderContainer}>
        <img
          className={styles.imgSliderImg}
          key={imageIndex}
          src={images[imageIndex]}
          alt="Slide show"
          delay={delay} />
      </div>
      <div className={styles.slideshowDots}>
        {images.map((_, idx) => (
          <div key={idx} className={`${styles.slideshowDot} ${imageIndex === idx ? `${styles.activeSlideshowDot}` : `${styles.slideshowDot}`}`}
            onClick={() => handleDotClick(idx)}></div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;