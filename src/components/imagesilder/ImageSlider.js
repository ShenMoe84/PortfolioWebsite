import React, { useState, useEffect } from "react";
import styles from './imageSlider.module.css'

const ImageSlider = ({ images }) => {
  const [imageIndex, setImageIndex] = useState(0);
  const delay = 4500;


  useEffect(() => {
    setTimeout(
      () =>
        setImageIndex((prevImageIndex) =>
          prevImageIndex === images.length - 1 ? 0 : prevImageIndex + 1
        ), delay
    );
    return () => { };
  }, [imageIndex, images.length])

  return (
    <div>
      <div className={styles.imgContainer}>
        <img
          className={styles.imgSliderImg}
          src={images[imageIndex]}
          alt="Wichita and Chicago Skylines" />
      </div>
      <div className={styles.slideshowDots}>
        {images.map((_, idx) => (
          <div key = { idx } className = {styles.slideshowDot} ></div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;